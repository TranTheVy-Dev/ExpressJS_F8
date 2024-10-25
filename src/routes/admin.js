const express = require ("express")
const Router = express.Router()
const AdminController = require("../app/controllers/adminController")

Router.get('/', AdminController.create)

module.exports = Router