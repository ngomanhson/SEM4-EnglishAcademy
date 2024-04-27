import { Link, useParams } from "react-router-dom";
import Layout from "../../../layouts/index";
import url from "../../../../services/url";
import NotFound from "../../Other/NotFound";
import AudioPlayer from "react-h5-audio-player";
import Loading from "../../../layouts/Loading";
import { useAxiosGet } from "../../../../hooks";
import { getAccessToken } from "../../../../utils/auth";

function AnswerDetail() {
    const { testCode } = useParams();

    const { response, loading, status } = useAxiosGet({
        path: url.ENTRANCE_TEST.RESULT_DETAIL + `/${testCode}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const resultDetail = response || [];

    return (
        <>
            {loading && <Loading />}
            {status === 404 ? (
                <NotFound />
            ) : (
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
                                        <p className="description fw-light text-secondary">Below are your test answer details.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rbt-become-area bg-color-white rbt-section-gap">
                        <div className="container">
                            <div className="row mt--50">
                                <div className="col-lg-8 mx-auto">
                                    <div>
                                        <div className="widget" style={{ background: "#eff1ff" }}>
                                            <div className="content">
                                                <h5 className="fw-500">The answer details of the test: {testCode}</h5>
                                            </div>
                                            {resultDetail.map((result, index) => (
                                                <div className="p-5 mb-5" style={{ background: "#fff", borderRadius: 8 }} key={index}>
                                                    <h5 className="exam__inner-desc fw-500">
                                                        Question {index + 1}: {result.title}
                                                    </h5>
                                                    {result.image && <img src={result.image} className="w-100 mb-5" alt="" />}
                                                    {result.audiomp3 && <AudioPlayer src={result.audiomp3} autoPlay={false} controls className="mb-5 w-100" />}

                                                    {["option1", "option2", "option3", "option4"].map((option, optionIndex) => (
                                                        <div className="answer-group" key={optionIndex}>
                                                            <label
                                                                className={`answers-group__label ${
                                                                    result[option] === result.answerCorrect ? "correct" : result[option] === result.answerForStudent ? "incorrect" : ""
                                                                }`}
                                                                style={{ cursor: "not-allowed" }}
                                                            >
                                                                <input type="radio" className="answers-group__input" name="answer" defaultChecked={result[option] === result.answerForStudent} />
                                                                <div className="d-flex align-items-center">
                                                                    <div className="btn-choose">{String.fromCharCode(65 + optionIndex)}</div> {result[option]}
                                                                </div>
                                                            </label>
                                                        </div>
                                                    ))}

                                                    {result.answerForStudent === "" && <p className="text-danger fw-300">You have not answered this question!</p>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            )}
        </>
    );
}

export default AnswerDetail;
