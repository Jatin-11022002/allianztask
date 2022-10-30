const express = require("express");
const router = express.Router();
const { getAllData } = require("../controller/operands");

router.route("/data").get(getAllData);
router.get("/", async (req, res) => {
  return res.render("index", {
    status: "success",
  });
});

module.exports = router;
