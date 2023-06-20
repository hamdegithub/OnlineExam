const router = require("express").Router();
//importing auth middleware
const auth = require("../middleware/auth");

const {
  askQuestion,
  getQuestions,
  // getquestionbyid,
  deleteQuestion,
  editQuestion,
} = require("./question.controller");

//route new user to be registered using createUser controller
router.post("/newquestion", auth, askQuestion);

//route new user to be registered using createUser controller
router.get("/getquestions", auth, getQuestions);

//route new user to be registered using createUser controller
// router.get("/getquestionbyid", auth, getquestionbyid);
router.delete("/deletequestion:id", deleteQuestion);
router.put("/editquestion:id",  editQuestion);

module.exports = router;

// const router = require("express").Router();
// const auth = require("../middleware/auth");
// const {
//   askQuestion,
//   getQuestions,
//   getQuestionById,
//   editQuestion,
//   deleteQuestion,
// } = require("./question.controller");

// router.post("/newquestion", auth, askQuestion);
// router.get("/getquestions", getQuestions);
// router.get("/getquestionbyid", getQuestionById);
// router.put("/editquestion/:id", auth, editQuestion);
// router.delete("/deletequestion", deleteQuestion);

// module.exports = router;
