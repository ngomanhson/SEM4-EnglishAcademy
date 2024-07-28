import Questions from "../Questions";

function Parts({ session, currentSessionIndex, sessionIndex, selectedAnswers, handleAnswerSelect, handlePrevSession, handleNextSession, testData }) {
    return (
        <div className="widget border-lft-prm-opacity" style={{ display: currentSessionIndex === sessionIndex ? "block" : "none" }} key={sessionIndex}>
            <div className="w-100">
                <div className="d-flex justify-content-between align-items-start mb-5">
                    <div>
                        <h4 className="mb-2">
                            Part {sessionIndex + 1}: {session.sessionName}
                        </h4>
                        <p className="fw-300">The total number of questions: {session.totalQuestion}</p>
                    </div>
                    {/* <div className="d-flex justify-content-end align-items-center">
                        <button type="button" className="btn-circle" onClick={handlePrevSession} disabled={currentSessionIndex === 0}>
                            <i className="feather-chevron-left"></i>
                        </button>

                        <button type="button" className="btn-circle ml-2" onClick={handleNextSession} disabled={currentSessionIndex === testData.testOnlineSessionDetails?.length - 1}>
                            <i className="feather-chevron-right"></i>
                        </button>
                    </div> */}
                </div>
                {session.questionTestOnlineDTOS?.map((question, questionIndex) => (
                    <Questions key={question.id} question={question} questionIndex={questionIndex} selectedAnswers={selectedAnswers} handleAnswerSelect={handleAnswerSelect} />
                ))}

                <div className="d-flex justify-content-end align-items-center">
                    <button
                        type="button"
                        className="btn-circle"
                        onClick={() => {
                            handlePrevSession();
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        disabled={currentSessionIndex === 0}
                    >
                        <i className="feather-chevron-left"></i>
                    </button>

                    <button
                        type="button"
                        className="btn-circle ml-2"
                        onClick={() => {
                            handleNextSession();
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        disabled={currentSessionIndex === testData.testOnlineSessionDetails?.length - 1}
                    >
                        <i className="feather-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Parts;
