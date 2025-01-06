const express = require("express");

const apiRoute = express.Router();

apiRoute.get("/api", (req, res) => {
    throw new Error("Something went wrong");
});

module.exports = apiRoute;
