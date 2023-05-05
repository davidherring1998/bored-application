import React from "react";
import { useEffect, useState } from "react";

function Trivia() {
  const [answer, setAnswer] = useState({ answer: "" });
  const [question, setQuestion] = useState({ question: "" });
  const [userInput, setUserInput] = useState("");

  const url = "https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "00e3db074cmsh859ff928fa0e703p114d09jsn7ee010402a05",
      "X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com",
    },
  };

  const response = () => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => data[0])
      .then((data) => {
        setAnswer({ answer: data.answer });
        setQuestion({ question: data.question });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="main-container">
        <div className="trivia-header">
          <h2 className="page-header">Let's Play Trivia!</h2>
        </div>
        <div className="question-div">
          <h5>
            Question: <span>{question.question}</span>
          </h5>
        </div>
        <div className="user-answer">
          <input type="text" />
        </div>
        <div className="answer"></div>
        <h6>Answer: {answer.answer}</h6>
      </div>
      <div className="refresh">
        <button onClick={response}>Next</button>
      </div>
    </>
  );
}
export default Trivia;
