import { useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import api from "../../../../../services/api";
import url from "../../../../../services/url";
import Loading from "../../../../layouts/Loading";
import NotFound from "../../../Other/NotFound";
import LayoutLessonOnline from "../../../../layouts/Lesson/LayoutLessonOnline";
import Lottie from "lottie-react";
import ComingSoon from "../../../../../lottie/ComingSoon.json";
import { useAxiosGet } from "../../../../../hooks";
import { getAccessToken } from "../../../../../utils/auth";
import Parts from "../../../../views/TestLesson/Parts";
import Sidebar from "../../../../views/TestLesson/Sidebar";
import Breadcrumb from "../../../../views/TestLesson/Breadcrumb";
import Confirm from "../../../../views/TestLesson/Confirm";

function TestLessonOnline() {
    const location = useLocation();
    const testSlug = new URLSearchParams(location.search).get("test");
    const { courseSlug } = useParams();

    const navigate = useNavigate();

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const [dataNotFound, setDataNotFound] = useState(false);
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);

    const [timeRemaining, setTimeRemaining] = useState(1800);
    const [startTime, setStartTime] = useState(null);

    const { response, loading, errorStatus } = useAxiosGet({
        path: url.ONLINE_COURSE.TEST + `/${testSlug}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const testData = useMemo(() => response || [], [response]);

    useEffect(() => {
        if (response && response.time) {
            const apiTime = response.time;
            setTimeRemaining(apiTime);
        }
    }, [response]);

    useEffect(() => {
        if (errorStatus === 404) {
            setDataNotFound(true);
        } else {
            setDataNotFound(false);
        }
    }, [errorStatus]);

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
            const answersToSubmit = testData.testOnlineSessionDetails.flatMap((session) =>
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

            const response = await api.post(url.ONLINE_COURSE.SUBMIT_TEST + `/${testSlug}`, dataSubmit, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            });

            if (response.status === 200) {
                navigate(`/${courseSlug}/result-test/${response.data.data}`);
            }
        } catch (error) {
            console.log(error);
        }
    }, [navigate, selectedAnswers, startTime, testSlug, testData, courseSlug]);

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
            ) : testData.testOnlineSessionDetails && testData.testOnlineSessionDetails.length === 0 ? (
                <LayoutLessonOnline title="Coming soon!">
                    <div className="col-lg-4 mx-auto">
                        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                            <Lottie animationData={ComingSoon} loop={true} />
                        </div>
                    </div>
                </LayoutLessonOnline>
            ) : (
                <div className="rbt-button-area">
                    <div className="container">
                        {!confirmed ? (
                            <Confirm testData={testData} totalSession={totalSession} handleConfirm={handleConfirm} />
                        ) : (
                            <div className="content">
                                <div className="question" style={{ display: "block" }}>
                                    <div className="mt-5">
                                        <Breadcrumb title={testData.title} />
                                    </div>

                                    <div className="row mt--50">
                                        <div className="col-lg-9">
                                            {testData.testOnlineSessionDetails?.map((session, sessionIndex) => (
                                                <Parts
                                                    key={session.id}
                                                    session={session}
                                                    currentSessionIndex={currentSessionIndex}
                                                    sessionIndex={sessionIndex}
                                                    selectedAnswers={selectedAnswers}
                                                    handleAnswerSelect={handleAnswerSelect}
                                                    handlePrevSession={handlePrevSession}
                                                    handleNextSession={handleNextSession}
                                                    testData={testData}
                                                />
                                            ))}
                                        </div>
                                        <div className="col-lg-3">
                                            <Sidebar
                                                timeRemaining={timeRemaining}
                                                testData={testData}
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
                    </div>
                </div>
            )}
        </>
    );
}

export default TestLessonOnline;
