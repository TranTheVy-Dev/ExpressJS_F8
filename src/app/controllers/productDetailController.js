const products = require("../models/products");
const { multipleMongooesToObject } = require("../../util/mongooes");
// const { mongooesToObject } = require("../../util/mongooes");

class ProductDetailController {
  async index(req, res, next) {
    try {
      const docs = await products.find({});
      //chuyển đổi các phần tử trong docs(documents) trả về của products.find({}) thành object thuần qua sử dụng phương thức toObject
      //và lưu về trong docsToObject
      // const docsToObject = docs.map((docs) => docs.toObject());

      res.render("home", { docs: multipleMongooesToObject(docs) });
    } catch (error) {
      //config erro = middlewarea
      next(error);
    }
  }
  search(req, res) {
    res.render("detailProduct");
  }
}
module.exports = new ProductDetailController();
