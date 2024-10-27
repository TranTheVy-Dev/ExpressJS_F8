const newRouter = require("./new");
const siteRouter = require("./site");
const detailProduct = require("./productDetail");
const adminRouter = require("./admin");
const categoriesRouter = require("./categories")
function route(app) {
  app.use("/productDetail", detailProduct);
  app.use("/news", newRouter);
  app.use("/admin", adminRouter);
  app.use("/categories",categoriesRouter)
  app.use("/", siteRouter);
  // app.get('/', (req, res) => {
  //     res.render('home')
  //   })
  //
}

module.exports = route;
