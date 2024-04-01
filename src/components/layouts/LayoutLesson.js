import { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useParams } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";

function LayoutLesson({ children, title }) {
    const { courseSlug } = useParams();

    const [closeSidebar, setCloseSidebar] = useState(false);
    const [topicByStudent, setTopicByStudent] = useState([]);

    const location = useLocation();
    const [activeLink, setActiveLink] = useState("");

    const handleLinkClick = (slug) => {
        setActiveLink(slug);
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const slug = queryParams.get("lesson") || queryParams.get("test");
        setActiveLink(slug || "");
    }, [location.search]);

    const studentId = 1;

    // Open and close the Sidebar
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

    // Call the API Topic by Student
    const loadTopics = useCallback(async () => {
        try {
            const topics = await api.get(url.ONLINE_COURSE.TOPIC_ONLINE + `/${courseSlug}/` + studentId);
            setTopicByStudent(topics.data.data);
        } catch (error) {}
    }, [courseSlug]);

    useEffect(() => {
        loadTopics();
    }, [loadTopics, activeLink]);

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
                                    {topicByStudent.map((topic, index) => {
                                        const accordionId = `accordion-${topic.id}-${index}`;
                                        const collapseId = `collapse-${topic.id}-${index}`;
                                        let itemIndex = 0;
                                        const totalItems = topic.itemOnlineDetailList.length + topic.testOnlineResponseDTOList.length;
                                        return (
                                            <div className="accordion-item card" key={topic.id}>
                                                <h2 className="accordion-header card-header" id={`heading-${accordionId}`}>
                                                    <button
                                                        className="accordion-button collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        aria-expanded="false"
                                                        data-bs-target={`#${collapseId}`}
                                                        aria-controls={collapseId}
                                                    >
                                                        {topic.name}{" "}
                                                        <span className="rbt-badge-5 ml--10">
                                                            {itemIndex + 1}/{totalItems}
                                                        </span>
                                                    </button>
                                                </h2>
                                                <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={`heading-${accordionId}`}>
                                                    <div className="accordion-body card-body">
                                                        <ul className="rbt-course-main-content liststyle">
                                                            {topic.itemOnlineDetailList.map((topicItem) => (
                                                                <li key={topicItem.id}>
                                                                    <Link
                                                                        to={`/learning/${courseSlug}?lesson=${topicItem.slug}`}
                                                                        onClick={() => handleLinkClick(topicItem.slug)}
                                                                        className={activeLink === topicItem.slug ? "active" : ""}
                                                                    >
                                                                        <div className="course-content-left">
                                                                            <div className="d-flex align-content-center">
                                                                                {topicItem.itemType === 0 && <i className="feather-play-circle mt-3"></i>}
                                                                                {topicItem.itemType === 1 && <i className="feather-help-circle mt-3"></i>}
                                                                                {topicItem.itemType === 2 && <i className="fas fa-thumbtack mt-3"></i>}
                                                                                <div className="d-flex flex-column">
                                                                                    <span className="text">{topicItem.title}</span>
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
                                                            ))}

                                                            {topic.testOnlineResponseDTOList.map((topicItem) => (
                                                                <li key={topicItem.id}>
                                                                    <Link
                                                                        to={`/learning/test/${courseSlug}?test=${topicItem.slug}`}
                                                                        onClick={() => handleLinkClick(topicItem.slug)}
                                                                        className={activeLink === topicItem.slug ? "active" : ""}
                                                                    >
                                                                        <div className="course-content-left">
                                                                            <div className="d-flex align-content-center">
                                                                                <i className="far fa-file-alt mt-3"></i>
                                                                                <div className="d-flex flex-column">
                                                                                    <span className="text">{topicItem.title}</span>
                                                                                    <span className="time">04:00</span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
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
