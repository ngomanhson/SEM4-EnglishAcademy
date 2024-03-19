import Layout from "../../layouts";

function Profile() {
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
                                                                <a href="student-profile.html" className="active">
                                                                    <i className="feather-user"></i>
                                                                    <span>My Profile</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="student-enrolled-courses.html">
                                                                    <i className="feather-book-open"></i>
                                                                    <span>Enrolled Courses</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="student-wishlist.html">
                                                                    <i className="feather-bookmark"></i>
                                                                    <span>Wishlist</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="student-reviews.html">
                                                                    <i className="feather-star"></i>
                                                                    <span>Reviews</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="student-my-quiz-attempts.html">
                                                                    <i className="feather-help-circle"></i>
                                                                    <span>My Quiz Attempts</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="student-order-history.html">
                                                                    <i className="feather-shopping-bag"></i>
                                                                    <span>Order History</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </nav>

                                                    <div className="section-title mt--40 mb--20">
                                                        <h6 className="rbt-title-style-2">User</h6>
                                                    </div>

                                                    <nav className="mainmenu-nav">
                                                        <ul className="dashboard-mainmenu rbt-default-sidebar-list">
                                                            <li>
                                                                <a href="student-settings.html">
                                                                    <i className="feather-settings"></i>
                                                                    <span>Settings</span>
                                                                </a>
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
                                <div className="col-lg-9">
                                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                                        <div className="content">
                                            <div className="section-title">
                                                <h4 className="rbt-title-style-3">My Profile</h4>
                                            </div>

                                            <div className="rbt-profile-row row row--15">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="rbt-profile-content b2">Registration Date</div>
                                                </div>
                                                <div className="col-lg-8 col-md-8">
                                                    <div className="rbt-profile-content b2">February 25, 2025 6:01 am</div>
                                                </div>
                                            </div>

                                            <div className="rbt-profile-row row row--15 mt--15">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="rbt-profile-content b2">First Name</div>
                                                </div>
                                                <div className="col-lg-8 col-md-8">
                                                    <div className="rbt-profile-content b2">Emily</div>
                                                </div>
                                            </div>

                                            <div className="rbt-profile-row row row--15 mt--15">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="rbt-profile-content b2">Last Name</div>
                                                </div>
                                                <div className="col-lg-8 col-md-8">
                                                    <div className="rbt-profile-content b2">Hannah</div>
                                                </div>
                                            </div>

                                            <div className="rbt-profile-row row row--15 mt--15">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="rbt-profile-content b2">Username</div>
                                                </div>
                                                <div className="col-lg-8 col-md-8">
                                                    <div className="rbt-profile-content b2">instructor</div>
                                                </div>
                                            </div>

                                            <div className="rbt-profile-row row row--15 mt--15">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="rbt-profile-content b2">Email</div>
                                                </div>
                                                <div className="col-lg-8 col-md-8">
                                                    <div className="rbt-profile-content b2">example@gmail.com</div>
                                                </div>
                                            </div>

                                            <div className="rbt-profile-row row row--15 mt--15">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="rbt-profile-content b2">Phone Number</div>
                                                </div>
                                                <div className="col-lg-8 col-md-8">
                                                    <div className="rbt-profile-content b2">+1-202-555-0174</div>
                                                </div>
                                            </div>

                                            <div className="rbt-profile-row row row--15 mt--15">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="rbt-profile-content b2">Skill/Occupation</div>
                                                </div>
                                                <div className="col-lg-8 col-md-8">
                                                    <div className="rbt-profile-content b2">Application Developer</div>
                                                </div>
                                            </div>

                                            <div className="rbt-profile-row row row--15 mt--15">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="rbt-profile-content b2">Biography</div>
                                                </div>
                                                <div className="col-lg-8 col-md-8">
                                                    <div className="rbt-profile-content b2">
                                                        I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic
                                                        user experiences.
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
            </div>
        </Layout>
    );
}

export default Profile;
