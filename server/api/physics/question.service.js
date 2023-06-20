const pool = require("../../config/database");

module.exports = {
  //data comes form the user controller
  askQuestion: (data, callback) => {
    //inserting data to question table
    pool.query(
      `INSERT INTO physics(title, a,b,c,d,answer, time )VALUES(?,?,?,?,?,?,?)`,
      // ? it is hold  it help sql injections
      [data.body.title, data.body.a,data.body.b,data.body.c,data.body.d,data.body.answer, new Date()],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
server/api/physics/question.service.js      }
    );
  },
  getQuestions: (callback) => {
    //getting the question list by user_id
    pool.query(
      `SELECT physics.onlinequestion_id, registration.user_id, registration.user_name, physics.title,  physics.a,physics.b,physics.c,physics.d,physics.answer, physics.time  FROM physics LEFT OUTER JOIN registration ON physics.onlinequestion_id = registration.user_id  order by physics.onlinequestion_id`,
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
      `SELECT physics.onlinequestion_id, registration.user_id, registration.user_name, physics.a,physics.b,physics.c,physics.d,physics.answer, physics.time  FROM physics LEFT OUTER JOIN registration ON physics.user_id = registration.user_id where onlinequestion_id = ?`,
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

