import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../Contexts/UserContext';
import Axios from '../../../Axios';
import { useNavigate } from 'react-router-dom';

function Userlist() {
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
    }, [userData.user,navigate]);
    
  
    async function loadQuestions() {
      const response = await axios.get(
        "/api/users",
        userData.config
      );
      setQuestions(response.data?.data);
    }
  return (
    <div>{questions.user_name}</div>
  )
}

export default Userlist