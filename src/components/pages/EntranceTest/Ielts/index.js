import React, { useCallback, useEffect, useMemo, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Helmet } from "react-helmet";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../../layouts/Loading";
import NotFound from "../../Other/NotFound";
import { formatMinute } from "../../../../utils/FormatTime/index";
import BreadcrumbTest from "../../../layouts/BreadcrumbTest";
import { useAxiosGet } from "../../../../hooks";
import { getAccessToken } from "../../../../utils/auth";

function Ielts() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [confirmed, setConfirmed] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(1800);

    const [startTime, setStartTime] = useState(null);

    const { response, loading, error } = useAxiosGet({
        path: url.ENTRANCE_TEST.IELTS + `/${slug}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const testIelts = useMemo(() => response || [], [response]);

    const [selectedQuestionId, setSelectedQuestionId] = useState(null);

    useEffect(() => {
        if (response && response.time) {
            const apiTime = response.time;
            setTimeRemaining(apiTime);
        }
    }, [response]);

    const handleConfirm = () => {
        setConfirmed(true);
        setStartTime(Date.now());
    };

    const handleQuestionClick = (questionId) => {
        setSelectedQuestionId(questionId);
    };

    const handleAnswerSelect = (questionId, selectedOption) => {
        const updatedAnswers = { ...selectedAnswers };
        updatedAnswers[questionId] = selectedOption;
        setSelectedAnswers(updatedAnswers);
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

            const answersToSubmit = testIelts.testInputSessionDetails.flatMap((session) =>
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
            console.error("Error submitting test:", error);
        }
    }, [slug, navigate, selectedAnswers, startTime, testIelts]);

    useEffect(() => {
        if (confirmed) {
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
        }
    }, [confirmed, handleSubmitTest]);

    const totalSession = testIelts.testInputSessionDetails ? testIelts.testInputSessionDetails.length : 0;

    return (
        <>
            <Helmet>
                <title>IELTS entrance test | English Academy</title>
            </Helmet>

            {loading ? <Loading /> : ""}

            {error ? (
                <NotFound />
            ) : (
                <div className="rbt-button-area">
                    <div className="container">
                        {!confirmed ? (
                            <div className="row mt--50">
                                <div className="col-lg-6 mx-auto">
                                    <div className="text-center">
                                        <BreadcrumbTest title={testIelts.title} />

                                        <div className="rbt-splash-service no-translate support h-100 not-hover mt-3">
                                            <div className="w-100">
                                                <h5 className="font-system fw-300">
                                                    <span className="text-danger">*</span> Some notes before taking the test
                                                </h5>

                                                <p className="font-system fw-300 m-0">
                                                    The test has a total of {totalSession} part and {testIelts.totalQuestion} questions:
                                                </p>
                                                <ul className="mb-4">
                                                    {testIelts.testInputSessionDetails?.map((session, sessionIndex) => (
                                                        <li className="font-system fw-300 mb-2" key={sessionIndex}>
                                                            Part {sessionIndex + 1}: {session.sessionName} <span>{session.totalQuestion} questions.</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <p className="font-system fw-300 mt-2" style={{ fontSize: 16 }}>
                                                    Instructions for taking the test: {testIelts.description}
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
                        ) : (
                            <>
                                <div className="row mt--50">
                                    <div className="col-12">
                                        <h4 className="mb-3">IELTS entrance test - {testIelts.title}</h4>
                                        <ul className="page-list">
                                            <li className="rbt-breadcrumb-item">
                                                <Link to="/">Home</Link>
                                            </li>
                                            <li>
                                                <div className="icon-right">
                                                    <i className="feather-chevron-right"></i>
                                                </div>
                                            </li>
                                            <li className="rbt-breadcrumb-item active">IELTS entrance test - {testIelts.title}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row mt--50">
                                    <div className="col-lg-9">
                                        {testIelts.testInputSessionDetails?.map((session, index) => (
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
                                                            disabled={currentSessionIndex === testIelts.testInputSessionDetails.length - 1}
                                                        >
                                                            <i className="feather-arrow-right"></i>
                                                        </button>
                                                    </div>
                                                </div>

                                                {session.questionTestInputs?.map((question, questionIndex) => (
                                                    <div className="mb-5" key={questionIndex}>
                                                        <h5 className="exam__inner-desc fw-500">
                                                            Question {questionIndex + 1}: {question.title}
                                                        </h5>
                                                        {question.image && <img src={question.image} className="w-100 mb-5" alt="" />}
                                                        {question.audiomp3 && <AudioPlayer src={question.audiomp3} autoPlay={false} className="mb-5 w-100" />}
                                                        {["option1", "option2", "option3", "option4"].map((option, optionIndex) => (
                                                            <div className="answer-group" key={optionIndex}>
                                                                <label className={`answers-group__label ${selectedAnswers[question.id] === question[option] ? "checked" : ""}`}>
                                                                    <input
                                                                        type="radio"
                                                                        className="answers-group__input"
                                                                        name={`answer_${question.id}`}
                                                                        id={`answer_${question.id}_${option}`}
                                                                        checked={selectedAnswers[question.id] === question[option]}
                                                                        onChange={() => handleAnswerSelect(question.id, question[option])}
                                                                    />
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="btn-choose">{String.fromCharCode(65 + optionIndex)}</div> {question[option]}
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="col-lg-3">
                                        <div className="answers__inner">
                                            <div className="td-sidebar">
                                                <div className="widget">
                                                    <h5 className="text-center">Time remaining: {formatMinute(timeRemaining)}</h5>

                                                    {testIelts.testInputSessionDetails?.map((session, index) => (
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
                                                            className="rbt-btn bg-pink-opacity rbt-marquee-btn btn-not__hover w-100 mt-4"
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
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default Ielts;
