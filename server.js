require("dotenv").config();
const express = require("express");
const cors = require("cors"); //
const app = express();
const port = process.env.PORT;
const adminRouter = require("./server/api/admins/admin.router")
const userRouter = require("./server/api/users/user.router");
const pastquestionRouter = require("./server/api/pastquestion/question.router");
const biologyRouter = require("./server/api/biology/question.router");
const chemistryRouter = require("./server/api/chemistry/question.router");
const civicsRouter = require("./server/api/civics/question.router");
const amharicRouter = require("./server/api/amharic/question.router");
const oromoRouter = require("./server/api/oromo/question.router");
const englishRouter = require("./server/api/english/question.router");
const socialRouter = require("./server/api/social/question.router");
const mathsRouter = require("./server/api/maths/question.router");
const physicsRouter = require("./server/api/physics/question.router");
const questionRouter = require("./server/api/question/question.router");
const answerRouter = require("./server/api/answer/answer.router");

app.use(cors()); //middle ware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/admins", adminRouter);
app.use("/api/users", userRouter);
app.use("/api/pastquestion", pastquestionRouter);
app.use("/api/biology", biologyRouter);
app.use("/api/maths", mathsRouter);
app.use("/api/chemistry", chemistryRouter);
app.use("/api/social", socialRouter);
app.use("/api/civics", civicsRouter);
app.use("/api/amharic", amharicRouter);
app.use("/api/english", englishRouter);
app.use("/api/oromo", oromoRouter);
app.use("/api/physics", physicsRouter);
app.use("/api/question", questionRouter);
app.use("/api/answer", answerRouter);
app.use("/api/answer", answerRouter);

app.listen(port, () => console.log(`Listening at http://localhost:${port}`)); //
