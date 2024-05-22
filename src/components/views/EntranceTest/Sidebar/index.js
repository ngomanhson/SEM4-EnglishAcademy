import { formatMinute } from "../../../../utils/formatTime";

function Sidebar({ timeRemaining, testData, setCurrentSessionIndex, selectedAnswers, selectedQuestionId, handleQuestionClick, handleSubmitTest }) {
    return (
        <div className="answers__inner">
            <div className="td-sidebar">
                <div className="widget">
                    <h5 className="text-center">Time remaining: {formatMinute(timeRemaining)}</h5>

                    {testData.testInputSessionDetails?.map((session, index) => (
                        <div key={session.id}>
                            <p className="m-0 fz-16 label-session" onClick={() => setCurrentSessionIndex(index)}>
                                Part {index + 1}: {session.sessionName}
                            </p>
                            <div className="mt-3 choice-wrapper mb-3">
                                {session.questionTestInputs.map((question, questionIndex) => (
                                    <button
                                        type="button"
                                        key={question.id}
                                        className={`choice-wrapper__btn ${selectedAnswers[question.id] ? "active" : ""}`}
                                        onClick={() => handleQuestionClick(selectedQuestionId)}
                                    >
                                        {questionIndex + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="d-flex justify-content-end">
                        <button type="button" className="rbt-btn bg-pink-opacity rbt-marquee-btn w-100 btn-not__hover mt-4" style={{ height: 50, lineHeight: "50px" }} onClick={handleSubmitTest}>
                            <i className="fa fa-stop-circle"></i> Finish Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
