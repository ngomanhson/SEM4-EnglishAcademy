import { Link } from "react-router-dom";
import url from "../../../services/url";
import LayoutProfile from "../../layouts/LayoutProfile";
import { useAxiosGet } from "../../../hooks";
import { getAccessToken } from "../../../utils/auth";
import config from "../../../config";

function EnrolledCourses() {
    const { response, status } = useAxiosGet({
        path: url.OFFLINE_COURSE.GET_ALL_BY_STUDENT,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const courses = response || [];

    return (
        <>
            <LayoutProfile>
                <div className="col-lg-9">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                        <div className="content">
                            <div className="section-title">
                                <h4 className="rbt-title-style-3">Enrolled Courses</h4>
                            </div>

                            {status === 404 ? (
                                <p className="fw-300 fz-15">
                                    You have not participated in any courses yet.{" "}
                                    <Link className="text-primary" to={config.routes.course}>
                                        Join the course now!
                                    </Link>
                                </p>
                            ) : (
                                <div className="row g-5">
                                    {courses.map((course) => (
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
                            )}
                        </div>
                    </div>
                </div>
            </LayoutProfile>
        </>
    );
}

export default EnrolledCourses;
