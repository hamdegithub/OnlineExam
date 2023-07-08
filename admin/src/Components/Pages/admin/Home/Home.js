import React, { useState, useContext, useEffect } from "react";
import { Router, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Contexts/UserContext";
import QuestionDetail from "../../Question/QuestionDetail";
import Axios from "../../../../Axios";
import "./Home.css";
import MainSection from "../MainSection/MainSection";
import home from "../../../Image/Web.png"
const Home = () => {
  const [userData] = useContext(UserContext);
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const axios = Axios();
  const [search, setSearcher] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    if (!userData.user) {
      navigate("/adminlogin");
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
   
       <MainSection logo={home}/>
    
    
  );
};

export default Home;
