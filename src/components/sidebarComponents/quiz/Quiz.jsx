import React, { useState } from "react";
import { questions } from "../../../redux/questionsFaile";
import "./Quiz.scss";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      // 
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  //Set Name
  const [input, setValue] = useState("");
  const [name, setName] = useState("Name");

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  const updateName = (event) => {
    event.preventDefault();
    setName(input);
    setValue("");
  };
  //Set Name

  const NameFirstIndexUpper = () => {
    return (
      <div>
        <h2>{`${name[0].toUpperCase()}${name.slice(1)}`}:</h2>
      </div>
    );
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          <div>{<NameFirstIndexUpper />}</div>
          <div>
            <h2>
              You scored {score} out of {questions.length}
            </h2>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="box">
              <form className="form">
                <div class="field">
                  <div class="control">
                    <div>{<NameFirstIndexUpper />}</div>
                    <input
                      type="text"
                      value={input}
                      name="name-1"
                      onChange={handleInput}
                      className="input"
                      placeholder="Enter your name..."
                    />
                    <button className="btn bg-primary" onClick={updateName}>
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>

            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
