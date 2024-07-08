import { useEffect, useMemo, useState } from "react";
import LayoutLessonOnline from "../../../layouts/Lesson/LayoutLessonOnline";
import { useLocation } from "react-router-dom";
import url from "../../../../services/url";
import Confetti from "react-confetti-boom";
import Lottie from "lottie-react";
import Learn from "../../../../lottie/Learn.json";
import { useAxiosGet } from "../../../../hooks";
import { getAccessToken } from "../../../../utils/auth";
import Quiz from "../../../views/Learning/Online/Quiz";
import Document from "../../../views/Learning/Online/Document";
import LearnVideos from "../../../views/Learning/Online/LearnVideos";
import Certificate from "../../../views/Certificate";

function LearningOnline() {
    const location = useLocation();
    const itemSlug = new URLSearchParams(location.search).get("lesson");

    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const [answered, setAnswered] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [answerResults, setAnswerResults] = useState([]);

    const [windowSize, setWindowSize] = useState({
        with: undefined,
        height: undefined,
    });

    const { response, loading, error } = useAxiosGet({
        path: url.ONLINE_COURSE.ITEM_ONLINE + `/${itemSlug}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const lessonData = useMemo(() => response || {}, [response]);

    function handleWindowSize() {
        setWindowSize({
            with: window.innerWidth,
            height: window.innerHeight,
        });
    }

    const [currentTime, setCurrentTime] = useState(0);

    const handleCurrentTimeChange = (newTime) => {
        setCurrentTime(newTime);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    const questionItem = lessonData.questionItemOnlineDTOList;

    const handleAnswerChange = (questionIndex, answerIndex, answer) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[questionIndex] = answer;
        setSelectedAnswers(newSelectedAnswers);
        setAnswered(false);
    };

    useEffect(() => {
        window.onresize = () => handleWindowSize();
        if (lessonData.questionItemOnlineDTOList) {
            setAnswerResults(new Array(lessonData.questionItemOnlineDTOList.length).fill(null));
        }
    }, [lessonData]);

    const handleCheckAnswers = () => {
        try {
            const correctAnswers = lessonData.questionItemOnlineDTOList.map((question) => question.answerCorrect);
            const userAnswers = selectedAnswers;

            const newAnswerResults = correctAnswers.map((correctAnswer, index) => correctAnswer === userAnswers[index]);

            setAnswerResults(newAnswerResults);
            setAnswered(true);

            if (newAnswerResults.every((result) => result)) {
                setShowConfetti(true);
                setTimeout(() => {
                    setShowConfetti(false);
                }, 3800);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const allQuestionsAnswered = () => {
        if (!selectedAnswers || selectedAnswers.length !== lessonData.questionItemOnlineDTOList.length) {
            return false;
        }

        for (const answer of selectedAnswers) {
            if (answer === undefined) {
                return false;
            }
        }

        return true;
    };

    const modifiedDate = new Date(lessonData.modifiedDate);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const formattedDate = "Last updated " + months[modifiedDate.getMonth()] + " " + modifiedDate.getFullYear();

    useEffect(() => {
        localStorage.setItem("redirect_course", itemSlug);
    });

    const isCertificate = new URLSearchParams(location.search).has("certificate");

    return (
        <>
            {showConfetti && (
                <Confetti width={windowSize.with} height={windowSize.height} mode="boom" y={1} particleCount={100} launchSpeed={5} colors={["#8000ff", "#ff00fb", "#29f500", "#e1ff00", "#ff0000"]} />
            )}

            <LayoutLessonOnline title="Lesson" nextLesson={error ? false : true} currentTime={currentTime}>
                {isCertificate ? (
                    <Certificate />
                ) : error ? (
                    <div className="col-lg-4 mx-auto">
                        <div className="d-flex flex-column align-item-center justify-content-center" style={{ height: "100vh" }}>
                            {!loading && <Lottie animationData={Learn} loop={true} />}
                        </div>
                    </div>
                ) : (
                    <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video scrollbar-screen">
                        {lessonData.itemType === 0 && (
                            <LearnVideos lesson={lessonData} handleCurrentTimeChange={handleCurrentTimeChange} formattedDate={formattedDate} formatTime={formatTime} currentTime={currentTime} />
                        )}

                        {lessonData.itemType === 1 && (
                            <Quiz
                                lesson={lessonData}
                                formattedDate={formattedDate}
                                questionItem={questionItem}
                                selectedAnswers={selectedAnswers}
                                answered={answered}
                                answerResults={answerResults}
                                handleAnswerChange={handleAnswerChange}
                                allQuestionsAnswered={allQuestionsAnswered}
                                handleCheckAnswers={handleCheckAnswers}
                            />
                        )}

                        {lessonData.itemType === 2 && <Document lesson={lessonData} />}
                    </div>
                )}
            </LayoutLessonOnline>
        </>
    );
}

export default LearningOnline;
