const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const { connecton } = require("./db");
const { userRoute } = require("./routes/user.routes");
const { auth } = require("./middleware/auth");
const { quizRoute } = require("./routes/userquiz.route");

app.use(express.json());
app.use(cors());

app.use("/user", userRoute);

app.use(auth);

app.use("/dashboard", quizRoute);

app.listen(process.env.PORT, async () => {
  try {
    await connecton;
    console.log("MONGO");
  } catch (error) {
    console.log(error);
  }
  console.log("server");
});
