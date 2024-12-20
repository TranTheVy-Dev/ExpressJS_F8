const products = require("../models/products");
const { mongooesToObject } = require("../../util/mongooes");
const { multipleMongooesToObject } = require("../../util/mongooes");
class ProductDetailController {
  // async index(req, res, next) {
  //   try {
  //     const docs = await products.find({});
  //     //chuyển đổi các phần tử trong docs(documents) trả về của products.find({}) thành object thuần qua sử dụng phương thức toObject
  //     //và lưu về trong docsToObject
  //     // const docsToObject = docs.map((docs) => docs.toObject());
  //     res.render("home", { docs: multipleMongooesToObject(docs) });
  //   } catch (error) {
  //     //config erro = middleware
  //     next(error);
  //   }
  // }
  async show(req, res, next) {
    try {
      //random data
      const count = await products.countDocuments(); // Đếm số lượng tài liệu
      const random = Math.floor(Math.random() * count);

      //get data
      const doc = await products.findById({
        _id: req.params._id,
        isDeleted: true,
      });
      const docs = await products.find({}).skip(random).limit(4);

      if (!doc && !docs) {
        res.send("data not Found");
      }
      res.render(
        "detailProduct",
        // gộp 2 đối tượng doc và doc lại thành 1 bởi vì render chỉ nhận 1 đối tượng
        //đối tượng cũ
        // { doc: mongooesToObject(doc) },
        // { docs: multipleMongooesToObject(docs) }
        //đối tượng sau khi giải quyết
        {
          doc: mongooesToObject(doc),
          docs: multipleMongooesToObject(docs),
        }
      );
    } catch (error) {
      next(error);
    }
  }
}
module.exports = new ProductDetailController();
