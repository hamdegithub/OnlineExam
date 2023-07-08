const {
  askQuestion,
  getQuestions,
  getquestionbyid,
  deleteQuestion,
} = require("./question.service");

module.exports = {
  askQuestion: (req, res) => {
    const {title, a,b,c,d,answer } = req.body;

    //validation
    if (!title || !a || !b || !c|| !d || !answer)
      return res
        .status(400)
        .json({ msg: "Not all fields have been provided!" });
    if (title.length > 600)
      return res
        .status(400)
        .json({ msg: "Title length can not be greater than 200 characters!" });

    //sending data to question with the user_id included in req.body
    askQuestion(req, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection err" });
      }
      return res.status(200).json({
        msg: "New Questions added successfully",
        data: results,
      });
    });
  },
  getQuestions: (req, res) => {
    getQuestions((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(404).json({ msg: "Record not found" });
      } else {
        return res.status(200).json({ data: results });
      }
    });
  },
  getquestionbyid: (req, res) => {
    getquestionbyid(req.query.onlinequestion_id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(404).json({ msg: "Record not found" });
      } else {
        return res.status(200).json({ data: results[0] });
      }
    });
  },
  deleteQuestion: (req, res) => {
    const { id } = req.params;

    // Delete the question from the database
    deleteQuestion(id, (err, results) => {
      if (err) {
        console.error("Error deleting question:", err);
        return res.status(500).json({ msg: "Database connection error" });
      }
      return res.status(200).json({
        msg: "Question deleted successfully",
        data: results,
      });
    });
  },
};





// const {
//   askQuestion,
//   getQuestions,
//   getQuestionById,
//   editQuestion,
//   deleteQuestion,
// } = require("./question.service");

// module.exports = {
//   askQuestion: (req, res) => {
//     const { qn, subject, title, a, b, c, d, answer } = req.body;

//     // Validation
//     if (!qn || !subject || !title || !a || !b || !c || !d || !answer)
//       return res
//         .status(400)
//         .json({ msg: "Not all fields have been provided!" });
//     if (title.length > 200)
//       return res
//         .status(400)
//         .json({ msg: "Title length cannot be greater than 200 characters!" });

//     // Sending data to question with the user_id included in req.body
//     askQuestion(req, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ msg: "Database connection error" });
//       }
//       return res.status(200).json({
//         msg: "New question added successfully",
//         data: results,
//       });
//     });
//   },
//   getQuestions: (req, res) => {
//     getQuestions((err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ msg: "Database connection error" });
//       }
//       if (!results) {
//         return res.status(404).json({ msg: "Records not found" });
//       } else {
//         return res.status(200).json({ data: results });
//       }
//     });
//   },
//   getQuestionById: (req, res) => {
//     getQuestionById(req.params.onlinequestion_id, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ msg: "Database connection error" });
//       }
//       if (!results) {
//         return res.status(404).json({ msg: "Record not found" });
//       } else {
//         return res.status(200).json({ data: results });
//       }
//     });
//   },
//   editQuestion: (req, res) => {
//     const {  title, a, b, c, d, answer } = req.body;
//     const { onlinequestion_id } = req.params;

//     // Validation
//     if (!title || !a || !b || !c || !d || !answer)
//       return res
//         .status(400)
//         .json({ msg: "Not all fields have been provided!" });
//     if (title.length > 200)
//       return res
//         .status(400)
//         .json({ msg: "Title length cannot be greater than 200 characters!" });

//     // Updating the question
//     editQuestion(onlinequestion_id, req, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ msg: "Database connection error" });
//       }
//       if (results.affectedRows === 0) {
//         return res.status(404).json({ msg: "Record not found" });
//       } else {
//         return res.status(200).json({
//           msg: "Question updated successfully",
//           data: results,
//         });
//       }
//     });
//   },
//   deleteQuestion: (req, res) => {
//     const { onlinequestion_id } = req.params;

//     // Deleting the question
//     deleteQuestion(onlinequestion_id, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ msg: "Database connection error" });
//       }
//       if (results.affectedRows === 0) {
//         return res.status(404).json({ msg: "Record not found" });
//       } else {
//         return res.status(200).json({
//           msg: "Question deleted successfully",
//           data: results,
//         });
//       }
//     });
//   },
// };
