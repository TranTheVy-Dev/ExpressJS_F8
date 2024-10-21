const products = require("../models/products");

class SiteController {
  async index(req, res, next) {
    try {
      const docs = await products.find({});
      res.render("home", { docs });
    } catch (error) {
      //config erro = middleware
      next(error);
    }
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
