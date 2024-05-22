import { Link } from "react-router-dom";

function OfflineCourses({ course, formatLevel }) {
    return (
        <div className="col-lg-4 col-md-6 col-12">
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
}

export default OfflineCourses;
