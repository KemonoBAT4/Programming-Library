const express = require("express");
const router = express.Router();

// redirect to home page
router.get("/", async(req, res) => {
    res.redirect("/home");
});

// home page
router.get("/home", async(req, res) => {
    res.render("home");
});

router.get("/languages", async(req, res) => {
    res.render("list"); // FIXME: add type: language
});

router.get("/language/new", async(req, res) => {
    res.render("new") // FIXME: add type: language
})

router.get("/search")

// ------ TODO: add page routes here ------ //



// ------ -------------------------- ------ //

// 404 page
router.get("*", async(req, res) => {
    res.render("404");
});

// export
module.exports = router;
