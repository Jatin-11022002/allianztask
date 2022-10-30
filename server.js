require("dotenv").config();
const express = require("express");
const connDB = require("./db/connect");
const app = express();
const path = require("path");
const routes = require("./routes/operands");
const cors = require("cors");

app.use(cors());
app.get("/hello", (req, res) => {
  res.send("heya its store");
});
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/", routes);
app.use(express.json());

const start = async () => {
  try {
    await connDB(process.env.MONGO_URL);
    app.listen(8000, () => {
      console.log("listening to 8000");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
