// const pool = require("../../config/database");

// module.exports = {
//   //data comes form the user controller
//   askQuestion: (data, callback) => {
//     //inserting data to question table
//     pool.query(
//       `INSERT INTO pastquestion(year, qn, subject, title, a,b,c,d,answer, explen,time )VALUES(?,?,?,?,?,?,?,?,?,?,?)`,
//       // ? it is hold  it help sql injections
//       [data.body.year,data.body.qn, data.body.subject, data.body.title, data.body.a,data.body.b,data.body.c,data.body.d,data.body.answer, data.body.explen, new Date()],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
// server/api/pastquestion/question.service.js      }
//     );
//   },
//   getQuestions: (callback) => {
//     //getting the question list by user_id
//     pool.query(
//       `SELECT pastquestion.pastquestion_id, registration.user_id, registration.user_name, pastquestion.year, pastquestion.title, pastquestion.subject, pastquestion.qn, pastquestion.a,pastquestion.b,pastquestion.c,pastquestion.d,pastquestion.answer, pastquestion.explen, pastquestion.time  FROM pastquestion LEFT OUTER JOIN registration ON pastquestion.pastquestion_id = registration.user_id  order by pastquestion.qn`,
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
//   getquestionbyid: (pastquestion_id, callback) => {
//     //getting the question list by user_id
//     pool.query(
//       `SELECT pastquestion.pastquestion_id, registration.user_id, registration.user_name,  pastquestion.title, pastquestion.subject, pastquestion.a,pastquestion.b,pastquestion.c,pastquestion.d,pastquestion.answer, pastquestion.time  FROM pastquestion LEFT OUTER JOIN registration ON pastquestion.user_id = registration.user_id where pastquestion_id = ?`,
//       [pastquestion_id],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
//       }
//     );
//   },
//   deleteQuestions: (rep, res) => {
//     //getting the question list by user_id
//       const { index } = req.params
//       let sql = "DELETE FROM pastquestion WHERE pastquestion_id = ?"
//       pool.query(sql, [index], (err,result) =>{err ? console.log(err) : res.send(result)})
  
//   },
// };
const pool = require("../../config/database");

module.exports = {
  askQuestion: (data, callback) => {
    pool.query(
      `INSERT INTO pastquestion(year, qn, subject, title, a, b, c, d, answer, explen, time) VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
      [
        data.body.year,
        data.body.qn,
        data.body.subject,
        data.body.title,
        data.body.a,
        data.body.b,
        data.body.c,
        data.body.d,
        data.body.answer,
        data.body.explen,
        new Date(),
      ],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getQuestions: (callback) => {
    pool.query(
      `SELECT pastquestion.pastquestion_id, registration.user_id, registration.user_name, pastquestion.year, pastquestion.title, pastquestion.subject, pastquestion.qn, pastquestion.a, pastquestion.b, pastquestion.c, pastquestion.d, pastquestion.answer, pastquestion.explen, pastquestion.time FROM pastquestion LEFT OUTER JOIN registration ON pastquestion.pastquestion_id = registration.user_id ORDER BY pastquestion.qn`,
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getQuestionById: (pastquestion_id, callback) => {
    pool.query(
      `SELECT pastquestion.pastquestion_id, registration.user_id, registration.user_name, pastquestion.title, pastquestion.subject, pastquestion.a, pastquestion.b, pastquestion.c, pastquestion.d, pastquestion.answer, pastquestion.time FROM pastquestion LEFT OUTER JOIN registration ON pastquestion.user_id = registration.user_id WHERE pastquestion_id = ?`,
      [pastquestion_id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  editQuestion: (data, callback) => {
    pool.query(
      `UPDATE pastquestion SET year=?, qn=?, subject=?, title=?, a=?, b=?, c=?, d=?, answer=?, explen=? WHERE pastquestion_id=?`,
      [
        data.year,
        data.qn,
        data.subject,
        data.title,
        data.a,
        data.b,
        data.c,
        data.d,
        data.answer,
        data.explen,
        data.id,
      ],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  deleteQuestion: (pastquestion_id, callback) => {
    pool.query(
      `DELETE FROM pastquestion WHERE pastquestion_id=?`,
      [pastquestion_id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
};
