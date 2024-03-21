import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import VideoLesson from "./VideoLesson";

function Lesson() {
    const [closeSidebar, setCloseSidebar] = useState(false);

    useEffect(() => {
        const sidebar = document.getElementsByClassName("rbt-lesson-leftsidebar");

        const sidebarArray = Array.from(sidebar);

        sidebarArray.forEach((element) => {
            if (closeSidebar) {
                element.classList.add("sibebar-none");
            } else {
                element.classList.remove("sibebar-none");
            }
        });
    }, [closeSidebar]);

    const handleClose = () => {
        setCloseSidebar((prev) => !prev);
    };

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
            <Helmet>
                <title>Lesson | English Academy</title>
            </Helmet>
            <div className="rbt-lesson-area bg-color-white">
                <div className="rbt-lesson-content-wrapper">
                    <div className="rbt-lesson-leftsidebar">
                        <div className="rbt-course-feature-inner rbt-search-activation">
                            <div className="section-title mt-3">
                                <img src="assets/images/logo/logo.png" alt="English Academy" style={{ maxWidth: 150, objectFit: "cover" }} />
                            </div>

                            <div className="lesson-search-wrapper">
                                <form action="#" className="rbt-search-style-1">
                                    <input className="rbt-search-active" type="text" placeholder="Search Lesson" />
                                    <button className="search-btn disabled">
                                        <i className="feather-search"></i>
                                    </button>
                                </form>
                            </div>

                            <hr className="mt--10" />

                            <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion">
                                <div className="accordion" id="accordionExampleb2">
                                    <div className="accordion-item card">
                                        <h2 className="accordion-header card-header" id="headingTwo1">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                aria-expanded="true"
                                                data-bs-target="#collapseTwo1"
                                                aria-controls="collapseTwo1"
                                            >
                                                1. Welcome Histudy <span className="rbt-badge-5 ml--10">1/2</span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo1" className="accordion-collapse collapse show" aria-labelledby="headingTwo1">
                                            <div className="accordion-body card-body">
                                                <ul className="rbt-course-main-content liststyle">
                                                    <li>
                                                        <a
                                                            href="lesson-intro.html"
                                                            // className="active"
                                                        >
                                                            <div className="course-content-left">
                                                                <div className="d-flex align-content-center">
                                                                    <i className="feather-file-text"></i>
                                                                    <div className="d-flex flex-column">
                                                                        <span className="text">1.1 Introduction</span>
                                                                        <span className="time">04:00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="course-content-right">
                                                                <span className="rbt-check">
                                                                    <i className="feather-check"></i>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="lesson.html">
                                                            <div className="course-content-left">
                                                                <div className="d-flex align-content-center">
                                                                    <i className="feather-play-circle"></i>
                                                                    <div className="d-flex flex-column">
                                                                        <span className="text">1.2 Effective learning experience</span>
                                                                        <span className="time">04:00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="course-content-right">
                                                                <span className="rbt-check">
                                                                    <i className="feather-check"></i>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item card">
                                        <h2 className="accordion-header card-header" id="headingTwo4">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                data-bs-target="#collapseTwo4"
                                                aria-controls="collapseTwo4"
                                            >
                                                2. Welcome Lessons <span className="rbt-badge-5 ml--10">1/3</span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo4" className="accordion-collapse collapse" aria-labelledby="headingTwo4">
                                            <div className="accordion-body card-body">
                                                <ul className="rbt-course-main-content liststyle">
                                                    <li>
                                                        <a href="lesson.html">
                                                            <div className="course-content-left">
                                                                <div className="d-flex align-content-center">
                                                                    <i className="feather-play-circle"></i>
                                                                    <div className="d-flex flex-column">
                                                                        <span className="text">2.1 Effective learning experience</span>
                                                                        <span className="time">04:00</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="course-content-right">
                                                                <i className="feather-lock"></i>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#!">
                                                            <div className="course-content-left">
                                                                <i className="feather-play-circle"></i> <span className="text">Values and Variables</span>
                                                            </div>
                                                            <div className="course-content-right">
                                                                <span className="min-lable">20 min</span>
                                                                <span className="rbt-check unread">
                                                                    <i className="feather-circle"></i>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <a href="#!">
                                                            <div className="course-content-left">
                                                                <i className="feather-play-circle"></i> <span className="text">Basic Operators </span>
                                                            </div>
                                                            <div className="course-content-right">
                                                                <span className="min-lable">15 min</span>
                                                                <span className="rbt-check unread">
                                                                    <i className="feather-circle"></i>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item card">
                                        <h2 className="accordion-header card-header" id="headingTwo2">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                data-bs-target="#collapseTwo2"
                                                aria-controls="collapseTwo2"
                                            >
                                                3. Histudy Quiz <span className="rbt-badge-5 ml--10">1/2</span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo2" className="accordion-collapse collapse" aria-labelledby="headingTwo2">
                                            <div className="accordion-body card-body">
                                                <ul className="rbt-course-main-content liststyle">
                                                    <li>
                                                        <a href="lesson-quiz.html">
                                                            <div className="course-content-left">
                                                                <i className="feather-help-circle"></i> <span className="text">Histudy Quiz Start</span>
                                                            </div>
                                                            <div className="course-content-right">
                                                                <span className="rbt-check unread">
                                                                    <i className="feather-circle"></i>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="lesson-quiz-result.html">
                                                            <div className="course-content-left">
                                                                <i className="feather-help-circle"></i> <span className="text">Histudy Quiz Result</span>
                                                            </div>
                                                            <div className="course-content-right">
                                                                <span className="rbt-check unread">
                                                                    <i className="feather-circle"></i>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item card">
                                        <h2 className="accordion-header card-header" id="headingTwo3">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                aria-expanded="false"
                                                data-bs-target="#collapseTwo3"
                                                aria-controls="collapseTwo3"
                                            >
                                                4. Histudy Assignments <span className="rbt-badge-5 ml--10">1/2</span>
                                            </button>
                                        </h2>
                                        <div id="collapseTwo3" className="accordion-collapse collapse" aria-labelledby="headingTwo3">
                                            <div className="accordion-body card-body">
                                                <ul className="rbt-course-main-content liststyle">
                                                    <li>
                                                        <a href="lesson-assignments.html">
                                                            <div className="course-content-left">
                                                                <i className="feather-file-text"></i> <span className="text">Histudy Assignments</span>
                                                            </div>
                                                            <div className="course-content-right">
                                                                <span className="rbt-check unread">
                                                                    <i className="feather-circle"></i>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="lesson-assignments-submit.html">
                                                            <div className="course-content-left">
                                                                <i className="feather-file-text"></i> <span className="text">Histudy Assignments Submit</span>
                                                            </div>
                                                            <div className="course-content-right">
                                                                <span className="rbt-check unread">
                                                                    <i className="feather-circle"></i>
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
                        <div className="lesson-top-bar">
                            <div className="lesson-top-left">
                                <div className="rbt-lesson-toggle">
                                    <button onClick={handleClose} className="lesson-toggle-active btn-round-white-opacity" title="Toggle Sidebar">
                                        {closeSidebar ? <i className="feather-arrow-right"></i> : <i className="feather-arrow-left"></i>}
                                    </button>
                                </div>
                                <h5>The Complete Histudy 2023: From Zero to Expert!</h5>
                            </div>
                            <div className="lesson-top-right">
                                <div className="rbt-btn-close">
                                    {/* <a href="course-details.html" title="Go Back to Course" className="rbt-round-btn">
                                        <i className="feather-x"></i>
                                    </a> */}
                                </div>
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
                </div>

                <div className="rbt-course-action-bottom rbt-course-action-active p-0">
                    <div className="bottom-wrapper">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="col-lg-6 col-md-6">
                                <div className="text-center text-md-start">
                                    <button className="btn btn-primary__custom">
                                        <span>
                                            <i className="fas fa-question"></i>
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 mt_sm--15">
                                <div className="course-action-bottom-right rbt-single-group">
                                    <div className="rbt-single-list action-btn">
                                        <a className="rbt-btn btn-gradient hover-icon-reverse btn-md" href="#!">
                                            <span className="icon-reverse-wrapper">
                                                <span className="btn-text">Next Lesson</span>
                                                <span className="btn-icon">
                                                    <i className="feather-arrow-right"></i>
                                                </span>
                                                <span className="btn-icon">
                                                    <i className="feather-arrow-right"></i>
                                                </span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lesson;
