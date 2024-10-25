const express = require ("express")
const Router = express.Router()
const AdminController = require("../app/controllers/adminController")

Router.get ('/update/:id',AdminController.update)
Router.get ('/delete/:id',AdminController.delete)
Router.get ('/create',AdminController.create)
Router.get('/', AdminController.home)

module.exports = Router