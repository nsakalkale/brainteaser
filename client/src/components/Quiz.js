import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  const {
    duration = 10,
    negativeMarking = 0,
    multipleCorrect = 0,
  } = location.state || {};

  const [questions, setQuestions] = useState([
    {
      id: 1,
      question:
        "If you have a bowl with 6 apples and you take away 3, how many do you have left?",
      options: ["a) 3", "b) 6", "c) 2", "d) 4"],
      answer: "a) 3",
    },
    {
      id: 2,
      question:
        "A farmer has 15 cows and all but 8 die. How many cows are left?",
      options: ["a) 7", "b) 8", "c) 15", "d) 23"],
      answer: "b) 8",
    },
    {
      id: 3,
      question: "What word becomes shorter when you add two letters to it?",
      options: ["a) Short", "b) Longer", "c) Shorter", "d) None of the above"],
      answer: "a) Short",
    },
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(duration * 6);
  const [sessionActive, setSessionActive] = useState(false);
  const [quizState, setQuizState] = useState(
    Array(questions.length).fill(null)
  );
  const [score, setScore] = useState(0);
  const [questionStatus, setQuestionStatus] = useState(
    Array(questions.length).fill("notAttempted")
  );
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue =
        "Your progress will be lost and the quiz will be submitted. Are you sure you want to reload?";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const sessionTimer = setTimeout(() => {
      setSessionActive(false);
      alert("Session ended. Please start again to attempt the quiz.");
    }, duration * 60 * 1000); // Session duration

    return () => {
      clearTimeout(sessionTimer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [duration]);

  useEffect(() => {
    if (sessionActive) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev === 0) {
            handleNextQuestion(true);
            return duration * 60;
          } else {
            return prev - 1;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [sessionActive, currentQuestion, duration]);

  const handleStartQuiz = () => {
    setSessionActive(true);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = (missed = false) => {
    if (selectedOption === "") {
      const confirmMove = window.confirm(
        "You haven't selected an option. Are you sure you want to proceed to the next question?"
      );
      if (!confirmMove) {
        return;
      }
    }

    const correctAnswer = questions[currentQuestion].answer;
    const isCorrect = selectedOption === correctAnswer;
    const marks = isCorrect ? 1 : negativeMarking ? -1 : 0;

    const updatedQuizState = [...quizState];
    updatedQuizState[currentQuestion] = {
      question: questions[currentQuestion].question,
      selectedOption,
      correctAnswer,
      marks,
    };

    setQuizState(updatedQuizState);
    setScore((prevScore) => prevScore + marks);
    setSelectedOption("");

    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestion] =
      selectedOption !== "" ? "attempted" : missed ? "missed" : "notAttempted";
    setQuestionStatus(updatedStatus);

    if (currentQuestion === questions.length - 1) {
      handleSubmit();
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setTimeRemaining(duration * 60); // Reset timer for the next question
    }
  };

  const handleSubmit = () => {
    const correctAnswer = questions[currentQuestion].answer;
    const isCorrect = selectedOption === correctAnswer;
    const marks = isCorrect ? 1 : negativeMarking ? -1 : 0;

    const updatedQuizState = [...quizState];
    updatedQuizState[currentQuestion] = {
      question: questions[currentQuestion].question,
      selectedOption,
      correctAnswer,
      marks,
    };

    setQuizState(updatedQuizState);

    setScore((prevScore) => prevScore + marks);

    setSelectedOption("");

    const updatedStatus = [...questionStatus];
    updatedStatus[currentQuestion] =
      selectedOption !== "" ? "attempted" : "notAttempted";
    setQuestionStatus(updatedStatus);

    setSessionActive(false);
    setShowSummary(true);
  };

  const handleFinalSubmit = () => {
    setShowSummary(false);
    console.log("Quiz State:", quizState);
    console.log("Total Score:", score);
    alert("Quiz submitted successfully. Session ended.");
  };

  const instructions = [
    `You have ${duration} minutes to complete the quiz.`,
    "Each question will be presented one at a time with a time limit of 1 minute per question.",
    "Select the correct option from the given choices. If you wish to skip a question, a confirmation dialog will appear.",
    multipleCorrect
      ? "There may be multiple correct answers for some questions."
      : "Each question has only one correct answer.",
    negativeMarking
      ? "Wrong answers will result in negative marking."
      : "There is no negative marking for wrong answers.",
    "Once you answer a question or the time is up, you will move to the next question.",
    "You cannot go back to previous questions.",
    "Your progress will be automatically saved, but if you reload the page, the quiz will be submitted, and your progress will be lost.",
    "Make sure to submit the quiz before the session ends.",
  ];

  return (
    <>
      <div className="container">
        {!sessionActive && !showSummary && (
          <div className="d-flex justify-content-center align-items-center">
            <div className="bg-white rounded border p-4 mt-3 col-md-6">
              <div className="">
                <center>
                  {" "}
                  <h3>
                    <b>Instructions</b>
                  </h3>
                  <hr />
                </center>
                <ul>
                  {instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
              <center>
                <button className="qbtn qbtn-db mt-3" onClick={handleStartQuiz}>
                  Start Quiz
                </button>
              </center>
            </div>
          </div>
        )}
        {sessionActive && (
          <div className="mt-3">
            <div className="mb-3">
              <p>
                Time Remaining:{" "}
                {`${
                  Math.floor(timeRemaining / 60) < 10
                    ? "0" + Math.floor(timeRemaining / 60)
                    : Math.floor(timeRemaining / 60)
                }:${
                  timeRemaining % 60 < 10
                    ? "0" + (timeRemaining % 60)
                    : timeRemaining % 60
                }`}
              </p>
            </div>
            <div>
              <h5>{questions[currentQuestion].question}</h5>
              <form>
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="option"
                      id={`option${index}`}
                      value={option}
                      onChange={handleOptionChange}
                      checked={selectedOption === option}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`option${index}`}
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </form>
            </div>
            <button
              className="btn btn-primary mt-3 me-2"
              onClick={handleNextQuestion}
              disabled={
                selectedOption === "" ||
                currentQuestion === questions.length - 1
              }
            >
              Next
            </button>
            {currentQuestion === questions.length - 1 && (
              <button
                className="btn btn-primary mt-3 ms-2"
                onClick={handleSubmit}
                disabled={selectedOption === ""}
              >
                Submit Quiz
              </button>
            )}
          </div>
        )}
        {showSummary && (
          <div className="mt-3">
            <h3>Quiz Summary</h3>
            <p>Total Score: {score}</p>
            <div>
              {quizState.map((question, index) => (
                <div key={index}>
                  <p>
                    Question {index + 1}: {question.question}
                  </p>
                  <p>Your Answer: {question.selectedOption}</p>
                  <p>Correct Answer: {question.correctAnswer}</p>
                  <p>Marks: {question.marks}</p>
                </div>
              ))}
            </div>
            <button
              className="btn btn-primary mt-3"
              onClick={handleFinalSubmit}
            >
              Final Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
