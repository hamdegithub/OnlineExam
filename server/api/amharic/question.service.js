const pool = require("../../config/database");

module.exports = {
  //data comes form the user controller
  askQuestion: (data, callback) => {
    //inserting data to question table
    pool.query(
      `INSERT INTO amharic(title, a,b,c,d,answer, time )VALUES(?,?,?,?,?,?,?)`,
      // ? it is hold  it help sql injections
      [data.body.title, data.body.a,data.body.b,data.body.c,data.body.d,data.body.answer, new Date()],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
server/api/amharic/question.service.js      }
    );
  },
  getQuestions: (callback) => {
    //getting the question list by user_id
    pool.query(
      `SELECT amharic.onlinequestion_id, registration.user_id, registration.user_name, amharic.title,  amharic.a,amharic.b,amharic.c,amharic.d,amharic.answer, amharic.time  FROM amharic LEFT OUTER JOIN registration ON amharic.onlinequestion_id = registration.user_id  order by amharic.onlinequestion_id`,
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
      `SELECT amharic.onlinequestion_id, registration.user_id, registration.user_name, amharic.a,amharic.b,amharic.c,amharic.d,amharic.answer, amharic.time  FROM amharic LEFT OUTER JOIN registration ON amharic.user_id = registration.user_id where onlinequestion_id = ?`,
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
//       `INSERT INTO amharic(qn, subject, title, a, b, c, d, answer, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
//       `SELECT * FROM amharic ORDER BY qn`,
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
//   getQuestionById: (amharicquestion_id, callback) => {
//     pool.query(
//       `SELECT * FROM amharic WHERE amharicquestion_id = ?`,
//       [amharicquestion_id],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result[0]);
//       }
//     );
//   },
//   editQuestion: (amharicquestion_id, data, callback) => {
//     pool.query(
//       `UPDATE amharic SET qn = ?, subject = ?, title = ?, a = ?, b = ?, c = ?, d = ?, answer = ?, time = ? WHERE amharicquestion_id = ?`,
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
//         amharicquestion_id,
//       ],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
//   deleteQuestion: (amharicquestion_id, callback) => {
//     pool.query(
//       `DELETE FROM amharic WHERE amharicquestion_id = ?`,
//       [amharicquestion_id],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
// };
