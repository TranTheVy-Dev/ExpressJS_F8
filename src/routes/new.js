const express = require("express");
const Router = express.Router();

const newcontroller = require("../app/controllers/newController");

// newcontroller.index
//khi truy xuat vao phan news thi cai duong dan / nay tu hieu no la news boi vi route news nay la cap con cua newRoute ben index.js
Router.get("/news", newcontroller.index);

Router.get("/:id", newcontroller.show);

module.exports = Router;
