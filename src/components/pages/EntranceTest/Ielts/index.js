import React, { useCallback, useEffect, useMemo, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import { Helmet } from "react-helmet";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../../layouts/Loading";
import NotFound from "../../Other/NotFound";
import { useAxiosGet } from "../../../../hooks";
import { getAccessToken } from "../../../../utils/auth";
import Parts from "../../../views/EntranceTest/Parts";
// import Sidebar from "../../../views/EntranceTest/Sidebar";
import Breadcrumb from "../../../views/EntranceTest/Breadcrumb";
import { formatMinute } from "../../../../utils/formatTime";
import { toast } from "react-toastify";
import AuthModal from "../../Auth/AuthModal";

function Ielts() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(0);

    const [startTime, setStartTime] = useState(null);

    const { response, loading, error } = useAxiosGet({
        path: url.ENTRANCE_TEST.IELTS + `/${slug}`,
    });

    const entranceTest = useMemo(() => response || {}, [response]);

    const [selectedQuestionId, setSelectedQuestionId] = useState(null);

    useEffect(() => {
        setStartTime(Date.now() + 1500);
        if (response && response.time) {
            const apiTime = response.time;
            setTimeRemaining(apiTime);
        }
    }, [response]);

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

    const submitTest = useCallback(async () => {
        try {
            const answersToSubmit = entranceTest.testInputSessionDetails.flatMap((session) =>
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
                const testData = response.data.data;
                navigate(`/learning-paths/ielts/${testData}`);
            }
        } catch (error) {
            console.log(error);
            toast.error("Error! An error occurred. Please try again later", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }, [entranceTest.testInputSessionDetails, startTime, slug, selectedAnswers, navigate]);

    const handleSubmitTest = useCallback(async () => {
        if (getAccessToken()) {
            await submitTest();
        } else {
            const myModal = new window.bootstrap.Modal(document.getElementById("login-modal"));
            myModal.show();
        }
    }, [submitTest]);

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
                <title>IELTS entrance test | English Academy</title>
            </Helmet>

            {loading ? <Loading /> : ""}

            {error ? (
                <NotFound />
            ) : (
                <div className="rbt-button-area">
                    <div className="container">
                        <Breadcrumb title="IELTS entrance test" entranceTest={entranceTest} />
                        <div className="row mt--50">
                            <div className="col-lg-9">
                                {entranceTest?.testInputSessionDetails?.map((session, index) => (
                                    <Parts
                                        key={session.id}
                                        session={session}
                                        currentSessionIndex={currentSessionIndex}
                                        index={index}
                                        selectedAnswers={selectedAnswers}
                                        handleAnswerSelect={handleAnswerSelect}
                                        handlePrevSession={handlePrevSession}
                                        handleNextSession={handleNextSession}
                                        entranceTest={entranceTest}
                                    />
                                ))}
                            </div>

                            <div className="col-lg-3">
                                {/* <Sidebar
                                    timeRemaining={timeRemaining}
                                    entranceTest={entranceTest}
                                    setCurrentSessionIndex={setCurrentSessionIndex}
                                    selectedAnswers={selectedAnswers}
                                    selectedQuestionId={selectedQuestionId}
                                    handleQuestionClick={handleQuestionClick}
                                    handleSubmitTest={handleSubmitTest}
                                /> */}

                                <div className="answers__inner">
                                    <div className="td-sidebar">
                                        <div className="widget">
                                            <h5 className="text-center">Time remaining: {formatMinute(timeRemaining)}</h5>

                                            {entranceTest.testInputSessionDetails?.map((session, index) => (
                                                <div key={session.id}>
                                                    <p className="m-0 fz-16 label-session" onClick={() => setCurrentSessionIndex(index)}>
                                                        Part {index + 1}: {session.sessionName}
                                                    </p>
                                                    <div className="mt-3 choice-wrapper mb-3">
                                                        {session?.questionTestInputs?.map((question, questionIndex) => (
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
                        <AuthModal handleEvent={submitTest} />
                    </div>
                </div>
            )}
        </>
    );
}

export default Ielts;
