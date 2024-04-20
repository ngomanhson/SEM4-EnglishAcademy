import { Link } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import url from "../../../services/url";
import LayoutProfile from "../../layouts/LayoutProfile";
import config from "../../../config";

function EnrolledCourses() {
    const studentId = 1;

    const { response } = useAxios({
        method: "GET",
        path: url.OFFLINE_COURSE.GET_ALL_BY_STUDENT + "/" + studentId,
    });

    const courses = response || [];
    return (
        <LayoutProfile>
            <div className="col-lg-9">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                        <div className="section-title">
                            <h4 className="rbt-title-style-3">Enrolled Courses</h4>
                        </div>

                        <div className="row g-5">
                            {courses.map((course) => (
                                <div className="col-lg-4 col-md-6 col-12" key={course.id}>
                                    <div className="rbt-card variation-01 rbt-hover">
                                        <div className="rbt-card-img">
                                            <Link to={`/course-offline/${course.slug}`}>
                                                <img src={course.image} alt={course.name} />
                                            </Link>
                                        </div>
                                        <div className="rbt-card-body">
                                            {/* <div className="rbt-card-top">
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
                                                    </div> */}
                                            <h4 className="rbt-card-title font-system" style={{ fontSize: 22 }}>
                                                <Link to={`/learning-offline/${course.slug}`}>{course.name}</Link>
                                            </h4>

                                            <div className="rbt-progress-style-1 mb--20 mt--20">
                                                <div className="single-progress">
                                                    <h6 className="rbt-title-style-2 mb--10">Complete</h6>
                                                    <div className="progress">
                                                        <div
                                                            className="progress-bar wow fadeInLeft bar-color-success"
                                                            data-wow-duration="0.5s"
                                                            data-wow-delay=".3s"
                                                            role="progressbar"
                                                            style={{ width: "90%", visibility: "visible", animationDuration: "0.5s", animationDelay: "0.3s", animationName: "fadeInLeft" }}
                                                            aria-valuenow="90"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                        <span className="rbt-title-style-2 progress-number">90%</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="rbt-card-bottom">
                                                <a className="rbt-btn btn-sm bg-primary-opacity w-100 text-center" href="#!">
                                                    Download Certificate
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* <div className="advance-tab-button mb--30">
                            <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="myTab-4" role="tablist">
                                <li role="presentation">
                                    <a href="#!" className="tab-button active" id="home-tab-4" data-bs-toggle="tab" data-bs-target="#home-4" role="tab" aria-controls="home-4" aria-selected="true">
                                        <span className="title">Enrolled Courses</span>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#!" className="tab-button" id="profile-tab-4" data-bs-toggle="tab" data-bs-target="#profile-4" role="tab" aria-controls="profile-4" aria-selected="false">
                                        <span className="title">Active Courses</span>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#!" className="tab-button" id="contact-tab-4" data-bs-toggle="tab" data-bs-target="#contact-4" role="tab" aria-controls="contact-4" aria-selected="false">
                                        <span className="title">Completed Courses</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="home-4" role="tabpanel" aria-labelledby="home-tab-4">
                                <div className="row g-5">
                                    {courses.map((course) => (
                                        <div className="col-lg-4 col-md-6 col-12" key={course.id}>
                                            <div className="rbt-card variation-01 rbt-hover">
                                                <div className="rbt-card-img">
                                                    <Link to="">
                                                        <img src={course.image} alt={course.name} />
                                                    </Link>
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
                                                    <h4 className="rbt-card-title font-system" style={{ fontSize: 22 }}>
                                                        <Link to="">{course.name}</Link>
                                                    </h4>
                                                    <ul className="rbt-meta">
                                                        <li>
                                                            <i className="feather-book"></i>20 Lessons
                                                        </li>
                                                        <li>
                                                            <i className="feather-users"></i>40 Students
                                                        </li>
                                                    </ul>

                                                    <div className="rbt-progress-style-1 mb--20 mt--10">
                                                        <div className="single-progress">
                                                            <h6 className="rbt-title-style-2 mb--10">Complete</h6>
                                                            <div className="progress">
                                                                <div
                                                                    className="progress-bar wow fadeInLeft bar-color-success"
                                                                    data-wow-duration="0.5s"
                                                                    data-wow-delay=".3s"
                                                                    role="progressbar"
                                                                    style={{ width: "90%", visibility: "visible", animationDuration: "0.5s", animationDelay: "0.3s", animationName: "fadeInLeft" }}
                                                                    aria-valuenow="90"
                                                                    aria-valuemin="0"
                                                                    aria-valuemax="100"
                                                                ></div>
                                                                <span className="rbt-title-style-2 progress-number">90%</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="rbt-card-bottom">
                                                        <a className="rbt-btn btn-sm bg-primary-opacity w-100 text-center" href="#!">
                                                            Download Certificate
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="tab-pane fade" id="profile-4" role="tabpanel" aria-labelledby="profile-tab-4">
                                <div className="row g-5">
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rbt-card variation-01 rbt-hover">
                                            <div className="rbt-card-img">
                                                <a href="course-details.html">
                                                    <img src="assets/images/course/course-online-04.jpg" alt="Card" />
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
                                                        <span className="rating-count"> (3 Reviews)</span>
                                                    </div>
                                                    <div className="rbt-bookmark-btn">
                                                        <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                            <i className="feather-bookmark"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h4 className="rbt-card-title">
                                                    <a href="course-details.html">English Langiage Club</a>
                                                </h4>
                                                <ul className="rbt-meta">
                                                    <li>
                                                        <i className="feather-book"></i>20 Lessons
                                                    </li>
                                                    <li>
                                                        <i className="feather-users"></i>30 Students
                                                    </li>
                                                </ul>

                                                <div className="rbt-card-bottom">
                                                    <div className="rbt-price">
                                                        <span className="current-price">$40</span>
                                                        <span className="off-price">$86</span>
                                                    </div>
                                                    <a className="rbt-btn-link" href="course-details.html">
                                                        Learn More<i className="feather-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rbt-card variation-01 rbt-hover">
                                            <div className="rbt-card-img">
                                                <a href="course-details.html">
                                                    <img src="assets/images/course/course-online-06.jpg" alt="Card" />
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
                                                        <span className="rating-count"> (3 Reviews)</span>
                                                    </div>
                                                    <div className="rbt-bookmark-btn">
                                                        <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                            <i className="feather-bookmark"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h4 className="rbt-card-title">
                                                    <a href="course-details.html">Graphic Courses Club</a>
                                                </h4>
                                                <ul className="rbt-meta">
                                                    <li>
                                                        <i className="feather-book"></i>50 Lessons
                                                    </li>
                                                    <li>
                                                        <i className="feather-users"></i>10 Students
                                                    </li>
                                                </ul>

                                                <div className="rbt-card-bottom">
                                                    <div className="rbt-price">
                                                        <span className="current-price">$40</span>
                                                        <span className="off-price">$86</span>
                                                    </div>
                                                    <a className="rbt-btn-link" href="course-details.html">
                                                        Learn More<i className="feather-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rbt-card variation-01 rbt-hover">
                                            <div className="rbt-card-img">
                                                <a href="course-details.html">
                                                    <img src="assets/images/course/course-online-05.jpg" alt="Card" />
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
                                                        <span className="rating-count"> (3 Reviews)</span>
                                                    </div>
                                                    <div className="rbt-bookmark-btn">
                                                        <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                            <i className="feather-bookmark"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h4 className="rbt-card-title">
                                                    <a href="course-details.html">Wed Design Club</a>
                                                </h4>
                                                <ul className="rbt-meta">
                                                    <li>
                                                        <i className="feather-book"></i>20 Lessons
                                                    </li>
                                                    <li>
                                                        <i className="feather-users"></i>30 Students
                                                    </li>
                                                </ul>

                                                <div className="rbt-card-bottom">
                                                    <div className="rbt-price">
                                                        <span className="current-price">$40</span>
                                                        <span className="off-price">$86</span>
                                                    </div>
                                                    <a className="rbt-btn-link" href="course-details.html">
                                                        Learn More<i className="feather-arrow-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane fade" id="contact-4" role="tabpanel" aria-labelledby="contact-tab-4">
                                <div className="row g-5">
                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rbt-card variation-01 rbt-hover">
                                            <div className="rbt-card-img">
                                                <a href="course-details.html">
                                                    <img src="assets/images/course/course-online-01.jpg" alt="Card" />
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
                                                        <i className="feather-book"></i>20 Lessons
                                                    </li>
                                                    <li>
                                                        <i className="feather-users"></i>40 Students
                                                    </li>
                                                </ul>

                                                <div className="rbt-progress-style-1 mb--20 mt--10">
                                                    <div className="single-progress">
                                                        <h6 className="rbt-title-style-2 mb--10">Complete</h6>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar wow fadeInLeft bar-color-success animated"
                                                                data-wow-duration="0.5s"
                                                                data-wow-delay=".3s"
                                                                role="progressbar"
                                                                style={{ width: "100s%", visibility: "visible", animationDuration: "0.5s", animationDelay: "0.3s", animationName: "fadeInLeft" }}
                                                                aria-valuenow="100"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                            ></div>
                                                            <span className="rbt-title-style-2 progress-number">100%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rbt-card-bottom">
                                                    <a className="rbt-btn btn-sm bg-primary-opacity w-100 text-center" href="#!">
                                                        Download Certificate
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12">
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
                                                    <a href="course-details.html">PHP Beginner + Advanced</a>
                                                </h4>
                                                <ul className="rbt-meta">
                                                    <li>
                                                        <i className="feather-book"></i>10 Lessons
                                                    </li>
                                                    <li>
                                                        <i className="feather-users"></i>30 Students
                                                    </li>
                                                </ul>

                                                <div className="rbt-progress-style-1 mb--20 mt--10">
                                                    <div className="single-progress">
                                                        <h6 className="rbt-title-style-2 mb--10">Complete</h6>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar wow fadeInLeft bar-color-success animated"
                                                                data-wow-duration="0.5s"
                                                                data-wow-delay=".3s"
                                                                role="progressbar"
                                                                style={{ width: "100%", visibility: "visible", animationDuration: "0.5s", animationDelay: "0.3s", animationName: "fadeInLeft" }}
                                                                aria-valuenow="100"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                            ></div>
                                                            <span className="rbt-title-style-2 progress-number">100%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rbt-card-bottom">
                                                    <a className="rbt-btn btn-sm bg-primary-opacity w-100 text-center" href="#!">
                                                        Download Certificate
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-12">
                                        <div className="rbt-card variation-01 rbt-hover">
                                            <div className="rbt-card-img">
                                                <a href="course-details.html">
                                                    <img src="assets/images/course/course-online-03.jpg" alt="Card" />
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
                                                        <span className="rating-count"> (4 Reviews)</span>
                                                    </div>
                                                    <div className="rbt-bookmark-btn">
                                                        <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                            <i className="feather-bookmark"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <h4 className="rbt-card-title">
                                                    <a href="course-details.html">Angular Zero to Mastery</a>
                                                </h4>
                                                <ul className="rbt-meta">
                                                    <li>
                                                        <i className="feather-book"></i>14 Lessons
                                                    </li>
                                                    <li>
                                                        <i className="feather-users"></i>26 Students
                                                    </li>
                                                </ul>

                                                <div className="rbt-progress-style-1 mb--20 mt--10">
                                                    <div className="single-progress">
                                                        <h6 className="rbt-title-style-2 mb--10">Complete</h6>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar wow fadeInLeft bar-color-success animated"
                                                                data-wow-duration="0.5s"
                                                                data-wow-delay=".3s"
                                                                role="progressbar"
                                                                style={{ width: "100%", visibility: "visible", animationDuration: "0.5s", animationDelay: "0.3s", animationName: "fadeInLeft" }}
                                                                aria-valuenow="100"
                                                                aria-valuemin="0"
                                                                aria-valuemax="100"
                                                            ></div>
                                                            <span className="rbt-title-style-2 progress-number">100%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rbt-card-bottom">
                                                    <a className="rbt-btn btn-sm bg-primary-opacity w-100 text-center" href="#!">
                                                        Download Certificate
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default EnrolledCourses;
