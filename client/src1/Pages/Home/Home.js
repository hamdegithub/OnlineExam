import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../context/UserContext';
import "./Home.css";
import Question from '../../Components/Question/Question';
import MainSection from "../MainSection/MainSection"

const Home = () => {
    const [userData, setUserData] = useContext(UserContext);
    const [allQuestions, setAllQuestions] = useState([]);
    const navigate = useNavigate();
    const Questions = async () => {
        try {
            const questionRes = await axios.get('http://localhost:4000/api/questions');
            setAllQuestions(questionRes.data.data);
        } catch (err) {
            console.log("problem", err);
        }
    }
    useEffect(() => {
        if (!userData.user) navigate("/login");
        Questions();
    }, [userData.user, navigate]);
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/ask-question");
    }
    return <div className="container my-5 home-container">
        <MainSection  />
      </div>;
}

export default Home