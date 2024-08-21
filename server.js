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
app.use("/css", express.static(__dirname + "public/css"));
app.use("/json", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/css"));
app.use("/library", express.static(__dirname + "public/css"));

// Ejs engine
app.set("views", "./src/views");
app.set("view engine", "ejs");


app.use("/", page_router);
app.use("/api", api_router);


app.listen(port, ()=> {
    console.log(`listening on port: ${port}`)
})


