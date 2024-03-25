const pool = require("../../config/database");

module.exports = {
  //data comes form the user controller
  askQuestion: (data, callback) => {
    //inserting data to question table
    pool.query(
      `INSERT INTO civics(title, a,b,c,d,answer, time )VALUES(?,?,?,?,?,?,?)`,
      // ? it is hold  it help sql injections
      [data.body.title, data.body.a,data.body.b,data.body.c,data.body.d,data.body.answer, new Date()],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
server/api/civics/question.service.js      }
    );
  },
  getQuestions: (callback) => {
    //getting the question list by user_id
    pool.query(
      `SELECT civics.onlinequestion_id, registration.user_id, registration.user_name, civics.title,  civics.a,civics.b,civics.c,civics.d,civics.answer, civics.time  FROM civics LEFT OUTER JOIN registration ON civics.onlinequestion_id = registration.user_id  order by civics.onlinequestion_id`,
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
      `SELECT civics.onlinequestion_id, registration.user_id, registration.user_name, civics.a,civics.b,civics.c,civics.d,civics.answer, civics.time  FROM civics LEFT OUTER JOIN registration ON civics.user_id = registration.user_id where onlinequestion_id = ?`,
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
      `DELETE FROM civics WHERE onlinequestion_id=?`,
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