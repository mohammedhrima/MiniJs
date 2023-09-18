const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// Read the JavaScript file containing the initial DOM structure
const initialHTML = fs.readFileSync("main.html", "utf8"); // Assuming "initial.html" contains your initial HTML structure

// Create a DOM from the initial HTML
const dom = new JSDOM(initialHTML);

// Manipulate the DOM - Add a "Click Me" button
const button = dom.window.document.createElement("button");
button.textContent = "Click Me";
button.addEventListener("click", () => {
    alert("Button Clicked!");
});

dom.window.document.body.appendChild(button);

module.exports = dom;
