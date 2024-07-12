import { Link } from "react-router-dom";
import config from "../../config/index";

function Footer() {
    const useFulLinks = [
        {
            title: "Home",
            path: config.routes.home,
        },
        {
            title: "Tutor",
            path: config.routes.tutor,
        },
        {
            title: "Courses",
            path: config.routes.course,
        },
        {
            title: "Entrance Test",
            path: config.routes.entrance_test,
        },
    ];

    const importantLinks = [
        {
            title: "Profile",
            path: config.routes.profile,
        },
        {
            title: "Login",
            path: config.routes.login,
        },
        {
            title: "Register",
            path: config.routes.register,
        },
        {
            title: "Terms & Conditions",
            path: "",
        },
    ];

    return (
        <footer className="rbt-footer footer-style-1 bg-color-white overflow-hidden">
            <div className="footer-top">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <div className="logo">
                                    <Link to={config.routes.home}>
                                        <img src="assets/images/logo/logo.png" alt="English Academy" />
                                    </Link>
                                </div>

                                <p className="description mt--20">We’re always in search for talented and motivated people. Don’t be shy introduce yourself!</p>

                                <ul className="social-icon social-default justify-content-start">
                                    <li>
                                        <a href="https://www.facebook.com/">
                                            <i className="feather-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.twitter.com">
                                            <i className="feather-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/">
                                            <i className="feather-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkdin.com/">
                                            <i className="feather-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <h5 className="ft-title">Useful Links</h5>
                                <ul className="ft-link">
                                    {useFulLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.path}>{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <h5 className="ft-title">Important Link</h5>
                                <ul className="ft-link">
                                    {importantLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.path}>{link.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="footer-widget">
                                <h5 className="ft-title">Get Contact</h5>
                                <ul className="ft-link">
                                    <li>
                                        <span>Phone:</span> <a href="tel:0123456789">0123 456 789</a>
                                    </li>
                                    <li>
                                        <span>E-mail:</span> <a href="mailto:englishacademy@edu.com">englishacademy@edu.com</a>
                                    </li>
                                </ul>

                                <form className="newsletter-form mt--20" action="#">
                                    <h6 className="w-600">Newsletter</h6>
                                    <p className="description">
                                        2000+ Our students are subscribe Around the World.
                                        <br /> Don’t be shy introduce yourself!
                                    </p>

                                    <div className="form-group right-icon icon-email mb--20">
                                        <label htmlFor="email">Enter Your Email Here</label>
                                        <input id="email" type="email" required />
                                    </div>

                                    <div className="form-group mb--0">
                                        <button className="rbt-btn rbt-switch-btn btn-gradient radius-round btn-sm" type="submit">
                                            <span data-text="Submit Now">Submit Now</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rbt-separator-mid">
                <div className="container">
                    <hr className="rbt-separator m-0" />
                </div>
            </div>
            <div className="copyright-area copyright-style-1 ptb--20">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                            <p className="rbt-link-hover text-center text-lg-start">
                                Copyright © 2024 <Link to="">English Academy</Link> All Rights Reserved
                            </p>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
                            <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                                <li>
                                    <Link to="">Terms of service</Link>
                                </li>
                                <li>
                                    <Link to="">Privacy policy</Link>
                                </li>
                                <li>
                                    <Link to="">Subscription</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
