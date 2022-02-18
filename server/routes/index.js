var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
    res.send("<h1>Server is working</h1>");
});

module.exports = router;
