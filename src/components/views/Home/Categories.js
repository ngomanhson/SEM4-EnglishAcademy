import { Link } from "react-router-dom";
import config from "../../../config";

function Categories() {
    const categories = [
        {
            image: "assets/images/course/online-course.png",
            icon: "assets/images/icons/counter-02.png",
            title: "Online Learning Platform",
            path: config.routes.course,
        },
        {
            image: "assets/images/course/offline-learning.png",
            icon: "assets/images/icons/counter-04.png",
            title: "Learning Platform",
            path: config.routes.my_courses,
        },
        {
            image: "assets/images/course/rated-capacity.jpg",
            icon: "assets/images/icons/counter-03.png",
            title: "Rated Capacity",
            path: config.routes.entrance_test,
        },
        {
            image: "assets/images/course/tutoring.png",
            icon: "assets/images/icons/counter-01.png",
            title: "Tutoring",
            path: config.routes.tutor,
        },
    ];

    return (
        <div className="rbt-categories-area bg-color-white rbt-section-gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle bg-primary-opacity">Course Category</span>
                            <h2 className="title">
                                Let the journey of organizing <br />
                                your own learning begin
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5 mt--30">
                    {categories.map((category, index) => (
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                            <div className="rbt-cat-box rbt-cat-box-1 variation-2 text-center">
                                <div className="inner">
                                    <div className="thumbnail">
                                        <Link to={category.path}>
                                            <img src={category.image} alt={category.name} />
                                        </Link>
                                    </div>
                                    <div className="icons">
                                        <img src={category.icon} alt="" />
                                    </div>
                                    <div className="content">
                                        <h5 className="title">
                                            <Link to={category.path}>{category.title}</Link>
                                        </h5>
                                        <div className="read-more-btn">
                                            <a className="rbt-btn-link" href="course-filter-one-toggle.html">
                                                35 Courses<i className="feather-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Categories;
