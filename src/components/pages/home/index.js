import Layout from "../../layouts";
import BuyNow from "../../views/home/BuyNow";
import OurFAQ from "../../views/home/OurFAQ";
import WhyChoose from "../../views/home/WhyChoose";
import WorldClass from "../../views/home/WorldClass";

function Home() {
    return (
        <>
            <Layout title="Home Page">
                <div className="rbt-splash-slider d-flex align-items-center">
                    <div className="wrapper" style={{ marginTop: "50px" }}>
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-12 col-xl-6 order-2 order-xl-1">
                                    <div className="inner">
                                        <div className="banner-top">
                                            <div className="banner-badge-top">
                                                <div className="icon">
                                                    <div className="rating">
                                                        <a href="#!">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#!">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#!">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#!">
                                                            <i className="fa fa-star"></i>
                                                        </a>
                                                        <a href="#!">
                                                            <i className="fa fa-star"></i>
                                                        </a>
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
                                            Have your dream site in minutes <br />
                                            for
                                            <span className="cd-headline slide">
                                                <span className="cd-words-wrapper">
                                                    <b className="is-hidden theme-gradient">Online Course.</b>
                                                    <b className="is-visible theme-gradient">Like Udemy.</b>
                                                    <b className="is-hidden theme-gradient">School.</b>
                                                    <b className="is-hidden theme-gradient">University.</b>
                                                    <b className="is-hidden theme-gradient">High School.</b>
                                                    <b className="is-hidden theme-gradient">Kindergarden.</b>
                                                </span>
                                            </span>
                                        </h1>
                                        <p className="description">
                                            The most <strong>powerful</strong> yet the <strong>easiest</strong> template ever.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-xl-6 order-1 order-xl-2">
                                    <div className="video-popup-wrapper">
                                        <img className="w-100 rbt-radius" src="assets/images/splash/banner-group-image.png" alt="Video Images" />
                                        <a className="rbt-btn rounded-player-2 popup-video position-to-top with-animation d-none" href="https://www.youtube.com/watch?v=nA1Aqp0sPQo">
                                            <span className="play-icon"></span>
                                        </a>
                                        <div className="banner-group-shape">
                                            <div className="shape-image scene shape-4">
                                                <span data-depth="2">
                                                    <img src="assets/images/splash/icons/shape-4.png" alt="Shape Images" />
                                                </span>
                                            </div>
                                            <div className="shape-image scene shape-5">
                                                <span data-depth="-2">
                                                    <img src="assets/images/splash/icons/shape-5.png" alt="Shape Images" />
                                                </span>
                                            </div>
                                            <div className="shape-image scene shape-6">
                                                <span data-depth="5">
                                                    <img src="assets/images/splash/icons/shape-6.png" alt="Shape Images" />
                                                </span>
                                            </div>
                                            <div className="shape-image scene shape-7">
                                                <span data-depth="-3">
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
                                                <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                                    <div className="service service__style--1">
                                                        <div className="icon">
                                                            <img src="assets/images/icons/icons-01.png" alt="Icon Images" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Fast Performance</h4>
                                                            <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                                    <div className="service service__style--1">
                                                        <div className="icon">
                                                            <img src="assets/images/icons/icons-02.png" alt="Icon Images" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Perfect Responsive</h4>
                                                            <p>Our template is full perfect for all device. You can visit our template all device easily.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                                    <div className="service service__style--1">
                                                        <div className="icon">
                                                            <img src="assets/images/icons/icons-03.png" alt="Icon Images" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Fast &amp; Friendly Support</h4>
                                                            <p>We are provide 24 hours support for all clients.You can purchase without hesitation.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                                    <div className="service service__style--1">
                                                        <div className="icon">
                                                            <img src="assets/images/icons/icons-04.png" alt="Icon Images" />
                                                        </div>
                                                        <div className="content">
                                                            <h4 className="title">Easy to Use</h4>
                                                            <p>Create your own custom template or section by copying, pasting, and assembling.</p>
                                                        </div>
                                                    </div>
                                                </div>
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

                <WhyChoose />

                <WorldClass />

                <BuyNow />

                <OurFAQ />
            </Layout>
        </>
    );
}
export default Home;
