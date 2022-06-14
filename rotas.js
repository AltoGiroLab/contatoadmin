const express = require('express');
const router = express.Router();

// Controllers
const controllerLogin = require('./controllers/login.controller.js');


router.get("/", (req, res) => res.render("home"));
router.get("/login", (req, res) => res.render("login"));
router.post("/login", (req, res) => controllerLogin.login(req, res));
router.post("/logout", (req, res) => controllerLogin.login(req, res));


module.exports = router