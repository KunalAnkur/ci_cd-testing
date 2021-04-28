const express = require('express');
const app =  express();
const User = require("./models/userModel");
const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  () => console.log("mongoDB is connected")
);

app.post("/signup", async (req, res) => {
//   const { name, email } = req.body;
  const user = new User({ name :"Ankur" });
  const ret = await user.save();
  res.json(ret);
});
app.post("/users",(req,res) => {
  User.create({name:"kuna"}).then(doc => {
    return res.status(201).send(doc)
  }).catch(e => {
    console.log(e);
  })
})
app.get("/", (req,res) => {
    res.status(200).json("Everything is Working");
})
module.exports = app;