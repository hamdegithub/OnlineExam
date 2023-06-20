import React, { useEffect, useState } from "react";
import "./Question.css";
import Edit from "./Edit";

function QuestionDetail({ question, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleDelete = () => {
    // Perform the delete request and handle the response
    onDelete(question.pastquestion_id);
  };


  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    setIsEditing(false);
     // Call the onUpdate callback to refetch the updated question data
  };
 
  return (
    <div className="">
      {isEditing ? (
        <Edit questionData={question} onUpdate={handleUpdate} />
      ) : (
        <>
        <p>
          
          <h4><span className="mr-2">{question.qn})</span>{question.title}</h4>
        </p>
        <div className="">
          <span className="ml-3">A)</span>
          <span className="ml-1">{question.a}</span>
          <br />
        </div>
        <div className="">
          <span className="ml-3">B)</span>
          <span className="ml-1">{question.b}</span>
          <br />
        </div>
        <div className="">
          <span className="ml-3">C)</span>
          <span className="ml-1">{question.c}</span>
          <br />
        </div>
        <div className="">
          <span className="ml-3">D)</span>
          <span className="ml-1">{question.d}</span>
          <br />
        </div>
        <div>
          <div>Answer: {question.answer}</div>
          <div>Explanation: {question.explen}</div>
        </div>
        <br />
        <div>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      </>
      )}
      {/* ... */}
    </div>
  );
}

export default QuestionDetail;
