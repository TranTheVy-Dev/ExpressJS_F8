const products = require("../models/products");
const categories = require ("../models/categories")
const { multipleMongooesToObject } = require("../../util/mongooes");
const {mongooesToObject} = require ("../../util/mongooes")
class categoriesController {
  async category(req, res, next) {
    try {
      const data = await products.find({ slug: req.params.slug });
      const namedata = await categories.findOne({slug : req.params.slug})
      res.render("categories",
         { 
          data: multipleMongooesToObject(data) ,
          namedata : mongooesToObject(namedata)
         }
             
        );
    } catch (error) {
      next(error);
    }
 
  }
}
module.exports = new categoriesController();
