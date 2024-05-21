import React, { useCallback, useEffect, useMemo, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import { Helmet } from "react-helmet";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../../layouts/Loading";
import NotFound from "../../Other/NotFound";
import { formatMinute } from "../../../../utils/formatTime";
import { useAxiosGet } from "../../../../hooks";
import { getAccessToken } from "../../../../utils/auth";
import Questions from "../../../views/Questions";

function Toeic() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(1800);

    const [startTime, setStartTime] = useState(null);

    const { response, loading } = useAxiosGet({
        path: url.ENTRANCE_TEST.TOIEC + `/${slug}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const testToiec = useMemo(() => response || [], [response]);

    useEffect(() => {
        setStartTime(Date.now());
        if (response && response.time) {
            const apiTime = response.time;
            setTimeRemaining(apiTime);
        }
    }, [response]);

    const handleAnswerSelect = (questionId, selectedOption) => {
        const updatedAnswers = { ...selectedAnswers };
        updatedAnswers[questionId] = selectedOption;
        setSelectedAnswers(updatedAnswers);
    };

    const handleQuestionClick = (questionId) => {
        setSelectedQuestionId(questionId);
    };

    const handleNextSession = () => {
        setCurrentSessionIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrevSession = () => {
        setCurrentSessionIndex((prevIndex) => prevIndex - 1);
    };

    const handleSubmitTest = useCallback(async () => {
        try {
            // const answersToSubmit = Object.entries(selectedAnswers).map(([questionId, selectedOption]) => ({ content: selectedOption, questionId }));

            const answersToSubmit = testToiec.testInputSessionDetails.flatMap((session) =>
                session.questionTestInputs.map((question) => ({
                    content: selectedAnswers[question.id] || "",
                    questionId: question.id,
                }))
            );

            const endTime = Date.now();

            const elapsedTimeInSeconds = Math.floor((endTime - startTime) / 1000);

            const dataSubmit = {
                time: elapsedTimeInSeconds,
                createAnswerStudentList: answersToSubmit,
            };

            const response = await api.post(url.ENTRANCE_TEST.SUBMIT + `/${slug}`, dataSubmit, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            });

            if (response.status === 200) {
                navigate("/entrance-test/success");
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }, [slug, navigate, selectedAnswers, startTime, testToiec]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timer);
                    handleSubmitTest();
                    return 0;
                }
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [handleSubmitTest]);

    return (
        <>
            <Helmet>
                <title>TOEIC entrance test | English Academy</title>
            </Helmet>

            {loading && <Loading />}

            {error ? (
                <NotFound />
            ) : (
                <div className="rbt-button-area">
                    <div className="container">
                        <div className="row mt--50">
                            <div className="col-12">
                                <h4 className="mb-3">TOEIC entrance test - {testToiec.title}</h4>
                                <ul className="page-list">
                                    <li className="rbt-breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <div className="icon-right">
                                            <i className="feather-chevron-right"></i>
                                        </div>
                                    </li>
                                    <li className="rbt-breadcrumb-item active">TOEIC entrance test - {testToiec.title}</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mt--50">
                            <div className="col-lg-9 col-12">
                                {testToiec.testInputSessionDetails?.map((session, index) => (
                                    <div className="widget" key={session.id} style={{ display: currentSessionIndex === index ? "block" : "none" }}>
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

                                                <button
                                                    type="button"
                                                    className="btn-circle ml-2"
                                                    onClick={handleNextSession}
                                                    disabled={currentSessionIndex === testToiec.testInputSessionDetails.length - 1}
                                                >
                                                    <i className="feather-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>

                                        {session.questionTestInputs?.map((question, questionIndex) => (
                                            <Questions key={question.id} question={question} questionIndex={questionIndex} selectedAnswers={selectedAnswers} handleAnswerSelect={handleAnswerSelect} />
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="col-lg-3 col-12">
                                <div className="answers__inner">
                                    <div className="td-sidebar">
                                        <div className="widget">
                                            <h5 className="text-center">Time remaining: {formatMinute(timeRemaining)}</h5>

                                            {testToiec.testInputSessionDetails?.map((session, index) => (
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
                                                <button
                                                    type="button"
                                                    className="rbt-btn bg-pink-opacity rbt-marquee-btn w-100 btn-not__hover mt-4"
                                                    style={{ height: 50, lineHeight: "50px" }}
                                                    onClick={handleSubmitTest}
                                                >
                                                    <i className="fa fa-stop-circle"></i> Finish Test
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Toeic;
