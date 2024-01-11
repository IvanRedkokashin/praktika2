const express = require("express");
const router = express.Router();
const register = require("../controllers/register");
const login = require("../controllers/login");
const logout = require("../controllers/logout");
const entries = require("../controllers/entries");
const entry = require("../controllers/entry");
const post = require("../controllers/post");
const index = require("../controllers/index");

router.get("/", entries.list);

router.get("/post", entries.form);
router.post("/post", entries.submit);

router.get("/register", register.form);
router.post("/register", register.submit);

router.get("/login", login.form);
router.post("/login", login.submit);

router.get("/logout", login.logout);

module.exports = router;
