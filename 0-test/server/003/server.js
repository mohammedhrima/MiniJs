import express from "express";
const app = express();
import jsdom from "jsdom";
const { JSDOM } = jsdom;
import { home, Mini } from "./out/home.js";

let port = 3000;
// keep updating out folder from server.js

app.get("/", function (req, res) {
    const tag = home();

    const initialHTML = "";
    const dom = new JSDOM(initialHTML);
    const { document } = dom.window;

    const render = (frameworkEl, container) => {
        if (["string", "number"].includes(typeof frameworkEl)) {
            container?.appendChild(document.createTextNode(frameworkEl?.toString()));
            return;
        }
        const actualDOMElement = document.createElement(frameworkEl.tag);
        Object.keys(frameworkEl?.props)
            .filter((key) => key !== "children")
            .forEach((property) => {
                console.log(property, ":", frameworkEl.props[property]);
                actualDOMElement[property] = frameworkEl.props[property];
            });
        frameworkEl?.props?.children.forEach((child) => {
            render(child, actualDOMElement);
        });
        container?.appendChild(actualDOMElement);
    };
    render(tag, document.body);
    const finalHTML = dom.serialize();
    console.log(typeof finalHTML);

    res.status(200).send(finalHTML);
});

app.listen(port, function () {
    console.log(`Running at Port ${port}`);
});
