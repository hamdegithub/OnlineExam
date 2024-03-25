
const pool = require("../../config/database");

module.exports = {
  createBooks: (data, callback) => {
    pool.query(
      `INSERT INTO books(title,  pdf, image,chapter,time) VALUES (?,  ?, ?, ?, ?)`,
      [
        data.body.title,
        data.files.pdf[0].path,
        data.files.image[0].path,
        data.body.chapter,
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
      `SELECT books.id, registration.user_id, registration.user_name, books.title, books.chapter books.image, books.pdf, books.time  FROM books LEFT OUTER JOIN registration ON books.user_id = registration.user_id where books_id = ?`,
      [books_id],
      (err, result) => {
        if (err) {
          return callback(err);
        }
        callback.status(201).json({status:201,data:result})
      }
    );
  },
  editBooks: (data, callback) => {
    pool.query(
      `UPDATE books SET title=?, pdf=?, image=?, title=? WHERE id=?`,
      [
        data.body.title,
        data.files.pdf[0].path,
        data.files.image[0].path,
        data.body.chapter,
        new Date(),
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
