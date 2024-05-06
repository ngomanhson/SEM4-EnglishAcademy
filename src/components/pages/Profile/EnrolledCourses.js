import { Link } from "react-router-dom";
import url from "../../../services/url";
import { useAxiosGet } from "../../../hooks";
import { getAccessToken } from "../../../utils/auth";
import config from "../../../config";
import LayoutProfile from "./LayoutProfile";

function EnrolledCourses() {
    const offlineCourses = useAxiosGet({
        path: url.OFFLINE_COURSE.GET_ALL_BY_STUDENT,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const onlineCourses = useAxiosGet({
        path: url.ONLINE_COURSE.GET_ALL_BY_STUDENT,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    return (
        <>
            <LayoutProfile>
                <div className="col-lg-9">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                        <div className="content">
                            <div className="section-title">
                                <h4 className="rbt-title-style-3">Enrolled Courses</h4>
                            </div>

                            <div className="advance-tab-button mb--30">
                                <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="myTab-4" role="tablist">
                                    <li role="presentation">
                                        <Link to="" className="tab-button active" id="home-tab-4" data-bs-toggle="tab" data-bs-target="#home-4" role="tab" aria-controls="home-4" aria-selected="false">
                                            <span className="title">Offline Courses</span>
                                        </Link>
                                    </li>
                                    <li role="presentation">
                                        <Link
                                            to=""
                                            className="tab-button"
                                            id="profile-tab-4"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-4"
                                            role="tab"
                                            aria-controls="profile-4"
                                            aria-selected="true"
                                        >
                                            <span className="title">Online Courses</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="home-4" role="tabpanel" aria-labelledby="home-tab-4">
                                    <div className="row g-5">
                                        {offlineCourses.errorStatus === 404 ? (
                                            <p className="fw-300 fz-15">
                                                You have not participated in any courses yet.{" "}
                                                <Link className="text-primary" to={config.routes.course}>
                                                    Join the course now!
                                                </Link>
                                            </p>
                                        ) : (
                                            <div className="row g-5">
                                                {offlineCourses.response?.map((course) => {
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
                                                        <div className="col-lg-4 col-md-6 col-12" key={course.id}>
                                                            <div className="rbt-card variation-01 rbt-hover">
                                                                <div className="rbt-card-img">
                                                                    <Link to={`/subject-offline/${course.slug}`}>
                                                                        <img src={course.image} alt={course.name} />
                                                                    </Link>
                                                                </div>
                                                                <div className="rbt-card-body">
                                                                    <h4 className="rbt-card-title font-system" style={{ fontSize: 22 }}>
                                                                        <Link to={`/subject-offline/${course.slug}`}>{course.name}</Link>
                                                                    </h4>
                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div className="fw-300 fz-15">
                                                                            <i className="far fa-chart-bar"></i> {formatLevel}
                                                                        </div>
                                                                        <div className="fw-300 fz-15">
                                                                            <i className="feather-globe"></i> {course.language}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="profile-4" role="tabpanel" aria-labelledby="profile-tab-4">
                                    <div className="row g-5">
                                        {!onlineCourses.response || onlineCourses.response.length === 0 ? (
                                            <p className="fw-300 fz-15">
                                                You have not participated in any courses yet.{" "}
                                                <Link className="text-primary" to={config.routes.course}>
                                                    Join the course now!
                                                </Link>
                                            </p>
                                        ) : (
                                            <div className="row g-5">
                                                {onlineCourses.response?.map((course) => {
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
                                                        <div className="col-lg-4 col-md-6 col-12" key={course.id}>
                                                            <div className="rbt-card variation-01 rbt-hover">
                                                                <div className="rbt-card-img">
                                                                    <Link to={`/learning-online/${course.slug}`}>
                                                                        <img src={course.image} alt={course.name} />
                                                                    </Link>
                                                                </div>
                                                                <div className="rbt-card-body">
                                                                    <h4 className="rbt-card-title font-system" style={{ fontSize: 22 }}>
                                                                        <Link to={`/learning-online/${course.slug}`}>{course.name}</Link>
                                                                    </h4>

                                                                    <div className="d-flex align-items-center justify-content-between">
                                                                        <div className="fw-300 fz-15">
                                                                            <i className="far fa-chart-bar"></i> {formatLevel}
                                                                        </div>
                                                                        <div className="fw-300 fz-15">
                                                                            <i className="feather-globe"></i> {course.language}
                                                                        </div>
                                                                    </div>

                                                                    <div className="rbt-progress-style-1 mb--20 mt--20">
                                                                        <div className="single-progress">
                                                                            <h6 className="rbt-title-style-2 mb--10">Process</h6>
                                                                            <div className="progress">
                                                                                <div
                                                                                    className="progress-bar wow fadeInLeft bar-color-success"
                                                                                    data-wow-duration="0.5s"
                                                                                    data-wow-delay=".3s"
                                                                                    role="progressbar"
                                                                                    style={{
                                                                                        width: `${(course.progress * 214) / 100}px`,
                                                                                        visibility: "visible",
                                                                                        animationDuration: "0.5s",
                                                                                        animationDelay: "0.3s",
                                                                                        animationName: "fadeInLeft",
                                                                                    }}
                                                                                    aria-valuenow={course.progress}
                                                                                    aria-valuemin="0"
                                                                                    aria-valuemax="100"
                                                                                ></div>
                                                                                <span className="rbt-title-style-2 progress-number">{course.progress}%</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutProfile>
        </>
    );
}

export default EnrolledCourses;
