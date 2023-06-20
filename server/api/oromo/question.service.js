const pool = require("../../config/database");

module.exports = {
  //data comes form the user controller
  askQuestion: (data, callback) => {
    //inserting data to question table
    pool.query(
      `INSERT INTO oromo(title, a,b,c,d,answer, time )VALUES(?,?,?,?,?,?,?)`,
      // ? it is hold  it help sql injections
      [data.body.title, data.body.a,data.body.b,data.body.c,data.body.d,data.body.answer, new Date()],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
server/api/oromo/question.service.js      }
    );
  },
  getQuestions: (callback) => {
    //getting the question list by user_id
    pool.query(
      `SELECT oromo.onlinequestion_id, registration.user_id, registration.user_name, oromo.title,  oromo.a,oromo.b,oromo.c,oromo.d,oromo.answer, oromo.time  FROM oromo LEFT OUTER JOIN registration ON oromo.onlinequestion_id = registration.user_id  order by oromo.onlinequestion_id`,
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
      `SELECT oromo.onlinequestion_id, registration.user_id, registration.user_name, oromo.a,oromo.b,oromo.c,oromo.d,oromo.answer, oromo.time  FROM oromo LEFT OUTER JOIN registration ON oromo.user_id = registration.user_id where onlinequestion_id = ?`,
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
//       `INSERT INTO oromo(qn, subject, title, a, b, c, d, answer, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
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
//       `SELECT * FROM oromo ORDER BY qn`,
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
//   getQuestionById: (oromoquestion_id, callback) => {
//     pool.query(
//       `SELECT * FROM oromo WHERE oromoquestion_id = ?`,
//       [oromoquestion_id],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result[0]);
//       }
//     );
//   },
//   editQuestion: (oromoquestion_id, data, callback) => {
//     pool.query(
//       `UPDATE oromo SET qn = ?, subject = ?, title = ?, a = ?, b = ?, c = ?, d = ?, answer = ?, time = ? WHERE oromoquestion_id = ?`,
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
//         oromoquestion_id,
//       ],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
//   deleteQuestion: (oromoquestion_id, callback) => {
//     pool.query(
//       `DELETE FROM oromo WHERE oromoquestion_id = ?`,
//       [oromoquestion_id],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
// };
