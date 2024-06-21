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

function Toeic() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(0);

    const [startTime, setStartTime] = useState(null);

    const { response, loading } = useAxiosGet({
        path: url.ENTRANCE_TEST.TOIEC + `/${slug}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const entranceTest = useMemo(() => response || [], [response]);

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
                navigate("/entrance-test/success");
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }, [slug, navigate, selectedAnswers, startTime, entranceTest]);

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
                        <Breadcrumb title="TOEIC entrance test" entranceTest={entranceTest} />
                        <div className="row mt--50">
                            <div className="col-lg-9 col-12">
                                {entranceTest.testInputSessionDetails?.map((session, index) => (
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

                            <div className="col-lg-3 col-12">
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
                    </div>
                </div>
            )}
        </>
    );
}

export default Toeic;
