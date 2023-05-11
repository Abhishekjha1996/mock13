const mongoose = require("mongoose")
require('dotenv').config()

const connecton = mongoose.connect(process.env.MONGO)

module.exports={connecton}