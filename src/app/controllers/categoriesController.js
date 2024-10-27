const products = require("../models/products");
const { multipleMongooesToObject } = require("../../util/mongooes");
class categoriesController {
  async category(req, res, next) {
    try {
      const data = await products.find({ slug: req.params.slug });
      res.render("categories", { data: multipleMongooesToObject(data) });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new categoriesController();
