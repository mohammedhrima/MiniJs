// const express = require("express");
// const jsdom = require("jsdom");
// // const home = require("./out/home.js")
// const path = require("path");
import express from "express";
const app = express();
import jsdom from "jsdom";
const { JSDOM } = jsdom;
import { home, Mini } from "./out/home.js";

let port = 3000;
// keep updating out folder from server.js

// Serve static files from the "out" directory
// app.use(express.static(path.join(__dirname, "out")));

app.get("/", function (req, res) {
    // let pageName = req.params.pageName;
    // console.log("pageName:",pageName);
    // if (!pageName.endsWith(".js")) pageName += ".html";
    // res.sendFile(path.join(path.join(__dirname, "out"), `/${pageName}`));
    const tag = home();
    console.log("home:", tag.props);

    const initialHTML = `<div id="root"></div>`;
    const dom = new JSDOM(initialHTML);

    const render = (frameworkEl, container) => {
        if (["string", "number"].includes(typeof frameworkEl)) {
            container?.appendChild(dom.window.document.createTextNode(frameworkEl?.toString()));
            return;
        }
        const actualDOMElement = dom.window.document.createElement(frameworkEl.tag);

        // Apply Props to actual DOM Element
        Object.keys(frameworkEl?.props)
            .filter((key) => key !== "children")
            .forEach((property) => {
                actualDOMElement[property] = frameworkEl.props[property];
            });

        // Render children inside this element
        frameworkEl?.props?.children.forEach((child) => {
            render(child, actualDOMElement);
        });
        container?.appendChild(actualDOMElement); // Happens once, unless the DOM already exists and we just need to replace something on the child element.
    };
    render(tag, dom.window.document.body);
    const finalHTML = dom.serialize();
    console.log(finalHTML);

    res.status(200).send(finalHTML);
});

app.listen(port, function () {
    console.log(`Running at Port ${port}`);
});

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//     // const initialHTML = fs.readFileSync("main.html", "utf8");
//     const initialHTML = ``;

//     const dom = new JSDOM(initialHTML);

//     // Manipulate the DOM - Add a "Click Me" button
//     const button = dom.window.document.createElement("button");
//     button.textContent = "Click Me";
//     button.addEventListener("click", () => {
//         alert("Button Clicked!");
//     });
//     dom.window.document.body.appendChild(button);

//     const finalHTML = dom.serialize();
//     console.log(finalHTML);

//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(finalHTML);
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
