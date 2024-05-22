import { Link } from "react-router-dom";

function Courses({ course, stars }) {
    const imgNotFound = "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";

    const handleImageError = (e) => {
        e.target.src = imgNotFound;
    };

    return (
        <div className="course-grid-3">
            <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                    <Link to={`/course-online/${course.slug}`}>
                        <img src={course.image || imgNotFound} alt={course.name} className="course-item__image" onError={handleImageError} />
                        <div className="rbt-badge-3 bg-white">
                            <span>-40%</span>
                            <span>Off</span>
                        </div>
                    </Link>
                </div>
                <div className="rbt-card-body">
                    <div className="rbt-card-top">
                        <div className="rbt-review">
                            <div className="rating">{stars}</div>
                            {/* <span className="rating-count"> (15 Reviews)</span> */}
                        </div>
                        <div className="rbt-bookmark-btn">
                            <button className="rbt-round-btn" title="Bookmark">
                                <i className="feather-bookmark"></i>
                            </button>
                        </div>
                    </div>

                    <h4 className="rbt-card-title">
                        <Link to={`/course-online/${course.slug}`} className="font-system">
                            {course.name}
                        </Link>
                    </h4>

                    <ul className="rbt-meta">
                        <li>
                            <i className="feather-book"></i>12 Lessons
                        </li>
                        <li>
                            <i className="feather-users"></i>50 Students
                        </li>
                    </ul>

                    <p className="rbt-card-text line-clamp">{course.description}</p>

                    <div className="rbt-card-bottom">
                        <div className="rbt-price">
                            <span className="current-price">${course.price && course.price.toFixed(2)}</span>
                            {/* <span className="off-price">$120</span> */}
                        </div>
                        <Link to={`/course-online/${course.slug}`} className="rbt-btn-link">
                            Learn More<i className="feather-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
