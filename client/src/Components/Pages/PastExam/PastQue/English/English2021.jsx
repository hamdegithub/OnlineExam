import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import QuestionDetail from "../../PastExam/QuestionDetail";
import Axios from "../../../../Axios";
// import "./ans_que.css";

const English2021= () => {
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

  const handleClick = () => {
    navigate("/newquestion");
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
        <h1>English</h1>
      <div>
        
        {filterData.length === 0 ? (
          <div>No Result Found</div>
        ) : (
          filterData.map((quest, index) => {
            if(quest.subject==="English"&&quest.year==2021)
            return <div>
                
                <QuestionDetail question={quest} key={index} />
            </div>;
          })
        )}
      </div>
    </section>
  );
};

export default English2021;
