import { Link, useParams } from "react-router-dom";
import Layout from "../../../layouts";
import { useCallback, useEffect, useState } from "react";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { format } from "date-fns";
import ReactPlayer from "react-player";
import Review from "../../../views/Course/CourseDetail/Review";
import Rating from "../../../views/Course/CourseDetail/Rating";
import Loading from "../../../layouts/Loading";

function CourseDetail() {
    const { slug } = useParams();

    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState({});

    const loadCourse = useCallback(async () => {
        try {
            setLoading(true);
            const courseResponse = await api.get(url.ONLINE_COURSE.DETAIL + `/${slug}`);
            setCourse(courseResponse.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    }, [slug]);

    useEffect(() => {
        loadCourse();
    }, [loadCourse]);

    const topics = course.topicOnlineDetailList || [];
    const reviews = course.reviewList || [];

    const stars = [];
    const roundedScore = Math.round(course.star * 2) / 2;
    const fullStars = Math.floor(roundedScore);
    const halfStar = roundedScore - fullStars === 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        stars.push(<i key={i} className="fa fa-star"></i>);
    }
    if (halfStar) {
        stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    return (
        <>
            {loading && <Loading />}
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

                                        <div className="feature-sin rating">{stars}</div>

                                        <div className="feature-sin total-rating">
                                            <a className="rbt-badge-4" href="#!">
                                                {course.reviewList?.length} rating
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
                                                Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and
                                                ending the course by building a CMS system similar to WordPress, Joomla or Drupal. Knowing PHP has allowed me to make enough money to stay home and make
                                                courses like this one for students all over the world.
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
                                                                        className="accordion-button collapsed"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target={`#${collapseId}`}
                                                                        aria-expanded="false"
                                                                        aria-controls={collapseId}
                                                                    >
                                                                        {topic.name} <span className="rbt-badge-5 ml--10">1hr 30min</span>
                                                                    </button>
                                                                </h2>
                                                                <div
                                                                    id={collapseId}
                                                                    className="accordion-collapse collapse"
                                                                    aria-labelledby={`heading-${accordionId}`}
                                                                    data-bs-parent="#accordionExampleb2"
                                                                >
                                                                    <div className="accordion-body card-body pr--0">
                                                                        <ul className="rbt-course-main-content liststyle">
                                                                            {topic.itemOnlineDTOList.map((topicItem) => {
                                                                                return (
                                                                                    <li key={topicItem.id}>
                                                                                        {topicItem.status === false ? (
                                                                                            <div className="wrap">
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

                                    <Rating />

                                    <div className="about-author-list rbt-shadow-box featured-wrapper mt--30 has-show-more">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Featured review</h4>
                                        </div>
                                        <div className="has-show-more-inner-content rbt-featured-review-list-wrapper">
                                            {reviews.map((review) => (
                                                <Review key={review.id} review={review} />
                                            ))}
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
                                                    <span className="btn-text">Enroll Course</span>
                                                    <span className="btn-icon">
                                                        <i className="feather-arrow-right"></i>
                                                    </span>
                                                </a>
                                            </div>

                                            <div className="rbt-widget-details has-show-more m-5">
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
        </>
    );
}

export default CourseDetail;
