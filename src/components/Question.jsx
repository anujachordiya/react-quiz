import { useState } from "react";

import QuestionTimer from "./questionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS from "../questions.js";

export default function Question({
  index,
  handleSelectAnswer,
  handleSkipAnswer,
}) {
  const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null });
  let timer = 5000;

  function handleAnswerSelect(selectedAnswer) {
    setAnswer({
      selectedAnswer,
      isCorrect: null, // Initially, mark the answer as not evaluated
    });

    // Simulate answer evaluation after a delay (e.g., 1 second)
    setTimeout(() => {
      const isCorrect = QUESTIONS[index].answers[0] === selectedAnswer; // Assuming 'correctAnswer' exists
      setAnswer({
        selectedAnswer,
        isCorrect,
      });

      // Call the parent handleSelectAnswer after another delay to update the parent state
      setTimeout(() => {
        handleSelectAnswer(selectedAnswer); // This will update the parent's `userAnswers`
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? handleSkipAnswer : null}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        handleSelectAnswer={handleAnswerSelect}
      />
    </div>
  );
}
