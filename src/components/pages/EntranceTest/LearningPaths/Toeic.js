import Chart from "react-apexcharts";
import Layout from "../../../layouts/index";
import { Link, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import url from "../../../../services/url";
import Loading from "../../../layouts/Loading";
import useAxios from "../../../../hooks/useAxios";
import { formatMinute } from "../../../../utils/FormatTime";
import { format } from "date-fns";
import NotFound from "../../Other/NotFound";

function LearningPathToeic() {
    const { testCode } = useParams();
    const [chartData, setChartData] = useState([]);

    const { response, loading } = useAxios({
        method: "GET",
        path: url.ENTRANCE_TEST.RESULT + `/${testCode}`,
    });

    const resultTest = useMemo(() => response || {}, [response]);

    const options = {
        chart: {
            type: "polarArea",
        },
        labels: ["Reading", "Listening"],
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

    useEffect(() => {
        if (Object.keys(resultTest).length !== 0) {
            const data = [resultTest.correctReading || 0, resultTest.correctListening || 0];
            setChartData(data);
        }
    }, [resultTest]);

    const totalCorrect = resultTest.correctReading + resultTest.correctListening;
    const totalQuestions = resultTest.totalQuestionReading + resultTest.totalQuestionListening;

    const courseOnlineList = resultTest.courseOnlineList || [];
    return (
        <>
            {loading && <Loading />}
            {resultTest && resultTest.type === 0 ? (
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
                                            <li className="rbt-breadcrumb-item active">Learning Paths Toiec</li>
                                        </ul>
                                        <h2 className="title">Learning Paths Toiec</h2>
                                        <p className="description fw-light text-secondary">Below is a suggested learning path for you.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rbt-become-area bg-color-light rbt-section-gap">
                        <div className="container">
                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <h5 className="mb-3 font-system" style={{ fontWeight: 600 }}>
                                        Overview
                                    </h5>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="widget">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="mb-0 text-dark font-system">Band score</p>
                                                    <p className="mb-0 font-system text-primary fw-bold" style={{ fontSize: 15 }}>
                                                        {resultTest.score}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="widget">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <p className="mb-0 text-dark font-system">Result</p>
                                                    <p className="mb-0 font-system text-primary fw-bold" style={{ fontSize: 15 }}>
                                                        {totalCorrect}/{totalQuestions} Correct answer
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-lg-12">
                                    <h5 className="mb-3 font-system" style={{ fontWeight: 600 }}>
                                        Competency assessment based on the of English Academy
                                    </h5>

                                    <div className="widget">
                                        <div className="d-lg-flex align-items-center justify-content-around">
                                            <div className={`p-5 pt-3 pb-3 radius-4 ${resultTest.score >= 0 && resultTest.score <= 299 ? "bg-color-primary" : ""}`}>
                                                <div className={`${resultTest.score >= 0 && resultTest.score <= 299 ? "text-white" : ""} d-flex flex-column align-items-center`}>
                                                    <p className={`mb-0 font-system fz-16 ${resultTest.score >= 0 && resultTest.score <= 299 ? "text-white" : ""}`}>TOEIC Basic</p>
                                                    <h4 className={`mb-0 font-system ${resultTest.score >= 0 && resultTest.score <= 299 ? "text-white" : ""}`}>5 - 300</h4>
                                                </div>
                                            </div>
                                            <div className={`p-5 pt-3 pb-3 radius-4 ${resultTest.score >= 300 && resultTest.score <= 599 ? "bg-color-primary" : ""}`}>
                                                <div className={`${resultTest.score >= 300 && resultTest.score <= 599 ? "text-white" : ""} d-flex flex-column align-items-center`}>
                                                    <p className={`mb-0 font-system fz-16 ${resultTest.score >= 300 && resultTest.score <= 599 ? "text-white" : ""}`}>TOEIC Intermediate</p>
                                                    <h4 className={`mb-0 font-system ${resultTest.score >= 300 && resultTest.score <= 599 ? "text-white" : ""}`}>300 - 600</h4>
                                                </div>
                                            </div>
                                            <div className={`p-5 pt-3 pb-3 radius-4 ${resultTest.score >= 600 && resultTest.score <= 799 ? "bg-color-primary" : ""}`}>
                                                <div className={`${resultTest.score >= 600 && resultTest.score <= 799 ? "text-white" : ""}  d-flex flex-column align-items-center`}>
                                                    <p className={`mb-0 font-system fz-16 ${resultTest.score >= 600 && resultTest.score <= 799 ? "text-white" : ""}`}>TOEIC Advanced</p>
                                                    <h4 className={`mb-0 font-system ${resultTest.score >= 600 && resultTest.score <= 799 ? "text-white" : ""}`}>600 - 800</h4>
                                                </div>
                                            </div>
                                            <div className={`p-5 pt-3 pb-3 radius-4 ${resultTest.score >= 800 && resultTest.score <= 990 ? "bg-color-primary" : ""}`}>
                                                <div className={`${resultTest.score >= 800 && resultTest.score <= 990 ? "text-white" : ""} d-flex flex-column align-items-center`}>
                                                    <p className={`mb-0 font-system fz-16 ${resultTest.score >= 800 && resultTest.score <= 990 ? "text-white" : ""}`}>Expert</p>
                                                    <h4 className={`mb-0 font-system ${resultTest.score >= 800 && resultTest.score <= 990 ? "text-white" : ""}`}>800 - 990</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="mb-3 font-system" style={{ fontWeight: 600 }}>
                                        Score and comments
                                    </h5>
                                    <div className="d-flex flex-col justify-content-between align-items-center text-white py-4 px-5 background-primary">
                                        <div className="flex-row">
                                            <p className="text-white fw-light mb-2 fz-15">
                                                The completion time: {resultTest.createdDate && format(new Date(resultTest.createdDate), "HH:mm:ss  dd-MM-yyyy")}
                                            </p>
                                            <p className="text-white fw-light fz-15 d-flex align-items-center gap-2">Time to complete: {formatMinute(resultTest.time)}</p>
                                        </div>

                                        <Link to={`/entrance-test/answer-detail/${testCode}`} className="rbt-btn btn-white radius hover-icon-reverse btn-not__hover">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">View detail answer</span>
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
                                                            - Combine guided reading as in class or when using materials such as books specializing in reading skills (to expand vocabulary and
                                                            structure of reading) and reading about personal topics. Pay attention to improving reading speed as well as enhancing concentration when
                                                            reading.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">{!loading && <Chart options={options} series={chartData} type="polarArea" />}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row g-4 pt--30 pb--60">
                                <div className="col-lg-12">
                                    <div className="section-title">
                                        <h5 className="fw-500 mb-0">Below are some suggested English Academy courses for you</h5>
                                    </div>
                                </div>
                                {courseOnlineList.map((course) => {
                                    const stars = [];
                                    const roundedScore = Math.round(course.star * 2) / 2;
                                    const fullStars = Math.floor(roundedScore);
                                    const halfStar = roundedScore - fullStars === 0.5;
                                    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

                                    for (let i = 0; i < fullStars; i++) {
                                        stars.push(<i key={i} className="fa fa-star"></i>);
                                    }
                                    if (halfStar) {
                                        stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
                                    }
                                    for (let i = 0; i < emptyStars; i++) {
                                        stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
                                    }
                                    return (
                                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={course.id}>
                                            <div className="rbt-card variation-01 rbt-hover">
                                                <div className="rbt-card-img">
                                                    <Link to={`/course-detail/${course.slug}`}>
                                                        <img src={course.image} alt={course.name} className="course-proposal__img" />
                                                    </Link>
                                                </div>
                                                <div className="rbt-card-body">
                                                    <h5 className="rbt-card-title">
                                                        <Link to={`/course-detail/${course.slug}`} className="font-system" style={{ fontSize: 18 }}>
                                                            {course.name}
                                                        </Link>
                                                    </h5>
                                                    <div className="rbt-review">
                                                        <div className="rating">{stars}</div>
                                                        <span className="rating-count"> ({course.totalReview} Reviews)</span>
                                                    </div>
                                                    <div className="rbt-card-bottom">
                                                        <div className="rbt-price">
                                                            <span className="current-price">${course.price && course.price.toFixed(2)}</span>
                                                        </div>
                                                        <Link to={`/course-detail/${course.slug}`} className="rbt-btn-link">
                                                            Learn More<i className="feather-arrow-right"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Layout>
            ) : (
                <NotFound />
            )}
        </>
    );
}

export default LearningPathToeic;
