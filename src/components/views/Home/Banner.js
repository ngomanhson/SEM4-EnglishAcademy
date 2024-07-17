import { Link } from "react-router-dom";
import config from "../../../config";

function Banner() {
    const headlines = [
        {
            title: "Offline Learning.",
        },
        {
            title: "Competency Assessment.",
        },
        {
            title: "Tutoring.",
        },
    ];

    return (
        <div className="rbt-splash-slider d-flex align-items-center">
            <div className="container">
                <div className="wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-xl-6 order-2 order-xl-1">
                            <div className="inner">
                                <div className="rbt-new-badge rbt-new-badge-one mb-5">
                                    <span className="rbt-new-badge-icon">🏆</span> Leading Platform in Online Learning
                                </div>

                                <h1 className="title f-sm-30">
                                    The largest online platform
                                    <span className="header-caption d-block">
                                        <span className="cd-headline clip is-full-width">
                                            <span className="cd-words-wrapper" style={{ width: "5.50067px", overflow: "hidden" }}>
                                                {headlines.map((headline, index) => (
                                                    <b className="theme-gradient is-hidden" key={index}>
                                                        {headline.title}
                                                    </b>
                                                ))}

                                                <b className="theme-gradient is-visible">Online Courses.</b>
                                            </span>
                                        </span>
                                    </span>
                                </h1>

                                <p className="description fw-300">
                                    We have extensive experience in educational platforms and employ skilled strategies to ensure the success of our online learning initiatives.
                                </p>

                                <div className="rbt-like-total pb-5">
                                    <div className="rating mb--20">
                                        <Link to="">
                                            <i className="fa fa-star"></i>
                                        </Link>
                                        <Link to="">
                                            <i className="fa fa-star"></i>
                                        </Link>
                                        <Link to="">
                                            <i className="fa fa-star"></i>
                                        </Link>
                                        <Link to="">
                                            <i className="fa fa-star"></i>
                                        </Link>
                                        <Link to="">
                                            <i className="fa fa-star"></i>
                                        </Link>
                                    </div>
                                    <div className="profile-share">
                                        <a href="!#" className="avatar" data-tooltip="Mark JOrdan" tabIndex="0">
                                            <img src="assets/images/testimonial/client-03.png" alt="education" />
                                        </a>
                                        <a href="!#" className="avatar" data-tooltip="Mark" tabIndex="0">
                                            <img src="assets/images/testimonial/client-04.png" alt="education" />
                                        </a>
                                        <a href="!#" className="avatar" data-tooltip="Jordan" tabIndex="0">
                                            <img src="assets/images/testimonial/client-06.png" alt="education" />
                                        </a>
                                        <div className="more-author-text">
                                            <h5 className="total-join-students">Join Over 3000+ Students</h5>
                                            <p className="subtitle">Have a new ideas every week.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rbt-button-group justify-content-start mt--30">
                                    <Link to={config.routes.entrance_test} className="rbt-btn btn-gradient rbt-switch-btn">
                                        <span data-text="Free Competency Assessment Now!">Free Competency Assessment Now!</span>
                                    </Link>
                                    {/* <Link to={config.routes.course} className="rbt-btn btn-border rbt-switch-btn">
                                        <span data-text="Find Courses">Find Courses</span>
                                    </Link> */}
                                </div>
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
                    <div className="splash-service-main position-relative">
                        <div className="service-wrapper service-white p-0"></div>
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
