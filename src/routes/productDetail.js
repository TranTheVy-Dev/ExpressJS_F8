const express = require("express");
const Router = express.Router();
const productDetailController = require("../app/controllers/productDetailController");

Router.get("/:_id", productDetailController.show);

module.exports = Router;
