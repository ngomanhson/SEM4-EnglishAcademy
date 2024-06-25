import { Link } from "react-router-dom";
import config from "../../../config";

function Banner() {
    const services = [
        {
            path: config.routes.course,
            image: "assets/images/icons/counter-02.png",
            title: "Online Course",
            description: "Participate in online courses with rich and diverse topics, helping you learn anytime, anywhere and easily manage your study time.",
        },
        {
            path: config.routes.enrolled_courses,
            image: "assets/images/icons/counter-04.png",
            title: "Offline Course",
            description: "Live courses in the classroom give you the opportunity to interact directly with instructors and classmates, creating a dynamic and effective learning environment.",
        },
        {
            path: config.routes.entrance_test,
            image: "assets/images/icons/counter-03.png",
            title: "Rated Capacity",
            description:
                "The competency assessment includes a full range of Listening - Reading - Writing - Speaking skills. Thereby, students will know their abilities and have a suitable learning path.",
        },
        {
            path: config.routes.tutor,
            image: "assets/images/icons/counter-01.png",
            title: "Tutoring",
            description: "English Academy has a team of tutors who are good teachers and students, specialize in subjects, and provide flexible and convenient online tutoring services.",
        },
    ];

    const headlines = [
        {
            title: "Offline Learning.",
        },
        {
            title: "Rated Capacity.",
        },
        {
            title: "Tutoring.",
        },
    ];

    return (
        <div className="rbt-splash-slider d-flex align-items-center">
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xl-6 order-2 order-xl-1">
                            <div className="inner">
                                <div className="banner-top">
                                    <div className="banner-badge-top">
                                        <div className="icon">
                                            <div className="rating">
                                                <i className="fa fa-star"></i>

                                                <i className="fa fa-star"></i>

                                                <i className="fa fa-star"></i>

                                                <i className="fa fa-star"></i>

                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <span className="subtitle">12500+ Trust Customer</span>
                                    </div>

                                    <div className="banner-badge-top">
                                        <div className="icon">
                                            <img src="assets/images/icons/elite.svg" alt="Icons Images" />
                                        </div>
                                        <span className="subtitle">Envato Elite Author</span>
                                    </div>
                                </div>
                                <h1 className="title">
                                    Learning platform with{" "}
                                    <span className="cd-headline slide">
                                        <span className="cd-words-wrapper">
                                            <b className="theme-gradient is-visible">Online Courses.</b>
                                            {headlines.map((headline, index) => (
                                                <b className="theme-gradient is-hidden" key={index}>
                                                    {headline.title}
                                                </b>
                                            ))}
                                        </span>
                                    </span>
                                </h1>
                                {/* <p className="description">
                                    The most <strong>powerful</strong> yet the <strong>easiest</strong> template ever.
                                </p> */}
                            </div>
                        </div>
                        <div className="col-lg-12 col-xl-6 order-1 order-xl-2">
                            <div className="video-popup-wrapper">
                                <img className="w-100 rbt-radius" src="assets/images/splash/banner-group-image.png" alt="Video" />
                                <a className="rbt-btn rounded-player-2 popup-video position-to-top with-animation d-none" href="https://www.youtube.com/watch?v=nA1Aqp0sPQo">
                                    <span className="play-icon"></span>
                                </a>
                                <div className="banner-group-shape">
                                    <div
                                        className="shape-image scene shape-4"
                                        style={{
                                            transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
                                            transformStyle: "preserve-3d",
                                            backfaceVisibility: "hidden",
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <span
                                            data-depth="2"
                                            style={{
                                                transform: "translate3d(7.6px, -9.1px, 0px)",
                                                transformStyle: "preserve-3d",
                                                backfaceVisibility: "hidden",
                                                position: "relative",
                                                display: "block",
                                                left: "0px",
                                                top: "0px",
                                            }}
                                        >
                                            <img src="assets/images/splash/icons/shape-4.png" alt="Shape Images" />
                                        </span>
                                    </div>
                                    <div
                                        className="shape-image scene shape-5"
                                        style={{
                                            transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
                                            transformStyle: "preserve-3d",
                                            backfaceVisibility: "hidden",
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <span
                                            data-depth="-2"
                                            style={{
                                                transform: "translate3d(-10.3px, 14.5px, 0px)",
                                                transformStyle: "preserve-3d",
                                                backfaceVisibility: "hidden",
                                                position: "relative",
                                                display: "block",
                                                left: "0px",
                                                top: "0px",
                                            }}
                                        >
                                            <img src="assets/images/splash/icons/shape-5.png" alt="Shape Images" />
                                        </span>
                                    </div>
                                    <div
                                        className="shape-image scene shape-6"
                                        style={{
                                            transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
                                            transformStyle: "preserve-3d",
                                            backfaceVisibility: "hidden",
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <span
                                            data-depth="5"
                                            style={{
                                                transform: "translate3d(22.2px, -34.8px, 0px)",
                                                transformStyle: "preserve-3d",
                                                backfaceVisibility: "hidden",
                                                position: "relative",
                                                display: "block",
                                                left: "0px",
                                                top: "0px",
                                            }}
                                        >
                                            <img src="assets/images/splash/icons/shape-6.png" alt="Shape Images" />
                                        </span>
                                    </div>
                                    <div
                                        className="shape-image scene shape-7"
                                        style={{
                                            transform: "translate3d(0px, 0px, 0px) rotate(0.0001deg)",
                                            transformStyle: "preserve-3d",
                                            backfaceVisibility: "hidden",
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <span
                                            data-depth="-3"
                                            style={{
                                                transform: "translate3d(-30.9px, 43.4px, 0px)",
                                                transformStyle: "preserve-3d",
                                                backfaceVisibility: "hidden",
                                                position: "relative",
                                                display: "block",
                                                left: "0px",
                                                top: "0px",
                                            }}
                                        >
                                            <img src="assets/images/splash/icons/shape-7.png" alt="Shape Images" />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="row">
                            <div className="splash-service-main position-relative">
                                <div className="service-wrapper service-white">
                                    <div className="row g-0">
                                        {services.map((service, index) => (
                                            <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column" key={index}>
                                                <Link to={service.path}>
                                                    <div className="service service__style--1">
                                                        <div className="icon">
                                                            <img src={service.image} alt="Icon Images" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">{service.title}</h4>
                                                            <p>{service.description}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-wrapper">
                <div className="shape-image shape-1">
                    <img src="assets/images/splash/icons/shape-1.png" alt="Shape Images" />
                </div>
                <div className="shape-image shape-2">
                    <img src="assets/images/splash/icons/shape-2.png" alt="Shape Images" />
                </div>
                <div className="shape-image shape-3">
                    <img src="assets/images/splash/icons/shape-3.png" alt="Shape Images" />
                </div>
            </div>
        </div>
    );
}

export default Banner;
