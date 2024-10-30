const products = require("../models/products");
const { multipleMongooesToObject } = require("../../util/mongooes");
const categories = require("../models/categories");
class SiteController {
  async index(req, res, next) {
    try {
      const count = await products.countDocuments({isDeleted: true});
      const random = Math.floor(Math.random() * count);
      const docs = await products.find({isDeleted: true}).skip(random).limit(4);
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
  async search(req, res, next) {
    try {
      //req.query.keyword || " "; nếu req ko có giá trị nó sẽ trả về 1 đối tượnng rỗng , nếu có thì trả  về keyword , dùng để đảm bảo rằng keyword sẽ khôg undefind
      const keyword = req.query.keyword || " ";
      // biến regex hoạt động khi có keyword được gởi lên biến regex sẽ kiếm tra những data có giá trị name khớp với keyword đưa lên
      const search = await products.find({
        name: { $regex: keyword, $options: "i" },
        isDeleted: true,
      });
      res.render("searchResults", {
        search: multipleMongooesToObject(search),
        keyword,
      });
    } catch (error) {}
  }
}
module.exports = new SiteController();
