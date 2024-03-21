import { Link } from "react-router-dom";
import Layout from "../../layouts";

function Course() {
    return (
        <Layout title="Courses">
            <div className="rbt-page-banner-wrapper">
                <div className="rbt-banner-image"></div>

                <div className="rbt-banner-content">
                    <div className="rbt-banner-content-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right"></i>
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">All Courses</li>
                                    </ul>

                                    <div className="title-wrapper">
                                        <h1 className="title mb--0">All Courses</h1>
                                        <a href="#!" className="rbt-badge-2">
                                            <div className="image">🎉</div>
                                            50 Courses
                                        </a>
                                    </div>

                                    <p className="description">Courses that help beginner designers become true unicorns.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rbt-course-top-wrapper mt--40 mt_sm--20">
                        <div className="container">
                            <div className="row g-5 align-items-center">
                                <div className="col-lg-5 col-md-12">
                                    <div className="rbt-sorting-list d-flex flex-wrap align-items-center">
                                        <div className="rbt-short-item switch-layout-container">
                                            <ul className="course-switch-layout">
                                                <li className="course-switch-item">
                                                    <button className="rbt-grid-view active" title="Grid Layout">
                                                        <i className="feather-grid"></i> <span className="text">Grid</span>
                                                    </button>
                                                </li>
                                                <li className="course-switch-item">
                                                    <button className="rbt-list-view" title="List Layout">
                                                        <i className="feather-list"></i> <span className="text">List</span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rbt-short-item">
                                            <span className="course-index">Showing 1-9 of 19 results</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-12">
                                    <div className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                                        <div className="rbt-short-item">
                                            <form action="#" className="rbt-search-style me-0">
                                                <input type="text" placeholder="Search Your Course.." />
                                                <button type="submit" className="rbt-search-btn rbt-round-btn">
                                                    <i className="feather-search"></i>
                                                </button>
                                            </form>
                                        </div>

                                        <div className="rbt-short-item">
                                            <div className="view-more-btn text-start text-sm-end">
                                                <button className="discover-filter-button discover-filter-activation rbt-btn btn-white btn-md radius-round">
                                                    Filter<i className="feather-filter"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="default-exp-wrapper default-exp-expand" style={{ display: "none" }}>
                                <div className="filter-inner">
                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By</span>
                                            <div className="dropdown bootstrap-select">
                                                <select className="">
                                                    <option>Default</option>
                                                    <option>Latest</option>
                                                    <option>Popularity</option>
                                                    <option>Trending</option>
                                                    <option>Price: low to high</option>
                                                    <option>Price: high to low</option>
                                                </select>

                                                <div className="dropdown-menu">
                                                    <div className="inner show" role="listbox" id="bs-select-1" tabindex="-1">
                                                        <ul className="dropdown-menu inner show" role="presentation"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By Author</span>
                                            <div className="dropdown bootstrap-select show-tick">
                                                <select
                                                    data-live-search="true"
                                                    title="Select Author"
                                                    multiple=""
                                                    data-size="7"
                                                    data-actions-box="true"
                                                    data-selected-text-format="count > 2"
                                                    className=""
                                                >
                                                    <option data-subtext="Experts">Janin Afsana</option>
                                                    <option data-subtext="Experts">Joe Biden</option>
                                                    <option data-subtext="Experts">Fatima Asrafy</option>
                                                    <option data-subtext="Experts">Aysha Baby</option>
                                                    <option data-subtext="Experts">Mohamad Ali</option>
                                                    <option data-subtext="Experts">Jone Li</option>
                                                    <option data-subtext="Experts">Alberd Roce</option>
                                                    <option data-subtext="Experts">Zeliski Noor</option>
                                                </select>

                                                <div className="dropdown-menu">
                                                    <div className="bs-searchbox">
                                                        <input
                                                            type="search"
                                                            className="form-control" // Added aria-controls
                                                            autocomplete="off"
                                                            role="combobox"
                                                            aria-label="Search"
                                                            aria-controls="bs-select-2"
                                                            aria-autocomplete="list"
                                                            aria-expanded="false" // Added aria-expanded
                                                        />
                                                    </div>
                                                    <div className="bs-actionsbox">
                                                        <div className="btn-group btn-group-sm">
                                                            <button type="button" className="actions-btn bs-select-all btn btn-light">
                                                                Select All
                                                            </button>
                                                            <button type="button" className="actions-btn bs-deselect-all btn btn-light">
                                                                Deselect All
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="inner show" role="listbox" id="bs-select-2" tabindex="-1" aria-multiselectable="true">
                                                        <ul className="dropdown-menu inner show" role="presentation"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By Offer</span>
                                            <div className="dropdown bootstrap-select">
                                                <select className="">
                                                    <option>Free</option>
                                                    <option>Paid</option>
                                                    <option>Premium</option>
                                                </select>

                                                <div className="dropdown-menu">
                                                    <div className="inner show" role="listbox" id="bs-select-3" tabindex="-1">
                                                        <ul className="dropdown-menu inner show" role="presentation"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="filter-select-option">
                                        <div className="filter-select rbt-modern-select">
                                            <span className="select-label d-block">Short By Category</span>
                                            <div className="dropdown bootstrap-select">
                                                <select data-live-search="true" className="">
                                                    <option>Web Design</option>
                                                    <option>Graphic</option>
                                                    <option>App Development</option>
                                                    <option>Figma Design</option>
                                                </select>

                                                <div className="dropdown-menu">
                                                    <div className="bs-searchbox">
                                                        <input
                                                            type="search"
                                                            className="form-control"
                                                            autocomplete="off"
                                                            role="combobox"
                                                            aria-expanded="false" // Added aria-expanded
                                                            aria-label="Search"
                                                            aria-controls="bs-select-4" // Added aria-controls
                                                            aria-autocomplete="list"
                                                        />
                                                    </div>
                                                    <div className="inner show" role="listbox" id="bs-select-4" tabindex="-1">
                                                        <ul className="dropdown-menu inner show" role="presentation"></ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="filter-select-option">
                                        <div className="filter-select">
                                            <span className="select-label d-block">Price Range</span>

                                            <div className="price_filter s-filter clear">
                                                <form action="#" method="GET">
                                                    <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                                                        <div className="ui-slider-range ui-widget-header ui-corner-all" style={{ left: "18.3673%", width: "40.8163%" }}></div>
                                                        <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{ left: "18.3673%" }}></span>
                                                        <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style={{ left: "59.1837%" }}></span>
                                                    </div>
                                                    <div className="slider__range--output">
                                                        <div className="price__output--wrap">
                                                            <div className="price--output">
                                                                <span>Price :</span>
                                                                <input type="text" id="amount" />
                                                            </div>
                                                            <div className="price--filter">
                                                                <a className="rbt-btn btn-gradient btn-sm" href="#!">
                                                                    Filter
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="inner">
                    <div className="container">
                        <div className="rbt-course-grid-column">
                            <div className="course-grid-3">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <Link to="/course-detail">
                                            <img src="assets/images/course/course-online-01.jpg" alt="Card" />
                                            <div className="rbt-badge-3 bg-white">
                                                <span>-40%</span>
                                                <span>Off</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="rbt-card-body">
                                        <div className="rbt-card-top">
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
                                            <div className="rbt-bookmark-btn">
                                                <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                    <i className="feather-bookmark"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <h4 className="rbt-card-title">
                                            <Link to="/course-detail">React Front To Back</Link>
                                        </h4>

                                        <ul className="rbt-meta">
                                            <li>
                                                <i className="feather-book"></i>12 Lessons
                                            </li>
                                            <li>
                                                <i className="feather-users"></i>50 Students
                                            </li>
                                        </ul>

                                        <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
                                        <div className="rbt-author-meta mb--10">
                                            <div className="rbt-avater">
                                                <a href="#!">
                                                    <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                                                </a>
                                            </div>
                                            <div className="rbt-author-info">
                                                By <a href="profile.html">Angela</a> In <a href="#!">Development</a>
                                            </div>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$60</span>
                                                <span className="off-price">$120</span>
                                            </div>
                                            <a className="rbt-btn-link" href="course-details.html">
                                                Learn More<i className="feather-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="course-grid-3">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <Link to="/course-detail">
                                            <img src="assets/images/course/course-online-02.jpg" alt="Card" />
                                        </Link>
                                    </div>
                                    <div className="rbt-card-body">
                                        <div className="rbt-card-top">
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
                                            <div className="rbt-bookmark-btn">
                                                <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                    <i className="feather-bookmark"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <h4 className="rbt-card-title">
                                            <Link to="/course-detail">PHP Beginner Advanced</Link>
                                        </h4>
                                        <ul className="rbt-meta">
                                            <li>
                                                <i className="feather-book"></i>12 Lessons
                                            </li>
                                            <li>
                                                <i className="feather-users"></i>50 Students
                                            </li>
                                        </ul>

                                        <p className="rbt-card-text">It is a long established fact that a reader will be distracted.</p>
                                        <div className="rbt-author-meta mb--10">
                                            <div className="rbt-avater">
                                                <a href="#!">
                                                    <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                                                </a>
                                            </div>
                                            <div className="rbt-author-info">
                                                By <a href="profile.html">Angela</a> In <a href="#!">Development</a>
                                            </div>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$60</span>
                                                <span className="off-price">$120</span>
                                            </div>
                                            <a className="rbt-btn-link left-icon" href="course-details.html">
                                                <i className="feather-shopping-cart"></i> Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="course-grid-3">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <Link to="/course-detail">
                                            <img src="assets/images/course/course-online-03.jpg" alt="Card" />
                                            <div className="rbt-badge-3 bg-white">
                                                <span>-10%</span>
                                                <span>Off</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="rbt-card-body">
                                        <div className="rbt-card-top">
                                            <div className="rbt-review">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <span className="rating-count"> (5 Reviews)</span>
                                            </div>
                                            <div className="rbt-bookmark-btn">
                                                <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                    <i className="feather-bookmark"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <h4 className="rbt-card-title">
                                            <Link to="/course-detail">Angular Zero to Mastery</Link>
                                        </h4>
                                        <ul className="rbt-meta">
                                            <li>
                                                <i className="feather-book"></i>8 Lessons
                                            </li>
                                            <li>
                                                <i className="feather-users"></i>30 Students
                                            </li>
                                        </ul>
                                        <p className="rbt-card-text">Angular Js long fact that a reader will be distracted by the readable.</p>

                                        <div className="rbt-author-meta mb--20">
                                            <div className="rbt-avater">
                                                <a href="#!">
                                                    <img src="assets/images/client/avatar-03.png" alt="Sophia Jaymes" />
                                                </a>
                                            </div>
                                            <div className="rbt-author-info">
                                                By <a href="profile.html">Slaughter</a> In <a href="#!">Languages</a>
                                            </div>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$80</span>
                                                <span className="off-price">$100</span>
                                            </div>
                                            <a className="rbt-btn-link" href="course-details.html">
                                                Learn More<i className="feather-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="course-grid-3">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <Link to="/course-detail">
                                            <img src="assets/images/course/course-online-04.jpg" alt="Card" />
                                            <div className="rbt-badge-3 bg-white">
                                                <span>-40%</span>
                                                <span>Off</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="rbt-card-body">
                                        <div className="rbt-card-top">
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
                                            <div className="rbt-bookmark-btn">
                                                <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                    <i className="feather-bookmark"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <h4 className="rbt-card-title">
                                            <Link to="/course-detail">Web Front To Back</Link>
                                        </h4>
                                        <ul className="rbt-meta">
                                            <li>
                                                <i className="feather-book"></i>20 Lessons
                                            </li>
                                            <li>
                                                <i className="feather-users"></i>40 Students
                                            </li>
                                        </ul>
                                        <p className="rbt-card-text">Web Js long fact that a reader will be distracted by the readable.</p>
                                        <div className="rbt-author-meta mb--20">
                                            <div className="rbt-avater">
                                                <a href="#!">
                                                    <img src="assets/images/client/avater-01.png" alt="Sophia Jaymes" />
                                                </a>
                                            </div>
                                            <div className="rbt-author-info">
                                                By <a href="profile.html">Patrick</a> In <a href="#!">Languages</a>
                                            </div>
                                        </div>

                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$60</span>
                                                <span className="off-price">$120</span>
                                            </div>
                                            <a className="rbt-btn-link" href="course-details.html">
                                                Learn More<i className="feather-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="course-grid-3">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <Link to="/course-detail">
                                            <img src="assets/images/course/course-online-05.jpg" alt="Card" />
                                            <div className="rbt-badge-3 bg-white">
                                                <span>-20%</span>
                                                <span>Off</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="rbt-card-body">
                                        <div className="rbt-card-top">
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
                                            <div className="rbt-bookmark-btn">
                                                <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                    <i className="feather-bookmark"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <h4 className="rbt-card-title">
                                            <Link to="/course-detail">SQL Beginner Advanced</Link>
                                        </h4>
                                        <ul className="rbt-meta">
                                            <li>
                                                <i className="feather-book"></i>12 Lessons
                                            </li>
                                            <li>
                                                <i className="feather-users"></i>50 Students
                                            </li>
                                        </ul>
                                        <p className="rbt-card-text">It is a long established fact that a reader will be distracted by the readable.</p>
                                        <div className="rbt-author-meta mb--20">
                                            <div className="rbt-avater">
                                                <a href="#!">
                                                    <img src="assets/images/client/avatar-02.png" alt="Sophia Jaymes" />
                                                </a>
                                            </div>
                                            <div className="rbt-author-info">
                                                By <a href="profile.html">Angela</a> In <a href="#!">Development</a>
                                            </div>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$60</span>
                                                <span className="off-price">$120</span>
                                            </div>
                                            <a className="rbt-btn-link left-icon" href="course-details.html">
                                                <i className="feather-shopping-cart"></i> Add To Cart
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="course-grid-3">
                                <div className="rbt-card variation-01 rbt-hover">
                                    <div className="rbt-card-img">
                                        <Link to="/course-detail">
                                            <img src="assets/images/course/course-online-06.jpg" alt="Card" />
                                        </Link>
                                    </div>
                                    <div className="rbt-card-body">
                                        <div className="rbt-card-top">
                                            <div className="rbt-review">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <span className="rating-count"> (5 Reviews)</span>
                                            </div>
                                            <div className="rbt-bookmark-btn">
                                                <a className="rbt-round-btn" title="Bookmark" href="#!">
                                                    <i className="feather-bookmark"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <h4 className="rbt-card-title">
                                            <Link to="/course-detail">JS Zero to Mastery</Link>
                                        </h4>
                                        <ul className="rbt-meta">
                                            <li>
                                                <i className="feather-book"></i>8 Lessons
                                            </li>
                                            <li>
                                                <i className="feather-users"></i>30 Students
                                            </li>
                                        </ul>
                                        <p className="rbt-card-text">Angular Js long fact that a reader will be distracted by the readable.</p>

                                        <div className="rbt-author-meta mb--20">
                                            <div className="rbt-avater">
                                                <a href="#!">
                                                    <img src="assets/images/client/avatar-03.png" alt="Sophia Jaymes" />
                                                </a>
                                            </div>
                                            <div className="rbt-author-info">
                                                By <a href="profile.html">Slaughter</a> In <a href="#!">Languages</a>
                                            </div>
                                        </div>
                                        <div className="rbt-card-bottom">
                                            <div className="rbt-price">
                                                <span className="current-price">$80</span>
                                                <span className="off-price">$100</span>
                                            </div>
                                            <a className="rbt-btn-link" href="course-details.html">
                                                Learn More<i className="feather-arrow-right"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 mt--60">
                                <nav>
                                    <ul className="rbt-pagination">
                                        <li>
                                            <a href="#!" aria-label="Previous">
                                                <i className="feather-chevron-left"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!">1</a>
                                        </li>
                                        <li className="active">
                                            <a href="#!">2</a>
                                        </li>
                                        <li>
                                            <a href="#!">3</a>
                                        </li>
                                        <li>
                                            <a href="#!" aria-label="Next">
                                                <i className="feather-chevron-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Course;