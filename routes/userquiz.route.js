const express = require("express");
const quizRoute = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { quizModel } = require("../model/quiz.model");

quizRoute.get("/", async (req, res) => {

  try {
      const data = await quizModel.find()
      res.status(404).send( data );
  } catch (error) {
      res.status(404).send({ msg: error.message });
  }
});

quizRoute.post("/quiz", async (req, res) => {
  const newdata = req.body;

  try {
    const data = new quizModel(newdata);
    data.save();
    res.status(404).send({ msg: "data has been posted sucesfully", data });
  } catch (error) {
    res.status(404).send({ msg: error.message });
  }
});

module.exports = { quizRoute };
