const http = require("http");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const server = http.createServer((req, res) => {
    // Read the JavaScript file containing the initial DOM structure
    const initialHTML = fs.readFileSync("index.js", "utf8");

    // Create a DOM from the initial HTML
    const dom = new JSDOM(initialHTML);

    // Manipulate the DOM - Add a "Click Me" button
    const button = dom.window.document.createElement("button");
    button.textContent = "Click Me";
    button.addEventListener("click", () => {
        alert("Button Clicked!");
    });
    dom.window.document.body.appendChild(button);

    // Convert the DOM back to HTML
    const finalHTML = dom.serialize();

    // Send the HTML response to the browser
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(finalHTML);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
