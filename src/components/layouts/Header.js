import { Link, NavLink } from "react-router-dom";
import config from "../../config/index";

function Header() {
    return (
        <header className="rbt-header rbt-header-10">
            <div className="rbt-sticky-placeholder"></div>

            <div className="rbt-header-top rbt-header-top-1 header-space-betwween bg-not-transparent bg-color-darker top-expended-activation">
                <div className="container-fluid">
                    <div className="top-expended-wrapper">
                        <div className="top-expended-inner rbt-header-sec align-items-center">
                            <div className="rbt-header-sec-col rbt-header-left d-none d-xl-block">
                                <div className="rbt-header-content">
                                    <div className="header-info">
                                        <ul className="rbt-information-list">
                                            <li>
                                                <Link to="">
                                                    <i className="fab fa-instagram"></i>100k <span className="d-none d-xxl-block">Followers</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="">
                                                    <i className="fab fa-facebook-square"></i>500k <span className="d-none d-xxl-block">Followers</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <a href="tel:0123456789">
                                                    <i className="feather-phone"></i>0123 456 789
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
                                                        <img src="assets/images/icons/hand-emojji.svg" alt="Hand Emojji Images" /> Intro price. Get English Academy for Big Sale -95% off.
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
                                                <Link to="">
                                                    <i className="fab fa-facebook-f"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="">
                                                    <i className="fab fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="">
                                                    <i className="fab fa-instagram"></i>
                                                </Link>
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
                                        <NavLink to={config.routes.home}>Home</NavLink>
                                    </li>

                                    <li className="with-megamenu has-menu-child-item">
                                        <NavLink to={config.routes.course}>Courses</NavLink>
                                    </li>

                                    <li className="has-dropdown has-menu-child-item">
                                        <NavLink to={config.routes.entrance_test}>Entrance Test</NavLink>
                                    </li>

                                    <li className="with-megamenu has-menu-child-item">
                                        <NavLink to={config.routes.tutor}>Tutor</NavLink>
                                    </li>

                                    <li className="with-megamenu has-menu-child-item position-static">
                                        <NavLink to={config.routes.blog}>Blog</NavLink>
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

                                <li className="access-icon">
                                    <Link to={config.routes.dictionary} className="rbt-round-btn">
                                        <i className="fas fa-language"></i>
                                    </Link>
                                </li>

                                <li className="account-access rbt-user-wrapper d-none d-xl-block">
                                    <a href="#!">
                                        <i className="feather-user"></i>Five Idiots
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
                                                    <img src="assets/images/team/avatar.jpg" alt="Avatar" />
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

                            {/* <div className="rbt-btn-wrapper d-none d-xl-block">
                                <a className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none" href="#!">
                                    <span data-text="Enroll Now">Enroll Now</span>
                                </a>
                            </div> */}

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
