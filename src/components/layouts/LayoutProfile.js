import { NavLink } from "react-router-dom";
import Layout from ".";

function LayoutProfile({ children }) {
    return (
        <Layout title="Profile">
            <div className="rbt-page-banner-wrapper">
                <div className="rbt-banner-image"></div>
            </div>

            <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="rbt-dashboard-content-wrapper">
                                <div className="tutor-bg-photo bg_image bg_image--23 height-350"></div>
                                <div className="rbt-tutor-information">
                                    <div className="rbt-tutor-information-left">
                                        <div className="thumbnail rbt-avatars size-lg">
                                            <img src="assets/images/team/avatar-2.jpg" alt="Instructor" />
                                        </div>
                                        <div className="tutor-content">
                                            <h5 className="title">Emily Hannah</h5>
                                            <ul className="rbt-meta rbt-meta-white mt--5">
                                                <li>
                                                    <i className="feather-book"></i>5 Courses Enroled
                                                </li>
                                                <li>
                                                    <i className="feather-award"></i>4 Certificate
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="rbt-tutor-information-right">
                                        <div className="tutor-btn">
                                            <a className="rbt-btn btn-md hover-icon-reverse" href="#!">
                                                <span className="icon-reverse-wrapper">
                                                    <span className="btn-text">Become an Instructor</span>
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

                            <div className="row g-5">
                                <div className="col-lg-3">
                                    <div className="rbt-default-sidebar sticky-top rbt-shadow-box rbt-gradient-border">
                                        <div className="inner">
                                            <div className="content-item-content">
                                                <div className="rbt-default-sidebar-wrapper">
                                                    <div className="section-title mb--20">
                                                        <h6 className="rbt-title-style-2">Welcome, Jone Due</h6>
                                                    </div>
                                                    <nav className="mainmenu-nav">
                                                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                            <li>
                                                                <NavLink to="/profile">
                                                                    <i className="feather-user"></i>
                                                                    <span>My Profile</span>
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/enrolled-courses">
                                                                    <i className="feather-book-open"></i>
                                                                    <span>Enrolled Courses</span>
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/wishlist">
                                                                    <i className="feather-bookmark"></i>
                                                                    <span>Wishlist</span>
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/reviews">
                                                                    <i className="feather-star"></i>
                                                                    <span>Reviews</span>
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink to="/my-quiz">
                                                                    <i className="feather-help-circle"></i>
                                                                    <span>My Quiz Attempts</span>
                                                                </NavLink>
                                                            </li>
                                                        </ul>
                                                    </nav>

                                                    <div className="section-title mt--40 mb--20">
                                                        <h6 className="rbt-title-style-2">Information</h6>
                                                    </div>

                                                    <nav className="mainmenu-nav">
                                                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                            <li>
                                                                <NavLink to="/settings">
                                                                    <i className="feather-settings"></i>
                                                                    <span>Settings</span>
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <a href="index.html">
                                                                    <i className="feather-log-out"></i>
                                                                    <span>Logout</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default LayoutProfile;
