import { Link } from "react-router-dom";
import Layout from "../../../layouts/index";
// import AudioPlayer from "react-audio-player";
function AnswerDetail() {
    return (
        <Layout title="Answer Detail">
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
                                    <li className="rbt-breadcrumb-item active">Answer Detail</li>
                                </ul>
                                <h2 className="title">Answer Detail</h2>
                                {/* <p className="description fw-light text-secondary">Please choose a test that is suitable for you to evaluate your ability!</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rbt-become-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row mt--50">
                        <div className=" col-12">
                            <div>
                                <div className="py-4 background-primary">
                                    <h4 className="text-center text-white fw-500 mb-0" style={{ fontSize: 20 }}>
                                        Learning
                                    </h4>
                                </div>

                                <div className="widget" style={{ background: "#eff1ff" }}>
                                    <div className="p-5 mb-5" style={{ background: "#fff", borderRadius: 8 }}>
                                        <h5 className="exam__inner-desc fw-500">Question 1</h5>
                                        <img src="" className="w-100 mb-5" alt="" />
                                        {/* <AudioPlayer src="" autoPlay={false} controls className="mb-5 w-100" /> */}

                                        <div className="answer-group">
                                            <label className="answers-group__label correct">
                                                <input type="radio" className="answers-group__input" />
                                                <div className="d-flex align-content-center">
                                                    <div className="btn-choose">A</div> Hi
                                                </div>
                                            </label>

                                            <label className="answers-group__label">
                                                <input type="radio" className="answers-group__input" />
                                                <div className="d-flex align-content-center">
                                                    <div className="btn-choose">B</div> sa
                                                </div>
                                            </label>

                                            <label className="answers-group__label">
                                                <input type="radio" className="answers-group__input" />
                                                <div className="d-flex align-content-center">
                                                    <div className="btn-choose">C</div> Hi
                                                </div>
                                            </label>

                                            <label className="answers-group__label">
                                                <input type="radio" className="answers-group__input" />
                                                <div className="d-flex align-content-center">
                                                    <div className="btn-choose">D</div> Hi
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="p-5 mb-5" style={{ background: "#fff", borderRadius: 8 }}>
                                        <h5 className="exam__inner-desc fw-500">Question 1</h5>
                                        <img src="" className="w-100 mb-5" alt="" />
                                        {/* <AudioPlayer src="" autoPlay={false} controls className="mb-5 w-100" /> */}

                                        <div className="answer-group">
                                            <label className="answers-group__label">
                                                <input type="radio" className="answers-group__input" />
                                                <div className="d-flex align-content-center">
                                                    <div className="btn-choose">A</div> Hi
                                                </div>
                                            </label>

                                            <label className="answers-group__label">
                                                <input type="radio" className="answers-group__input" />
                                                <div className="d-flex align-content-center">
                                                    <div className="btn-choose">B</div> sa
                                                </div>
                                            </label>

                                            <label className="answers-group__label incorrect">
                                                <input type="radio" className="answers-group__input" />
                                                <div className="d-flex align-content-center">
                                                    <div className="btn-choose">C</div> Hi
                                                </div>
                                            </label>

                                            <label className="answers-group__label">
                                                <input type="radio" className="answers-group__input" />
                                                <div className="d-flex align-content-center">
                                                    <div className="btn-choose">D</div> Hi
                                                </div>
                                            </label>
                                        </div>
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

export default AnswerDetail;
