const express = require("express");
const path = require("path");
const fs = require("fs");
const WebSocket = require("ws");
const app = express();
const PORT = 5000;

app.use("/static", express.static(path.resolve(__dirname, "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

var url = `http://localhost:${PORT}`;
var start =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open";
require("child_process").exec(start + " " + url);

const server = app.listen(PORT, () => {
  console.log("server running... on port: ", PORT);
});

const wss = new WebSocket.Server({ server });

// Watch for changes in /static/index.js
const indexPath = path.resolve(__dirname, "static", "index.js");
fs.watch(indexPath, (eventType, filename) => {
  if (eventType === "change") {
    // console.log("/static/index.js has been modified.");
    // Notify all connected clients about the change
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send("refresh");
      }
    });
  }
});

const htmlPath = path.resolve(__dirname, "index.html");
fs.watch(htmlPath, (eventType, filename) => {
  if (eventType === "change") {
    console.log("index.html has been modified.");
    // Notify all connected clients about the change
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send("refresh");
      }
    });
  }
});

const cssPath = path.resolve(__dirname, "static", "index.css");
fs.watch(cssPath, (eventType, filename) => {
  if (eventType === "change") {
    console.log("index.css has been modified.");
    // Notify all connected clients about the change
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send("refresh");
      }
    });
  }
});

wss.on("connection", (ws) => {
  console.log("Client connected");
});
