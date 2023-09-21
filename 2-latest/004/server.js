import express from "express";
import { home } from "./out/home.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();

const generateRandomName = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;

    let result = "";
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        const randomChar = characters.charAt(randomIndex);
        result += randomChar;
    }
    return result;
};

app.get("/", (req, res) => {
    const tag = home();
    let scriptElement = "";
    let bodyElement = "";

    const generateHTML = (vdom) => {
        // console.log("HTML from:", vdom);
        let HTMLvalue = "";
        if (vdom.elem === "text") {
            return vdom.value;
        } else if (vdom.elem === "tag") {
            const { props } = vdom;
            var attributes = "";
            const style = {};
            props &&
                Object.keys(props)
                    .filter((key) => key !== "children")
                    .forEach((key) => {
                        if (key === "style") Object.assign(style, props[key]);
                        else if (key.startsWith("on")) {
                            const funcString = props[key].toString();
                            // arrow function
                            const arrowFunctionRegex = /^\s*\(\)\s*=>\s*\{/;
                            const isArrowFunction = arrowFunctionRegex.test(funcString);
                            if (isArrowFunction) {
                                const funcName = generateRandomName();
                                scriptElement += `const ${funcName} = ${funcString.replace(/\n/g, "").replace(/=>/g, "=>").trim()}`;
                                attributes += `${key}="${funcName}()"`;
                            }
                            // normal function
                            const functionNameRegex = /function\s+(\w+)\s*\(/;
                            const matches = funcString.match(functionNameRegex);
                            if (matches) {
                                scriptElement += matches.input + "\n";
                                attributes += `${key}="${matches[1]}()"`;
                            }
                        } else attributes += ` ${key}=\"${props[key]}\"`;
                    });

            if (Object.keys(style).length > 0) {
                attributes +=
                    'style="' +
                    Object.keys(style)
                        .map((styleProp) => {
                            const Camelkey = styleProp.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
                            return `${Camelkey}:${style[styleProp]}`;
                        })
                        .join(";") +
                    '"';
            }
            HTMLvalue += `<${vdom.tag}${attributes}>`;
            props &&
                props.children &&
                props.children.forEach((child) => {
                    // console.log("child:", child);
                    if (!child.props || !child.props.type || child.props.type === "server") HTMLvalue += generateHTML(child);
                    else generateDOM(`document.querySelector("[tag_id='${props.tag_id}']")`, child);
                });
            HTMLvalue += `</${vdom.tag}>`;
        }
        return HTMLvalue;
    };
    const generateDOM = (parent, vdom) => {
        if (vdom.elem === "text") {
            let textDom = `document.createTextNode(\"${vdom.value}\")`;
            if (parent) {
                scriptElement += `${parent}.appendChild(${textDom});\n`;
                return;
            } else return textDom;
        } else if (vdom.elem === "tag") {
            let varname = generateRandomName();
            scriptElement += `${varname}=document.createElement("${vdom.tag}");\n`;
            const { props } = vdom;
            const style = {};
            // check if key is valid
            Object.keys(props)
                .filter((key) => key !== "children")
                .forEach((key) => {
                    if (key === "style") Object.assign(style, props[key]);
                    else if (key.startsWith("on")) {
                        scriptElement += `${varname}.${key}=${props[key]};\n`;
                    } else scriptElement += `${varname}.setAttribute("${key}", "${props[key]}");\n`;
                });
            if (Object.keys(style).length > 0) {
                let styletxt = Object.keys(style)
                    .map((styleProp) => {
                        const Camelkey = styleProp.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
                        return `${Camelkey}:${style[styleProp]}`;
                    })
                    .join(";");

                scriptElement += `${varname}.setAttribute("style", "${styletxt}");\n`;
            }
            if (props && props.children) {
                props.children.forEach((child) => {
                    if (!child.props || !child.props.type || child.props.type === "client") generateDOM(varname, child);
                    else {
                        let HTMLChild = generateHTML(child);
                        scriptElement += `${varname}.innerHTML = ${varname}.innerHTML ? ${varname}.innerHTML + \`${HTMLChild}\` : \`${HTMLChild}\`\n`;
                    }
                });
            }
            scriptElement += `${parent}.appendChild(${varname});\n`;
        }
    };

    const render = (vdom) => {
        const { props = null } = vdom;
        const type = props && props.type ? props.type : "client";
        switch (type) {
            case "server": {
                bodyElement += generateHTML(vdom);
                break;
            }
            case "client": {
                generateDOM("document.body", vdom);
                break;
            }
            default:
                throw Error("Unknown type");
        }
    };
    render(tag);
    let finalHTML = "";
    finalHTML += `<body>\n${bodyElement}</body>\n`;
    finalHTML += `<script type = "text/javascript">\n${scriptElement}</script>\n`;
    console.log(finalHTML);
    res.status(200).send(finalHTML);
});

app.listen(process.env.PORT, () => {
    console.log(`Running at Port ${process.env.PORT}`);
});
