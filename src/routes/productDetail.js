const express = require("express");
const Router = express.Router();
const productDetailController = require("../app/controllers/productDetailController");

Router.get("/:slug", productDetailController.index);

module.exports = Router;
