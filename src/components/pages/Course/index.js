import { Link } from "react-router-dom";
import Layout from "../../layouts";
import url from "../../../services/url";
import Loading from "../../layouts/Loading";
import { useState } from "react";
import { useAxiosGet } from "../../../hooks";
import Courses from "../../views/Course";
import Pagination from "../../layouts/Pagination";

function Course() {
    const { response, loading } = useAxiosGet({
        path: url.ONLINE_COURSE.GET_ALL,
    });

    const courses = response || [];

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(courses.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, courses.length);

    const currentCourses = courses.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({
            top: 380,
            behavior: "smooth",
        });
    };

    return (
        <>
            {loading ? <Loading /> : ""}
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
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li>
                                                <div className="icon-right">
                                                    <i className="feather-chevron-right"></i>
                                                </div>
                                            </li>
                                            <li className="rbt-breadcrumb-item active">All Courses</li>
                                        </ul>

                                        <div className="title-wrapper">
                                            <h1 className="title mb--0 font-system">All Courses</h1>
                                            <div className="rbt-badge-2">
                                                <p className="image">🎉</p>
                                                {courses.length} Courses
                                            </div>
                                        </div>

                                        <p className="description fw-light">English Language relates to Teaching & Academics Personal Development.</p>
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
                                                        <div className="inner show" role="listbox" id="bs-select-1" tabIndex="-1">
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
                                                                autoComplete="off"
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
                                                        <div className="inner show" role="listbox" id="bs-select-2" tabIndex="-1" aria-multiselectable="true">
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
                                                        <div className="inner show" role="listbox" id="bs-select-3" tabIndex="-1">
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
                                                                autoComplete="off"
                                                                role="combobox"
                                                                aria-expanded="false" // Added aria-expanded
                                                                aria-label="Search"
                                                                aria-controls="bs-select-4" // Added aria-controls
                                                                aria-autocomplete="list"
                                                            />
                                                        </div>
                                                        <div className="inner show" role="listbox" id="bs-select-4" tabIndex="-1">
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
                                                            <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{ left: "18.3673%" }}></span>
                                                            <span className="ui-slider-handle ui-state-default ui-corner-all" tabIndex="0" style={{ left: "59.1837%" }}></span>
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
                                {currentCourses.map((course) => {
                                    const stars = [];
                                    const roundedScore = Math.round(course.star * 2) / 2;
                                    const fullStars = Math.floor(roundedScore);
                                    const halfStar = roundedScore - fullStars === 0.5;
                                    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

                                    for (let i = 0; i < fullStars; i++) {
                                        stars.push(<i key={i} className="fa fa-star"></i>);
                                    }
                                    if (halfStar) {
                                        stars.push(<i key="half" className="fas fa-star-half-alt"></i>);
                                    }
                                    for (let i = 0; i < emptyStars; i++) {
                                        stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
                                    }
                                    return <Courses course={course} stars={stars} key={course.id} />;
                                })}
                            </div>
                            <div className="row">
                                <div className="col-lg-12 mt--60">{totalPages === 1 || <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Course;
