import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function LayoutLesson({ children, title }) {
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

    return (
        <>
            <Helmet>
                <title>{title} | English Academy</title>
            </Helmet>
            <div className="rbt-lesson-area bg-color-white">
                <div className="rbt-lesson-content-wrapper">
                    <div className="rbt-lesson-leftsidebar">
                        <div className="rbt-course-feature-inner rbt-search-activation">
                            <div className="section-title mt-3">
                                <Link to="/">
                                    <img src="assets/images/logo/logo.png" alt="English Academy" style={{ maxWidth: 150, objectFit: "cover" }} />
                                </Link>
                            </div>

                            <div className="lesson-search-wrapper d-flex">
                                <button className="btn text-primary d-flex flex-column align-items-center justify-content-center lesson-save">
                                    <i className="fas fa-bookmark"></i>
                                    Lesson saved
                                </button>

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
                                                        <Link
                                                            to="/lesson"
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
                                                        </Link>
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

                    {children}

                    <div className="rbt-course-action-bottom rbt-course-action-active p-0">
                        <div className="bottom-wrapper p-2">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="col-lg-6 col-md-6">
                                    <div className="text-center text-md-start">
                                        <button className="btn btn-primary__custom" onClick={handleClose}>
                                            <span>{closeSidebar ? <i className="fas fa-bars"></i> : <i className="fas fa-times"></i>}</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 mt_sm--15">
                                    <div className="text-center text-md-end">
                                        <button
                                            className="btn btn-primary__custom"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasNavbar"
                                            aria-controls="offcanvasNavbar"
                                            aria-label="Toggle navigation"
                                        >
                                            <span>
                                                <i className="fas fa-question"></i>
                                            </span>
                                        </button>
                                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                            <div className="offcanvas-header">
                                                <h5 className="offcanvas-title text-center" id="offcanvasNavbarLabel">
                                                    Q&A
                                                </h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body">
                                                <p className="text-start" style={{ fontSize: "1.4rem" }}>
                                                    (If you see spam comments, please click report to help admin)
                                                </p>
                                            </div>
                                        </div>
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

export default LayoutLesson;
