const Operand = require("../model/schema");

const getAllData = async (req, res) => {
  try {
    let operands = await Operand.find();
    res.status(200).json(operands);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllData };
