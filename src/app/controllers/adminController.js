const products = require("../models/products");
const { multipleMongooesToObject } = require("../../util/mongooes");
const e = require("express");
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
      res.status(201).json({
        messsage : "created data success",
        data : data,
      })
      if (data) {
        res.redirect('/admin')
      }
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      res.render("admin/deleteProduct");
    } catch (error) {
      next(error);
    }
  }
  async update(req, res, next) {
    try {
      res.render("admin/updateProduct");
    } catch (error) {
      next(error);
    }
  }
}

//mun export class phai co nex sau do class ()
module.exports = new AdminController();
