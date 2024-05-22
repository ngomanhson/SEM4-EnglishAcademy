import Questions from "../Questions";

function Parts({ session, currentSessionIndex, index, selectedAnswers, handleAnswerSelect, handlePrevSession, handleNextSession, entranceTest }) {
    return (
        <div className="widget" style={{ display: currentSessionIndex === index ? "block" : "none" }}>
            <div className="d-flex justify-content-between align-items-start mb-5">
                <div>
                    <h4 className="mb-2">
                        Part {index + 1}: {session.sessionName}
                    </h4>
                    <p className="fw-300">The total number of questions: {session.totalQuestion}</p>
                </div>
                <div className="d-flex justify-content-end align-items-center mt-3">
                    <button type="button" className="btn-circle" onClick={handlePrevSession} disabled={currentSessionIndex === 0}>
                        <i className="feather-arrow-left"></i>
                    </button>

                    <button type="button" className="btn-circle ml-2" onClick={handleNextSession} disabled={currentSessionIndex === entranceTest.testInputSessionDetails.length - 1}>
                        <i className="feather-arrow-right"></i>
                    </button>
                </div>
            </div>

            {session.questionTestInputs?.map((question, questionIndex) => (
                <Questions key={question.id} question={question} questionIndex={questionIndex} selectedAnswers={selectedAnswers} handleAnswerSelect={handleAnswerSelect} />
            ))}
        </div>
    );
}

export default Parts;
