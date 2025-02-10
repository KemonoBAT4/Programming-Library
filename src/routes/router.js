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

// display all languages in the library
router.get("/languages", async(req, res) => {
    res.render("list"); // FIXME: add type: language
});

// create a new language
router.get("/language/new", async(req, res) => {
    res.render("new"); // FIXME: add type: language
});

// edit a language
router.get("language/edit/:language", async(req, res) => {
    res.render("edit"); // FIXME: add type: language
});

// open the settings for a language (permissions, 
router.get("/setting/:language", async(req, res) => {
    res.render("settings"); // FIXME: not implemented yet
})

router.get("/search/:query", async(req, res) => {
    res.render("search", { query: req.params.query });
})
// router.get("/search", async(req, res) => {
//     res.render("search");
// })

// ------ TODO: add page routes here ------ //



// ------ -------------------------- ------ //

// 404 page
router.get("*", async(req, res) => {
    res.render("404");
});

// export
module.exports = router;
