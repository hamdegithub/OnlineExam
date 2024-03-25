const pool = require("../../config/database");

module.exports = {
  //data comes form the user controller
  askQuestion: (data, callback) => {
    //inserting data to question table
    pool.query(
      `INSERT INTO maths(title, a,b,c,d,answer, time )VALUES(?,?,?,?,?,?,?)`,
      // ? it is hold  it help sql injections
      [data.body.title, data.body.a,data.body.b,data.body.c,data.body.d,data.body.answer, new Date()],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
server/api/maths/question.service.js      }
    );
  },
  getQuestions: (callback) => {
    //getting the question list by user_id
    pool.query(
      `SELECT maths.onlinequestion_id, registration.user_id, registration.user_name, maths.title,  maths.a,maths.b,maths.c,maths.d,maths.answer, maths.time  FROM maths LEFT OUTER JOIN registration ON maths.onlinequestion_id = registration.user_id  order by maths.onlinequestion_id`,
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
      `SELECT maths.onlinequestion_id, registration.user_id, registration.user_name, maths.a,maths.b,maths.c,maths.d,maths.answer, maths.time  FROM maths LEFT OUTER JOIN registration ON maths.user_id = registration.user_id where onlinequestion_id = ?`,
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
      `DELETE FROM maths WHERE onlinequestion_id=?`,
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