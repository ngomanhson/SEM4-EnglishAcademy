import { Link, useNavigate, useParams } from "react-router-dom";
import Layout from "../../../layouts";
import { format } from "date-fns";
import ReactPlayer from "react-player";
import Review from "../../../views/CourseDetail/Review";
import Loading from "../../../layouts/Loading";
import config from "../../../../config/index";
import NotFound from "../../Other/NotFound";
import { getAccessToken, isLoggedIn } from "../../../../utils/auth";
import { useCallback, useEffect, useState } from "react";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { useAxiosGet } from "../../../../hooks";
import { formatLevelCourse } from "../../../../utils/formatLevelCourse";
import { formatNumber } from "../../../../utils/formatNumber";
import Image from "../../../commons/Image";

function CourseDetailOnline() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const loadCourse = useCallback(async () => {
        try {
            setLoading(true);
            const courseResponse = await api.get(url.ONLINE_COURSE.DETAIL + `/${slug}`);
            setCourse(courseResponse.data.data);
        } catch (error) {
            console.log(error);
            setStatus(error.response.status);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 1500);
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

    const formatLevel = formatLevelCourse(course.level);

    let totalItems = 0;
    let totalTest = 0;
    if (course && course.topicOnlineDetailList) {
        course.topicOnlineDetailList.forEach((topic) => {
            totalItems += topic.itemOnlineDTOList.length;
            totalTest += topic.testOnlineDTOList.length;
        });
    }

    const handleEnroll = () => {
        if (!isLoggedIn()) {
            localStorage.setItem("redirect_path", window.location.pathname);
            navigate(`${config.routes.login}`);
        } else {
            navigate(`/checkout/${slug}`);
        }
    };

    const checkByCourse = useAxiosGet({
        path: url.ONLINE_COURSE.CHECK_REGISTER + `/${slug}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const statusCourse = checkByCourse.response || {};

    useEffect(() => {
        const statusCourse = checkByCourse.response || {};
        if (statusCourse === true) {
            navigate(`/learning-online/${slug}`);
        }
    }, [checkByCourse.response, navigate, slug]);

    const [relatedCourse, setRelatedCourse] = useState([]);

    const loadRelatedCourse = useCallback(async () => {
        try {
            const courseResponse = await api.get(url.ONLINE_COURSE.RELATED + `/${slug}`);

            setRelatedCourse(courseResponse.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [slug]);

    useEffect(() => {
        loadRelatedCourse();
    }, [loadRelatedCourse]);

    console.log(relatedCourse);

    return (
        <>
            {loading && <Loading />}
            {status === 404 ? (
                <NotFound />
            ) : (
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
                                        <h2 className="title font-system">{course.name}</h2>
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
                                                <p className="rbt-badge-4">{formatNumber(course.reviewList?.length)} rating</p>
                                            </div>

                                            <div className="feature-sin total-student">
                                                <span>2 students</span>
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
                                            <ReactPlayer url={course.trailer} controls className="w-100" />
                                        </div>

                                        <div className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more" id="overview">
                                            <div className="rbt-course-feature-inner has-show-more-inner-content">
                                                <div className="section-title">
                                                    <h4 className="rbt-title-style-3 font-system">What you'll learn</h4>
                                                </div>
                                                <p>
                                                    Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and
                                                    ending the course by building a CMS system similar to WordPress, Joomla or Drupal. Knowing PHP has allowed me to make enough money to stay home and
                                                    make courses like this one for students all over the world.
                                                </p>

                                                <ul className="plan-offer-list">
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
                                        </div>

                                        <div className="course-content rbt-shadow-box coursecontent-wrapper mt--30" id="coursecontent">
                                            <div className="rbt-course-feature-inner">
                                                <div className="section-title">
                                                    <h4 className="rbt-title-style-3 font-system">Course Content</h4>
                                                </div>
                                                {topics.length === 0 ? (
                                                    <p className="m-0">Coming soon...</p>
                                                ) : (
                                                    <div className="rbt-accordion-style rbt-accordion-02 accordion">
                                                        <div className="accordion" id="accordionExampleb2">
                                                            {topics.map((topic, index) => {
                                                                const accordionId = `accordion-${topic.id}-${index}`;
                                                                const collapseId = `collapse-${topic.id}-${index}`;
                                                                return (
                                                                    <div className="accordion-item card" key={topic.id}>
                                                                        <h2 className="accordion-header card-header" id={`heading-${accordionId}`}>
                                                                            <button
                                                                                className="accordion-button collapsed font-system"
                                                                                type="button"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target={`#${collapseId}`}
                                                                                aria-expanded="false"
                                                                                aria-controls={collapseId}
                                                                            >
                                                                                {index + 1}. {topic.name}
                                                                                {/* <span className="rbt-badge-5 ml--10">1hr 30min</span> */}
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
                                                                                    {topic.itemOnlineDTOList.map((topicItem, itemIndex) => {
                                                                                        return (
                                                                                            <li className="mb-4" key={topicItem.id}>
                                                                                                <div className="wrap">
                                                                                                    <div className="course-content-left">
                                                                                                        <div className="d-flex align-content-center">
                                                                                                            {topicItem.itemType === 0 && <i className="feather-play-circle mt-3"></i>}
                                                                                                            {topicItem.itemType === 1 && <i className="feather-help-circle mt-3"></i>}
                                                                                                            {topicItem.itemType === 2 && <i className="feather-hash mt-3"></i>}
                                                                                                            <div className="d-flex flex-column">
                                                                                                                <span className="text">
                                                                                                                    {" "}
                                                                                                                    {index + 1}.{itemIndex + 1} {topicItem.title}
                                                                                                                </span>
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
                                                                                            </li>
                                                                                        );
                                                                                    })}

                                                                                    {topic.testOnlineDTOList.map((topicItem) => (
                                                                                        <li className="mb-4" key={topicItem.id}>
                                                                                            <div className="wrap">
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
                                                                                                    <span className="rbt-check">
                                                                                                        <i className="feather-lock"></i>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </div>
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
                                                )}
                                            </div>
                                        </div>

                                        {reviews.length === 0 || (
                                            <div className="about-author-list rbt-shadow-box featured-wrapper mt--30 has-show-more">
                                                <div className="section-title">
                                                    <h4 className="rbt-title-style-3 font-system">Featured review</h4>
                                                </div>
                                                <div className="has-show-more-inner-content rbt-featured-review-list-wrapper">
                                                    {reviews.map((review) => (
                                                        <Review key={review.id} review={review} />
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="related-course mt--60">
                                        <div className="row g-5 align-items-end mb--40">
                                            <div className="col-lg-8 col-md-8 col-12">
                                                <div className="section-title">
                                                    <span className="subtitle bg-pink-opacity">Top Course</span>
                                                    <h4 className="title font-system">
                                                        Top Related <strong className="color-primary">Courses</strong>
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="read-more-btn text-start text-md-end">
                                                    <Link to={config.routes.course} className="rbt-btn rbt-switch-btn btn-border btn-sm">
                                                        <span data-text="View All Course">View All Course</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-5">
                                            {relatedCourse.map((course, courseIndex) => {
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
                                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={courseIndex}>
                                                        <div className="rbt-card variation-01 rbt-hover">
                                                            <div className="rbt-card-img">
                                                                <Link to={`/course-online/${course.slug}`}>
                                                                    <img src={course.image} alt={course.name} />
                                                                </Link>
                                                            </div>
                                                            <div className="rbt-card-body">
                                                                <div className="rbt-card-top">
                                                                    <div className="rbt-review">
                                                                        <div className="rating">{stars}</div>
                                                                        <span className="rating-count"> ({formatNumber(course.totalReview)} Reviews)</span>
                                                                    </div>
                                                                    <div className="rbt-bookmark-btn">
                                                                        <Link to="" className="rbt-round-btn" title="Bookmark">
                                                                            <i className="feather-bookmark"></i>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                                <h4 className="rbt-card-title">
                                                                    <a href="course-details.html" className="font-system">
                                                                        {course.name}
                                                                    </a>
                                                                </h4>

                                                                <p className="rbt-card-text line-clamp">{course.description}</p>

                                                                <div className="rbt-card-bottom">
                                                                    <div className="rbt-price">
                                                                        <span className="current-price">${course.price.toFixed(2)}</span>
                                                                    </div>
                                                                    <Link to={`/course-online/${course.slug}`} className="rbt-btn-link left-icon">
                                                                        View more <i className="feather-arrow-right"></i>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
                                        <div className="inner">
                                            <Link to="" className="video-popup-with-text  text-center popup-video sidebar-video-hidden mb--15">
                                                <div className="video-content">
                                                    <Image className="w-100" src={course.image} alt="" />
                                                </div>
                                            </Link>

                                            {statusCourse === true ? (
                                                <div className="content-item-content">
                                                    <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                                                        <div className="rbt-price">
                                                            <span className="current-price">${course.price && course.price.toFixed(2)}</span>
                                                            {/* <span className="off-price">$84.99</span> */}
                                                        </div>
                                                        <div className="discount-time">
                                                            <span className="rbt-badge color-danger bg-color-danger-opacity">
                                                                <i className="fab fa-gripfire"></i> Top Course!
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="add-to-card-button mt--15">
                                                        <Link to={`/learning-online/${slug}`} className="rbt-btn btn-gradient icon-hover w-100 d-block text-center btn-not__hover">
                                                            <span className="btn-text">Continue Study</span>
                                                            <span className="btn-icon">
                                                                <i className="feather-arrow-right"></i>
                                                            </span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="content-item-content">
                                                    <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                                                        <div className="rbt-price">
                                                            <span className="current-price">${course.price && course.price.toFixed(2)}</span>
                                                            {/* <span className="off-price">$84.99</span> */}
                                                        </div>
                                                        <div className="discount-time">
                                                            <span className="rbt-badge color-danger bg-color-danger-opacity">
                                                                <i className="fab fa-gripfire"></i> Top Course!
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="add-to-card-button mt--15">
                                                        {topics.length === 0 ? (
                                                            <button className="rbt-btn btn-secondary w-100 d-block text-center btn-not__hover" disabled>
                                                                Coming soon...
                                                            </button>
                                                        ) : (
                                                            <button className="rbt-btn btn-gradient icon-hover w-100 d-block text-center btn-not__hover" onClick={handleEnroll}>
                                                                <span className="btn-text">Enroll Course</span>
                                                                <span className="btn-icon">
                                                                    <i className="feather-arrow-right"></i>
                                                                </span>
                                                            </button>
                                                        )}
                                                    </div>

                                                    <div className="rbt-widget-details has-show-more m-5">
                                                        <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                                                            <li>
                                                                <span>Enrolled</span>
                                                                <span className="rbt-feature-value rbt-badge-5">2</span>
                                                            </li>
                                                            <li>
                                                                <span>Skill Level</span>
                                                                <span className="rbt-feature-value rbt-badge-5">{formatLevel}</span>
                                                            </li>
                                                            <li>
                                                                <span>Language</span>
                                                                <span className="rbt-feature-value rbt-badge-5">{course.language}</span>
                                                            </li>
                                                            <li>
                                                                <span>Lesson</span>
                                                                <span className="rbt-feature-value rbt-badge-5">{totalItems}</span>
                                                            </li>
                                                            <li>
                                                                <span>Test</span>
                                                                <span className="rbt-feature-value rbt-badge-5">{totalTest}</span>
                                                            </li>
                                                            <li>
                                                                <span>Certificate</span>
                                                                <span className="rbt-feature-value rbt-badge-5">Yes</span>
                                                            </li>
                                                            <li>
                                                                <span>Duration</span>
                                                                <span className="rbt-feature-value rbt-badge-5">{course.duration}</span>
                                                            </li>
                                                            <li>
                                                                <span>Pass Percentage</span>
                                                                <span className="rbt-feature-value rbt-badge-5">95%</span>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="social-share-wrapper text-center pt-0">
                                                        <hr className="mt--20" />
                                                        <div className="contact-with-us text-center">
                                                            <p>For details about the course</p>
                                                            <div className="rbt-badge-2 mt--10 justify-content-center w-100">
                                                                <i className="feather-phone mr--5"></i> Call Us:{" "}
                                                                <a href="tel:0123456789">
                                                                    <strong>0123 456 789</strong>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            )}
        </>
    );
}

export default CourseDetailOnline;
