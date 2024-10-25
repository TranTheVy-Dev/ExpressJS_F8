const products = require("../models/products");

class AdminController {
  async create(req, res ,next) {
    try {
      res.render("createProduct");
    } catch (error) {
      next(error);
    }
  }
}

//mun export class phai co nex sau do class ()
module.exports = new AdminController();
