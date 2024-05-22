function Questions({ index, question, selectedAnswers, answered, answerResults, handleAnswerChange }) {
    return (
        <div className="mt-5">
            <p className="font-system fw-300 text-dark">
                Question {index + 1}: {question.title}
            </p>

            {[question.answer1, question.answer2, question.answer3, question.answer4].map((answer, answerIndex) => (
                <div className="answer-group" key={answerIndex}>
                    <label
                        className={`answers-group__label answers-group__label-2 ${selectedAnswers[index] === answer ? "checked" : ""} ${
                            answered && selectedAnswers[index] === answer ? (answerResults[index] ? "correct" : "incorrect") : ""
                        }`}
                    >
                        <input
                            type="radio"
                            className="answers-group__input"
                            name={`answer${index}`}
                            id={`answer${index}-${answerIndex}`}
                            onChange={() => handleAnswerChange(index, answerIndex, answer)}
                        />
                        <div className="d-flex align-content-center">
                            <div className="btn-choose">{String.fromCharCode(65 + answerIndex)}</div> <span className="fw-300">{answer}</span>
                        </div>
                    </label>
                </div>
            ))}
        </div>
    );
}

export default Questions;
