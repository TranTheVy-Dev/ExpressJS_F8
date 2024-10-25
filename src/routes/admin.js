const express = require ("express")
const Router = express.Router()
const AdminController = require("../app/controllers/adminController")

Router.get ('/update',AdminController.update)
Router.get ('/delete',AdminController.delete)
Router.get ('/create',AdminController.create)
Router.get('/', AdminController.home)

module.exports = Router