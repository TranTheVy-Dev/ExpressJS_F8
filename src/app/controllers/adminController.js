const products = require("../models/products");
const {
  multipleMongooesToObject,
  mongooesToObject,
} = require("../../util/mongooes");
class AdminController {
  //tham so phai theo thu tu req res, next neu khong se bi loi
  async home(req, res, next) {
    try {
      const docs = await products.find({});
      if (!docs) {
        res.send("doc not found");
      }
      res.render("admin/homeProduct", { docs: multipleMongooesToObject(docs) });
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      res.render("admin/createProduct");
    } catch (error) {
      next(error);
    }
  }
  //post product
  async created(req, res, next) {
    try {
      const getdata = req.body;
      const data = new products(getdata);
      await data.save();
      res.redirect("/admin");
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      const id = await req.params._id;
      const deleted = await products.findByIdAndDelete(req.params.id);
      if (deleted) {
        res.redirect("/admin");
      } else {
        console.log("eo xoa dc");
      }
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      //bởi vì chưa lấy id mà tk data đã load nên xảy ra lỗi phải khai báo thêm bất đồng bộ(id) để khi có id thì cái tk data mới được chạy
      const id = await req.params._id;
      const data = await products.findById(req.params.id);
      if (!data) {
        res.send("data not found");
      }
      res.render("admin/updateProduct", {
        data: mongooesToObject(data),
      });
    } catch (error) {
      next(error);
    }
  }
  async updated(req, res, next) {
    try {
      const id = await req.params._id;
      const updateProduct = await {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
      };
      const update = await products.findByIdAndUpdate(
        req.params.id,
        updateProduct,
        {
          new: true,
        }
      );
      if (update) {
        res.redirect("/admin");
      } else {
        res.send("data not update");
      }
    } catch (error) {
      next(error);
    }
  }
}

//mun export class phai co nex sau do class ()
module.exports = new AdminController();
