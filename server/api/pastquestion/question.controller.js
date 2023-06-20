// const {
//   askQuestion,
//   getQuestions,
//   getquestionbyid,
// } = require("./question.service");

// module.exports = {
//   askQuestion: (req, res) => {
//     const { year, qn, subject,title, a,b,c,d,answer ,explen } = req.body;

//     //validation
//     if (!year||!qn||!subject || !title || !a || !b || !c|| !d || !answer)
//       return res
//         .status(400)
//         .json({ msg: "Not all fields have been provided!" });
//     if (title.length > 200)
//       return res
//         .status(400)
//         .json({ msg: "Title length can not be greater than 200 characters!" });

//     //sending data to question with the user_id included in req.body
//     askQuestion(req, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ msg: "database connection err" });
//       }
//       return res.status(200).json({
//         msg: "New Questions added successfully",
//         data: results,
//       });
//     });
//   },
//   getQuestions: (req, res) => {
//     getQuestions((err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ msg: "database connection err" });
//       }
//       if (!results) {
//         return res.status(404).json({ msg: "Record not found" });
//       } else {
//         return res.status(200).json({ data: results });
//       }
//     });
//   },
//   getquestionbyid: (req, res) => {
//     getquestionbyid(req.query.pastquestion_id, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ msg: "database connection err" });
//       }
//       if (!results) {
//         return res.status(404).json({ msg: "Record not found" });
//       } else {
//         return res.status(200).json({ data: results[0] });
//       }
//     });
//   },
// };
const {
  askQuestion,
  getQuestions,
  getQuestionById,
  editQuestion,
  deleteQuestion,
} = require("./question.service");

module.exports = {
  askQuestion: (req, res) => {
    const { year, qn, subject, title, a, b, c, d, answer, explen } = req.body;

    // Validation
    if (!year || !qn || !subject || !title || !a || !b || !c || !d || !answer) {
      return res.status(400).json({ msg: "Not all fields have been provided!" });
    }
    if (title.length > 200) {
      return res.status(400).json({ msg: "Title length cannot be greater than 200 characters!" });
    }

    // Send data to question with the user_id included in req.body
    askQuestion(req, (err, results) => {
      if (err) {
        console.error("Error asking question:", err);
        return res.status(500).json({ msg: "Database connection error" });
      }
      return res.status(200).json({
        msg: "New question added successfully",
        data: results,
      });
    });
  },
  getQuestions: (req, res) => {
    getQuestions((err, results) => {
      if (err) {
        console.error("Error retrieving questions:", err);
        return res.status(500).json({ msg: "Database connection error" });
      }
      if (!results || results.length === 0) {
        return res.status(404).json({ msg: "No records found" });
      } else {
        return res.status(200).json({ data: results });
      }
    });
  },
  getQuestionById: (req, res) => {
    getQuestionById(req.query.pastquestion_id, (err, results) => {
      if (err) {
        console.error("Error retrieving question by ID:", err);
        return res.status(500).json({ msg: "Database connection error" });
      }
      if (!results || results.length === 0) {
        return res.status(404).json({ msg: "Record not found" });
      } else {
        return res.status(200).json({ data: results[0] });
      }
    });
  },
  editQuestion: (req, res) => {
    const { id, year, qn, subject, title, a, b, c, d, answer, explen } = req.body;

    // Validation
    if (!id || !year || !qn || !subject || !title || !a || !b || !c || !d || !answer) {
      return res.status(400).json({ msg: "Not all fields have been provided!" });
    }
    if (title.length > 200) {
      return res.status(400).json({ msg: "Title length cannot be greater than 200 characters!" });
    }

    // Update the question in the database
    editQuestion(req.body, (err, results) => {
      if (err) {
        console.error("Error editing question:", err);
        return res.status(500).json({ msg: "Database connection error" });
      }
      return res.status(200).json({
        msg: "Question updated successfully",
        data: results,
      });
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
