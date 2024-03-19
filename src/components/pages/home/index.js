import Layout from "../../layouts";
import BuyNow from "../../views/home/BuyNow";
import OurFAQ from "../../views/home/OurFAQ";
import WhyChoose from "../../views/home/WhyChoose";
import WorldClass from "../../views/home/WorldClass";

function Home() {
    return (
        <>
            <Layout title="Home Page">
                <div class="rbt-splash-slider d-flex align-items-center">
                    <div class="wrapper" style={{ marginTop: "50px" }}>
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-12 col-xl-6 order-2 order-xl-1">
                                    <div class="inner">
                                        <div class="banner-top">
                                            <div class="banner-badge-top">
                                                <div class="icon">
                                                    <div class="rating">
                                                        <a href="#">
                                                            <i class="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i class="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i class="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i class="fa fa-star"></i>
                                                        </a>
                                                        <a href="#">
                                                            <i class="fa fa-star"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <span class="subtitle">12500+ Trust Customer</span>
                                            </div>

                                            <div class="banner-badge-top">
                                                <div class="icon">
                                                    <img src="assets/images/icons/elite.svg" alt="Icons Images" />
                                                </div>
                                                <span class="subtitle">Envato Elite Author</span>
                                            </div>
                                        </div>
                                        <h1 class="title">
                                            Have your dream site in minutes <br />
                                            for
                                            <span class="cd-headline slide">
                                                <span class="cd-words-wrapper">
                                                    <b class="is-hidden theme-gradient">Online Course.</b>
                                                    <b class="is-visible theme-gradient">Like Udemy.</b>
                                                    <b class="is-hidden theme-gradient">School.</b>
                                                    <b class="is-hidden theme-gradient">University.</b>
                                                    <b class="is-hidden theme-gradient">High School.</b>
                                                    <b class="is-hidden theme-gradient">Kindergarden.</b>
                                                </span>
                                            </span>
                                        </h1>
                                        <p class="description">
                                            The most <strong>powerful</strong> yet the <strong>easiest</strong> template ever.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6 order-1 order-xl-2">
                                    <div class="video-popup-wrapper">
                                        <img class="w-100 rbt-radius" src="assets/images/splash/banner-group-image.png" alt="Video Images" />
                                        <a class="rbt-btn rounded-player-2 popup-video position-to-top with-animation d-none" href="https://www.youtube.com/watch?v=nA1Aqp0sPQo">
                                            <span class="play-icon"></span>
                                        </a>
                                        <div class="banner-group-shape">
                                            <div class="shape-image scene shape-4">
                                                <span data-depth="2">
                                                    <img src="assets/images/splash/icons/shape-4.png" alt="Shape Images" />
                                                </span>
                                            </div>
                                            <div class="shape-image scene shape-5">
                                                <span data-depth="-2">
                                                    <img src="assets/images/splash/icons/shape-5.png" alt="Shape Images" />
                                                </span>
                                            </div>
                                            <div class="shape-image scene shape-6">
                                                <span data-depth="5">
                                                    <img src="assets/images/splash/icons/shape-6.png" alt="Shape Images" />
                                                </span>
                                            </div>
                                            <div class="shape-image scene shape-7">
                                                <span data-depth="-3">
                                                    <img src="assets/images/splash/icons/shape-7.png" alt="Shape Images" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="splash-service-main position-relative">
                                        <div class="service-wrapper service-white">
                                            <div class="row g-0">
                                                <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                                    <div class="service service__style--1">
                                                        <div class="icon">
                                                            <img src="assets/images/icons/icons-01.png" alt="Icon Images" />
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">Fast Performance</h4>
                                                            <p>Optimized for a smaller build size, faster dev compilation and dozens of other improvements.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                                    <div class="service service__style--1">
                                                        <div class="icon">
                                                            <img src="assets/images/icons/icons-02.png" alt="Icon Images" />
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">Perfect Responsive</h4>
                                                            <p>Our template is full perfect for all device. You can visit our template all device easily.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                                    <div class="service service__style--1">
                                                        <div class="icon">
                                                            <img src="assets/images/icons/icons-03.png" alt="Icon Images" />
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">Fast &amp; Friendly Support</h4>
                                                            <p>We are provide 24 hours support for all clients.You can purchase without hesitation.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12 service__style--column">
                                                    <div class="service service__style--1">
                                                        <div class="icon">
                                                            <img src="assets/images/icons/icons-04.png" alt="Icon Images" />
                                                        </div>
                                                        <div class="content">
                                                            <h4 class="title">Easy to Use</h4>
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
                    <div class="shape-wrapper">
                        <div class="shape-image shape-1">
                            <img src="assets/images/splash/icons/shape-1.png" alt="Shape Images" />
                        </div>
                        <div class="shape-image shape-2">
                            <img src="assets/images/splash/icons/shape-2.png" alt="Shape Images" />
                        </div>
                        <div class="shape-image shape-3">
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
