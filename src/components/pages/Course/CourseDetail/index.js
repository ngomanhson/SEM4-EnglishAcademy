import { Link, useParams } from "react-router-dom";
import Layout from "../../../layouts";
import url from "../../../../services/url";
import { format } from "date-fns";
import ReactPlayer from "react-player";
import Review from "../../../views/Course/CourseDetail/Review";
import Rating from "../../../views/Course/CourseDetail/Rating";
import Loading from "../../../layouts/Loading";
import useAxios from "../../../../hooks/useAxios";
import config from "../../../../config/index";

function CourseDetail() {
    const { slug } = useParams();

    const { response, loading } = useAxios({
        method: "GET",
        path: url.ONLINE_COURSE.DETAIL + `/${slug}`,
    });

    const course = response || [];

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

    let formatLevel;
    if (course.level === 0) {
        formatLevel = "Basic";
    } else if (course.level === 1) {
        formatLevel = "Intermediate";
    } else if (course.level === 2) {
        formatLevel = "Advanced";
    } else if (course.level === 3) {
        formatLevel = "Expert";
    }

    let totalItems = 0;
    let totalTest = 0;
    if (course && course.topicOnlineDetailList) {
        course.topicOnlineDetailList.forEach((topic) => {
            totalItems += topic.itemOnlineDTOList.length;
            totalTest += topic.testOnlineDTOList.length;
        });
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
                                            <p className="rbt-badge-4">{course.reviewList?.length} rating</p>
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
                                                ending the course by building a CMS system similar to WordPress, Joomla or Drupal. Knowing PHP has allowed me to make enough money to stay home and make
                                                courses like this one for students all over the world.
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
                                                                            {topic.name}
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
                                                                                {topic.itemOnlineDTOList.map((topicItem) => {
                                                                                    return (
                                                                                        <li className="mb-4" key={topicItem.id}>
                                                                                            <div className="wrap">
                                                                                                <div className="course-content-left">
                                                                                                    <div className="d-flex align-content-center">
                                                                                                        {topicItem.itemType === 0 && <i className="feather-play-circle mt-3"></i>}
                                                                                                        {topicItem.itemType === 1 && <i className="feather-help-circle mt-3"></i>}
                                                                                                        {topicItem.itemType === 2 && <i className="feather-hash mt-3"></i>}
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

                                    <Rating />

                                    {reviews.length === 0 ? (
                                        ""
                                    ) : (
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
                                                        <a href="course-details.html" className="font-system">
                                                            React Front To Back
                                                        </a>
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
                                                        <a href="course-details.html" className="font-system">
                                                            PHP Beginner Advanced
                                                        </a>
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
                                                <img className="w-100" src={course.image} alt="Card" />
                                            </div>
                                        </Link>

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
                                                <Link
                                                    to={`/checkout/${slug}`}
                                                    className="rbt-btn btn-gradient icon-hover w-100 d-block text-center btn-not__hover"
                                                    // data-bs-toggle="modal" data-bs-target="#paymentModal"
                                                >
                                                    <span className="btn-text">Enroll Course</span>
                                                    <span className="btn-icon">
                                                        <i className="feather-arrow-right"></i>
                                                    </span>
                                                </Link>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="modal fade" id="paymentModal" tabIndex="-1" aria-labelledby="paymentModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header p-5 pb-2" style={{ alignItems: "start", border: "none" }}>
                                <div className="rbt-feature">
                                    <div>
                                        <div class="icon bg-pink-opacity">
                                            <i className="fas fa-wallet"></i>
                                        </div>
                                        <h5 className="modal-title fw-500" id="paymentModalLabel">
                                            Payment Methods
                                        </h5>
                                        <p className="fw-300" style={{ fontSize: 12 }}>
                                            Choose the payment method that's right for you!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-body p-5 pt-0">
                                <div className="form-checkout mt-4">
                                    <input
                                        type="radio"
                                        className="form-checkout__input"
                                        name="paymentMethod"
                                        id="credit"
                                        value="credit"
                                        checked={selectedPaymentMethod === "credit"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <label htmlFor="credit" className="form-checkout__label">
                                        <p className="m-0 form-checkout__title">Credit or Debit Card</p>
                                        <span className="form-checkout__desc">Use a credit or debit card to pay with automatic payments</span>
                                    </label>
                                </div>
                                <div className="form-checkout">
                                    <input
                                        type="radio"
                                        className="form-checkout__input"
                                        name="paymentMethod"
                                        id="paypal"
                                        value="paypal"
                                        checked={selectedPaymentMethod === "paypal"}
                                        onChange={handlePaymentMethodChange}
                                    />
                                    <label htmlFor="paypal" className="form-checkout__label">
                                        <p className="m-0 form-checkout__title">PayPal</p>
                                        <span className="form-checkout__desc">Use your Paypal account to make payments</span>
                                    </label>
                                </div>
                                <hr className="mt-5" />

                                {selectedPaymentMethod === "credit" && (
                                    <Elements stripe={stripePromise}>
                                        <StripePaymentForm onSuccess={handleStripePaymentSuccess} />
                                    </Elements>
                                )}
                                {selectedPaymentMethod === "paypal" && <PayPal amount={course.price} />}
                            </div>
                        </div>
                    </div>
                </div> */}
            </Layout>
        </>
    );
}

export default CourseDetail;
