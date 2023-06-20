const router = require("express").Router();
//importing auth middleware
const auth = require("../middleware/auth");

const {
  askQuestion,
  getQuestions,
  getquestionbyid,
} = require("./question.controller");

//route new user to be registered using createUser controller
router.post("/newquestion", askQuestion);

//route new user to be registered using createUser controller
router.get("/getquestions", getQuestions);

//route new user to be registered using createUser controller
router.get("/getquestionbyid",  getquestionbyid);

module.exports = router;
