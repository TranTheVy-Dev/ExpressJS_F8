module.exports = {
    // khi nhận đối số từ 1 document từ bất từ controller nào nó sẽ tự đưa vào mongooseArray và và định nghĩ nó là object thuần js
  multipleMongooesToObject: function (mongooseArray) {
    return mongooseArray.map((mongooes) => mongooes.toObject());
  },
  mongooesToObject: function (mongooes) {
    return mongooes ? mongooes.toObject() : mongooes;
  },
};
