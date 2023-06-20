const pool = require("../../config/database");

module.exports = {
  //data comes form the user controller
  askQuestion: (data, callback) => {
    //inserting data to question table
    pool.query(
      `INSERT INTO english(title, a,b,c,d,answer, time )VALUES(?,?,?,?,?,?,?)`,
      // ? it is hold  it help sql injections
      [data.body.title, data.body.a,data.body.b,data.body.c,data.body.d,data.body.answer, new Date()],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
server/api/english/question.service.js      }
    );
  },
  getQuestions: (callback) => {
    //getting the question list by user_id
    pool.query(
      `SELECT english.onlinequestion_id, registration.user_id, registration.user_name, english.title,  english.a,english.b,english.c,english.d,english.answer, english.time  FROM english LEFT OUTER JOIN registration ON english.onlinequestion_id = registration.user_id  order by english.onlinequestion_id`,
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getquestionbyid: (onlinequestion_id, callback) => {
    //getting the question list by user_id
    pool.query(
      `SELECT english.onlinequestion_id, registration.user_id, registration.user_name, english.a,english.b,english.c,english.d,english.answer, english.time  FROM english LEFT OUTER JOIN registration ON english.user_id = registration.user_id where onlinequestion_id = ?`,
      [onlinequestion_id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
};
// const pool = require("../../config/database");

// module.exports = {
//   askQuestion: (data, callback) => {
//     pool.query(
//       `INSERT INTO english(qn, subject, title, a, b, c, d, answer, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//       [
//         data.body.qn,
//         data.body.subject,
//         data.body.title,
//         data.body.a,
//         data.body.b,
//         data.body.c,
//         data.body.d,
//         data.body.answer,
//         new Date(),
//       ],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
//   getQuestions: (callback) => {
//     pool.query(
//       `SELECT * FROM english ORDER BY qn`,
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
//   getQuestionById: (englishquestion_id, callback) => {
//     pool.query(
//       `SELECT * FROM english WHERE englishquestion_id = ?`,
//       [englishquestion_id],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result[0]);
//       }
//     );
//   },
//   editQuestion: (englishquestion_id, data, callback) => {
//     pool.query(
//       `UPDATE english SET qn = ?, subject = ?, title = ?, a = ?, b = ?, c = ?, d = ?, answer = ?, time = ? WHERE englishquestion_id = ?`,
//       [
//         data.body.qn,
//         data.body.subject,
//         data.body.title,
//         data.body.a,
//         data.body.b,
//         data.body.c,
//         data.body.d,
//         data.body.answer,
//         new Date(),
//         englishquestion_id,
//       ],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
//   deleteQuestion: (englishquestion_id, callback) => {
//     pool.query(
//       `DELETE FROM english WHERE englishquestion_id = ?`,
//       [englishquestion_id],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
// };
