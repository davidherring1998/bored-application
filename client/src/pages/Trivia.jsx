import React from "react";
import { useEffect, useState } from "react";
import "../css/pages/trivia.css";

function Trivia() {
  // state
  const [answer, setAnswer] = useState({ answer: "" });
  const [question, setQuestion] = useState({ question: "" });
  const [userInput, setUserInput] = useState("");
  const [correct, setCorrectAnswer] = useState(null);

  // API info
  const url = "https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "00e3db074cmsh859ff928fa0e703p114d09jsn7ee010402a05",
      "X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com",
    },
  };

  // API call
  const response = () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => data[0])
      .then((data) => {
        setAnswer({ answer: data.answer });
        setQuestion({ question: data.question });
      })
      .catch((err) => console.log(err));

    setCorrectAnswer(null);
  };

  //   lower case input/response
  const lowerCaseInput = userInput.toLowerCase();
  const lowerCaseAnswer = answer.answer.toLowerCase();

  //   event handlers
  const handleInputChange = (e) => setUserInput(e.target.value);

  const handleClick = (e) => {
    e.preventDefault();
    if (lowerCaseAnswer === lowerCaseInput) {
      setCorrectAnswer(true);
      console.log("correct");
    } else {
      setCorrectAnswer(false);
      console.log("Nope");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="trivia-header">
          <h2 className="page-header">Let's Play Trivia!</h2>
        </div>
        <div className="question-div">
          <h5>{question.question}</h5>
        </div>
        <div className="user-answer">
          <input
            type="text"
            placeholder="Write your answer here..."
            value={userInput}
            onChange={handleInputChange}
          />
        </div>
        <div className="submit-btn">
          <button onClick={handleClick}>Submit</button>
        </div>
        <div className="answer">
          {correct === false ? (
            <h6>Correct Answer: {answer.answer}!</h6>
          ) : (
            <></>
          )}
          {correct === false ? <h6>&nbsp;</h6> : <div></div>}
        </div>
      </div>
      <div className="refresh submit-btn">
        <button className="submit-btn" onClick={response}>
          Start
        </button>
      </div>
    </>
  );
}
export default Trivia;
