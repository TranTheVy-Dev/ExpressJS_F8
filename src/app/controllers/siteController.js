const products = require("../models/products");
const { multipleMongooesToObject } = require("../../util/mongooes");
const categories = require("../models/categories");
class SiteController {
  async index(req, res, next) {
    try {
      const count = await products.countDocuments();
      const random = Math.floor(Math.random() * count);
      const docs = await products.find().skip(random).limit(4);
      const data = await categories.find({});
      //chuyển đổi các phần tử trong docs(documents) trả về của products.find({}) thành object thuần qua sử dụng phương thức toObject
      //và lưu về trong docsToObject
      // const docsToObject = docs.map((docs) => docs.toObject());
      res.render("home", {
        docs: multipleMongooesToObject(docs),
        isHomePage: true,
        data: multipleMongooesToObject(data),
      });
    } catch (error) {
      //config erro = middleware
      next(error);
    }
  }
  search(req, res) {
    res.send("test slug");
  }
}
module.exports = new SiteController();
