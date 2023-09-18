const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);

// Serve static HTML and JavaScript files
app.use(express.static(path.join(__dirname, "public")));

const wss = new WebSocket.Server({ server });

const connectedClients = new Set(); // Maintain a set of connected clients

wss.on("connection", (ws, req) => {
    console.log("Connected client:", req.url);

    const filePath = path.join(__dirname, "public", "home.js");
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
                };
                newWebSocket.onclose = () => {
                    // Handle close event of the reconnected WebSocket if needed
                };
            }
        }, 2000);
    });

    // Add the connected client to the set
    connectedClients.add(ws);
});

server.listen(8080, () => {
    console.log("Listening on port 8080");
});
