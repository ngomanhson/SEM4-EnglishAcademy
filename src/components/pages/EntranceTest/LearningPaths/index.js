import Chart from "react-apexcharts";
import Layout from "../../../layouts/index";
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import url from "../../../../services/url";
import Loading from "../../../layouts/Loading";
import useAxios from "../../../../hooks/useAxios";

function LearningPaths() {
    const { testCode } = useParams();
    const [chartData, setChartData] = useState([]);

    const options = {
        chart: {
            type: "polarArea",
        },
        labels: ["Reading", "Listening", "Vocabulary", "Grammar"],
        fill: {
            opacity: 0.9,
        },
        stroke: {
            width: 1,
            colors: ["#fff"],
        },
        yaxis: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
    };

    const { response, loading } = useAxios({
        method: "GET",
        path: url.ENTRANCE_TEST.RESULT + `/${testCode}`,
    });

    const resultTest = useMemo(() => response || {}, [response]);

    useEffect(() => {
        if (Object.keys(resultTest).length !== 0) {
            const data = [resultTest.correctReading || 0, resultTest.correctListening || 0, resultTest.correctVocabulary || 0, resultTest.correctGrammar || 0];
            setChartData(data);
        }
    }, [resultTest]);

    return (
        <>
            {loading ? <Loading /> : ""}
            <Layout title="Learning Paths">
                <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-start">
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right"></i>
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">Learning Paths</li>
                                    </ul>
                                    <h2 className="title">Learning Paths</h2>
                                    <p className="description fw-light text-secondary">Below is a suggested learning path for you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-become-area bg-color-white rbt-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex flex-col justify-content-between align-items-center text-white py-4 px-5 background-primary">
                                    <div className="flex-row">
                                        <h5 className="text-white mb-2" style={{ fontWeight: 600 }}>
                                            Score and comments
                                        </h5>
                                        <p className="text-white fw-light mb-2 fz-15">{resultTest.score}/100 Correct answer</p>
                                        <p className="text-white fw-light fz-15 d-flex align-items-center gap-2">
                                            <i className="feather-clock"></i>
                                            {resultTest.time} min
                                        </p>
                                    </div>

                                    <Link to="/entrance-test/answer-detail" className="rbt-btn btn-white radius hover-icon-reverse">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">See detailed answer</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right"></i>
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right"></i>
                                            </span>
                                        </span>
                                    </Link>
                                </div>

                                <div className="content widget">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div className="content-wrap">
                                                <h5 className="fw-normal">Strengths</h5>

                                                <ul className="plan-offer-list mt-3 mb-5">
                                                    <li>
                                                        <i className="feather-check"></i> Students can only determine the correct answer to a question when they do not need to read much and the
                                                        language in the reading matches the information they are looking for.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i> Students can understand simple vocabulary and common phrases.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i> Students can understand the most common, rule-based grammatical structures without having to read much.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="content-wrap">
                                                <h5 className="fw-normal">Weaknesses</h5>

                                                <ul className="plan-offer-list mb-5">
                                                    <li className="off">
                                                        <i className="feather-x"></i> Students cannot make inferences about information in the reading text
                                                    </li>
                                                    <li className="off">
                                                        <i className="feather-x"></i> Students often cannot connect information right in a sentence.
                                                    </li>
                                                    <li className="off">
                                                        <i className="feather-x"></i>
                                                        Students only have a limited vocabulary.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="content-wrap">
                                                <h5 className="fw-normal mb-1">Advice for you</h5>

                                                <div className="advice-description background-secondary p-4">
                                                    <h6 className="mb-2">Improve general reading comprehension:</h6>
                                                    <p className="mb-1 fw-light fz-16">
                                                        - Continue to improve vocabulary to support understanding of text or understanding of the context of language use.
                                                    </p>
                                                    <p className="fw-light fz-16">
                                                        - Combine guided reading as in class or when using materials such as books specializing in reading skills (to expand vocabulary and structure of
                                                        reading) and reading about personal topics. Pay attention to improving reading speed as well as enhancing concentration when reading.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-12">
                                            <Chart options={options} series={chartData} type="polarArea" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row g-4 pt--30 pb--60">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h4 className="rbt-title-style-2">Below are some suggested English Academy courses for you</h4>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <a href="course-details.html">
                                            <img src="assets/images/course/course-online-01.jpg" alt="Card" />
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title">
                                            <a href="course-details.html">React Js</a>
                                        </h5>
                                        <div className="rbt-review">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="rating-count"> (15 Reviews)</span>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$15</span>
                                                <span className="off-price">$25</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <a href="course-details.html">
                                            <img src="assets/images/course/course-online-02.jpg" alt="Card" />
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title">
                                            <a href="course-details.html">Java Program</a>
                                        </h5>
                                        <div className="rbt-review">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="rating-count"> (15 Reviews)</span>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$10</span>
                                                <span className="off-price">$40</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <a href="course-details.html">
                                            <img src="assets/images/course/course-online-03.jpg" alt="Card" />
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title">
                                            <a href="course-details.html">Web Design</a>
                                        </h5>
                                        <div className="rbt-review">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="rating-count"> (15 Reviews)</span>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$10</span>
                                                <span className="off-price">$20</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <a href="course-details.html">
                                            <img src="assets/images/course/course-online-04.jpg" alt="Card" />
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title">
                                            <a href="course-details.html">Web Design</a>
                                        </h5>
                                        <div className="rbt-review">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="rating-count"> (15 Reviews)</span>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$20</span>
                                                <span className="off-price">$40</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default LearningPaths;
