const products = require("../models/products");

class SiteController {
    async index(req, res) {
        try {
            const docs = await products.find({});
            res.json(docs);
        } catch (error) {
            res.status(500).jsonp({ error: "message" });
        }
    }
    search(req, res) {
        res.render("search");
    }
}
module.exports = new SiteController();
