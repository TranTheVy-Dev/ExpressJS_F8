const products = require("../models/products");
const {multipleMongooesToObject} = require("../../util/mongooes");
class AdminController {
  //tham so phai theo thu tu req res, next neu khong se bi loi
  async home(req, res, next) {
    try {
      const docs = await products.find({});
      if (!docs) {
        res.send("doc not found")
      }
      res.render("homeProduct", { docs: multipleMongooesToObject(docs) });
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.render("createProduct");
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      res.render("deleteProduct");
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      res.render("updateProduct");
    } catch (error) {
      next(error);
    }
  }
}

//mun export class phai co nex sau do class ()
module.exports = new AdminController();
