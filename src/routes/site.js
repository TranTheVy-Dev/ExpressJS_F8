const express = require("express");
const Router = express.Router();
const siteController = require("../app/controllers/siteController");

Router.get("/:id", siteController.search);
Router.get("/", siteController.index);

module.exports = Router;
