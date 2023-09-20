import express from "express";
const app = express();
import jsdom from "jsdom";
const { JSDOM } = jsdom;
import { home } from "./out/home.js";

let port = 3000;
// keep updating out folder from server.js

app.get("/", function (req, res) {
    const tag = home();

    const initialHTML = "";
    const dom = new JSDOM(initialHTML);
    let scriptElement = dom.window.document.createElement("script");
    // const { document } = dom.window;

    const render = (elem, container) => {
        const { props = null } = elem;
        const type = props && props.type ? props.type : "client";
        console.log("elem:", elem);
        console.log("props:", props);
        console.log("type:", type);
        if (type === "server") {
            if (["string", "number"].includes(typeof elem)) {
                console.log("line 24:", elem);
                container?.appendChild(dom.window.document.createTextNode(elem?.toString()));
                return;
            }
            const actualDOMElement = dom.window.document.createElement(elem.tag);
            props &&
                Object.keys(props)
                    .filter((key) => key !== "children")
                    .forEach((property) => {
                        // console.log(property, ":", props[property]);
                        // actualDOMElement[property] = elem.props[property];
                        if (property != "type") actualDOMElement.setAttribute(property, props[property]);
                    });
            props?.children.forEach((child) => {
                if (child.props && !child.props.type) child.props.type = type;
                render(child, actualDOMElement);
            });
            container?.appendChild(actualDOMElement);
        } else if (type === "client") {
            // create tag normally as a dom element
            // but save it's children to be added in script tag as dom
            console.log("is client");
            if (["string", "number"].includes(typeof elem)) {
                container?.appendChild(dom.window.document.createTextNode(elem?.toString()));
                return;
            }
            const actualDOMElement = dom.window.document.createElement(elem.tag);
            props &&
                Object.keys(props)
                    .filter((key) => key !== "children")
                    .forEach((property) => {
                        // console.log(property, ":", props[property]);
                        // actualDOMElement[property] = elem.props[property];
                        if (property != "type") actualDOMElement.setAttribute(property, props[property]);
                    });
            const { tag_id } = elem;

        } else {
            throw Error("Unknown type");
        }
    };
    render(tag, dom.window.document.body);
    // let text = "let btn = document.createElement('button');\n";
    // text += "btn.innerHTML = 'clique me';\n";
    // text += "document.body.appendChild(btn);\n";
    // let scriptCode = dom.window.document.createTextNode(text);
    // scriptElement.appendChild(scriptCode);
    dom.window.document.body.appendChild(scriptElement);
    const finalHTML = dom.serialize();
    console.log(finalHTML);

    res.status(200).send(finalHTML);
});

app.listen(port, function () {
    console.log(`Running at Port ${port}`);
});
