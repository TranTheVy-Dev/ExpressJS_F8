const newRouter = require("./new");
const siteRouter = require("./site");
function route(app) {
    app.get("/news", newRouter);
    app.get("/", siteRouter);
    // app.get('/', (req, res) => {
    //     res.render('home')
    //   })
    //
}

module.exports = route;
