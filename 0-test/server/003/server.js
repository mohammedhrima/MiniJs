const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the "out" directory
app.use(express.static(path.join(__dirname, "out")));

app.get("/:pageName", function (req, res) {
    const pageName = req.params.pageName;
    res.sendFile(path.join(__dirname, `${pageName}.html`));
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Running at Port 3000");
});