import React, { useCallback, useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Helmet } from "react-helmet";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../layouts/Loading";
import NotFound from "../../Other/NotFound";
import useAxios from "../../../../hooks/useAxios";

function Toeic() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
    const [selectedAnswersList, setSelectedAnswersList] = useState([]);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(1800);

    const { response, loading } = useAxios({
        method: "GET",
        path: url.ENTRANCE_TEST.TOIEC + "/" + slug,
    });

    const testToiec = response || [];

    const handleQuestionClick = (questionId) => {
        setSelectedQuestionId(questionId);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    const handleAnswerSelect = (questionId, selectedOption) => {
        setSelectedAnswers({ ...selectedAnswers, [questionId]: selectedOption });
        setSelectedAnswersList((prevList) => [...prevList, { content: selectedOption, questionId }]);
    };

    const handleNextSession = () => {
        setCurrentSessionIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrevSession = () => {
        setCurrentSessionIndex((prevIndex) => prevIndex - 1);
    };

    const handleSubmitTest = useCallback(async () => {
        try {
            const response = await api.post(url.ENTRANCE_TEST.SUBMIT + "/test-1/1", selectedAnswersList);

            if (response.status === 200) {
                navigate("/entrance-test/learning-paths");

                toast.success("The test has been submitted successfully!", {
                    position: toast.POSITION.TOP_RIGHT,
                    theme: "colored",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }, [navigate, selectedAnswersList]);

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

            {loading ? <Loading /> : ""}

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
                            <div className="col-lg-8 col-12">
                                {testToiec.testInputSessionDetails?.map((session, index) => (
                                    <div key={session.id} style={{ display: currentSessionIndex === index ? "block" : "none" }}>
                                        <div className="py-4 background-primary">
                                            <h4 className="text-center text-white fw-500 mb-0" style={{ fontSize: 20 }}>
                                                {session.sessionName}
                                            </h4>
                                        </div>

                                        <div className="widget" style={{ background: "#f1f1f19e" }}>
                                            {session.questionTestInputs?.map((question, questionIndex) => (
                                                <div className="p-5 mb-5" style={{ background: "#fff", borderRadius: 8 }} key={questionIndex}>
                                                    <h5 className="exam__inner-desc fw-500">
                                                        Question {questionIndex + 1}: {question.title}
                                                    </h5>
                                                    {question.image && <img src={question.image} className="w-100 mb-5" alt="" />}
                                                    {question.audiomp3 && <AudioPlayer src={question.audiomp3} autoPlay={false} controls className="mb-5 w-100" />}
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
                                    </div>
                                ))}
                            </div>

                            <div className="col-lg-4 col-12">
                                <div className="answers__inner">
                                    <div className="td-sidebar">
                                        <div className="widget">
                                            <h5 className="text-center">Time remaining: {formatTime(timeRemaining)}</h5>

                                            {testToiec.testInputSessionDetails?.map((session, index) => (
                                                <div key={session.id}>
                                                    <button
                                                        type="button"
                                                        className={`answers-btn w-100 ${currentSessionIndex === index ? "active" : ""}`}
                                                        onClick={() => setCurrentSessionIndex(index)}
                                                    >
                                                        {session.sessionName}
                                                    </button>

                                                    <div className="mt-5 choice-wrapper mb-5">
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
                                                <button type="button" className="rbt-btn bg-pink-opacity rbt-marquee-btn w-100 mt-4" onClick={handleSubmitTest}>
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
