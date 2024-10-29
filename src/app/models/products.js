const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products = new Schema({
  name: { type: String, maxLength: 255 },
  description: { type: String, maxLength: 600 },
  image: { type: String, maxLength: 255 },
  price: { type: String, maxLength: 200 },
  slug:{type : String , maxLength :200},
  isDeleted: {
    type: Boolean,
    default: false, // Mặc định là không bị xóa
},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("products", products);
