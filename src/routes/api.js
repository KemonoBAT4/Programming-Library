const express = require("express");
const api = express.Router();
const mysql = require("mysql");
let config = {} // FIXME: fix config, import config file

const connection = mysql.createConnection(
    {
        host: `${config.sql_host}`,
        user: `${config.sql_user}`,
        password: `${config.sql_password}`,
        database: `${config.sql_database}`,
        port: config.sql_port
    }
);

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

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
