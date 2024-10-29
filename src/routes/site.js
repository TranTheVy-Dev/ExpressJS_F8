const express = require("express");
const Router = express.Router();
const siteController = require("../app/controllers/siteController");

Router.get("/search", siteController.search);
Router.get("/", siteController.index);

module.exports = Router;
