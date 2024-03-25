
const router = require("express").Router();
// Importing auth middleware
const multer = require('multer');
const auth = require("../middleware/auth");
// const upload = multer({ dest: 'uploads/' });
const {
  createBooks,
  getBooks,
  getbooksbyid,
  deleteBooks,
  editBooks,
} = require("./books.controller");
const storage = multer.diskStorage({
  destination:(req,file,callback)=>{
      callback(null,"uploads/")
  },
  filename:(req,file,callback)=>{
      callback(null,`image-${Date.now()}.${file.originalname}`)
  }
});
const upload = multer({ storage });


// Route for creating books
router.post("/createBooks", upload.fields([{ name: 'pdf' }, { name: 'image' }]), createBooks);

// Route for getting all books
router.get("/getBooks", getBooks);
router.delete("/deletebooks:id", deleteBooks);
router.put("/editbooks:id", upload.fields([{ name: 'pdf' }, { name: 'image' }]), editBooks);
// Route for getting books by ID
router.get("/getbooksbyid", getbooksbyid);

module.exports = router;

