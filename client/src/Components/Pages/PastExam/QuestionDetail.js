import {ReactChild, useState} from "react";
import "./Question.css";
function QuestionDetail({ question }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="">
      <p> <span className="mr-2">{question.qn})</span><h4>{question.title}</h4></p>
      <div className="">
      <span className="ml-3">A)</span>
      <span className="ml-1" >{question.a}</span><br/>
      </div>
      <div className="">
      <span className="ml-3" >B)</span>
      <span className="ml-1" >{question.b}</span><br/>
      </div>
      <div className="">
      <span className="ml-3" >C)</span>
      <span className="ml-1" >{question.c}</span><br/>
      </div>
      <div className="">
      <span className="ml-3" >D)</span>
      <span className="ml-1" >{question.d}</span><br/>
      </div>
        <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Answer' : 'Show Answer'}
      </button>
      {isVisible && <div> Answer: {question.answer}
      <div>Explanation: {question.explen}</div></div>}
      <br/><br/>
    </div>
  );
}

export default QuestionDetail;
