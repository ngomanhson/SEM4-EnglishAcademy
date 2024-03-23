import { Link, useParams } from "react-router-dom";
import Layout from "../../../layouts";
import { useCallback, useEffect, useState } from "react";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { format } from "date-fns";
import ReactPlayer from "react-player";

function CourseDetail() {
    const { slug } = useParams();

    const [course, setCourse] = useState({});

    const loadCourse = useCallback(async () => {
        try {
            const courseResponse = await api.get(url.ONLINE_COURSE.DETAIL + `/${slug}`);
            setCourse(courseResponse.data.data);
            console.log(courseResponse.data.data);
        } catch (error) {
            console.error("Error loading course:", error);
        }
    }, [slug]);

    useEffect(() => {
        loadCourse();
    }, [loadCourse]);

    const topics = course.topicOnlineDetailList || [];

    return (
        <Layout title="Course Detail">
            <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
                <div className="breadcrumb-inner">
                    <img src="assets/images/bg/bg-image-10.jpg" alt="Education Images" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="content text-start">
                                <ul className="page-list">
                                    <li className="rbt-breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <div className="icon-right">
                                            <i className="feather-chevron-right"></i>
                                        </div>
                                    </li>
                                    <li className="rbt-breadcrumb-item active">Course Detail</li>
                                </ul>
                                <h2 className="title">{course.name}</h2>
                                <p className="description text-secondary">{course.description}</p>

                                <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">
                                    <div className="feature-sin best-seller-badge">
                                        <span className="rbt-badge-2">
                                            <span className="image">
                                                <img src="assets/images/icons/card-icon-1.png" alt="Best Seller Icon" />
                                            </span>{" "}
                                            Bestseller
                                        </span>
                                    </div>

                                    <div className="feature-sin rating">
                                        <Link to="">{course.star} </Link>{" "}
                                        <Link to="">
                                            <i className="fa fa-star"></i>
                                        </Link>
                                        <Link to="">
                                            <i className="fa fa-star"></i>
                                        </Link>
                                        <Link to="">
                                            <i className="fa fa-star"></i>
                                        </Link>
                                        <Link to="">
                                            <i className="fa fa-star"></i>
                                        </Link>
                                        <Link to="">
                                            <i className="fa fa-star"></i>
                                        </Link>
                                    </div>

                                    <div className="feature-sin total-rating">
                                        <a className="rbt-badge-4" href="#!">
                                            215,475 rating
                                        </a>
                                    </div>

                                    <div className="feature-sin total-student">
                                        <span>616,029 students</span>
                                    </div>
                                </div>

                                <ul className="rbt-meta">
                                    <li>
                                        <i className="feather-calendar"></i>
                                        {course.createdDate && format(new Date(course.createdDate), "dd/MM/yyyy")}
                                    </li>
                                    <li>
                                        <i className="feather-globe"></i>
                                        {course.language}
                                    </li>
                                    <li>
                                        <i className="feather-award"></i>Certified Course
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rbt-course-details-area ptb--60">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="course-details-content">
                                <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
                                    <img className="w-100" src={course.image} alt="Card" />
                                </div>

                                <div className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more" id="overview">
                                    <div className="rbt-course-feature-inner has-show-more-inner-content">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">What you'll learn</h4>
                                        </div>
                                        <p>
                                            Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending
                                            the course by building a CMS system similar to WordPress, Joomla or Drupal. Knowing PHP has allowed me to make enough money to stay home and make courses
                                            like this one for students all over the world.
                                        </p>

                                        <div className="row g-5 mb--30">
                                            <div className="col-lg-6">
                                                <ul className="rbt-list-style-1">
                                                    <li>
                                                        <i className="feather-check"></i>Become an advanced, confident, and modern JavaScript developer from scratch.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Have an intermediate skill level of Python programming.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Have a portfolio of various data analysis projects.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Use the numpy library to create and manipulate arrays.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-6">
                                                <ul className="rbt-list-style-1">
                                                    <li>
                                                        <i className="feather-check"></i>Use the Jupyter Notebook Environment. JavaScript developer from scratch.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Use the pandas module with Python to create and structure data.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Have a portfolio of various data analysis projects.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Create data visualizations using matplotlib and the seaborn.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="course-content rbt-shadow-box coursecontent-wrapper mt--30" id="coursecontent">
                                    <div className="rbt-course-feature-inner">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Course Content</h4>
                                        </div>
                                        <div className="rbt-accordion-style rbt-accordion-02 accordion">
                                            <div className="accordion" id="accordionExampleb2">
                                                {topics.map((topic, index) => {
                                                    const accordionId = `accordion-${topic.id}-${index}`;
                                                    const collapseId = `collapse-${topic.id}-${index}`;
                                                    return (
                                                        <div className="accordion-item card" key={topic.id}>
                                                            <h2 className="accordion-header card-header" id={`heading-${accordionId}`}>
                                                                <button
                                                                    className="accordion-button"
                                                                    type="button"
                                                                    data-bs-toggle="collapse"
                                                                    data-bs-target={`#${collapseId}`}
                                                                    aria-expanded="true"
                                                                    aria-controls={collapseId}
                                                                >
                                                                    {topic.name} <span className="rbt-badge-5 ml--10">1hr 30min</span>
                                                                </button>
                                                            </h2>
                                                            <div
                                                                id={collapseId}
                                                                className="accordion-collapse collapse show"
                                                                aria-labelledby={`heading-${accordionId}`}
                                                                data-bs-parent="#accordionExampleb2"
                                                            >
                                                                <div className="accordion-body card-body pr--0">
                                                                    <ul className="rbt-course-main-content liststyle">
                                                                        {topic.itemOnlineDTOList.map((topicItem) => {
                                                                            return (
                                                                                <li key={topicItem.id}>
                                                                                    {topicItem.status === false ? (
                                                                                        <p>
                                                                                            <div className="course-content-left">
                                                                                                <div className="d-flex align-content-center">
                                                                                                    <i className="feather-play-circle mt-3"></i>
                                                                                                    <div className="d-flex flex-column">
                                                                                                        <span className="text">{topicItem.title}</span>
                                                                                                        <span className="time">04:00</span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="course-content-right">
                                                                                                <span className="rbt-check">
                                                                                                    <i className="feather-lock"></i>
                                                                                                </span>
                                                                                            </div>
                                                                                        </p>
                                                                                    ) : (
                                                                                        <Link to={`/lesson/${topic.slug}`}>
                                                                                            <div className="course-content-left">
                                                                                                <div className="d-flex align-content-center">
                                                                                                    <i className="feather-play-circle mt-3"></i>
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
                                                                                    )}
                                                                                </li>
                                                                            );
                                                                        })}
                                                                        {/* {topic.itemOnlineDTOList.map((topicItem) => {
                                                                            return (
                                                                                <li key={topicItem.id}>
                                                                                    {topicItem.status === false ? (
                                                                                        <div className="course-content-left">
                                                                                            <div className="d-flex align-content-center">
                                                                                                <i className="feather-play-circle mt-3"></i>
                                                                                                <div className="d-flex flex-column">
                                                                                                    <span className="text">{topicItem.title}</span>
                                                                                                    <span className="time">04:00</span>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div className="course-content-right">
                                                                                                <span className="rbt-check">
                                                                                                    <i className="feather-lock"></i>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                    ) : (
                                                                                        <Link to={`/lesson/${topic.slug}`}>
                                                                                            <div className="course-content-left">
                                                                                                <div className="d-flex align-content-center">
                                                                                                    <i className="feather-play-circle mt-3"></i>
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
                                                                                    )}
                                                                                </li>
                                                                            );
                                                                        })} */}
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

                                <div className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
                                    <div className="row g-5">
                                        <div className="col-lg-6">
                                            <div className="section-title">
                                                <h4 className="rbt-title-style-3 mb--20">Requirements</h4>
                                            </div>
                                            <ul className="rbt-list-style-1">
                                                <li>
                                                    <i className="feather-check"></i>Become an advanced, confident, and modern JavaScript developer from scratch.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Have an intermediate skill level of Python programming.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Have a portfolio of various data analysis projects.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Use the numpy library to create and manipulate arrays.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="section-title">
                                                <h4 className="rbt-title-style-3 mb--20">Description</h4>
                                            </div>
                                            <ul className="rbt-list-style-1">
                                                <li>
                                                    <i className="feather-check"></i>Use the Jupyter Notebook Environment. JavaScript developer from scratch.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Use the pandas module with Python to create and structure data.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Have a portfolio of various data analysis projects.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Create data visualizations using matplotlib and the seaborn.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30" id="review">
                                    <div className="course-content">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Review</h4>
                                        </div>
                                        <div className="row g-5 align-items-center">
                                            <div className="col-lg-3">
                                                <div className="rating-box">
                                                    <div className="rating-number">5.0</div>
                                                    <div className="rating">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                    </div>
                                                    <span className="sub-title">Course Rating</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="review-wrapper">
                                                    <div className="single-progress-bar">
                                                        <div className="rating-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "63%" }} aria-valuenow="63" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="value-text">63%</span>
                                                    </div>

                                                    <div className="single-progress-bar">
                                                        <div className="rating-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "29%" }} aria-valuenow="29" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="value-text">29%</span>
                                                    </div>

                                                    <div className="single-progress-bar">
                                                        <div className="rating-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "6%" }} aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="value-text">6%</span>
                                                    </div>

                                                    <div className="single-progress-bar">
                                                        <div className="rating-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "1%" }} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="value-text">1%</span>
                                                    </div>

                                                    <div className="single-progress-bar">
                                                        <div className="rating-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "1%" }} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="value-text">1%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-author-list rbt-shadow-box featured-wrapper mt--30 has-show-more">
                                    <div className="section-title">
                                        <h4 className="rbt-title-style-3">Featured review</h4>
                                    </div>
                                    <div className="has-show-more-inner-content rbt-featured-review-list-wrapper">
                                        <div className="rbt-course-review about-author">
                                            <div className="media">
                                                <div className="thumbnail">
                                                    <a href="#!">
                                                        <img src="assets/images/testimonial/testimonial-3.jpg" alt="Author Images" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="author-info">
                                                        <h5 className="title">
                                                            <a className="hover-flip-item-wrapper" href="#!">
                                                                {" "}
                                                                Farjana Bawnia{" "}
                                                            </a>
                                                        </h5>
                                                        <div className="rating">
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="description">
                                                            At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
                                                        </p>
                                                        <ul className="social-icon social-default transparent-with-border justify-content-start">
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-up"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-down"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rbt-course-review about-author">
                                            <div className="media">
                                                <div className="thumbnail">
                                                    <a href="#!">
                                                        <img src="assets/images/testimonial/testimonial-4.jpg" alt="Author Images" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="author-info">
                                                        <h5 className="title">
                                                            <a className="hover-flip-item-wrapper" href="#!">
                                                                Razwan Islam
                                                            </a>
                                                        </h5>
                                                        <div className="rating">
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="description">
                                                            My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
                                                        </p>
                                                        <ul className="social-icon social-default transparent-with-border justify-content-start">
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-up"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-down"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rbt-course-review about-author">
                                            <div className="media">
                                                <div className="thumbnail">
                                                    <a href="#!">
                                                        <img src="assets/images/testimonial/testimonial-1.jpg" alt="Author Images" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="author-info">
                                                        <h5 className="title">
                                                            <a className="hover-flip-item-wrapper" href="#!">
                                                                Babor Azom
                                                            </a>
                                                        </h5>
                                                        <div className="rating">
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="description">
                                                            My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
                                                        </p>
                                                        <ul className="social-icon social-default transparent-with-border justify-content-start">
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-up"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-down"></i>
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

                            <div className="related-course mt--60">
                                <div className="row g-5 align-items-end mb--40">
                                    <div className="col-lg-8 col-md-8 col-12">
                                        <div className="section-title">
                                            <span className="subtitle bg-pink-opacity">Top Course</span>
                                            <h4 className="title">
                                                More Course By <strong className="color-primary">Angela</strong>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="read-more-btn text-start text-md-end">
                                            <a className="rbt-btn rbt-switch-btn btn-border btn-sm" href="#!">
                                                <span data-text="View All Course">View All Course</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-5">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                        <div className="rbt-card variation-01 rbt-hover">
                                            <div className="rbt-card-img">
                                                <a href="course-details.html">
                                                    <img src="assets/images/course/course-online-01.jpg" alt="Card" />
                                                    <div className="rbt-badge-3 bg-white">
                                                        <span>-40%</span>
                                                        <span>Off</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="rbt-card-body">
                                                <div className="rbt-card-top">
                                                    <div className="rbt-review">
                                                        <div className="rating">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                        <span className="rating-count"> (15 Reviews)</span>
                                                    </div>
                                                    <div className="rbt-bookmark-btn">
                                                        <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                            <i className="feather-bookmark"></i>
                                                        </a>
                                                    </div>
                                                </div>

                                                <h4 className="rbt-card-title">
                                                    <a href="course-details.html">React Front To Back</a>
                                                </h4>

                                                <ul className="rbt-meta">
                                                    <li>
                                                        <i className="feather-book"></i>12 Lessons
                                                    </li>
                                                    <li>
                                                        <i className="feather-users"></i>50 Students
                                                    </li>
                                                </ul>

                                                <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
                                                <div className="rbt-author-meta mb--10">
                                                    <div className="rbt-avater">
                                                        <a href="#!">
                                                            <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                                                        </a>
                                                    </div>
                                                    <div className="rbt-author-info">
                                                        By <a href="profile.html">Angela</a> In <a href="#!">Development</a>
                                                    </div>
                                                </div>
                                                <div className="rbt-card-bottom">
                                                    <div className="rbt-price">
                                                        <span className="current-price">$60</span>
                                                        <span className="off-price">$120</span>
                                                    </div>
                                                    <a className="rbt-btn-link" href="course-details.html">
                                                        Learn More<i className="feather-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                        <div className="rbt-card variation-01 rbt-hover">
                                            <div className="rbt-card-img">
                                                <a href="course-details.html">
                                                    <img src="assets/images/course/course-online-02.jpg" alt="Card" />
                                                </a>
                                            </div>
                                            <div className="rbt-card-body">
                                                <div className="rbt-card-top">
                                                    <div className="rbt-review">
                                                        <div className="rating">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                        </div>
                                                        <span className="rating-count"> (15 Reviews)</span>
                                                    </div>
                                                    <div className="rbt-bookmark-btn">
                                                        <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                            <i className="feather-bookmark"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h4 className="rbt-card-title">
                                                    <a href="course-details.html">PHP Beginner Advanced</a>
                                                </h4>
                                                <ul className="rbt-meta">
                                                    <li>
                                                        <i className="feather-book"></i>12 Lessons
                                                    </li>
                                                    <li>
                                                        <i className="feather-users"></i>50 Students
                                                    </li>
                                                </ul>

                                                <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
                                                <div className="rbt-author-meta mb--10">
                                                    <div className="rbt-avater">
                                                        <a href="#!">
                                                            <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                                                        </a>
                                                    </div>
                                                    <div className="rbt-author-info">
                                                        By <a href="profile.html">Angela</a> In <a href="#!">Development</a>
                                                    </div>
                                                </div>
                                                <div className="rbt-card-bottom">
                                                    <div className="rbt-price">
                                                        <span className="current-price">$60</span>
                                                        <span className="off-price">$120</span>
                                                    </div>
                                                    <a className="rbt-btn-link left-icon" href="course-details.html">
                                                        <i className="feather-shopping-cart"></i> Add To Cart
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
                                <div className="inner">
                                    <Link to="" className="video-popup-with-text  text-center popup-video sidebar-video-hidden mb--15">
                                        <div className="video-content">
                                            <ReactPlayer url={course.trailer} controls className="w-100" />
                                        </div>
                                    </Link>

                                    <div className="content-item-content">
                                        <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                                            <div className="rbt-price">
                                                <span className="current-price">$60.99</span>
                                                <span className="off-price">$84.99</span>
                                            </div>
                                            <div className="discount-time">
                                                <span className="rbt-badge color-danger bg-color-danger-opacity">
                                                    <i className="feather-clock"></i> 3 days left!
                                                </span>
                                            </div>
                                        </div>

                                        <div className="add-to-card-button mt--15">
                                            <a className="rbt-btn btn-gradient icon-hover w-100 d-block text-center" href="#!">
                                                <span className="btn-text">Register to study</span>
                                                <span className="btn-icon">
                                                    <i className="feather-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>

                                        <span className="subtitle">
                                            <i className="feather-rotate-ccw"></i> 30-Day Money-Back Guarantee
                                        </span>

                                        <div className="rbt-widget-details has-show-more">
                                            <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                                                <li>
                                                    <span>Start Date</span>
                                                    <span className="rbt-feature-value rbt-badge-5">5 Hrs 20 Min</span>
                                                </li>
                                                <li>
                                                    <span>Enrolled</span>
                                                    <span className="rbt-feature-value rbt-badge-5">100</span>
                                                </li>
                                                <li>
                                                    <span>Lectures</span>
                                                    <span className="rbt-feature-value rbt-badge-5">50</span>
                                                </li>
                                                <li>
                                                    <span>Skill Level</span>
                                                    <span className="rbt-feature-value rbt-badge-5">Basic</span>
                                                </li>
                                                <li>
                                                    <span>Language</span>
                                                    <span className="rbt-feature-value rbt-badge-5">English</span>
                                                </li>
                                                <li>
                                                    <span>Quizzes</span>
                                                    <span className="rbt-feature-value rbt-badge-5">10</span>
                                                </li>
                                                <li>
                                                    <span>Certificate</span>
                                                    <span className="rbt-feature-value rbt-badge-5">Yes</span>
                                                </li>
                                                <li>
                                                    <span>Pass Percentage</span>
                                                    <span className="rbt-feature-value rbt-badge-5">95%</span>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="social-share-wrapper mt--30 text-center">
                                            <hr className="mt--20" />
                                            <div className="contact-with-us text-center">
                                                <p>For details about the course</p>
                                                <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                                                    <i className="feather-phone mr--5"></i> Call Us:{" "}
                                                    <a href="#!">
                                                        <strong>+444 555 666 777</strong>
                                                    </a>
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

            {/* <div className="rbt-course-action-bottom rbt-course-action-active">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="section-title text-center text-md-start">
                                <h5 className="title mb--0">The Complete Histudy 2023: From Zero to Expert!</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt_sm--15">
                            <div className="course-action-bottom-right rbt-single-group">
                                <div className="rbt-single-list rbt-price large-size justify-content-center">
                                    <span className="current-price color-primary">$750.00</span>
                                    <span className="off-price">$1500.00</span>
                                </div>
                                <div className="rbt-single-list action-btn">
                                    <a className="rbt-btn btn-gradient hover-icon-reverse btn-md" href="#!">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Purchase Now</span>
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
            </div> */}
        </Layout>
    );
}

export default CourseDetail;
