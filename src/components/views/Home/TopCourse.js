import React from "react";
import Slider from "react-slick";
import useAxiosGet from "../../../hooks/useAxiosGet";
import url from "../../../services/url";
import Courses from "../Course/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import config from "../../../config";

function TopCourse() {
    const courseData = useAxiosGet({
        path: url.HOME.TOP_COURSE,
    });

    const topCourse = courseData.response || [];
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
            <div className="container">
                <div className="row mb--60">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle bg-secondary-opacity">Top Popular Course</span>
                            <h2 className="title">
                                English Academy student <br /> can join with us.
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="course-carousel">
                    <Slider {...settings} className="custom-slick-slider">
                        {topCourse.map((course) => (
                            <div className="course-slide" key={course.id}>
                                <Courses course={course} lineClamp={true} />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="load-more-btn mt--60 text-center">
                            <Link to={config.routes.course} className="rbt-btn btn-gradient btn-lg hover-icon-reverse">
                                <span className="icon-reverse-wrapper">
                                    <span className="btn-text">View All Course</span>
                                    <span className="btn-icon">
                                        <i className="feather-arrow-right"></i>
                                    </span>
                                    <span className="btn-icon">
                                        <i className="feather-arrow-right"></i>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopCourse;
