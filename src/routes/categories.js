const express = require("express");
const Router = express.Router();
const categoriesController = require("../app/controllers/categoriesController");

Router.get("/:slug", categoriesController.category);
module.exports = Router;
