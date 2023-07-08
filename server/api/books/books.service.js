// const pool = require("../../config/database");

// module.exports = {
//   //data comes form the user controller
//   createBooks: (data, callback) => {
//     //inserting data to books table
//     pool.query(
//       `INSERT INTO books(user_id,title, pdf, image, owner time )VALUES(?,?,?,?,?,?)`,
//       // ? it is hold  it help sql injections
//       [data.body.title, data.pdfPath, data.imagePath, data.body.owner, new Date()],
//       (err, result) => {
//         if (err) {
//           return callback(err);
//         }
//         return callback(null, result);
// // server/api/books/books.service.js     
//  }
//     );
//   },
  // getBooks: (callback) => {
  //   //getting the books list by user_id
  //   pool.query(
  //     `SELECT books.id, registration.user_id, registration.user_name, books.title, books.image, books.pdf, books.time  FROM books LEFT OUTER JOIN registration ON books.user_id = registration.user_id  order by books.time desc`,
  //     (err, result) => {
  //       if (err) {
  //         return callback(err);
  //       }
  //       return callback(null, result);
  //     }
  //   );
  // },
  // getbooksbyid: (books_id, callback) => {
  //   //getting the books list by user_id
  //   pool.query(
  //     `SELECT books.id, registration.user_id, registration.user_name, books.title, books.image, books.pdf, books.time  FROM books LEFT OUTER JOIN registration ON books.user_id = registration.user_id where books_id = ?`,
  //     [books_id],
  //     (err, result) => {
  //       if (err) {
  //         return callback(err);
  //       }
  //       return callback(null, result);
  //     }
  //   );
  // },
// };
const pool = require("../../config/database");

module.exports = {
  createBooks: (data, callback) => {
    pool.query(
      `INSERT INTO books(title, pdf, image,  time) VALUES (  ?, ?, ?, ?)`,
      [
        data.body.title,
        data.files.pdf[0].path,
        data.files.image[0].path,
        data.body.owner,
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
  getBooks: (callback) => {
    //getting the books list by user_id
    pool.query(
      `SELECT * from books order by books.time desc`,
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  getbooksbyid: (books_id, callback) => {
    //getting the books list by user_id
    pool.query(
      `SELECT books.id, registration.user_id, registration.user_name, books.title, books.image, books.pdf, books.time  FROM books LEFT OUTER JOIN registration ON books.user_id = registration.user_id where books_id = ?`,
      [books_id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        callback.status(201).json({status:201,data:result})
      }
    );
  },
  deleteBooks: (id, callback) => {
    pool.query(
      `DELETE FROM books  WHERE id=?`,
      [id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        return callback(null, result);
      }
    );
  },
  // Rest of the code...
};
