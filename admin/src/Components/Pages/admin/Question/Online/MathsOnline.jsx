import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../../../../Contexts/UserContext";
import Axios from "../../../../../Axios";
import "./Question.css";
const MathsOnline = () => {
  const [userData] = useContext(UserContext);
  const axios = Axios();
  const navigate = useNavigate();

  const [form, setForm] = useState({});
  const [err, setErr] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      await axios.post(
        "/api/maths/newquestion",
        {
          title: form.title,
          a: form.a,
          b: form.b,
          c: form.c,
          d: form.d,
          answer: form.answer,
        },
        userData.config
      );
      e.target.reset();
      navigate("/onlinemaths");
      showToastMessage();
    } catch (err) {
      console.log("problem", err.response.data.msg);
      setErr(err.response.data.msg);
    }
  };
  const showToastMessage = () => {
    toast.success('Successfully Added !', {
        position: toast.POSITION.TOP_RIGHT
    });
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
          <h3>Add Maths Online Exam Questions</h3>
        </div>
        <div className="text-center color-danger">{err}</div>
        <form method="post" onSubmit={handleSubmit}>
          <div style={{ width: "100%" }}>
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
            required/><br/>
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
            required/><br/>
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
            required/><br/>
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
            required/><br/>
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
            required/><br/>
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
  <br/>
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
              <ToastContainer />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default MathsOnline;
