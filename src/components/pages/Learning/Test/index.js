import LayoutLesson from "../../../layouts/LayoutLesson";

function Quiz() {
    return (
        <LayoutLesson title="Quiz">
            <div className="rbt-lesson-rightsidebar overflow-hidden">
                <div className="inner">
                    <div className="content">
                        <form id="quiz-form" className="quiz-form-wrapper">
                            <div className="question" style={{ display: "block" }}>
                                <div className="quize-top-meta">
                                    <div className="quize-top-left">
                                        <span>
                                            Questions No: <strong>1</strong>
                                        </span>
                                        <span>
                                            Attempts Allowed: <strong>1</strong>
                                        </span>
                                    </div>
                                    <div className="quize-top-right">
                                        <span>
                                            Time remaining: <strong>No Limit</strong>
                                        </span>
                                    </div>
                                </div>
                                <hr />
                                <div className="rbt-single-quiz">
                                    <h5>Questions 1</h5>
                                    <p className="mb-3" style={{ fontWeight: 300, fontSize: "1.6rem" }}>
                                        <i className="far fa-chart-bar"></i> Level: Medium / 6.41 point
                                    </p>
                                    <p className="mb-3">Choose the correct answer:</p>
                                    <div className="row g-3 mt--10">
                                        <div className="col-lg-6">
                                            <div className="rbt-form-check">
                                                <input className="form-check-input" type="radio" id="rbt-radio" />
                                                <label className="form-check-label" htmlFor="rbt-radio">
                                                    s
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rbt-quiz-btn-wrapper mt--30">
                                <div className="d-flex align-content-center justify-content-end gap-3">
                                    <button type="button" className="btn btn-primary__custom">
                                        <span>
                                            <i className="feather-arrow-left"></i>
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-primary__custom">
                                        <span>
                                            <i className="feather-arrow-right"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LayoutLesson>
    );
}

export default Quiz;
