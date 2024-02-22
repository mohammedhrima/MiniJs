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

    const generateHTML = (elem) => {
        let HTMLvalue = "";
        if (["string", "number"].includes(typeof elem)) {
            HTMLvalue = elem.toString();
            return HTMLvalue;
        } else {
            const { props } = elem;
            var attributes = "";
            Object.keys(props)
                .filter((key) => key !== "children")
                .forEach((property) => {
                    attributes += ` ${property}=\"${props[property]}\"`;
                });
            HTMLvalue += `<${elem.tag}${attributes}>`;
            props &&
                props.children &&
                props.children.forEach((child) => {
                    if (!child.props || !child.props.type || child.props.type === "server") HTMLvalue += generateHTML(child);
                    else generateDOM(`document.querySelector("[tag_id='${props.tag_id}']")`, child);
                });
            HTMLvalue += `</${elem.tag}>`;
        }
        return HTMLvalue;
    };
    const generateDOM = (parent, elem) => {
        if (["string", "number"].includes(typeof elem)) {
            let value = `document.createTextNode(\"${elem}\")`;
            if (parent) {
                scriptElement += `${parent}.appendChild(${value});\n`;
                return;
            } else return value;
        }
        let varname = generateRandomName();
        scriptElement += `${varname}=document.createElement("${elem.tag}");\n`;
        const { props } = elem;
        Object.keys(props)
            .filter((key) => key !== "children")
            .forEach((property) => {
                scriptElement += `${varname}.setAttribute("${property}", "${props[property]}");\n`;
            });
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
    };

    const render = (elem) => {
        const { props = null } = elem;
        const type = props && props.type ? props.type : "client";
        switch (type) {
            case "server": {
                bodyElement += generateHTML(elem);
                break;
            }
            case "client": {
                generateDOM("document.body", elem);
                break;
            }
            default:
                throw Error("Unknown type");
        }
    };
    render(tag);
    let finalHTML = "";
    finalHTML += `<body>\n${bodyElement}</body>\n`;
    finalHTML += `<script>\n${scriptElement}</script>\n`;
    console.log(finalHTML);
    res.status(200).send(finalHTML);
});

app.listen(process.env.PORT, () => {
    console.log(`Running at Port ${process.env.PORT}`);
});
