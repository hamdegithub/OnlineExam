import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Contexts/UserContext";
import Axios from "../../../../../Axios";
// import "./question.css";
const NewQuestion = () => {
  const [userData] = useContext(UserContext);
  const axios = Axios();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      await axios.post(
        "/api/pastquestion/newquestion",
        {
          year: form.year,
          qn: form.qn,
          subject: form.subject,
          title: form.title,
          a: form.a,
          b: form.b,
          c: form.c,
          d: form.d,
          answer: form.answer,
          explen: form.explen,
        },
        userData.config
      );
      e.target.reset();
      navigate("/past_que");
    } catch (err) {
      console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  return (
    <section className="container" style={{ paddingTop: "10px" }}>
      <div className="d-flex flex-column  ">
        <h3>Add questions Page</h3>
      </div>
      <div className="container" style={{ width: "90%" }}>
        <div
          className="container"
          style={{
            paddingTop: "50px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <h3>Add Past Exam Questions</h3>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div style={{ width: "100%" }}>
          <label for="year">Enter Year :</label> 
    <select style={{
            width: "520px",
            height: "40px",
            borderRadius:"12px"
            ,margin:"2px 40px"
            
          }} onChange={handleChange} name="year" id="dog-names"> 
        <option value="">year</option> 
        <option width="100px" value="2019">2019</option> 
        <option value="2020">2020</option> 
        <option value="2021">2021</option> 
        <option value="2022">2022</option> 
        <option value="2023">2023</option> 
    </select>
    <br/>
    <label for="qn">Enter Question No :</label> 
            <input style={{
            width: "480px",
            height: "40px",
            borderRadius:"12px"
            ,margin:"2px 20px"
            
          }}
              maxLength="200"
              type="text"
              name="qn"
              placeholder="Question No"
              onChange={handleChange}
            /><br/>

<label for="year">Enter Subject :</label> 
    <select style={{
            width: "510px",
            height: "40px",
            borderRadius:"12px"
            ,margin:"2px 20px"
            
          }} onChange={handleChange} name="subject" id="dog-names"> 
        <option value="">Subject</option> 
        <option value="biology">Biology</option> 
        <option value="maths">Maths</option> 
        <option value="chemistry">Chemistry</option> 
        <option value="english">English</option> 
        <option value="amharic">Amharic</option> 
        <option value="social">Social</option> 
        <option value="oromo">Oromo</option> 
        <option value="civics">Civics</option> 
        <option value="physics">Physics</option> 
    </select><br/>
    <label for="year">Enter Question:</label> 
            <textarea style={{
            width: "500px",
            height: "60px",
            borderRadius:"12px"
            ,margin:"2px 20px"
            
          }}
              maxLength="200"
              type="text"
              name="title"
              placeholder="Question"
              onChange={handleChange}
            /><br/>
            <label for="year">Enter Choice A:</label> 
            <input style={{
            width: "500px",
            height: "40px",
            borderRadius:"12px"
            ,margin:"2px 20px"
            
          }}
              maxLength="500"
              type="text"
              name="a"
              placeholder="A"
              onChange={handleChange}
            /><br/>
            <label for="year">Enter Choice B:</label> 
            <input style={{
            width: "500px",
            height: "40px",
            borderRadius:"12px"
            ,margin:"2px 20px"
            
          }}
              maxLength="500"
              type="text"
              name="b"
              placeholder="B"
              onChange={handleChange}
            /><br/>
            <label for="year">Enter choice C:</label> 
            <input style={{
            width: "500px",
            height: "40px",
            borderRadius:"12px"
            ,margin:"2px 20px"
            
          }}
              maxLength="200"
              type="text"
              name="c"
              placeholder="C"
              onChange={handleChange}
            /><br/>
          <label for="year">Enter Choice D:</label> 
            <input style={{
            width: "500px",
            height: "40px",
            borderRadius:"12px"
            ,margin:"2px 20px"
            
          }}
              maxLength="200"
              type="text"
              name="d"
              placeholder="D"
              onChange={handleChange}
            /><br/>
          <label for="year">Enter Answer:</label> 
    <select style={{
            width: "500px",
            height: "40px",
            borderRadius:"12px"
            ,margin:"2px 20px"
            
          }} onChange={handleChange} name="answer" id="dog-names"> 
        <option maxLength="200" value="">Answer         </option> 
        <option maxLength="200" value="A">A</option> 
        <option maxLength="200" value="B">B</option> 
        <option maxLength="200" value="C">C</option> 
        <option maxLength="200" value="D">D</option> 
    </select><br/>
    <label for="year">Explanation:</label> 
            <textarea
              style={{
                width: "500px",
                height: "60px",
                borderRadius:"12px"
                ,margin:"2px 20px"
                
              }}
              type="text"
              name="explen"
              placeholder="If you have Explanation"
              onChange={handleChange}
            /><br/>
            <div
              style={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              <button
                style={{
                  padding: "10px 25px",
                  borderRadius: "5px",
                }}
                className="btn btn-lg btn-primary"
                type="submit"
              >
                submit Question
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NewQuestion;