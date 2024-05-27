const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors")

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/newProject")
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log(err))
app.use(express.urlencoded({ extended: false }));

const userSchema = new mongoose.Schema({
  customer_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    require: true,
  },
  lastModification: {
    type: String,
    require: true
  }

}, { timestamps: true })

const Users = mongoose.model("newUser", userSchema);

app.get("/api/product", async (req, res) => {
  const allUsers = await Users.find({});
  res.json(allUsers);
});

app.post("/api/product", async (req, res) => {
  const bodys = req.body;
  const result = await Users.create({
    customer_name: bodys.customer_name,
    price: bodys.price,
    lastModification: bodys.lastModification
  })
  console.log(result)
  return res.status(201).json({ msg: "success" })
})

const port = process.PORT || 4000;

app.listen(port, () => {
  console.log("port started");
});