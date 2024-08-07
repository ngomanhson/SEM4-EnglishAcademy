import { Link, NavLink } from "react-router-dom";
import config from "../../config";

function MenuMobile() {
    const menus = [
        { title: "Home", path: config.routes.home },
        { title: "Course", path: config.routes.course },
        { title: "Entrance Test", path: config.routes.entrance_test },
        { title: "Tutoring", path: config.routes.tutor },
        { title: "Blog", path: config.routes.blog },
    ];

    return (
        <div className="popup-mobile-menu">
            <div className="inner-wrapper">
                <div className="inner-top">
                    <div className="content">
                        <div className="logo">
                            <Link to={config.routes.home}>
                                <img src="assets/images/logo/logo.png" alt="English Academy" />
                            </Link>
                        </div>
                        <div className="rbt-btn-close">
                            <button className="close-button rbt-round-btn">
                                <i className="feather-x"></i>
                            </button>
                        </div>
                    </div>
                    <p className="description">English Academy is the leading English learning platform.</p>
                    <ul className="navbar-top-left rbt-information-list justify-content-start">
                        <li>
                            <a href="mailto:englishacademy@edu.com">
                                <i className="feather-mail"></i>englishacademy@edu.com
                            </a>
                        </li>
                        <li>
                            <a href="tel:0123456789">
                                <i className="feather-phone"></i>0123 456 789
                            </a>
                        </li>
                    </ul>
                </div>

                <nav className="mainmenu-nav">
                    <ul className="mainmenu">
                        {menus.map((menu, index) => (
                            <li className="with-megamenu" key={index}>
                                <NavLink to={menu.path}>{menu.title}</NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mobile-menu-bottom">
                    <div className="social-share-wrapper">
                        <ul className="social-icon social-default transparent-with-border justify-content-start mt--20">
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
            </div>
        </div>
    );
}

export default MenuMobile;
