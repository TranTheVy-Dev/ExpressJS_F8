const newRouter = require("./new");
const siteRouter = require("./site");
const detailProduct = require("./productDetail");
function route(app) {
  app.get("/news", newRouter);
  app.get("/", siteRouter);
  app.get("/", detailProduct);
  // app.get('/', (req, res) => {
  //     res.render('home')
  //   })
  //
}

module.exports = route;
