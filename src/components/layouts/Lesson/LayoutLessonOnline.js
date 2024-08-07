import PropTypes from "prop-types";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import url from "../../../services/url";
import api from "../../../services/api";
import NotFound from "../../pages/Other/NotFound";
import { getAccessToken } from "../../../utils/auth";
import { formatMinute } from "../../../utils/formatTime";
import config from "../../../config";

function LayoutLessonOnline({ children, title, nextLesson = true }) {
    const { courseSlug } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [closeSidebar, setCloseSidebar] = useState(false);
    const itemSlug = new URLSearchParams(location.search).get("lesson");
    const [topicByStudent, setTopicByStudent] = useState([]);
    const [activeLink, setActiveLink] = useState("");
    const [dataNotFound, setDataNotFound] = useState(false);
    const [isActiveLink, setIsActiveLink] = useState(false);

    const handleLinkClick = (slug) => {
        setActiveLink(slug);
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const slug = queryParams.get("lesson") || queryParams.get("test");
        setActiveLink(slug || "");

        if (location.search === "?certificate") {
            setIsActiveLink(true);
        } else {
            setIsActiveLink(false);
        }
    }, [location.search]);

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

    const loadData = useCallback(async () => {
        try {
            const topicResponse = await api.get(url.ONLINE_COURSE.TOPIC_ONLINE + `/${courseSlug}`, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            });
            setTopicByStudent(topicResponse.data.data);
        } catch (error) {
            console.log(error);

            if (error.message === "Request failed with status code 404") {
                setDataNotFound(true);
            }
        }
    }, [courseSlug]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const topics = useMemo(() => topicByStudent.topicOnlineDetailResponseList || [], [topicByStudent]);

    const [openAccordion, setOpenAccordion] = useState({});

    useEffect(() => {
        topics.forEach((topic, index) => {
            const collapseId = `collapse-${topic.id}-${index}`;
            const accordionElement = document.getElementById(collapseId);
            if (accordionElement) {
                if (openAccordion[index]) {
                    accordionElement.classList.add("show");
                } else {
                    accordionElement.classList.remove("show");
                }
            }
        });
    }, [openAccordion, topics]);

    const handleAccordionClick = (index) => {
        setOpenAccordion((prevOpenAccordion) => ({
            ...prevOpenAccordion,
            [index]: !prevOpenAccordion[index],
        }));
    };

    useEffect(() => {
        const storedOpenAccordion = localStorage.getItem("accordion");
        if (storedOpenAccordion) {
            setOpenAccordion(JSON.parse(storedOpenAccordion));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("accordion", JSON.stringify(openAccordion));
    }, [openAccordion]);

    const handleNextLessonClick = async () => {
        try {
            const currentTopicIndex = topics.findIndex(
                (topic) => topic.itemOnlineDetailList.some((item) => item.slug === activeLink) || topic.testOnlineResponseDTOList.some((test) => test.slug === activeLink)
            );

            if (currentTopicIndex !== -1) {
                let nextTopicIndex = currentTopicIndex;
                let nextItemIndex = 0;
                let isTest = false;

                const currentTopic = topics[currentTopicIndex];

                if (currentTopic.testOnlineResponseDTOList.some((test) => test.slug === activeLink)) {
                    isTest = true;
                }

                const currentItemIndex = currentTopic.itemOnlineDetailList.findIndex((item) => item.slug === activeLink);

                if (!isTest) {
                    if (currentItemIndex !== -1 && currentItemIndex < currentTopic.itemOnlineDetailList.length - 1) {
                        nextItemIndex = currentItemIndex + 1;
                    } else {
                        nextTopicIndex++;
                        nextItemIndex = 0;

                        if (nextTopicIndex >= topics.length) {
                            nextTopicIndex = 0;
                        }
                    }
                    setOpenAccordion((prevOpenAccordion) => ({
                        ...prevOpenAccordion,
                        [nextItemIndex + 1]: !prevOpenAccordion[nextTopicIndex],
                    }));
                } else {
                    if (currentItemIndex !== -1 && currentItemIndex < currentTopic.itemOnlineDetailList.length - 1) {
                        nextItemIndex = currentItemIndex + 1;
                    } else {
                        nextTopicIndex++;
                        nextItemIndex = 0;
                    }
                }

                const nextTopic = topics[nextTopicIndex];
                let nextSlug = null;

                if (!isTest) {
                    nextSlug = nextTopic.itemOnlineDetailList[nextItemIndex].slug;
                } else {
                    if (nextTopic.itemOnlineDetailList.length > 0) {
                        nextSlug = nextTopic.itemOnlineDetailList[0].slug;
                    } else if (nextTopic.testOnlineResponseDTOList.length > 0) {
                        nextSlug = nextTopic.testOnlineResponseDTOList[0].slug;
                    }
                }

                try {
                    const completeItem = await api.put(url.ONLINE_COURSE.COMPLETE_ITEM + `/${itemSlug}`, null, {
                        headers: {
                            Authorization: `Bearer ${getAccessToken()}`,
                        },
                    });

                    if (completeItem.status === 200) {
                        await loadData();
                    }
                } catch (error) {
                    console.log(error);
                }

                if (nextSlug) {
                    navigate(`/learning-online/${courseSlug}?lesson=${nextSlug}`);
                }
            }
        } catch (error) {
            console.log(error);
        }
    };

    let indexTopic = 0;

    return (
        <>
            <Helmet>
                <title>{title} | English Academy</title>
            </Helmet>

            {dataNotFound ? (
                <NotFound />
            ) : (
                <div className="rbt-lesson-area bg-color-white">
                    <div className="rbt-lesson-content-wrapper">
                        <div className="rbt-lesson-leftsidebar">
                            <div className="rbt-course-feature-inner rbt-search-activation">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="section-title mt-3">
                                        <Link to={config.routes.home}>
                                            <img src="assets/images/logo/logo.png" alt="English Academy" style={{ maxWidth: 150, objectFit: "cover" }} />
                                        </Link>
                                    </div>

                                    <div className="progress-circle mr--15">
                                        <svg className="progress-ring" width="50" height="50">
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stopColor="#5ebbff" />
                                                    <stop offset="100%" stopColor="#a174ff" />
                                                </linearGradient>
                                            </defs>
                                            <circle className="progress-ring-circle" stroke="#f1f1f1" strokeWidth="4" fill="transparent" r="20" cx="25" cy="25" />
                                            <circle
                                                className="progress-ring-circle progress-ring-indicator"
                                                stroke="url(#gradient)"
                                                strokeWidth="4"
                                                fill="transparent"
                                                r="20"
                                                cx="25"
                                                cy="25"
                                                style={{ strokeDashoffset: `${((100 - topicByStudent.progress) * 125) / 100}px` }}
                                            />
                                            <text x="50%" y="50%" dy="4px" textAnchor="middle">
                                                <tspan className="progress-text" fill="url(#gradient)">
                                                    {topicByStudent.progress}%
                                                </tspan>
                                            </text>
                                        </svg>
                                    </div>
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

                                <div className="rbt-accordion-style rbt-accordion-02 for-right-content accordion scrollbar-accordion">
                                    <div className="accordion" id="accordionExampleb2">
                                        {topics.map((topic, index) => {
                                            const accordionId = `accordion-${topic.id}-${index}`;
                                            const collapseId = `collapse-${topic.id}-${index}`;

                                            indexTopic = index + 2;

                                            // const totalItems = topic.itemOnlineDetailList.length + topic.testOnlineResponseDTOList.length;
                                            return (
                                                <div className="accordion-item card" key={topic.id}>
                                                    <h2 className="accordion-header card-header" id={`heading-${accordionId}`}>
                                                        <button
                                                            className={`accordion-button ${openAccordion[index] ? "" : "collapsed"}`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            aria-expanded={openAccordion[index] ? "true" : "false"}
                                                            data-bs-target={`#${collapseId}`}
                                                            aria-controls={collapseId}
                                                            onClick={() => handleAccordionClick(index)}
                                                        >
                                                            {index + 1}. {topic.name}
                                                        </button>
                                                    </h2>
                                                    <div id={collapseId} className="accordion-collapse collapse" aria-labelledby={`heading-${accordionId}`}>
                                                        <div className="accordion-body card-body">
                                                            <ul className="rbt-course-main-content liststyle">
                                                                {topic.itemOnlineDetailList.map((topicItem, itemIndex) => (
                                                                    <li className="m-0" key={topicItem.id}>
                                                                        <Link
                                                                            to={`/learning-online/${courseSlug}?lesson=${topicItem.slug}`}
                                                                            onClick={() => handleLinkClick(topicItem.slug)}
                                                                            className={activeLink === topicItem.slug ? "active" : ""}
                                                                        >
                                                                            <div className="course-content-left">
                                                                                <div className="d-flex align-content-center">
                                                                                    {topicItem.itemType === 0 && <i className="feather-play-circle mt-3"></i>}
                                                                                    {topicItem.itemType === 1 && <i className="feather-help-circle mt-3"></i>}
                                                                                    {topicItem.itemType === 2 && <i className="feather-hash mt-3"></i>}
                                                                                    <div className="d-flex flex-column">
                                                                                        <span className="text">
                                                                                            {index + 1}.{itemIndex + 1} {topicItem.title}
                                                                                        </span>
                                                                                        <span className="time">{formatMinute(topicItem.duration)}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            {topicItem.status === true && (
                                                                                <div className="course-content-right">
                                                                                    <span className="rbt-check">
                                                                                        <i className="feather-check"></i>
                                                                                    </span>
                                                                                </div>
                                                                            )}
                                                                        </Link>
                                                                    </li>
                                                                ))}

                                                                {topic.testOnlineResponseDTOList.map((topicItem) => (
                                                                    <li key={topicItem.id}>
                                                                        <Link
                                                                            to={`/learning-test/${courseSlug}?test=${topicItem.slug}`}
                                                                            onClick={() => handleLinkClick(topicItem.slug)}
                                                                            className={activeLink === topicItem.slug ? "active" : ""}
                                                                        >
                                                                            <div className="course-content-left">
                                                                                <div className="d-flex align-content-center">
                                                                                    <i className="far fa-file-alt mt-3"></i>
                                                                                    <div className="d-flex flex-column">
                                                                                        <span className="text">{topicItem.title}</span>
                                                                                        <span className="time">{formatMinute(topicItem.time)}</span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="course-content-right">
                                                                                {topicItem.status === false ? (
                                                                                    <span className="">
                                                                                        <i className="feather-unlock"></i>{" "}
                                                                                    </span>
                                                                                ) : (
                                                                                    <span className="rbt-check">
                                                                                        <i className="feather-check"></i>
                                                                                    </span>
                                                                                )}
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

                                        <div className="accordion-item card">
                                            <h2 className="accordion-header card-header" id="heading-accordion-certificate">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    aria-expanded="false"
                                                    data-bs-target="#collapse-certificate"
                                                    aria-controls="collapse-certificate"
                                                >
                                                    {indexTopic}. Complete the course
                                                </button>
                                            </h2>
                                            <div id="collapse-certificate" className="accordion-collapse collapse" aria-labelledby="heading-accordion-certificate">
                                                <div className="accordion-body card-body">
                                                    <ul className="rbt-course-main-content liststyle">
                                                        <li className="m-0">
                                                            <Link to={`/learning-online/${courseSlug}?certificate`} className={`${isActiveLink ? "active" : ""}`}>
                                                                <div className="course-content-left">
                                                                    <div className="d-flex align-content-center">
                                                                        <i className="fas fa-award mt-3"></i>
                                                                        <div className="d-flex flex-column">
                                                                            <span className="text">Get a certificate</span>
                                                                            <span className="time">05:00</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="course-content-right">
                                                                    <span className="rbt-check">
                                                                        <i className="feather-check"></i>
                                                                    </span>
                                                                </div> */}
                                                            </Link>
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

                                    {nextLesson && (
                                        <div className="col-lg-6 col-md-6 mt_sm--15">
                                            <div className="text-end">
                                                <button className="btn btn-primary__custom btn-primary__custom-2" onClick={handleNextLessonClick}>
                                                    <span>
                                                        NEXT LESSON
                                                        <i className="feather-arrow-right"></i>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

LayoutLessonOnline.proTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
};

export default LayoutLessonOnline;
