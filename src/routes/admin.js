const express = require("express");
const Router = express.Router();
const AdminController = require("../app/controllers/adminController");

Router.get("/update/:id", AdminController.update);
Router.put("/update/:id", AdminController.updated);
Router.get("/delete/:id", AdminController.delete);
Router.get("/create", AdminController.create);
Router.post("/create", AdminController.created);
Router.get("/", AdminController.home);
module.exports = Router;
