const mongooes = require ("mongoose")
const Schema = mongooes.Schema

const categories = new Schema ({
    name : {type:String, maxLength :255},
    slug : {type:String, maxLength:50}
})
module.exports = mongooes.model("categories",categories)