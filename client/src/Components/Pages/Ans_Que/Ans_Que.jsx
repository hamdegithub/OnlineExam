import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Contexts/UserContext";
import QuestionDetail from "../Question/QuestionDetail";
import Axios from "../../../Axios";
import "./ans_que.css";

const Ans_Que = () => {
  const [userData] = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const axios = Axios();
  const [search, setSearcher] = useState("");
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
      "/api/question/getquestions",
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
        q.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, questions]);

  return (
    <section className="container">
      <div className="header_row">
<div class="banner-content">
<form class="form">
<div class="form-inner">
<div class="input-group">
<i class="fa-solid fa-magnifying-glass search-icon"></i>
<input type="text" class="form-control" placeholder="Search " onChange={(e) => {
            setSearcher(e.target.value);
          }}/>
<button class="btn btn-primary sub-btn" type="submit"><i class="fas fa-arrow-right"></i></button>
</div>
</div>
</form>
</div>
        <button className="blue_button " onClick={handleClick}>
          Ask 
        </button>
        
      </div>
      Questions
      <div>
        
        {filterData.length === 0 ? (
          <div>No Result Found</div>
        ) : (
          filterData.map((quest, index) => {
            return <QuestionDetail question={quest} key={index} />;
          })
        )}
      </div>
    </section>
  );
};

export default Ans_Que;
