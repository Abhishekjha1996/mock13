const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  if (token) {
    const decode = jwt.verify(token, "secretkey");
    if (decode) {
      req.body.creator = decode.creator;
      next();
    } else {
      res.status(400).send({ msg: "Please logon first !" });
    }
  } else {
    res.status(400).send({ msg: "invalid token !" });
  }
};


module.exports={auth}