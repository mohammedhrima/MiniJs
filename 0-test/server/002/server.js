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
    const generateHTML = (elem) => {
        if (["string", "number"].includes(typeof elem)) return elem.toString();
        const { props } = elem;
        var attributes = "";
        Object.keys(props)
            .filter((key) => key !== "children")
            .forEach((property) => {
                attributes += `${property}=\"${props[property]}\" `;
            });
        var children = "";
        props &&
            props.children &&
            props.children.forEach((child) => {
                children += generateHTML(child);
            });
        const HTMLelement = `\n<${elem.tag} ${attributes}>${children}</${elem.tag}>\n`;
        console.log("HTML", HTMLelement);
        return HTMLelement;
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
        props &&
            props.children &&
            props.children.forEach((child) => {
                console.log("child:", child);
                let dom = generateDOM(child);
                console.log("dom:", dom);
                scriptElement += `${varname}.appendChild(${dom});\n`;
            });
        // scriptElement += `document.body.appendChild(${varname});\n`;
        return varname;
    };

    const render = (elem) => {
        const { props = null } = elem;
        const type = props && props.type ? props.type : "client";
        switch (type) {
            case "server": {
                return generateHTML(elem);
            }
            case "client": {
                return generateDOM(elem);
            }
            default:
                throw Error("Unknown type");
        }
    };
    let renderedTag = render(tag);
    scriptElement += `document.body.appendChild(${renderedTag})`;
    let finalHTML = "<body></body>\n";
    finalHTML += `<script>\n${scriptElement}</script>\n`;
    console.log(finalHTML);
    res.status(200).send(finalHTML);
});

app.listen(process.env.PORT, () => {
    console.log(`Running at Port ${process.env.PORT}`);
});
