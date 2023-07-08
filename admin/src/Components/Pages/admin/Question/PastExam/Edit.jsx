
import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../../Contexts/UserContext";
import Axios from "../../../../../Axios";

const Edit = ({ questionData, onUpdate }) => {
  const [userData] = useContext(UserContext);
  const axios = Axios();


  const [form, setForm] = useState({});
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    handleEdit();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update existing question
      await axios.put(
        `/api/pastquestion/editquestion${questionData.pastquestion_id}`,
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
          id: questionData.pastquestion_id,
        },
        userData.config
      );

      // Call the onUpdate callback to notify the parent component
      onUpdate();

    } catch (err) {
      console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  const handleEdit = () => {
    setEditMode(true);
    setForm(questionData); // Set the initial form values to the existing question data
  };

  return (
    <section className="container" style={{ paddingTop: "10px" }}>
            <div className="d-flex flex-column  ">
        <h3>Edit Page</h3>
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
          <h3>{editMode ? "Edit Question" : "Add Past Exam Questions"}</h3>
        </div>
        <form method="post" onSubmit={handleSubmit}>
          <div style={{ width: "100%" }}>
            <label htmlFor="year">Enter Year :</label>
            <select
              style={{
                width: "520px",
                height: "40px",
                borderRadius: "12px",
                margin: "2px 40px",
              }}
              onChange={handleChange}
              name="year"
              id="dog-names"
              value={form.year || ""}
            >
              <option value="">year</option>
              <option width="100px" value="2019">
                2019
              </option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
            <br />
            <label htmlFor="qn">Enter Question No :</label>
            <input
              style={{
                width: "480px",
                height: "40px",
                borderRadius: "12px",
                margin: "2px 20px",
              }}
              maxLength="200"
              type="text"
              name="qn"
              placeholder="Question No"
              onChange={handleChange}
              value={form.qn || ""}
            />
            <br />

            <label htmlFor="subject">Enter Subject :</label>
            <select
              style={{
                width: "510px",
                height: "40px",
                borderRadius: "12px",
                margin: "2px 20px",
              }}
              onChange={handleChange}
              name="subject"
              id="dog-names"
              value={form.subject || ""}
            >
              <option value="">Subject</option>
              <option value="biology">Biology</option>
              <option value="maths">Maths</option>
              <option value="chemistry">Chemistry</option>
              <option value="english">English</option>
              <option value="physics">Physics</option>
            </select>
            <br />
            <label htmlFor="title">Enter Question:</label>
            <textarea
              style={{
                width: "500px",
                height: "60px",
                borderRadius: "12px",
                margin: "2px 20px",
              }}
              maxLength="200"
              type="text"
              name="title"
              placeholder="Question"
              onChange={handleChange}
              value={form.title || ""}
            />
            <br />
            <label htmlFor="a">Enter Choice A:</label>
            <input
              style={{
                width: "500px",
                height: "40px",
                borderRadius: "12px",
                margin: "2px 20px",
              }}
              maxLength="500"
              type="text"
              name="a"
              placeholder="A"
              onChange={handleChange}
              value={form.a || ""}
            />
            <br />
            <label htmlFor="b">Enter Choice B:</label>
            <input
              style={{
                width: "500px",
                height: "40px",
                borderRadius: "12px",
                margin: "2px 20px",
              }}
              maxLength="500"
              type="text"
              name="b"
              placeholder="B"
              onChange={handleChange}
              value={form.b || ""}
            />
            <br />
            <label htmlFor="c">Enter choice C:</label>
            <input
              style={{
                width: "500px",
                height: "40px",
                borderRadius: "12px",
                margin: "2px 20px",
              }}
              maxLength="200"
              type="text"
              name="c"
              placeholder="C"
              onChange={handleChange}
              value={form.c || ""}
            />
            <br />
            <label htmlFor="d">Enter Choice D:</label>
            <input
              style={{
                width: "500px",
                height: "40px",
                borderRadius: "12px",
                margin: "2px 20px",
              }}
              maxLength="200"
              type="text"
              name="d"
              placeholder="D"
              onChange={handleChange}
              value={form.d || ""}
            />
            <br />
            <label htmlFor="answer">Enter Answer:</label>
            <select
              style={{
                width: "500px",
                height: "40px",
                borderRadius: "12px",
                margin: "2px 20px",
              }}
              onChange={handleChange}
              name="answer"
              id="dog-names"
              value={form.answer || ""}
            >
              <option maxLength="200" value="">
                Answer
              </option>
              <option maxLength="200" value="A">
                A
              </option>
              <option maxLength="200" value="B">
                B
              </option>
              <option maxLength="200" value="C">
                C
              </option>
              <option maxLength="200" value="D">
                D
              </option>
            </select>
            <br />
            <label htmlFor="explen">Explanation:</label>
            <textarea
              style={{
                width: "500px",
                height: "60px",
                borderRadius: "12px",
                margin: "2px 20px",
              }}
              type="text"
              name="explen"
              placeholder="If you have Explanation"
              onChange={handleChange}
              value={form.explen || ""}
            />
            <br />
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
                  Update Question
                </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Edit;