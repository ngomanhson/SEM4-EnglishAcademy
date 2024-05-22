import { Link } from "react-router-dom";

function OnlineCourses({ course, formatLevel }) {
    return (
        <div className="col-lg-4 col-md-6 col-12">
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
}

export default OnlineCourses;
