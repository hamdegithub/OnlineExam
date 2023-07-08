// const {
//   createBooks,
//   getBooks,
//   getbooksbyid,
// } = require("./books.service");

// module.exports = {
//   createBooks: (req, res) => {
//     const { title, owner } = req.body;
//     const { pdf, image } = req.files;

//     //validation
//     if (!title || !owner || !pdf || !image)
//       return res
//         .status(400)
//         .json({ msg: "Not all fields have been provided!" });
//     if (title.length > 200)
//       return res
//         .status(400)
//         .json({ msg: "Title length can not be greater than 200 characters!" });

//     //sending data to books with the user_id included in req.body
//     createBooks(req, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500)({ msg: "database connection err" });
//       }
//       return res.status(200)({
//         msg: "New Books added successfully",
//         data: results,
//       });
//     });
//   },
//   getBooks: (req, res) => {
//     getBooks((err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ msg: "database connection err" });
//       }
//       if (!results) {
//         return res.status(404).json({ msg: "Record not found" });
//       } else {
//         return res.status(200).json({ data: results });
//       }
//     });
//   },
//   getbooksbyid: (req, res) => {
//     getbooksbyid(req.query.books_id, (err, results) => {
//       if (err) {
//         console.log(err);
//         return res.status(500).json({ msg: "database connection err" });
//       }
//       if (!results) {
//         return res.status(404).json({ msg: "Record not found" });
//       } else {
//         return res.status(200).json({ data: results[0] });
//       }
//     });
//   },
// };
const {
  createBooks,
  getBooks,
  getbooksbyid,
  deleteBooks,
} = require("./books.service");

module.exports = {
  createBooks: (req, res) => {
    const { user_id, title, owner } = req.body;
    const { pdf, image } = req.files;

    // Validation
    if (!title || !owner || !pdf || !image) {
      return res.status(400).json({ msg: "Not all fields have been provided!" });
    }
    if (title.length > 200) {
      return res.status(400).json({ msg: "Title length cannot be greater than 200 characters!" });
    }

    const data = {
      body: {
      
        title,
        owner,
      },
      files: {
        pdf,
        image,
      },
    };

    createBooks(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "Database connection error" });
      }
      return res.status(200).json({
        msg: "New book added successfully",
        data: results,
      });
    });
  },

  getBooks: (req, res) => {
    getBooks((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(404).json({ msg: "Record not found" });
      } else {
        return res.status(200).json({ data: results });
      }
    });
  },
  getbooksbyid: (req, res) => {
    getbooksbyid(req.query.books_id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ msg: "database connection err" });
      }
      if (!results) {
        return res.status(404).json({ msg: "Record not found" });
      } else {
        return res.status(200).json({ data: results[0] });
      }
    });
  },
  deleteBooks: (req, res) => {
    const { id } = req.params;

    // Delete the Books from the database
    deleteBooks(id, (err, results) => {
      if (err) {
        console.error("Error deleting Books:", err);
        return res.status(500).json({ msg: "Database connection error" });
      }
      return res.status(200).json({
        msg: "Books deleted successfully",
        data: results,
      });
    });
  },// Rest of the code...
};
