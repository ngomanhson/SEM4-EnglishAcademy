import { useEffect, useMemo, useState } from "react";
import VideoLesson from "./VideoLesson";
import LayoutLessonOnline from "../../../layouts/Lesson/LayoutLessonOnline";
import { useLocation } from "react-router-dom";
import url from "../../../../services/url";
import Loading from "../../../layouts/Loading";
import Confetti from "react-confetti-boom";
import Lottie from "lottie-react";
import Learn from "../../../../lottie/Learn.json";
import { useAxiosGet } from "../../../../hooks";
import { getAccessToken } from "../../../../utils/auth";

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
    return (
        <>
            {loading && <Loading />}
            {showConfetti && (
                <Confetti width={windowSize.with} height={windowSize.height} mode="boom" y={1} particleCount={100} launchSpeed={5} colors={["#8000ff", "#ff00fb", "#29f500", "#e1ff00", "#ff0000"]} />
            )}

            <LayoutLessonOnline title="Lesson" nextLesson={error ? false : true}>
                {error ? (
                    <div className="col-lg-4 mx-auto">
                        <div className="d-flex flex-column align-item-center justify-content-center" style={{ height: "100vh" }}>
                            {!loading && <Lottie animationData={Learn} loop={true} />}
                        </div>
                    </div>
                ) : (
                    <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video scrollbar-screen">
                        {lessonData.itemType === 0 && (
                            <div className="inner">
                                <VideoLesson onCurrentTimeChange={handleCurrentTimeChange} src={lessonData.pathUrl} />

                                <div className="content">
                                    <div className="content-top__lesson">
                                        <div>
                                            <h4 className="lesson-title mb-2">
                                                {lessonData.title} <i className="far fa-bookmark ml--10"></i>
                                            </h4>
                                            {lessonData.modifiedDate && <span className="lesson-date">{formattedDate}</span>}
                                        </div>

                                        <button className="add-note">
                                            <i className="feather-plus-circle"></i>
                                            <span>Added note at {formatTime(currentTime)}</span>
                                        </button>
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-8 mx-auto">
                                            <div className="content-body mt--50">
                                                <h5 className="font-system mb-4 fw-500">{lessonData.title}</h5>
                                                <p className="lesson-description mt-0 mb-5 font-system fw-300">{lessonData.content}</p>

                                                <p className="m-0 resource-title font-system">Resources in the lesson:</p>

                                                <ol className="resource-list">
                                                    <li>
                                                        <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">https://getbootstrap.com/docs/5.3/getting-started/introduction/</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://github.com/feathericons/feather#feather">https://github.com/feathericons/feather#feather</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://cssgradient.io/blog/css-gradient-text/">https://cssgradient.io/blog/css-gradient-text/</a>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                        <div className="d-flex align-content-center justify-content-center gap-3">
                                            <button className="btn btn-primary__custom">
                                                <span>
                                                    <i className="feather-thumbs-up"></i>
                                                </span>
                                            </button>
                                            <button className="btn btn-primary__custom">
                                                <span>
                                                    <i className="feather-thumbs-down"></i>
                                                </span>
                                            </button>
                                        </div>
                                        <p className="mt-3 lesson-question">How do you see this lesson?</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {lessonData.itemType === 1 && (
                            <div className="inner mt-5">
                                <div className="row">
                                    <div className="col-lg-9 mx-auto">
                                        <div className="content">
                                            <div>
                                                <h4 className="lesson-title">
                                                    {lessonData.title} <i className="far fa-bookmark"></i>
                                                </h4>
                                                {lessonData.modifiedDate && <span className="lesson-date">{formattedDate}</span>}
                                            </div>

                                            <div className="content-body mb-5">
                                                {questionItem.map((question, index) => (
                                                    <div className="mt-5" key={index}>
                                                        <p className="font-system fw-300 text-dark">
                                                            Question {index + 1}: {question.title}
                                                        </p>

                                                        {[question.answer1, question.answer2, question.answer3, question.answer4].map((answer, answerIndex) => (
                                                            <div className="answer-group" key={answerIndex}>
                                                                <label
                                                                    className={`answers-group__label answers-group__label-2 ${selectedAnswers[index] === answer ? "checked" : ""} ${
                                                                        answered && selectedAnswers[index] === answer ? (answerResults[index] ? "correct" : "incorrect") : ""
                                                                    }`}
                                                                >
                                                                    <input
                                                                        type="radio"
                                                                        className="answers-group__input"
                                                                        name={`answer${index}`}
                                                                        id={`answer${index}-${answerIndex}`}
                                                                        onChange={() => handleAnswerChange(index, answerIndex, answer)}
                                                                    />
                                                                    <div className="d-flex align-content-center">
                                                                        <div className="btn-choose">{String.fromCharCode(65 + answerIndex)}</div> <span className="fw-300">{answer}</span>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                            {allQuestionsAnswered() && (
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div>{answered && answerResults.includes(false) && <p className="text-danger shake">The answer is not correct!</p>}</div>

                                                    <div className="text-end lesson-btn__wrapper">
                                                        <button className="rbt-btn btn-gradient btn-gradient-3 fw-light" style={{ height: 40, lineHeight: "40px" }} onClick={handleCheckAnswers}>
                                                            Answer the question
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {lessonData.itemType === 2 && (
                            <div className="rbt-lesson-rightsidebar overflow-hidden">
                                <div className="inner">
                                    <div className="content">{lessonData && lessonData.content && <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: lessonData.content }} />}</div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </LayoutLessonOnline>
        </>
    );
}

export default LearningOnline;
