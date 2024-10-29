const products = require("../models/products");
const {
  multipleMongooesToObject,
  mongooesToObject,
} = require("../../util/mongooes");
class AdminController {
  //tham so phai theo thu tu req res, next neu khong se bi loi
  async home(req, res, next) {
    try {
      const docs = await products.find({isDeleted: true});
      if (!docs) {
        res.send("doc not found");
      }
      res.render("admin/homeProduct", { docs: multipleMongooesToObject(docs)  });
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
      const deleted = await products.findByIdAndUpdate(
        req.params.id,
        { isDeleted: false },
        { new: true }
      );
      if (deleted) {
        res.redirect("/admin");
      } else {
        console.log("eo xoa dc");
      }
    } catch (error) {
      next(error);
    }
  }
  async restore(req, res, next) {
    const data = await products.find({ isDeleted: false });
    res.render("admin/restoreProduct", {
      data: multipleMongooesToObject(data),
    });
  }
  async restored(req, res, next) {
   try {
    const id = await req.params._id;
    const restored = await products.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );
    if (!restored) {
      console.log("ko khoi phuc duoc");
    } else {
      res.redirect("/admin/restore");
    }
   } catch (error) {
    
   }
  }
  async update(req, res, next) {
    try {
      //bởi vì chưa lấy id mà tk data đã load nên xảy ra lỗi phải khai báo thêm bất đồng bộ(id) để khi có id thì cái tk data mới được chạy
      const id = await req.params._id;
      const data = await products.findById(req.params.id, {isDeleted: true});
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
