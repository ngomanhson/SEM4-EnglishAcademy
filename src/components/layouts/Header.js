import { Link, NavLink } from "react-router-dom";
import config from "../../config/index";
import { isLoggedIn, getDecodedToken, removeAccessToken } from "../../utils/auth";
function Header() {
    const decodedToken = getDecodedToken();

    const handleLogout = () => {
        removeAccessToken();
    };

    const headerItem = [
        {
            title: "Home",
            path: config.routes.home,
        },
        {
            title: "Courses",
            path: config.routes.course,
            megamenu: [
                {
                    title: "Online Courses",
                    items: [{ title: "Online Courses", path: config.routes.course }],
                },
                {
                    title: "Offline Course",
                    items: [
                        { title: "My Courses", path: config.routes.my_course },
                        { title: "Time Table", path: config.routes.timetable },
                        { title: "Mark Report", path: config.routes.mark_report },
                    ],
                },
            ],
        },
        {
            title: "Entrance Test",
            path: config.routes.entrance_test,
        },
        {
            title: "Tutoring",
            path: config.routes.tutor,
            megamenu: [
                {
                    title: "Tutors",
                    items: [{ title: "Tutors", path: config.routes.tutor }],
                },
                {
                    title: "Booking & Learn",
                    items: [
                        { title: "Room Online", path: config.routes.room },
                        { title: "Booking Waiting", path: config.routes.booking_waiting },
                        { title: "Session with tutors", path: config.routes.booking },
                    ],
                },
            ],
        },
        {
            title: "Blog",
            path: config.routes.blog,
        },
    ];

    const menuItem = [
        {
            breakLine: true,
            items: [
                {
                    title: "Personal Information",
                    path: config.routes.profile,
                    icon: "feather-user",
                },
                {
                    title: "My Courses",
                    path: config.routes.my_course,
                    icon: "feather-book-open",
                },
            ],
        },
        {
            breakLine: true,
            items: [
                {
                    title: "Change Password",
                    path: config.routes.change_password,
                    icon: "feather-settings",
                },
            ],
        },
        {
            breakLine: false,
            items: [
                {
                    title: "Logout",
                    path: config.routes.login,
                    icon: "feather-log-out",
                    onClick: handleLogout,
                },
            ],
        },
    ];

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
                                    <Link to={config.routes.home}>
                                        <img src="assets/images/logo/logo.png" alt="English Academy" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="rbt-main-navigation d-none d-xl-block">
                            <nav className="mainmenu-nav">
                                <ul className="mainmenu">
                                    {headerItem.map((item, index) => (
                                        <li className={`with-megamenu has-menu-child-item ${item.megamenu ? "has-megamenu" : ""}`} key={index}>
                                            <NavLink to={item.path}>
                                                {item.title} {item.megamenu && <i className="feather-chevron-down"></i>}
                                            </NavLink>
                                            {item.megamenu && (
                                                <div className="rbt-megamenu grid-item-2" style={{ maxWidth: 300 }}>
                                                    <div className="wrapper">
                                                        <div className="row row--15">
                                                            {item.megamenu.map((menu, idx) => (
                                                                <div className="col-lg-12 single-mega-item mt-adjacent" key={idx}>
                                                                    <h3 className="rbt-short-title">{menu.title}</h3>
                                                                    <ul className="mega-menu-item">
                                                                        {menu.items.map((subItem, subIdx) => (
                                                                            <li key={subIdx} className="mt-2">
                                                                                <NavLink to={subItem.path}>
                                                                                    {subItem.title}
                                                                                    {subItem.badge && <span className="rbt-badge-card">{subItem.badge}</span>}
                                                                                </NavLink>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </li>
                                    ))}
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

                                {/* <li className="access-icon">
                                    <Link to={config.routes.dictionary} className="rbt-round-btn">
                                        <i className="fas fa-language"></i>
                                    </Link>
                                </li> */}

                                {isLoggedIn() ? (
                                    <li className="account-access rbt-user-wrapper d-none d-xl-block">
                                        <Link to={config.routes.profile}>
                                            <i className="feather-user"></i> {decodedToken.Fullname || ""}
                                        </Link>
                                        <div className="rbt-user-menu-list-wrapper">
                                            <div className="inner">
                                                <div className="rbt-admin-profile">
                                                    <div className="admin-thumbnail">
                                                        <img src="/assets/images/client/avatar-04.jpeg" alt="User Images" />
                                                    </div>
                                                    <div className="admin-info">
                                                        <span className="name">{decodedToken.Fullname || ""}</span>
                                                        <Link to={config.routes.profile} className="rbt-btn-link color-primary">
                                                            View Profile
                                                        </Link>
                                                    </div>
                                                </div>
                                                {menuItem.map((menu, menuIndex) => (
                                                    <div key={menuIndex}>
                                                        <ul className="user-list-wrapper">
                                                            {menu.items.map((item, index) => (
                                                                <li key={index}>
                                                                    {item.title === "Logout" ? (
                                                                        <Link to={item.path} onClick={item.onClick}>
                                                                            <i className={item.icon}></i>
                                                                            <span>{item.title}</span>
                                                                        </Link>
                                                                    ) : (
                                                                        <Link to={item.path}>
                                                                            <i className={item.icon}></i>
                                                                            <span>{item.title}</span>
                                                                        </Link>
                                                                    )}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        {menu.breakLine && <hr className="mt--10 mb--10" />}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                ) : (
                                    <div className="rbt-btn-wrapper d-none d-xl-block">
                                        <Link to={config.routes.login} className="rbt-btn rbt-marquee-btn marquee-auto btn-border-gradient radius-round btn-sm hover-transform-none">
                                            <span data-text="Enroll Now">Enroll Now</span>
                                        </Link>
                                    </div>
                                )}
                            </ul>

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
