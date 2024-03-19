import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="rbt-header rbt-header-10">
            <div className="rbt-sticky-placeholder" style={{ height: 0 }}></div>

            <div className="rbt-header-top rbt-header-top-1 header-space-betwween bg-not-transparent bg-color-darker top-expended-activation">
                <div className="container-fluid">
                    <div className="top-expended-wrapper">
                        <div className="top-expended-inner rbt-header-sec align-items-center">
                            <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                                <div className="rbt-header-content">
                                    <div className="header-info">
                                        <ul className="rbt-information-list">
                                            <li>
                                                <a href="#!">
                                                    <i className="fab fa-instagram"></i>100k <span className="d-none d-xxl-block">Followers</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fab fa-facebook-square"></i>500k <span className="d-none d-xxl-block">Followers</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="feather-phone"></i>+1-202-555-0174
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="rbt-header-sec-col rbt-header-center">
                                <div className="rbt-header-content justify-content-start justify-content-xl-center">
                                    <div className="header-info">
                                        <div className="rbt-header-top-news">
                                            <div className="inner">
                                                <div className="content">
                                                    <span className="rbt-badge variation-02 bg-color-primary color-white radius-round">Hot</span>
                                                    <span className="news-text">
                                                        <img src="assets/images/icons/hand-emojji.svg" alt="Hand Emojji Images" /> Intro price. Get Histudy for Big Sale -95% off.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rbt-header-sec-col rbt-header-right mt_md--10 mt_sm--10">
                                <div className="rbt-header-content justify-content-start justify-content-lg-end">
                                    <div className="header-info d-none d-xl-block">
                                        <ul className="social-share-transparent">
                                            <li>
                                                <a href="#!">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="rbt-separator d-none d-xl-block"></div>

                                    <div className="header-info">
                                        <ul className="rbt-dropdown-menu switcher-language">
                                            <li className="has-child-menu">
                                                <a href="#!">
                                                    <img className="left-image" src="assets/images/icons/en-us.png" alt="Language Images" />
                                                    <span className="menu-item">English</span>
                                                    <i className="right-icon feather-chevron-down"></i>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#!">
                                                            <img className="left-image" src="assets/images/icons/fr.png" alt="Language Images" />
                                                            <span className="menu-item">Français</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">
                                                            <img className="left-image" src="assets/images/icons/de.png" alt="Language Images" />
                                                            <span className="menu-item">Deutsch</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="header-info">
                                        <ul className="rbt-dropdown-menu currency-menu">
                                            <li className="has-child-menu">
                                                <a href="#!">
                                                    <span className="menu-item">USD</span>
                                                    <i className="right-icon feather-chevron-down"></i>
                                                </a>
                                                <ul className="sub-menu hover-reverse">
                                                    <li>
                                                        <a href="#!">
                                                            <span className="menu-item">EUR</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#!">
                                                            <span className="menu-item">GBP</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-info">
                            <div className="top-bar-expended d-block d-lg-none">
                                <button className="topbar-expend-button rbt-round-btn">
                                    <i className="feather-plus"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rbt-header-wrapper header-space-betwween header-sticky">
                <div className="container-fluid">
                    <div className="mainbar-row rbt-navigation-center align-items-center">
                        <div className="header-left rbt-header-content">
                            <div className="header-info">
                                <div className="logo">
                                    <Link to="/">
                                        <img src="assets/images/logo/logo.png" alt="English Academy" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="rbt-main-navigation d-none d-xl-block">
                            <nav className="mainmenu-nav">
                                <ul className="mainmenu">
                                    <li className="with-megamenu has-menu-child-item position-static menu-item-open">
                                        <Link to="/">Home</Link>
                                    </li>

                                    <li className="with-megamenu has-menu-child-item">
                                        <a href="#!">
                                            Courses <i className="feather-chevron-down"></i>
                                        </a>

                                        <div className="rbt-megamenu grid-item-2">
                                            <div className="wrapper">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="mega-top-banner">
                                                            <div className="content">
                                                                <h4 className="title">Developer hub</h4>
                                                                <p className="description">Start building fast, with code samples, key resources and more.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row row--15">
                                                    <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                                                        <h3 className="rbt-short-title">Course Layout</h3>
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <a href="course-filter-one-toggle.html">Filter One Toggle</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-filter-one-open.html">Filter One Open</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-filter-two-toggle.html">Filter Two Toggle</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-filter-two-open.html">Filter Two Open</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-with-tab.html">Course With Tab</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-with-tab-two.html">Course With Tab Two</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-card-2.html">Course Card Two</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-12 col-xl-6 col-xxl-6 single-mega-item">
                                                        <h3 className="rbt-short-title">Course Layout</h3>
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <a href="course-card-3.html">Course Card Three</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-masonry.html">Course Masonry</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-with-sidebar.html">Course With Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-details.html">Course Details</a>
                                                            </li>
                                                            <li>
                                                                <a href="course-details-2.html">Course Details Two</a>
                                                            </li>
                                                            <li>
                                                                <a href="lesson.html">
                                                                    Course Lesson <span className="rbt-badge-card">New</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="create-course.html">
                                                                    Create Course <span className="rbt-badge-card">New</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <ul className="nav-quick-access">
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-folder-minus"></i> Quick Start Guide
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-folder-minus"></i> For Open Source
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-folder-minus"></i> API Status
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-folder-minus"></i> Support
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="has-dropdown has-menu-child-item">
                                        <a href="#!">
                                            Dashboard
                                            <i className="feather-chevron-down"></i>
                                        </a>
                                        <ul className="submenu">
                                            <li className="has-dropdown">
                                                <a href="#!">Instructor Dashboard</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="instructor-dashboard.html">Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-profile.html">Profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-enrolled-courses.html">Enrolled Courses</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-wishlist.html">Wishlist</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-reviews.html">Reviews</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-my-quiz-attempts.html">My Quiz Attempts</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-order-history.html">Order History</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-course.html">My Course</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-announcements.html">Announcements</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-quiz-attempts.html">Quiz Attempts</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-assignments.html">Assignments</a>
                                                    </li>
                                                    <li>
                                                        <a href="instructor-settings.html">Settings</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="#!">Student Dashboard</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="student-dashboard.html">Dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="student-profile.html">Profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="student-enrolled-courses.html">Enrolled Courses</a>
                                                    </li>
                                                    <li>
                                                        <a href="student-wishlist.html">Wishlist</a>
                                                    </li>
                                                    <li>
                                                        <a href="student-reviews.html">Reviews</a>
                                                    </li>
                                                    <li>
                                                        <a href="student-my-quiz-attempts.html">My Quiz Attempts</a>
                                                    </li>
                                                    <li>
                                                        <a href="student-order-history.html">Order History</a>
                                                    </li>
                                                    <li>
                                                        <a href="student-settings.html">Settings</a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="with-megamenu has-menu-child-item position-static">
                                        <a href="#!">
                                            Pages <i className="feather-chevron-down"></i>
                                        </a>

                                        <div className="rbt-megamenu grid-item-4">
                                            <div className="wrapper">
                                                <div className="row row--15">
                                                    <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                                        <h3 className="rbt-short-title">Get Started</h3>
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <a href="about-us-01.html">About Us</a>
                                                            </li>
                                                            <li>
                                                                <a href="about-us-02.html">About Us 02</a>
                                                            </li>
                                                            <li>
                                                                <a href="event-grid.html">Event Grid</a>
                                                            </li>
                                                            <li>
                                                                <a href="event-list.html">Event List</a>
                                                            </li>
                                                            <li>
                                                                <a href="event-sidebar.html">Event Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="event-details.html">Event Details</a>
                                                            </li>
                                                            <li>
                                                                <a href="academy-gallery.html">Academy Gallery</a>
                                                            </li>
                                                            <li>
                                                                <a href="admission-guide.html">Admission Guide</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                                        <h3 className="rbt-short-title">Get Started</h3>
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <a href="profile.html">Profile</a>
                                                            </li>
                                                            <li>
                                                                <a href="contact.html">Contact Us</a>
                                                            </li>
                                                            <li>
                                                                <a href="become-a-teacher.html">Become a Teacher</a>
                                                            </li>
                                                            <li>
                                                                <a href="instructor.html">Instructor</a>
                                                            </li>
                                                            <li>
                                                                <a href="faqs.html">FAQS</a>
                                                            </li>
                                                            <li>
                                                                <a href="privacy-policy.html">Privacy Policy</a>
                                                            </li>
                                                            <li>
                                                                <a href="404.html">404 Page</a>
                                                            </li>
                                                            <li>
                                                                <a href="maintenance.html">Maintenance</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                                        <h3 className="rbt-short-title">Shop Pages</h3>
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <a href="shop.html">
                                                                    Shop <span className="rbt-badge-card">Sale Anything</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="single-product.html">Single Product</a>
                                                            </li>
                                                            <li>
                                                                <a href="cart.html">Cart Page</a>
                                                            </li>
                                                            <li>
                                                                <a href="checkout.html">Checkout</a>
                                                            </li>
                                                            <li>
                                                                <a href="wishlist.html">Wishlist Page</a>
                                                            </li>
                                                            <li>
                                                                <a href="my-account.html">My Acount</a>
                                                            </li>
                                                            <li>
                                                                <a href="login.html">Login &amp; Register</a>
                                                            </li>
                                                            <li>
                                                                <a href="subscription.html">Subscription</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-lg-12 col-xl-3 col-xxl-3 single-mega-item">
                                                        <div className="mega-category-item">
                                                            <div className="nav-category-item">
                                                                <div className="thumbnail">
                                                                    <div className="image">
                                                                        <img src="assets/images/course/category-2.png" alt="Course images" />
                                                                    </div>
                                                                    <a href="course-filter-one-toggle.html">
                                                                        <span>Online Education</span>
                                                                        <i className="feather-chevron-right"></i>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="nav-category-item">
                                                                <div className="thumbnail">
                                                                    <div className="image">
                                                                        <img src="assets/images/course/category-1.png" alt="Course images" />
                                                                    </div>
                                                                    <a href="course-filter-one-toggle.html">
                                                                        <span>Language Club</span>
                                                                        <i className="feather-chevron-right"></i>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="nav-category-item">
                                                                <div className="thumbnail">
                                                                    <div className="image">
                                                                        <img src="assets/images/course/category-4.png" alt="Course images" />
                                                                    </div>
                                                                    <a href="course-filter-one-toggle.html">
                                                                        <span>University Status</span>
                                                                        <i className="feather-chevron-right"></i>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="nav-category-item">
                                                                <div className="thumbnail">
                                                                    <a href="course-filter-one-toggle.html">
                                                                        <span>Course School</span>
                                                                        <i className="feather-chevron-right"></i>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="nav-category-item">
                                                                <div className="thumbnail">
                                                                    <div className="image">
                                                                        <img src="assets/images/course/category-9.png" alt="Course images" />
                                                                    </div>
                                                                    <a href="course-filter-one-toggle.html">
                                                                        <span>Academy</span>
                                                                        <i className="feather-chevron-right"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="with-megamenu has-menu-child-item position-static">
                                        <a href="#!">
                                            Elements <i className="feather-chevron-down"></i>
                                        </a>

                                        <div className="rbt-megamenu grid-item-3">
                                            <div className="wrapper">
                                                <div className="row row--15 single-dropdown-menu-presentation">
                                                    <div className="col-lg-4 col-xxl-4 single-mega-item">
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <a href="style-guide.html">
                                                                    Style Guide <span className="rbt-badge-card">Hot</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="accordion.html">Accordion</a>
                                                            </li>
                                                            <li>
                                                                <a href="advancetab.html">Advance Tab</a>
                                                            </li>
                                                            <li>
                                                                <a href="brand.html">Brand</a>
                                                            </li>
                                                            <li>
                                                                <a href="button.html">Button</a>
                                                            </li>
                                                            <li>
                                                                <a href="badge.html">Badge</a>
                                                            </li>
                                                            <li>
                                                                <a href="card.html">Card</a>
                                                            </li>
                                                            <li>
                                                                <a href="call-to-action.html">Call To Action</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-4 col-xxl-4 single-mega-item">
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <a href="counterup.html">Counter</a>
                                                            </li>
                                                            <li>
                                                                <a href="category.html">Categories</a>
                                                            </li>
                                                            <li>
                                                                <a href="header.html">Header Style</a>
                                                            </li>
                                                            <li>
                                                                <a href="newsletter.html">Newsletter</a>
                                                            </li>
                                                            <li>
                                                                <a href="team.html">Team</a>
                                                            </li>
                                                            <li>
                                                                <a href="social.html">Social</a>
                                                            </li>
                                                            <li>
                                                                <a href="list-style.html">List Style</a>
                                                            </li>
                                                            <li>
                                                                <a href="gallery.html">Gallery</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-4 col-xxl-4 single-mega-item">
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <a href="pricing.html">Pricing</a>
                                                            </li>
                                                            <li>
                                                                <a href="progressbar.html">Progressbar</a>
                                                            </li>
                                                            <li>
                                                                <a href="testimonial.html">Testimonial</a>
                                                            </li>
                                                            <li>
                                                                <a href="service.html">Service</a>
                                                            </li>
                                                            <li>
                                                                <a href="split.html">Split Area</a>
                                                            </li>
                                                            <li>
                                                                <a href="search.html">Search Style</a>
                                                            </li>
                                                            <li>
                                                                <a href="instagram.html">Instagram Style</a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">&amp; More Coming</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="btn-wrapper">
                                                            <a className="rbt-btn btn-gradient hover-icon-reverse square btn-xl w-100 text-center mt--30 hover-transform-none" href="#!">
                                                                <span className="icon-reverse-wrapper">
                                                                    <span className="btn-text">Visit Histudy Template</span>
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
                                    </li>

                                    <li className="with-megamenu has-menu-child-item position-static">
                                        <a href="#!">
                                            Blog <i className="feather-chevron-down"></i>
                                        </a>

                                        <div className="rbt-megamenu grid-item-3">
                                            <div className="wrapper">
                                                <div className="row row--15">
                                                    <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                                                        <h3 className="rbt-short-title">Blog Styles</h3>
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <a href="blog-list.html">Blog List</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog.html">Blog Grid</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-grid-minimal.html">Blog Grid Minimal</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-with-sidebar.html">Blog With Sidebar</a>
                                                            </li>
                                                            <li>
                                                                <a href="blog-details.html">Blog Details</a>
                                                            </li>
                                                            <li>
                                                                <a href="post-format-standard.html">Post Format Standard</a>
                                                            </li>
                                                            <li>
                                                                <a href="post-format-gallery.html">Post Format Gallery</a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                                                        <h3 className="rbt-short-title">Get Started</h3>
                                                        <ul className="mega-menu-item">
                                                            <li>
                                                                <a href="post-format-quote.html">Post Format Quote</a>
                                                            </li>
                                                            <li>
                                                                <a href="post-format-audio.html">Post Format Audio</a>
                                                            </li>
                                                            <li>
                                                                <a href="post-format-video.html">Post Format Video</a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    Media Under Title <span className="rbt-badge-card">Coming</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    Sticky Sidebar <span className="rbt-badge-card">Coming</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    Auto Masonry <span className="rbt-badge-card">Coming</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    Meta Overlaid <span className="rbt-badge-card">Coming</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-12 col-xl-4 col-xxl-4 single-mega-item">
                                                        <div className="rbt-ads-wrapper">
                                                            <a className="d-block" href="#!">
                                                                <img src="assets/images/service/mobile-cat.jpg" alt="Education Images" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header-right">
                            <ul className="quick-access">
                                <li className="access-icon">
                                    <a className="search-trigger-active rbt-round-btn" href="#!">
                                        <i className="feather-search"></i>
                                    </a>
                                </li>

                                <li className="access-icon rbt-mini-cart">
                                    <a className="rbt-cart-sidenav-activation rbt-round-btn" href="#!">
                                        <i className="feather-shopping-cart"></i>
                                        <span className="rbt-cart-count">4</span>
                                    </a>
                                </li>

                                <li className="account-access rbt-user-wrapper d-none d-xl-block">
                                    <a href="#!">
                                        <i className="feather-user"></i>Admin
                                    </a>
                                    <div className="rbt-user-menu-list-wrapper">
                                        <div className="inner">
                                            <div className="rbt-admin-profile">
                                                <div className="admin-thumbnail">
                                                    <img src="assets/images/team/avatar.jpg" alt="User Images" />
                                                </div>
                                                <div className="admin-info">
                                                    <span className="name">Nipa Bali</span>
                                                    <a className="rbt-btn-link color-primary" href="profile.html">
                                                        View Profile
                                                    </a>
                                                </div>
                                            </div>
                                            <ul className="user-list-wrapper">
                                                <li>
                                                    <a href="instructor-dashboard.html">
                                                        <i className="feather-home"></i>
                                                        <span>My Dashboard</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        <i className="feather-bookmark"></i>
                                                        <span>Bookmark</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-enrolled-courses.html">
                                                        <i className="feather-shopping-bag"></i>
                                                        <span>Enrolled Courses</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-wishlist.html">
                                                        <i className="feather-heart"></i>
                                                        <span>Wishlist</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-reviews.html">
                                                        <i className="feather-star"></i>
                                                        <span>Reviews</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-my-quiz-attempts.html">
                                                        <i className="feather-list"></i>
                                                        <span>My Quiz Attempts</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-order-history.html">
                                                        <i className="feather-clock"></i>
                                                        <span>Order History</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-quiz-attempts.html">
                                                        <i className="feather-message-square"></i>
                                                        <span>Question &amp; Answer</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <hr className="mt--10 mb--10" />
                                            <ul className="user-list-wrapper">
                                                <li>
                                                    <a href="#!">
                                                        <i className="feather-book-open"></i>
                                                        <span>Getting Started</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <hr className="mt--10 mb--10" />
                                            <ul className="user-list-wrapper">
                                                <li>
                                                    <a href="instructor-settings.html">
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
                                        </div>
                                    </div>
                                </li>

                                <li className="access-icon rbt-user-wrapper d-block d-xl-none">
                                    <a className="rbt-round-btn" href="#!">
                                        <i className="feather-user"></i>
                                    </a>
                                    <div className="rbt-user-menu-list-wrapper">
                                        <div className="inner">
                                            <div className="rbt-admin-profile">
                                                <div className="admin-thumbnail">
                                                    <img src="assets/images/team/avatar.jpg" alt="User Images" />
                                                </div>
                                                <div className="admin-info">
                                                    <span className="name">Nipa Bali</span>
                                                    <a className="rbt-btn-link color-primary" href="profile.html">
                                                        View Profile
                                                    </a>
                                                </div>
                                            </div>
                                            <ul className="user-list-wrapper">
                                                <li>
                                                    <a href="instructor-dashboard.html">
                                                        <i className="feather-home"></i>
                                                        <span>My Dashboard</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!">
                                                        <i className="feather-bookmark"></i>
                                                        <span>Bookmark</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-enrolled-courses.html">
                                                        <i className="feather-shopping-bag"></i>
                                                        <span>Enrolled Courses</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-wishlist.html">
                                                        <i className="feather-heart"></i>
                                                        <span>Wishlist</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-reviews.html">
                                                        <i className="feather-star"></i>
                                                        <span>Reviews</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-my-quiz-attempts.html">
                                                        <i className="feather-list"></i>
                                                        <span>My Quiz Attempts</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-order-history.html">
                                                        <i className="feather-clock"></i>
                                                        <span>Order History</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="instructor-quiz-attempts.html">
                                                        <i className="feather-message-square"></i>
                                                        <span>Question &amp; Answer</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <hr className="mt--10 mb--10" />
                                            <ul className="user-list-wrapper">
                                                <li>
                                                    <a href="#!">
                                                        <i className="feather-book-open"></i>
                                                        <span>Getting Started</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <hr className="mt--10 mb--10" />
                                            <ul className="user-list-wrapper">
                                                <li>
                                                    <a href="instructor-settings.html">
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
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            <div className="rbt-btn-wrapper d-none d-xl-block">
                                <a className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none" href="#!">
                                    <span data-text="Enroll Now">Enroll Now</span>
                                </a>
                            </div>

                            <div className="mobile-menu-bar d-block d-xl-none">
                                <div className="hamberger">
                                    <button className="hamberger-button rbt-round-btn">
                                        <i className="feather-menu"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-search-dropdown">
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <form action="#">
                                    <input type="text" placeholder="What are you looking for?" />
                                    <div className="submit-btn">
                                        <a className="rbt-btn btn-gradient btn-md" href="#!">
                                            Search
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="rbt-separator-mid">
                            <hr className="rbt-separator m-0" />
                        </div>

                        <div className="row g-4 pt--30 pb--60">
                            <div className="col-lg-12">
                                <div className="section-title">
                                    <h5 className="rbt-title-style-2">Our Top Course</h5>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <a href="course-details.html">
                                            <img src="assets/images/course/course-online-01.jpg" alt="Card" />
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title">
                                            <a href="course-details.html">React Js</a>
                                        </h5>
                                        <div className="rbt-review">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="rating-count"> (15 Reviews)</span>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$15</span>
                                                <span className="off-price">$25</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <a href="course-details.html">
                                            <img src="assets/images/course/course-online-02.jpg" alt="Card" />
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title">
                                            <a href="course-details.html">Java Program</a>
                                        </h5>
                                        <div className="rbt-review">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="rating-count"> (15 Reviews)</span>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$10</span>
                                                <span className="off-price">$40</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <a href="course-details.html">
                                            <img src="assets/images/course/course-online-03.jpg" alt="Card" />
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title">
                                            <a href="course-details.html">Web Design</a>
                                        </h5>
                                        <div className="rbt-review">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="rating-count"> (15 Reviews)</span>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$10</span>
                                                <span className="off-price">$20</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <a href="course-details.html">
                                            <img src="assets/images/course/course-online-04.jpg" alt="Card" />
                                        </a>
                                    </div>
                                    <div className="rbt-card-body">
                                        <h5 className="rbt-card-title">
                                            <a href="course-details.html">Web Design</a>
                                        </h5>
                                        <div className="rbt-review">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="rating-count"> (15 Reviews)</span>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$20</span>
                                                <span className="off-price">$40</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rbt-offcanvas-side-menu rbt-category-sidemenu">
                <div className="inner-wrapper">
                    <div className="inner-top">
                        <div className="inner-title">
                            <h4 className="title">Course Category</h4>
                        </div>
                        <div className="rbt-btn-close">
                            <button className="rbt-close-offcanvas rbt-round-btn">
                                <i className="feather-x"></i>
                            </button>
                        </div>
                    </div>
                    <nav className="side-nav w-100">
                        <ul className="rbt-vertical-nav-list-wrapper vertical-nav-menu">
                            <li className="vertical-nav-item">
                                <a href="#!">Course School</a>
                                <div className="vartical-nav-content-menu-wrapper">
                                    <div className="vartical-nav-content-menu">
                                        <h3 className="rbt-short-title">Course Title</h3>
                                        <ul className="rbt-vertical-nav-list-wrapper">
                                            <li>
                                                <a href="#!">Web Design</a>
                                            </li>
                                            <li>
                                                <a href="#!">Art</a>
                                            </li>
                                            <li>
                                                <a href="#!">Figma</a>
                                            </li>
                                            <li>
                                                <a href="#!">Adobe</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="vartical-nav-content-menu">
                                        <h3 className="rbt-short-title">Course Title</h3>
                                        <ul className="rbt-vertical-nav-list-wrapper">
                                            <li>
                                                <a href="#!">Photo</a>
                                            </li>
                                            <li>
                                                <a href="#!">English</a>
                                            </li>
                                            <li>
                                                <a href="#!">Math</a>
                                            </li>
                                            <li>
                                                <a href="#!">Read</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="vertical-nav-item">
                                <a href="#!">Online School</a>
                                <div className="vartical-nav-content-menu-wrapper">
                                    <div className="vartical-nav-content-menu">
                                        <h3 className="rbt-short-title">Course Title</h3>
                                        <ul className="rbt-vertical-nav-list-wrapper">
                                            <li>
                                                <a href="#!">Photo</a>
                                            </li>
                                            <li>
                                                <a href="#!">English</a>
                                            </li>
                                            <li>
                                                <a href="#!">Math</a>
                                            </li>
                                            <li>
                                                <a href="#!">Read</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="vartical-nav-content-menu">
                                        <h3 className="rbt-short-title">Course Title</h3>
                                        <ul className="rbt-vertical-nav-list-wrapper">
                                            <li>
                                                <a href="#!">Web Design</a>
                                            </li>
                                            <li>
                                                <a href="#!">Art</a>
                                            </li>
                                            <li>
                                                <a href="#!">Figma</a>
                                            </li>
                                            <li>
                                                <a href="#!">Adobe</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="vertical-nav-item">
                                <a href="#!">kindergarten</a>
                                <div className="vartical-nav-content-menu-wrapper">
                                    <div className="vartical-nav-content-menu">
                                        <h3 className="rbt-short-title">Course Title</h3>
                                        <ul className="rbt-vertical-nav-list-wrapper">
                                            <li>
                                                <a href="#!">Photo</a>
                                            </li>
                                            <li>
                                                <a href="#!">English</a>
                                            </li>
                                            <li>
                                                <a href="#!">Math</a>
                                            </li>
                                            <li>
                                                <a href="#!">Read</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="vertical-nav-item">
                                <a href="#!">Classic LMS</a>
                                <div className="vartical-nav-content-menu-wrapper">
                                    <div className="vartical-nav-content-menu">
                                        <h3 className="rbt-short-title">Course Title</h3>
                                        <ul className="rbt-vertical-nav-list-wrapper">
                                            <li>
                                                <a href="#!">Web Design</a>
                                            </li>
                                            <li>
                                                <a href="#!">Art</a>
                                            </li>
                                            <li>
                                                <a href="#!">Figma</a>
                                            </li>
                                            <li>
                                                <a href="#!">Adobe</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="read-more-btn">
                            <div className="rbt-btn-wrapper mt--20">
                                <a className="rbt-btn btn-border-gradient radius-round btn-sm hover-transform-none w-100 justify-content-center text-center" href="#!">
                                    <span>Learn More</span>
                                </a>
                            </div>
                        </div>
                    </nav>
                    <div className="rbt-offcanvas-footer"></div>
                </div>
            </div>
            {/* <a className="close_side_menu" href="#!"></a> */}
            <a className="close_side_menu" href="#!">
                <span className="visually-hidden">Close menu</span>
            </a>
        </header>
    );
}

export default Header;
