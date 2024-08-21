const express = require("express");
const api = express.Router();

// redirect to home page
api.get("/", async(req, res) => {
    res.send({"status": "ok"})
});

// home page
api.get("/home", async(req, res) => {
    res.send({"status": "ok"})
});

// ------ TODO: add api routes here ------ //



// ------ ------------------------- ------ //

// export
module.exports = api;
