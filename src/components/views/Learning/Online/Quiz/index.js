import Questions from "./Questions";

function Quiz({ lesson, formattedDate, questionItem, selectedAnswers, answered, answerResults, handleAnswerChange, allQuestionsAnswered, handleCheckAnswers }) {
    return (
        <div className="inner mt-5">
            <div className="row">
                <div className="col-lg-9 mx-auto">
                    <div className="content">
                        <div>
                            <h4 className="lesson-title">
                                {lesson.title} <i className="far fa-bookmark"></i>
                            </h4>
                            {lesson.modifiedDate && <span className="lesson-date">{formattedDate}</span>}
                        </div>

                        <div className="content-body mb-5">
                            {questionItem.map((question, index) => (
                                <Questions
                                    key={index}
                                    index={index}
                                    question={question}
                                    selectedAnswers={selectedAnswers}
                                    answered={answered}
                                    answerResults={answerResults}
                                    handleAnswerChange={handleAnswerChange}
                                />
                            ))}
                        </div>
                        {allQuestionsAnswered() && (
                            <div className="d-flex align-items-center justify-content-between">
                                <div>{answered && answerResults.includes(false) && <p className="text-danger shake">The answer is not correct!</p>}</div>

                                <div className="text-end lesson-btn__wrapper">
                                    <button className="rbt-btn btn-gradient btn-gradient-3 fw-light" style={{ height: 40, lineHeight: "40px" }} onClick={handleCheckAnswers}>
                                        Answer the question
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Quiz;
