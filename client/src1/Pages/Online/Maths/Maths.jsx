
import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import Axios from "../../../../Axios";
import { Alert, Button, Col, Row } from "react-bootstrap";
import "../online.css"; 
const Maths = () => {
  const [userData] = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const axios = Axios();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(100); 
  const [answers, setAnswers] = useState([]);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!userData.user) {
      navigate("/login");
    } else {
      loadQuestions();
      
    }
  }, [userData.user]);

  useEffect(() => {
    if (questions.length > 0) {
      setAnswers(Array(questions.length).fill(""));
      setTimer(questions.length*180)
    }
  }, [questions]);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(countdown);
    };
  }, []);

  useEffect(() => {
    if (timer <= 0) {
      handleSubmit();
    }
  }, [timer]);

  // Convert the remaining time to hours, minutes, and seconds
  const hours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  async function loadQuestions() {
    try {
      const response = await axios.get(
        "/api/maths/getquestions",
        userData.config
      );
      setQuestions(response.data?.data);
    } catch (error) {
      console.error("Error loading questions:", error);
    }
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleAnswerChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = e.target.value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    // Calculate the score
    const calculatedScore = calculateScore();
    setScore(calculatedScore);
    setShowScore(true);
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach((question, index) => {
      if (question.answer === answers[index]) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const renderQuestionPage = () => {
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <>
        <div className="timer-container">
          <h2 className="timer">
            {`${hours.toString().padStart(2, "0")}:${minutes
              .toString()
              .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
          </h2>
          {hours === 0 && minutes < 10 && (
            <Alert variant="warning">Less than 10 minutes remaining!</Alert>
          )}
        </div>
        <div>
          <h3>Question </h3>
          <h3>{currentQuestionIndex + 1})<span className="pl-3">{currentQuestion.title}</span></h3>
          <div>
           
                <div className="form-check choice">
                  <input
                    className="form-check-input pt-3 "
                    type="radio"
                    name="answer"
                    value="A"
                    checked={answers[currentQuestionIndex] === "A"}
                    onChange={handleAnswerChange}
                  />
                  <h5 className="form-check-label ">
                    A) {currentQuestion.a}
                  </h5>
                </div>
              
                <div className="form-check choice">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    value="B"
                    checked={answers[currentQuestionIndex] === "B"}
                    onChange={handleAnswerChange}
                  />
                  <h5 className="form-check-label">
                    B) {currentQuestion.b}
                  </h5>
                </div>
              
                <div className="form-check choice">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    value="C"
                    checked={answers[currentQuestionIndex] === "C"}
                    onChange={handleAnswerChange}
                  />
                  <h5 className="form-check-label">
                    C) {currentQuestion.c}
                  </h5>
                </div>
              
                <div className="form-check choice">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="answer"
                    value="D"
                    checked={answers[currentQuestionIndex] === "D"}
                    onChange={handleAnswerChange}
                  />
                  <h5 className="form-check-label">
                    D) {currentQuestion.d}
                  </h5>
                </div>
              
            
          </div>
        </div>
        <div className="button-container">
          <Button
            variant="secondary"
            disabled={currentQuestionIndex === 0}
            onClick={handlePreviousQuestion}
          >
            Previous
          </Button>
          {currentQuestionIndex === questions.length - 1 ? (
            <Button
              variant="primary"
              disabled={hours <= 0 && minutes <= 0 && seconds <= 0}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          ) : (
            <Button variant="primary" onClick={handleNextQuestion}>
              Next
            </Button>
          )}
        </div>
      </>
    );
  };

  const renderScorePage = () => (
    <div>
      <h3>Your Score: {score}</h3>
      <p>{score >= (questions.length - 1) / 2 ? "Pass" : "Fail"}</p>
    </div>
  );

  return (
    <section className="container">
    
      <h1 className="text-center pt-2">Software and information security Exit Exam</h1>
      {showScore ? (
        renderScorePage()
      ) : questions.length > 0 ? (
        renderQuestionPage()
      ) : (
        <p> Questions Is not Found </p>
      )}
    </section>
  );
};

export default Maths;
