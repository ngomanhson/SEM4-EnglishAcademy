import React, { useCallback, useEffect, useState } from "react";
import AudioPlayer from "react-audio-player";
import { Helmet } from "react-helmet";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Toeic() {
    const navigate = useNavigate();

    const [testToiec, setTestToiec] = useState({});
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
    const [selectedAnswersList, setSelectedAnswersList] = useState([]);
    const [timeRemaining, setTimeRemaining] = useState(1800);

    const loadTest = async () => {
        try {
            const testResponse = await api.get(url.ENTRANCE_TEST.TOIEC + "/test-1");
            setTestToiec(testResponse.data.data);
        } catch (error) {
            console.error("Error loading test:", error);
        }
    };

    useEffect(() => {
        loadTest();
    }, []);

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
            console.error("Error submitting test:", error);
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
            <div className="rbt-button-area">
                <div className="container">
                    <div className="row mt--50">
                        <div className="col-12">
                            <h4>TOEIC entrance test - {testToiec.title}</h4>
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
                                                            <div className="d-flex align-content-center">
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
                                        <div className="answers_number">
                                            {testToiec.testInputSessionDetails?.map((session, index) => (
                                                <button
                                                    key={session.id}
                                                    type="button"
                                                    className={`answers-btn ${currentSessionIndex === index ? "active" : ""}`}
                                                    onClick={() => setCurrentSessionIndex(index)}
                                                >
                                                    {session.sessionName}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="mt-5 choice-wrapper">
                                            {/* {testToiec &&
                                                testToiec.testInputSessionDetails[currentSessionIndex].questionTestInputs.map((question, index) => (
                                                    <button type="button" className="choice-wrapper__btn" key={question.id}>
                                                        {index + 1}
                                                    </button>
                                                ))} */}
                                        </div>

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
        </>
    );
}

export default Toeic;
