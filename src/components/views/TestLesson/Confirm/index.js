import Breadcrumb from "../Breadcrumb";

function Confirm({ testData, totalSession, handleConfirm }) {
    return (
        <div className="row mt--50">
            <div className="col-lg-6 mx-auto">
                <div className="text-center">
                    <Breadcrumb title={testData.title} />

                    <div className="rbt-splash-service no-translate support h-100 not-hover mt-3">
                        <div className="w-100">
                            <h5 className="font-system fw-300">
                                <span className="text-danger">*</span> Some notes before taking the test
                            </h5>

                            <p className="font-system fw-300 m-0">
                                The test has a total of {totalSession} part and {testData.totalQuestion} questions:
                            </p>
                            <ul className="mb-4">
                                {testData.testOnlineSessionDetails?.map((session, sessionIndex) => (
                                    <li className="font-system fw-300 mb-2" key={sessionIndex}>
                                        Part {sessionIndex + 1}: {session.sessionName} <span>{session.totalQuestion} questions.</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="font-system fw-300 mt-2" style={{ fontSize: 16 }}>
                                Instructions for taking the test: {testData.description}
                            </p>
                            <div className="text-center mt-5">
                                <button type="button" className="rbt-moderbt-btn" onClick={handleConfirm}>
                                    <span className="moderbt-btn-text">Agree and start working</span>
                                    <i className="feather-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Confirm;
