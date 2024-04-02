import { useCallback, useEffect, useState } from "react";
import VideoLesson from "./VideoLesson";
import LayoutLesson from "../../layouts/LayoutLesson";
import { useLocation } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
import { format } from "date-fns";
import Loading from "../../layouts/Loading";
import Confetti from "react-confetti";

function Learning() {
    const location = useLocation();
    const itemSlug = new URLSearchParams(location.search).get("lesson");
    const [lessonData, setLessonData] = useState({});
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
    const [loading, setLoading] = useState(false);
    const [answered, setAnswered] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [windowSize, setWindowSize] = useState({
        with: undefined,
        height: undefined,
    });

    const loadItemOnline = useCallback(async () => {
        try {
            setLoading(true);
            const itemOnlineResponse = await api.get(url.ONLINE_COURSE.ITEM_ONLINE + "/" + itemSlug);
            setLessonData(itemOnlineResponse.data.data);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    }, [itemSlug]);

    function handleWindowSize() {
        setWindowSize({
            with: window.innerWidth,
            height: window.innerHeight,
        });
    }

    useEffect(() => {
        loadItemOnline();
        window.onresize = () => handleWindowSize();
    }, [loadItemOnline]);

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

    const handleCheckAnswers = () => {
        try {
            setLoading(true);
            const correctAnswers = lessonData.questionItemOnlineDTOList.map((question) => question.answerCorrect);
            const userAnswers = selectedAnswers;

            const result = correctAnswers.every((correctAnswer, index) => correctAnswer === userAnswers[index]);

            setIsAnswerCorrect(result);
            setAnswered(true);
            if (result) {
                setShowConfetti(true);
                setTimeout(() => {
                    setShowConfetti(false);
                }, 2500);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {loading && <Loading />}
            {showConfetti && <Confetti width={windowSize.with} height={windowSize.height} numberOfPieces={80} />}

            <LayoutLesson title="Lesson">
                <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
                    {lessonData.itemType === 0 && (
                        <div className="inner">
                            <VideoLesson onCurrentTimeChange={handleCurrentTimeChange} src={lessonData.pathUrl} />

                            <div className="content">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="lesson-title">
                                            {lessonData.title} <i className="far fa-bookmark"></i>
                                        </h4>
                                        {lessonData.modifiedDate && <span className="lesson-date">Updated {format(new Date(lessonData.modifiedDate), "dd/MM/yyyy")}</span>}
                                    </div>

                                    <button className="add-note">
                                        <i className="feather-plus-circle"></i>
                                        <span>Added note at {formatTime(currentTime)}</span>
                                    </button>
                                </div>

                                <div className="content-body">
                                    <p className="lesson-description">{lessonData.content}</p>

                                    <p className="m-0 resource-title">Resources in the lesson:</p>

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
                                            {lessonData.modifiedDate && <span className="lesson-date">Updated {format(new Date(lessonData.modifiedDate), "dd/MM/yyyy")}</span>}
                                        </div>

                                        <div className="content-body">
                                            {questionItem.map((question, index) => (
                                                <div className="mt-5" key={index}>
                                                    <p className="font-system">{question.title}</p>

                                                    {[question.answer1, question.answer2, question.answer3, question.answer4].map((answer, answerIndex) => (
                                                        <div className="answer-group" key={answerIndex}>
                                                            <label
                                                                className={`answers-group__label ${selectedAnswers[index] === answer ? "checked" : ""} ${
                                                                    answered && selectedAnswers[index] === answer ? (isAnswerCorrect ? "correct" : "incorrect") : ""
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
                                                                    <div className="btn-choose">{String.fromCharCode(65 + answerIndex)}</div> {answer}
                                                                </div>
                                                            </label>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="text-end lesson-btn__wrapper">
                                            <button className="rbt-btn btn-gradient btn-gradient-3 fw-light" style={{ height: 40, lineHeight: "40px" }} onClick={handleCheckAnswers}>
                                                Answer the question
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {lessonData.itemType === 2 && <p>tai lieu</p>}
                </div>
            </LayoutLesson>
        </>
    );
}

export default Learning;
