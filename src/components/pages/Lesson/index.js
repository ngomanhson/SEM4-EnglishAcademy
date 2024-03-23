import { useState } from "react";
import VideoLesson from "./VideoLesson";
import LayoutLesson from "../../layouts/LayoutLesson";

function Lesson() {
    const [currentTime, setCurrentTime] = useState(0);

    const handleCurrentTimeChange = (newTime) => {
        setCurrentTime(newTime);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
    return (
        <>
            <LayoutLesson title="Lesson">
                <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
                    <div className="lesson-top-bar">
                        <div className="lesson-top-left">
                            <h5>The Complete Histudy 2023: From Zero to Expert!</h5>
                        </div>
                        <div className="lesson-top-right">
                            <div className="rbt-btn-close"></div>
                        </div>
                    </div>
                    <div className="inner">
                        <VideoLesson onCurrentTimeChange={handleCurrentTimeChange} />

                        <div className="content">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h4 className="lesson-title">
                                        English Lesson for IT majors <i className="far fa-bookmark"></i>
                                    </h4>
                                    <span className="lesson-date">Updated February 2024</span>
                                </div>

                                <button className="add-note">
                                    <i className="feather-plus-circle"></i>
                                    <span>Added note at {formatTime(currentTime)}</span>
                                </button>
                            </div>

                            <div className="content-body">
                                <p className="lesson-description">
                                    It is often difficult for "IT people" to arrange a fixed time budget for learning English. Therefore, a flexible study schedule will help you be proactive in
                                    choosing a study time that suits your plan.
                                </p>

                                <p className="m-0 resource-title">Resources in the lesson:</p>

                                <ol className="resource-list">
                                    <li>
                                        <a className="" href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
                                            https://getbootstrap.com/docs/5.3/getting-started/introduction/
                                        </a>
                                    </li>
                                    <li>
                                        <a className="" href="https://github.com/feathericons/feather#feather">
                                            https://github.com/feathericons/feather#feather
                                        </a>
                                    </li>
                                    <li>
                                        <a className="" href="https://cssgradient.io/blog/css-gradient-text/">
                                            https://cssgradient.io/blog/css-gradient-text/
                                        </a>
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
                </div>
            </LayoutLesson>
        </>
    );
}

export default Lesson;
