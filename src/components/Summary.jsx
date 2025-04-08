import quizCompleteLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";


export default function Summary({userAnswers}) {
    const skippedAns = userAnswers.filter((ans) => ans == null);
    const correctAns = userAnswers.filter((ans,index) => ans == QUESTIONS[index].answers[0]);
    const skippedAnsPercentage = Math.round((skippedAns.length/userAnswers.length)*100 );
    const CorrectAnsPercentage = Math.round((correctAns.length/userAnswers.length)*100 );
    const wrongAnsPercentage = 100- skippedAnsPercentage - CorrectAnsPercentage
    return (
    <div id="summary">
      <img src={quizCompleteLogo} />
      <h2>Quiz Completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnsPercentage}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{CorrectAnsPercentage}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnsPercentage}%</span>
          <span className="text">answered Incorrectly</span>
        </p>
      </div>
    </div>
  );
}
