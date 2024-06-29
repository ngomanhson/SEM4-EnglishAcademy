function AboutUs() {
    const imageStyle1 = {
        transform: "translate3d(0px, -20px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
        WebkitTransform: "translate3d(0px, -20px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
    };

    const imageStyle2 = {
        transform: "translate3d(0px, 59.635px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
        WebkitTransform: "translate3d(0px, 59.635px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
    };

    const imageStyle3 = {
        transform: "translate3d(0px, 30.029px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
        WebkitTransform: "translate3d(0px, 30.029px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
    };

    return (
        <div className="rbt-about-area about-style-1 bg-color-white rbt-section-gapTop">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="thumbnail-wrapper">
                            <div className="thumbnail image-1">
                                <img data-parallax='{"x": 0, "y": -20}' src="assets/images/about/about-07.jpg" alt="Education Images" style={imageStyle1} />
                            </div>
                            <div className="thumbnail image-2 d-none d-xl-block">
                                <img data-parallax='{"x": 0, "y": 60}' src="assets/images/about/about-09.jpg" alt="Education Images" style={imageStyle2} />
                            </div>
                            <div className="thumbnail image-3 d-none d-md-block">
                                <img data-parallax='{"x": 0, "y": 80}' src="assets/images/about/about-08.jpg" alt="Education Images" style={imageStyle3} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="inner pl--50 pl_sm--0 pl_md--0">
                            <div className="section-title text-start">
                                <span className="subtitle bg-coral-opacity">About Us</span>
                                <h2 className="title">
                                    About English Academy <br />
                                    Learning Platform
                                </h2>
                            </div>
                            <p className="description mt--30">
                                Welcome to English Academy, your go-to platform for mastering English. Our courses are designed for all levels, featuring interactive lessons and expert instructors to
                                make learning easy and enjoyable.
                            </p>
                            <div className="rbt-feature-wrapper mt--40">
                                <div className="rbt-feature feature-style-1">
                                    <div className="icon bg-pink-opacity">
                                        <i className="feather-heart"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h6 className="feature-title">Flexible Classes</h6>
                                        <p className="feature-description">
                                            Our flexible class schedules allow you to learn at your own pace. Access courses anytime, anywhere, and balance your learning with your personal and
                                            professional life.
                                        </p>
                                    </div>
                                </div>

                                <div className="rbt-feature feature-style-1">
                                    <div className="icon bg-primary-opacity">
                                        <i className="feather-book"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h6 className="feature-title">Learn From Anywhere</h6>
                                        <p className="feature-description">
                                            Our platform is accessible from any device, enabling you to learn from the comfort of your home, office, or even on the go. Stay connected and never miss a
                                            lesson.
                                        </p>
                                    </div>
                                </div>

                                <div className="rbt-feature feature-style-1">
                                    <div className="icon bg-coral-opacity">
                                        <i className="feather-monitor"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h6 className="feature-title">Experienced Teacher's service.</h6>
                                        <p className="feature-description">
                                            Learn from the best in the field. Our experienced teachers provide personalized guidance and feedback to ensure you achieve your learning goals.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
