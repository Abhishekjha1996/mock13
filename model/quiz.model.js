const mongoose = require("mongoose");

const QuizSchema = mongoose.Schema(
  {
    creator: String,
    title: String,
    description: String,
    questions: [
      {
        title: String,
        answerOptions: [String, String, String, String],
        correctOptions: [Number],
      },
    ],
  },
  {
    versionKey: false,
  }
);

const quizModel = mongoose.model("quiz", QuizSchema);

module.exports = { quizModel };

// const mongoose = require("mongoose");

// const UserquizSchema = mongoose.Schema({

//     creator: String,
//     title: String,
//     description: String,
//     questions: [
//       {
//         title: String,
//         answerOptions: [String, String, String, String],
//         correctOptions: [Number],
//       },
//     ],
//   },
//   {
//     versionKey: false,
//   }
// );

// const quizModel = mongoose.model("quiz", UserquizSchema);

// module.exports = {
//   quizModel
// };
