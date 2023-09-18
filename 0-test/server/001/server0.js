const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");
const port = 8080;

const server = http.createServer((req, res) => {
    console.log("req.url:", req.url);
    const url = req.url && req.url.endsWith(".js") ? "." + req.url : req.url ? "." + req.url + ".html" : null;
    console.log("html: ", url);

    if (url) {
        fs.readFile(url, (err, content) => {
            if (err) {
                if (err.code === "ENOENT") {
                    res.writeHead(404, { "Content-Type": "text/plain" });
                    res.write("404 Not Found");
                } else {
                    res.writeHead(500, { "Content-Type": "text/plain" });
                    res.write("500 Internal Server Error");
                }
            } else {
                let contentType = "text/plain";
                if (url.endsWith(".html")) {
                    contentType = "text/html";
                } else if (url.endsWith(".js")) {
                    contentType = "text/javascript";
                }

                res.writeHead(200, { "Content-Type": contentType });
                res.write(content);
            }
            res.end();
        });
    } else {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.write("400 Bad Request");
        res.end();
    }
});

const wss = new WebSocket.Server({ server });

const connectedClients = new Set();
wss.on("connection", (ws, req) => {
    console.log("Connected client:", req.url);
    const filePath = "./home.js";
    const fileName = path.basename(filePath);

    const fileWatcher = fs.watch(filePath, (event, filename) => {
        if (event === "change" && filename === fileName) {
            fs.readFile(filePath, (err, content) => {
                console.log("send: ", content);
                if (!err) {
                    const jsCode = content.toString(); // Convert binary data to a string
                    connectedClients.forEach((client) => {
                        if (client !== ws && client.readyState === WebSocket.OPEN) {
                            // Send the JavaScript code to all connected clients except the sender
                            client.send(jsCode);
                        }
                    });
                }
            });
        }
    });

    ws.on("close", () => {
        console.log("Connection closed. Reconnecting in 2 seconds...");
        fileWatcher.close();

        // Attempt to reconnect after 2 seconds
        setTimeout(() => {
            if (ws.readyState !== WebSocket.OPEN) {
                // Ensure the WebSocket is not open before reconnecting
                console.log("Reconnecting...");
                const newWebSocket = new WebSocket("ws://localhost:8080");
                // Attach event listeners to handle reconnected WebSocket
                newWebSocket.onopen = () => {
                    connectedClients.add(newWebSocket); // Add the reconnected client to the set
                };
                newWebSocket.onmessage = (event) => {
                    // Handle messages from the reconnected WebSocket if needed
                    console.log("on message");
                };
                newWebSocket.onclose = () => {
                    // Handle close event of the reconnected WebSocket if needed
                    console.log("closing");
                };
            }
        }, 2000);
    });

    // Add the connected client to the set
    connectedClients.add(ws);
});

server.listen(port, (error) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Listening on port:", port);
    }
});
