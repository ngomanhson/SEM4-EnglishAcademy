import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../../../services/api";
import url from "../../../../services/url";
import AudioPlayer from "react-h5-audio-player";
import Loading from "../../../layouts/Loading";
import NotFound from "../../Other/NotFound";
import useAxios from "../../../../hooks/useAxios";

function TestLesson() {
    const { courseSlug } = useParams();
    const location = useLocation();
    const testSlug = new URLSearchParams(location.search).get("test");

    const navigate = useNavigate();

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [selectedAnswersList, setSelectedAnswersList] = useState([]);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const [dataNotFound, setDataNotFound] = useState(false);
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);

    const [timeRemaining, setTimeRemaining] = useState(1800);

    const studentId = 1;

    const { response, loading, status } = useAxios({
        method: "GET",
        path: url.ONLINE_COURSE.TEST + `/${testSlug}/${studentId}`,
    });

    const testData = response || [];

    useEffect(() => {
        if (status === 404) {
            setDataNotFound(true);
        } else {
            setDataNotFound(false);
        }
    }, [status]);

    const handleAnswerSelect = (questionId, selectedOption) => {
        setSelectedAnswers({ ...selectedAnswers, [questionId]: selectedOption });
        setSelectedAnswersList((prevList) => [...prevList, { content: selectedOption, questionId }]);
    };

    const handleQuestionClick = (questionId) => {
        setSelectedQuestionId(questionId);
    };

    const handleSubmitTest = useCallback(async () => {
        try {
            const response = await api.post(url.ONLINE_COURSE.SUBMIT_TEST + `/${testSlug}/${studentId}`, selectedAnswersList);

            if (response.status === 200) {
                navigate();
            }
        } catch (error) {
            console.log(error);
        }
    }, [navigate, selectedAnswersList, testSlug, studentId]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

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
    }, [handleSubmitTest, confirmed]);

    const totalSession = testData.testOnlineSessionDetails ? testData.testOnlineSessionDetails.length : 0;

    const handleConfirm = () => {
        setConfirmed(true);
    };

    const handleNextSession = () => {
        setCurrentSessionIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrevSession = () => {
        setCurrentSessionIndex((prevIndex) => prevIndex - 1);
    };

    const breadcrumbs = () => {
        return (
            <>
                <h4 className="font-system fw-500 m-0">{testData.title}</h4>
                <ul className="page-list">
                    <li className="rbt-breadcrumb-item">
                        <Link to={`/learning/${courseSlug}`}>Learning</Link>
                    </li>
                    <li>
                        <div className="icon-right">
                            <i className="feather-chevron-right"></i>
                        </div>
                    </li>
                    <li className="rbt-breadcrumb-item active">{testData.title}</li>
                </ul>
            </>
        );
    };

    return (
        <>
            {loading && <Loading />}
            {dataNotFound || (testData.testOnlineSessionDetails && testData.testOnlineSessionDetails.length === 0) ? (
                <NotFound />
            ) : (
                <div className="rbt-button-area">
                    <div className="container">
                        {!confirmed ? (
                            <div className="row mt--50">
                                <div className="col-lg-6 mx-auto">
                                    <div className="text-center">
                                        {breadcrumbs()}

                                        <div className="rbt-splash-service no-translate support h-100 not-hover mt-3">
                                            <div>
                                                <h5 className="font-system fw-300">
                                                    <span className="text-danger">*</span> Some notes before taking the test
                                                </h5>

                                                <p className="font-system fw-300 m-0">
                                                    The test has a total of {totalSession} part and {testData.totalQuestion} questions:
                                                </p>
                                                <ul className="mb-4">
                                                    {testData.testOnlineSessionDetails?.map((session, sessionIndex) => (
                                                        <li className="font-system fw-300 mb-2" key={sessionIndex}>
                                                            Part {sessionIndex + 1}: {session.sessionName} <span>{session.totalQuestion} questions.</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <p className="font-system fw-300 mt-2" style={{ fontSize: 16 }}>
                                                    Instructions for taking the test: {testData.description}
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
                            <div className="content">
                                <div className="question" style={{ display: "block" }}>
                                    <div className="mt-5">{breadcrumbs()}</div>

                                    <div className="row mt--50">
                                        <div className="col-lg-9">
                                            {testData.testOnlineSessionDetails?.map((session, sessionIndex) => (
                                                <div className="widget" style={{ display: currentSessionIndex === sessionIndex ? "block" : "none" }} key={sessionIndex}>
                                                    <div>
                                                        <div className="d-flex justify-content-between align-items-start mb-5">
                                                            <div>
                                                                <h4 className="mb-2">{session.sessionName}</h4>
                                                                <p className="fw-300">The total number of questions: {session.totalQuestion}</p>
                                                            </div>
                                                            <div className="d-flex justify-content-end align-items-center">
                                                                <button type="button" className="btn-circle" onClick={handlePrevSession} disabled={currentSessionIndex === 0}>
                                                                    <i className="feather-chevron-left"></i>
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    className="btn-circle ml-2"
                                                                    onClick={handleNextSession}
                                                                    disabled={currentSessionIndex === testData.testOnlineSessionDetails?.length - 1}
                                                                >
                                                                    <i className="feather-chevron-right"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {session.questionTestOnlineDTOS?.map((question, questionIndex) => (
                                                            <div className="rbt-single-quiz mb-5" key={questionIndex}>
                                                                <h5 className="exam__inner-desc fw-500">
                                                                    Questions {questionIndex + 1}: {question.title}
                                                                </h5>
                                                                {question.image && <img src={question.image} className="w-100 mb-5" alt="" />}
                                                                {question.audiomp3 && <AudioPlayer src={question.audiomp3} autoPlay={false} className="mb-5 w-100" />}

                                                                <div className="row">
                                                                    {["option1", "option2", "option3", "option4"].map((option, optionIndex) => (
                                                                        <div className="col-lg-6" key={optionIndex}>
                                                                            <div className="answer-group">
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
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="answers__inner">
                                                <div className="td-sidebar">
                                                    <div className="widget">
                                                        <h5 className="text-center">Time remaining: {formatTime(timeRemaining)}</h5>

                                                        {testData.testOnlineSessionDetails?.map((session, index) => (
                                                            <div key={index}>
                                                                <div className="mt-5 choice-wrapper mb-5">
                                                                    {session.questionTestOnlineDTOS.map((question, questionIndex) => (
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
                                                            <button type="button" className="rbt-btn bg-pink-opacity rbt-marquee-btn w-100 mt-4 btn-not__hover" onClick={handleSubmitTest}>
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
                    </div>
                </div>
            )}
        </>
    );
}

export default TestLesson;