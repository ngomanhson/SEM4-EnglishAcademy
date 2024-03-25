import { Link } from "react-router-dom";
import Layout from "../../layouts";

function EntranceTest() {
    return (
        <Layout title="Entrance Test">
            <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-inner text-start">
                                <ul className="page-list">
                                    <li className="rbt-breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <div className="icon-right">
                                            <i className="feather-chevron-right"></i>
                                        </div>
                                    </li>
                                    <li className="rbt-breadcrumb-item active">Entrance Test</li>
                                </ul>
                                <h2 className="title">Entrance Test</h2>
                                <p className="description fw-light text-secondary">Please choose a test that is suitable for you to evaluate your ability!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rbt-become-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <div className="section-title text-center">
                                    <span className="subtitle bg-secondary-opacity">Choose an test</span>
                                    <h2 className="title">List of tests.</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row row--30">
                        <div className="col-lg-8 mx-auto mt_md--40 mt_sm--40 order-2 order-lg-1">
                            <div className="advance-tab-button">
                                <ul className="nav nav-tabs tab-button-style-2" id="myTab-4" role="tablist">
                                    <li role="presentation">
                                        <a
                                            href="#!"
                                            className="tab-button active"
                                            id="home-tab-4"
                                            data-bs-toggle="tab"
                                            data-bs-target="#home-4"
                                            role="tab"
                                            aria-controls="home-4"
                                            aria-selected="false"
                                        >
                                            <span className="title">Take the IELTS test</span>
                                        </a>
                                    </li>
                                    <li role="presentation">
                                        <a
                                            href="#!"
                                            className="tab-button"
                                            id="profile-tab-4"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-4"
                                            role="tab"
                                            aria-controls="profile-4"
                                            aria-selected="true"
                                        >
                                            <span className="title">Take the TOEIC test</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content advance-tab-content-style-2 p-0">
                                <div className="tab-pane fade active show" id="home-4" role="tabpanel" aria-labelledby="home-tab-4">
                                    <div className="content">
                                        <label className="d-flex align-items-center position-relative content-label-tab mb-5">
                                            <div className="text-start">
                                                <div className="d-flex align-items-center mb-4">
                                                    <h5 className="fw-bold tab-title mb-0">IELTS Full test 1</h5>
                                                    <input type="radio" name="exam-option" className="input-tab__option" defaultChecked />
                                                </div>

                                                <p className="fw-light tab-time mb-0">Exam time: 01:00:00</p>
                                                <ul className="tab-list">
                                                    <li>The test is divided into three parts with a total of 20 questions, each question worth 1 point</li>
                                                    <li>The test is divided into two parts: Listening (4 sections) and Reading (3 sections) with 40 questions for each part.</li>
                                                    <li>The test will last for 90 minutes. There will be no break between sections.</li>
                                                </ul>
                                            </div>
                                        </label>

                                        <label className="d-flex align-items-center position-relative content-label-tab mb-5">
                                            <div className="text-start">
                                                <div className="d-flex align-items-center mb-4">
                                                    <h5 className="fw-bold tab-title mb-0">IELTS Full test 2</h5>
                                                    <input type="radio" name="exam-option" className="input-tab__option" />
                                                </div>

                                                <p className="fw-light tab-time mb-0">Exam time: 01:00:00</p>
                                                <ul className="tab-list">
                                                    <li>The test is divided into three parts with a total of 20 questions, each question worth 1 point</li>
                                                    <li>The test is divided into two parts: Listening (4 sections) and Reading (3 sections) with 40 questions for each part.</li>
                                                    <li>The test will last for 90 minutes. There will be no break between sections.</li>
                                                </ul>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="ielts" className="rbt-moderbt-btn">
                                            <span className="moderbt-btn-text">Start taking the test</span>
                                            <i className="feather-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile-4" role="tabpanel" aria-labelledby="profile-tab-4">
                                    <div className="content">
                                        <label className="d-flex align-items-center position-relative content-label-tab mb-5">
                                            <div className="text-start">
                                                <div className="d-flex align-items-center mb-4">
                                                    <h5 className="fw-bold tab-title mb-0">TOEIC Full Test</h5>
                                                    <input type="radio" name="exam-option" className="input-tab__option" />
                                                </div>

                                                <p className="fw-light tab-time mb-0">Exam time: 02:00:00</p>
                                                <ul className="tab-list">
                                                    <li>The test consists of 2 parts - Listening (100 questions) and Reading (100 questions)</li>
                                                </ul>
                                            </div>
                                        </label>

                                        <label className="d-flex align-items-center position-relative content-label-tab mb-5">
                                            <div className="text-start">
                                                <div className="d-flex align-items-center mb-4">
                                                    <h5 className="fw-bold tab-title mb-0">TOEIC Quick Test</h5>
                                                    <input type="radio" name="exam-option" className="input-tab__option" />
                                                </div>

                                                <p className="fw-light tab-time mb-0">Exam time: 01:00:00</p>
                                                <ul className="tab-list">
                                                    <li>The test is divided into two parts: Part 1 - tests language ability: Grammar, vocabulary, reading comprehension (25 questions) and Part 2</li>
                                                    <li>Listening lesson (31 questions)</li>
                                                </ul>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="mt-5">
                                        <Link to="toeic" className="rbt-moderbt-btn">
                                            <span className="moderbt-btn-text">Start taking the test</span>
                                            <i className="feather-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default EntranceTest;
