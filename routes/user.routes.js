const express = require("express");
const userRoute = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { userModel } = require("../model/user.model");

userRoute.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    bcrypt.hash(password, 5, async (err, hash) => {
      const data = await userModel.findOne({ email: email });

      if (data) {
        res.status(400).send({ msg: "User already registered" });
      } else {
        const user = new userModel({
          name,
          email,
          password: hash,
        });

        await user.save();
        res.status(200).send({ msg: "signup done sucessfully" });
      }
    });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

userRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email: email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          res.status(200).send({
            "msg": "login done sucessfully",
            "token": jwt.sign({"creator": user.email }, "secretkey"),
          });
        } else {
          res.status(400).send({ msg: "invalid credentails !" });
        }
      });
    }
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

module.exports = { userRoute };
