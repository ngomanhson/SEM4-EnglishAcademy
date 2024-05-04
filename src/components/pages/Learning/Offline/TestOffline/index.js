import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../../../services/api";
import url from "../../../../../services/url";
import AudioPlayer from "react-h5-audio-player";
import Loading from "../../../../layouts/Loading";
import NotFound from "../../../Other/NotFound";
import { formatHour } from "../../../../../utils/FormatTime";
import Lottie from "lottie-react";
import ComingSoon from "../../../../../lottie/ComingSoon.json";
import BreadcrumbTest from "../../../../layouts/BreadcrumbTest";
import { useAxiosGet } from "../../../../../hooks";
import { getAccessToken } from "../../../../../utils/auth";

function TestOffline() {
    const { slug } = useParams();

    const navigate = useNavigate();

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const [dataNotFound, setDataNotFound] = useState(false);
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);

    const [timeRemaining, setTimeRemaining] = useState(1800);
    const [startTime, setStartTime] = useState(null);

    const studentId = 1;

    const { response, loading, status } = useAxiosGet({
        path: url.OFFLINE_COURSE.SUBJECT_TEST + `/${slug}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const testData = useMemo(() => response || [], [response]);

    useEffect(() => {
        if (status === 404) {
            setDataNotFound(true);
        } else {
            setDataNotFound(false);
        }
    }, [status]);

    const handleConfirm = () => {
        setConfirmed(true);
        setStartTime(Date.now());
    };

    const handleAnswerSelect = (questionId, selectedOption) => {
        const updatedAnswers = { ...selectedAnswers };
        updatedAnswers[questionId] = selectedOption;
        setSelectedAnswers(updatedAnswers);
    };

    const handleQuestionClick = (questionId) => {
        setSelectedQuestionId(questionId);
    };

    const handleSubmitTest = useCallback(async () => {
        try {
            const answersToSubmit = testData.testOfflineSessionDetails.flatMap((session) =>
                session.questionTestOnlineDTOS.map((question) => ({
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

            const response = await api.post(url.ONLINE_COURSE.SUBMIT_TEST + `/${slug}/${studentId}`, dataSubmit);

            if (response.status === 200) {
                navigate(`/result-test/${response.data.data}`);
            }
        } catch (error) {
            console.log(error);
        }
    }, [navigate, selectedAnswers, startTime, slug, studentId, testData]);

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

    const totalSession = testData.testOfflineSessionDetails ? testData.testOfflineSessionDetails.length : 0;

    const handleNextSession = () => {
        setCurrentSessionIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrevSession = () => {
        setCurrentSessionIndex((prevIndex) => prevIndex - 1);
    };

    return (
        <>
            {loading && <Loading />}
            {dataNotFound ? (
                <NotFound />
            ) : testData.testOfflineSessionDetails && testData.testOfflineSessionDetails.length === 0 ? (
                <div className="col-lg-4 mx-auto">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                        <Lottie animationData={ComingSoon} loop={true} />
                    </div>
                </div>
            ) : (
                <div className="rbt-button-area">
                    <div className="container">
                        {!confirmed ? (
                            <div className="row mt--50">
                                <div className="col-lg-6 mx-auto">
                                    <div className="text-center">
                                        {/* <BreadcrumbTest title={testData.title} path={`/learning/${courseSlug}`} /> */}

                                        <div className="rbt-splash-service no-translate support h-100 not-hover mt-3">
                                            <div className="w-100">
                                                <h5 className="font-system fw-300">
                                                    <span className="text-danger">*</span> Some notes before taking the test
                                                </h5>

                                                <p className="font-system fw-300 m-0">
                                                    The test has a total of {totalSession} part and {testData.totalQuestion} questions:
                                                </p>
                                                <ul className="mb-4">
                                                    {testData.testOfflineSessionDetails?.map((session, sessionIndex) => (
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
                                    <div className="mt-5">
                                        <BreadcrumbTest title={testData.title} path={`/learning/${slug}`} />
                                    </div>

                                    <div className="row mt--50">
                                        <div className="col-lg-9">
                                            {testData.testOfflineSessionDetails?.map((session, sessionIndex) => (
                                                <div className="widget border-lft-prm-opacity" style={{ display: currentSessionIndex === sessionIndex ? "block" : "none" }} key={sessionIndex}>
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-start mb-5">
                                                            <div>
                                                                <h4 className="mb-2">
                                                                    Part {sessionIndex + 1}: {session.sessionName}
                                                                </h4>
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
                                                                    disabled={currentSessionIndex === testData.testOfflineSessionDetails?.length - 1}
                                                                >
                                                                    <i className="feather-chevron-right"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {session.questionTestOfflineDTOS?.map((question, questionIndex) => (
                                                            <div className="rbt-single-quiz mb-5" key={questionIndex}>
                                                                <h5 className="exam__inner-desc fw-500 font-system" style={{ fontSize: 18 }}>
                                                                    Questions {questionIndex + 1}: {question.title}
                                                                </h5>
                                                                {question.image && <img src={question.image} className="w-100 mb-5" alt="" />}
                                                                {question.audiomp3 && <AudioPlayer src={question.audiomp3} autoPlay={false} className="mb-5 w-100" />}

                                                                <div className="row">
                                                                    {["option1", "option2", "option3", "option4"].map((option, optionIndex) => (
                                                                        <div className="col-lg-6" key={optionIndex}>
                                                                            {question[option] !== null && (
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
                                                                                        <div className="d-flex align-items-center font-system">
                                                                                            <div className="btn-choose">{String.fromCharCode(65 + optionIndex)}</div> {question[option]}
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>

                                                                <div className="d-flex flex-column justify-content-center align-items-center background-secondary p-5">
                                                                    <button type="button" className="btn btn-circle-2">
                                                                        <i className="fas fa-microphone"></i>
                                                                    </button>
                                                                    <div className="mt-3 text-center">
                                                                        <p className="fw-light mb-0" style={{ fontSize: 15 }}>
                                                                            Click to start recording
                                                                        </p>
                                                                        <p className="fw-light" style={{ fontSize: 16 }}>
                                                                            The system will automatically process your speech
                                                                        </p>
                                                                    </div>
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
                                                    <div className="widget border-a-secondary">
                                                        <h5 className="text-center border-bt-secondary pb-3">Time remaining: {formatHour(timeRemaining)}</h5>

                                                        {testData.testOfflineSessionDetails?.map((session, index) => (
                                                            <div key={index}>
                                                                <p className="m-0 fz-16 label-session" onClick={() => setCurrentSessionIndex(index)}>
                                                                    Part {index + 1}: {session.sessionName}
                                                                </p>
                                                                <div className="mt-3 choice-wrapper mb-3">
                                                                    {session.questionTestOfflineDTOS.map((question, questionIndex) => (
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
                                                                className="rbt-btn bg-pink-opacity rbt-marquee-btn w-100 mt-4 btn-not__hover"
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
                    </div>
                </div>
            )}
        </>
    );
}

export default TestOffline;
