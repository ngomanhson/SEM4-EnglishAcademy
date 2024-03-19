function AboutUs() {
    return (
        <div className="rbt-about-area bg-color-white rbt-section-gapTop pb_md--80 pb_sm--80 about-style-1">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="thumbnail-wrapper">
                            <div className="thumbnail image-1">
                                <img
                                    data-parallax='{"x": 0, "y": -20}'
                                    src="assets/images/about/about-01.png"
                                    alt="Education Images"
                                    style={{
                                        transform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                                        WebkitTransform: "translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                                    }}
                                />
                            </div>
                            <div className="thumbnail image-2 d-none d-xl-block">
                                <img
                                    data-parallax='{"x": 0, "y": 60}'
                                    src="assets/images/about/about-02.png"
                                    alt="Education Images"
                                    style={{
                                        transform: "translate3d(0px, 0.029px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                                        WebkitTransform: "translate3d(0px, 0.029px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                                    }}
                                />
                            </div>
                            <div className="thumbnail image-3 d-none d-md-block">
                                <img
                                    data-parallax='{"x": 0, "y": 80}'
                                    src="assets/images/about/about-03.png"
                                    alt="Education Images"
                                    style={{
                                        transform: "translate3d(0px, 0.029px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                                        WebkitTransform: "translate3d(0px, 0.029px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="inner pl--50 pl_sm--0 pl_md--0">
                            <div className="section-title text-start">
                                <span className="subtitle bg-coral-opacity">Know About Us</span>
                                <h2 className="title">
                                    Know About Histudy <br /> Learning Platform
                                </h2>
                            </div>

                            <p className="description mt--30">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the
                                coast of the Semantics, a large language ocean.
                            </p>

                            <div className="rbt-feature-wrapper mt--20 ml_dec_20">
                                <div className="rbt-feature feature-style-2 rbt-radius">
                                    <div className="icon bg-pink-opacity">
                                        <i className="feather-heart"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h6 className="feature-title">Flexible Classes</h6>
                                        <p className="feature-description">It is a long established fact that a reader will be distracted by this on readable content of when looking at its layout.</p>
                                    </div>
                                </div>

                                <div className="rbt-feature feature-style-2 rbt-radius">
                                    <div className="icon bg-primary-opacity">
                                        <i className="feather-book"></i>
                                    </div>
                                    <div className="feature-content">
                                        <h6 className="feature-title">Learn From Anywhere</h6>
                                        <p className="feature-description">Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit laborum eaque non eius iure suscipit.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-btn mt--40">
                                <a className="rbt-btn btn-gradient hover-icon-reverse" href="#!">
                                    <span className="icon-reverse-wrapper">
                                        <span className="btn-text">More About Us</span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right"></i>
                                        </span>
                                        <span className="btn-icon">
                                            <i className="feather-arrow-right"></i>
                                        </span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
