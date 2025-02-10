const express = require("express");
const cors = require("cors");
const { port } = require("./config");

// Application
const app = express();

// Express routes Import
const page_router = require("./src/routes/router");
const api_router = require("./src/routes/api");

// Middlewares
app.use(express.json()); // TODO: see if this line is usefull
app.use(cors());

// Client static folders
app.use(express.static('src/resources')); // defines the base path

app.use("/css", express.static(__dirname + "css")); // defines the path for css
app.use("/js", express.static(__dirname + "js")); // defines the path for js
app.use("/assets", express.static(__dirname + "assets")); // defines the path for assets
app.use("/library", express.static(__dirname + "libraries")); // defines the path for library

// Languages static folders
app.use("/languages", express.static("languages")); // TODO: see if this line is correct

// Ejs engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Routes
app.use("/", page_router);
app.use("/api", api_router);

// Server
app.listen(port, ()=> {
    console.log(`listening on port: ${port}`)
})


