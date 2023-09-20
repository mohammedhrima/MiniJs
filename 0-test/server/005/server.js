import express from "express";
const app = express();
import jsdom from "jsdom";
const { JSDOM } = jsdom;
import { home } from "./out/home.js";
import DOMParser from "dom-parser";
// keep updating out folder from server.js

app.get("/", function (req, res) {
    const tag = home();
    const initialHTML = "";
    const dom = new JSDOM(initialHTML);
    let scriptElement = dom.window.document.createElement("script");

    const generateHTML = (elem) => {
        if (["string", "number"].includes(typeof elem)) return elem.toString();
        const { props } = elem;
        var attributes = "";
        Object.keys(props)
            .filter((key) => key !== "children")
            .forEach((property) => {
                console.log("attr:", property, ":", props[property]);
                attributes += `${property}=\"${props[property]}\" `;
            });
        var children = "";
        props &&
            props.children &&
            props.children.forEach((child) => {
                children += generateHTML(child);
            });
        const HTMLelement = `<${elem.tag} ${attributes}>${children}</${elem.tag}>`;
        console.log("HTML", HTMLelement);
        return HTMLelement;
    };
    const render = (elem) => {
        const { props = null } = elem;
        const type = props && props.type ? props.type : "client";
        switch (type) {
            case "server": {
                if (["string", "number"].includes(typeof elem)) return dom.window.document.createTextNode(elem.toString());
                const DOMelement = dom.window.document.createElement(elem.tag);
                props &&
                    Object.keys(props)
                        .filter((key) => key !== "children")
                        .forEach((property) => {
                            if (property != "type") DOMelement.setAttribute(property, props[property]);
                        });
                props?.children.forEach((child) => {
                    if (child.props && !child.props.type) child.props.type = type;
                    DOMelement.appendChild(render(child));
                });
                return DOMelement;
            }
            case "client": {
                // create tag normally as a dom element
                // but save it's children to be added in script tag as dom
                if (["string", "number"].includes(typeof elem)) return dom.window.document.createTextNode(elem?.toString());
                const DOMelement = dom.window.document.createElement(elem.tag);
                props &&
                    Object.keys(props)
                        .filter((key) => key !== "children")
                        .forEach((property) => {
                            if (property != "type") DOMelement.setAttribute(property, props[property]);
                        });
                let text = "";
                props?.children.forEach((child) => {
                    text += generateHTML(child);
                });
                console.log("text:", text);
                const parser = new DOMParser();
                const html = parser.parseFromString(text, "text/html");
                console.log(html.rawHTML);
                DOMelement.innerHTML = html.rawHTML;
                return DOMelement;
            }
            default:
                throw Error("Unknown type");
        }
    };
    dom.window.document.body.appendChild(render(tag));
    dom.window.document.body.appendChild(scriptElement);
    const finalHTML = dom.serialize();
    console.log(finalHTML);
    res.status(200).send(finalHTML);
});

app.listen(3000, function () {
    console.log(`Running at Port 3000`);
});
