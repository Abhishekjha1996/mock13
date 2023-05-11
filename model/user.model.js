const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    email: String,
    password: String,
  },
  {
    versionKey: false,
  }
);

const userModel = mongoose.model("user", UserSchema);

module.exports = { userModel };
