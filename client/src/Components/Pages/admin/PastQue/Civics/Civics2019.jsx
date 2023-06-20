import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Contexts/UserContext";
import QuestionDetail from "../../Question/PastExam/QuestionDetail";
import Axios from "../../../../../Axios";
// import "./ans_que.css";

const Civics2019= () => {
  const [userData] = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const axios = Axios();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (!userData.user) {
      navigate("/login");
    } else {
      loadQuestions();
    }
  }, [userData.user]);
  

  async function loadQuestions() {
    const response = await axios.get(
      "/api/pastquestion/getquestions",
      userData.config
    );
    setQuestions(response.data?.data);
  }

  const handleDelete = (questionId) => {
    // Remove the deleted question from the questions array
    const updatedQuestions = questions.filter(
      (question) => question.pastquestion_id !== questionId
    );
    setQuestions(updatedQuestions);
  };
 
  useEffect(() => {
    setFilterData(
      questions.filter((q) =>
        q.title.toLowerCase()
      )
    );
  }, [questions]);

  return (
    <section className="container">
        <h1>Civics</h1>
      <div>
        
        {filterData.length === 0 ? (
          <div>No Result Found</div>
        ) : (
          filterData.map((quest, index) => {
            if(quest.subject==="civics"&&quest.year==2019)
            return <div>
                
                <QuestionDetail question={quest} key={index} onDelete={handleDelete} onUpdate={handleDelete} />
            </div>;
          })
        )}
      </div>
    </section>
  );
};

export default Civics2019;
