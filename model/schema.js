const mongoose = require("mongoose");

const operandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name should be provided"],
  },
  value: {
    type: Number,
    required: [true, "price should be provided"],
  },
});

module.exports = mongoose.model("Operands", operandSchema);
