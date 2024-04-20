import { Link, useParams } from "react-router-dom";
import Layout from "../../../layouts";
import url from "../../../../services/url";
import { format } from "date-fns";
import ReactPlayer from "react-player";
import Loading from "../../../layouts/Loading";
import useAxios from "../../../../hooks/useAxios";
import NotFound from "../../Other/NotFound";

function CourseDetailOffline() {
    const { slug } = useParams();

    const studentId = 1;
    const { response, loading, status } = useAxios({
        method: "GET",
        path: url.OFFLINE_COURSE.DETAIL + `/${slug}/${studentId}`,
    });

    const course = response || [];

    const subjectList = course.subjectList || [];

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

                                        <div className="course-content rbt-shadow-box coursecontent-wrapper mt--30" id="coursecontent">
                                            <div className="rbt-course-feature-inner">
                                                <div className="section-title">
                                                    <h4 className="rbt-title-style-3 font-system">Course Content</h4>
                                                </div>
                                                {subjectList.length === 0 ? (
                                                    <p className="m-0">Coming soon...</p>
                                                ) : (
                                                    <div className="rbt-accordion-style rbt-accordion-02 accordion">
                                                        <div className="accordion" id="accordionExampleb2">
                                                            {subjectList.map((subject) => (
                                                                <div className="accordion-item card" key={subject.id}>
                                                                    <h5 className="accordion-header card-header font-system fw-500">
                                                                        <Link to={`/subject/${subject.slug}`}>{subject.name}</Link>
                                                                    </h5>
                                                                    <div className="accordion-collapse collapse show">
                                                                        <div className="accordion-body card-body pt-4 pb-2 pl--10">
                                                                            <ul className="rbt-course-main-content liststyle">
                                                                                <li className="mb-4">
                                                                                    <div className="wrap">
                                                                                        <div className="course-content-left">
                                                                                            <i className="feather-book"></i>
                                                                                            <div className="d-flex flex-column">
                                                                                                <p className="text">Number of sessions: {subject.totalSlot}</p>
                                                                                                {/* <span className="time">04:00</span> */}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
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
                                                {/* <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="rbt-price">
                                                        <span className="current-price">${course.price && course.price.toFixed(2)}</span>
                                                        <span className="off-price">$84.99</span>
                                                    </div>
                                                    <div className="discount-time">
                                                        <span className="rbt-badge color-danger bg-color-danger-opacity">
                                                            <i className="fab fa-gripfire"></i> Top Course!
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="add-to-card-button mt--15">
                                                    <Link to="" className="rbt-btn btn-gradient icon-hover w-100 d-block text-center btn-not__hover">
                                                        <span className="btn-text">Continue studying</span>
                                                        <span className="btn-icon">
                                                            <i className="feather-arrow-right"></i>
                                                        </span>
                                                    </Link>
                                                </div> */}

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
                                                        {/* <li>
                                                            <span>Lesson</span>
                                                            <span className="rbt-feature-value rbt-badge-5">{totalItems}</span>
                                                        </li> */}
                                                        {/* <li>
                                                            <span>Test</span>
                                                            <span className="rbt-feature-value rbt-badge-5">{totalTest}</span>
                                                        </li> */}
                                                        <li>
                                                            <span>Certificate</span>
                                                            <span className="rbt-feature-value rbt-badge-5">Yes</span>
                                                        </li>
                                                        {/* <li>
                                                            <span>Duration</span>
                                                            <span className="rbt-feature-value rbt-badge-5">{course.duration}</span>
                                                        </li> */}
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
                </Layout>
            )}
        </>
    );
}

export default CourseDetailOffline;
