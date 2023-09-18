const http = require("http");
const dom = require("./index"); // Assuming index.js is in the same directory

const server = http.createServer((req, res) => {
    const finalHTML = dom.serialize();
    res.writeHead(200, { "Content-Type": "text/html" });
    console.log(finalHTML);
    res.end(finalHTML);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
