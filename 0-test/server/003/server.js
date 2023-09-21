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
    // let lastname

    const generateHTML = (elem) => {
        if (["string", "number"].includes(typeof elem)) {
            bodyElement += elem.toString();
            return;
        }
        const { props } = elem;
        var attributes = "";
        Object.keys(props)
            .filter((key) => key !== "children")
            .forEach((property) => {
                attributes += ` ${property}=\"${props[property]}\"`;
            });
        bodyElement += `<${elem.tag}${attributes}>\n`;
        props &&
            props.children &&
            props.children.forEach((child) => {
                generateHTML(child);
            });
        bodyElement += `</${elem.tag}>\n`;
    };
    const generateDOM = (elem) => {
        if (["string", "number"].includes(typeof elem)) {
            return `document.createTextNode(\"${elem}\")`;
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
                let dom = generateDOM(child);
                scriptElement += `${varname}.appendChild(${dom});\n`;
            });
        }
        return varname;
    };

    const render = (elem) => {
        const { props = null } = elem;
        const type = props && props.type ? props.type : "client";
        switch (type) {
            case "server": {
                generateHTML(elem);
                break;
            }
            case "client": {
                let dom = generateDOM(elem);
                scriptElement += `document.body.appendChild(${dom})\n`;
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
