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
import Sidebar from "../../../views/EntranceTest/Sidebar";
import Breadcrumb from "../../../views/EntranceTest/Breadcrumb";

function Ielts() {
    const { slug } = useParams();
    const navigate = useNavigate();

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

    const entranceTest = useMemo(() => response || [], [response]);

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
            console.error("Error submitting test:", error);
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

                            <div className="col-lg-3">
                                <Sidebar
                                    timeRemaining={timeRemaining}
                                    entranceTest={entranceTest}
                                    setCurrentSessionIndex={setCurrentSessionIndex}
                                    selectedAnswers={selectedAnswers}
                                    selectedQuestionId={selectedQuestionId}
                                    handleQuestionClick={handleQuestionClick}
                                    handleSubmitTest={handleSubmitTest}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Ielts;
