const pool = require("../../config/database");

module.exports = {
  //data comes form the user controller
  askQuestion: (data, callback) => {
    //inserting data to question table
    pool.query(
      `INSERT INTO biology(title, a,b,c,d,answer, time )VALUES(?,?,?,?,?,?,?)`,
      // ? it is hold  it help sql injections
      [data.body.title, data.body.a,data.body.b,data.body.c,data.body.d,data.body.answer, new Date()],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
server/api/biology/question.service.js      }
    );
  },
  getQuestions: (callback) => {
    //getting the question list by user_id
    pool.query(
      `SELECT biology.onlinequestion_id, registration.user_id, registration.user_name, biology.title,  biology.a,biology.b,biology.c,biology.d,biology.answer, biology.time  FROM biology LEFT OUTER JOIN registration ON biology.onlinequestion_id = registration.user_id  order by biology.onlinequestion_id`,
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
      `SELECT biology.onlinequestion_id, registration.user_id, registration.user_name, biology.a,biology.b,biology.c,biology.d,biology.answer, biology.time  FROM biology LEFT OUTER JOIN registration ON biology.user_id = registration.user_id where onlinequestion_id = ?`,
      [onlinequestion_id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  deleteQuestion: (onlinequestion_id, callback) => {
    pool.query(
      `DELETE FROM biology WHERE onlinequestion_id=?`,
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