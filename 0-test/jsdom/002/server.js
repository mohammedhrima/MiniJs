const http = require("http");
const fs = require("fs");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const server = http.createServer((req, res) => {
    // const initialHTML = fs.readFileSync("main.html", "utf8");
    const initialHTML = ``;

    const dom = new JSDOM(initialHTML);

    // Manipulate the DOM - Add a "Click Me" button
    const button = dom.window.document.createElement("button");
    button.textContent = "Click Me";
    button.addEventListener("click", () => {
        alert("Button Clicked!");
    });
    dom.window.document.body.appendChild(button);

    const finalHTML = dom.serialize();
    console.log(finalHTML);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(finalHTML);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
