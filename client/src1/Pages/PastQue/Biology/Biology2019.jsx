import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import QuestionDetail from "../../PastExam/QuestionDetail";
import axios from "axios";
// import "./ans_que.css";

const Biology2019= () => {
  const [userData] = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
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
      "http://localhost:4000/api/pastquestion/getquestions",
      userData.config
    );
    setQuestions(response.data?.data);
  }


  useEffect(() => {
    setFilterData(
      questions.filter((q) =>
        q.title.toLowerCase()
      )
    );
  }, [questions]);

  return (
    <section className="container">
        <h1>Biology</h1>
      <div>
        
        {filterData.length === 0 ? (
          <div>No Result Found</div>
        ) : (
          filterData.map((quest, index) => {
            if(quest.subject==="biology"&&quest.year==2019)
            return <div>
                
                <QuestionDetail question={quest} key={index} />
            </div>;
          })
        )}
      </div>
    </section>
  );
};

export default Biology2019;
