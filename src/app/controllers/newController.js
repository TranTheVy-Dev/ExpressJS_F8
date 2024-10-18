class NewController {
  index(req, res) {
    res.render("news");
  }
  show(req, res) {
    res.send("test slug");
  }
}
// với mấy cái class thì hãy viết hoa chữ cái đầu
module.exports = new NewController();
