import { Link } from "react-router-dom";
import Layout from "../../layouts";
import url from "../../../services/url";
import Loading from "../../layouts/Loading";
import { useState } from "react";
import { useAxiosGet, useDebounce } from "../../../hooks";
import Courses from "../../views/Course";
import Pagination from "../../layouts/Pagination";
import Lottie from "lottie-react";
import NoResult from "../../../lottie/NoResult.json";
import config from "../../../config";

function Course() {
    const { response, loading } = useAxiosGet({
        path: url.ONLINE_COURSE.GET_ALL,
    });

    const courses = response || [];

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [selectedRating, setSelectedRating] = useState(null);
    const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
    const [loadData, setLoadData] = useState(false);

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const debounceTime = 1000;

    // Apply debounce to the search query and filters
    const debouncedSearchQuery = useDebounce(searchQuery, debounceTime);
    const debouncedSelectedCategories = useDebounce(selectedCategories, debounceTime);
    const debouncedSelectedLevels = useDebounce(selectedLevels, debounceTime);
    const debouncedSelectedRating = useDebounce(selectedRating, debounceTime);
    const debouncedPriceRange = useDebounce(priceRange, debounceTime);

    // Event handlers for filters
    const handleCategoryChange = (e) => {
        const category = e.target.name;
        setSelectedCategories((prev) => (e.target.checked ? [...prev, category] : prev.filter((c) => c !== category)));
    };

    const handleLevelChange = (e) => {
        const level = Number(e.target.name);
        setSelectedLevels((prevSelectedLevels) => {
            if (e.target.checked) {
                return [...prevSelectedLevels, level];
            } else {
                return prevSelectedLevels.filter((l) => l !== level);
            }
        });
    };

    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
    };

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setPriceRange((prev) => ({
            ...prev,
            [name]: value ? Number(value) : name === "min" ? 0 : Infinity,
        }));
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);

        setLoadData(true);
        setTimeout(() => {
            setLoadData(false);
        }, debounceTime);
    };

    const clearSearch = () => {
        setSearchQuery("");
    };

    // Filter courses using debounce values
    const filteredCourses = courses.filter((course) => {
        const matchesSearchQuery = course.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase());
        const matchesCategory = debouncedSelectedCategories.length === 0 || debouncedSelectedCategories.includes(course.categoryName);
        const matchesLevel = debouncedSelectedLevels.length === 0 || debouncedSelectedLevels.includes(course.level);
        const matchesRating = !debouncedSelectedRating || Math.round(course.star) === Number(debouncedSelectedRating);
        const matchesPrice = course.price >= debouncedPriceRange.min && course.price <= debouncedPriceRange.max;

        return matchesSearchQuery && matchesCategory && matchesLevel && matchesRating && matchesPrice;
    });

    const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredCourses.length);

    const currentCourses = filteredCourses.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({
            top: 380,
            behavior: "smooth",
        });
    };

    const levelData = [
        {
            title: "Basic",
            value: 0,
            handleEvent: handleLevelChange,
        },
        {
            title: "Intermediate",
            value: 1,
            handleEvent: handleLevelChange,
        },
        {
            title: "Advanced",
            value: 2,
            handleEvent: handleLevelChange,
        },
        {
            title: "Expert",
            value: 3,
            handleEvent: handleLevelChange,
        },
    ];

    // Get level counts
    const levelCounts = courses.reduce((acc, course) => {
        const { level } = course;
        if (acc[level]) {
            acc[level] += 1;
        } else {
            acc[level] = 1;
        }
        return acc;
    }, {});

    // Get unique categories and category counts
    const categories = courses.map((course) => course.categoryName);
    const categoryCounts = courses.reduce((acc, course) => {
        const { categoryName } = course;
        if (acc[categoryName]) {
            acc[categoryName] += 1;
        } else {
            acc[categoryName] = 1;
        }
        return acc;
    }, {});

    const uniqueCategories = [...new Set(categories)];

    const handleClearFilters = () => {
        setSelectedCategories([]);
        setSelectedLevels([]);
        setSelectedRating(null);
        setPriceRange({ min: 0, max: Infinity });

        // Clear radio and checkbox states
        const radios = document.querySelectorAll('input[type="radio"]');
        radios.forEach((radio) => {
            radio.checked = false;
        });

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = false;
        });
    };

    console.log(uniqueCategories);
    console.log(levelCounts);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
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
                                                    <Link to={config.routes.home}>Home</Link>
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
                                                    <span className="course-index">
                                                        Showing {startIndex + 1}-{endIndex} of {filteredCourses.length} results
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-7 col-md-12">
                                            <div className="rbt-sorting-list d-flex flex-wrap align-items-center justify-content-start justify-content-lg-end">
                                                <div className="rbt-short-item">
                                                    <div className="rbt-search-style me-0">
                                                        <input type="text" placeholder="Search Your Course.." value={searchQuery} onChange={handleSearch} />
                                                        <button type="button" className="rbt-search-btn rbt-round-btn" onClick={searchQuery.length > 0 ? () => clearSearch() : null}>
                                                            {searchQuery.length > 0 && !loadData && <i className="feather-x"></i>}
                                                            {searchQuery.length === 0 && !loadData && <i className="feather-search"></i>}
                                                            {loadData && <i className="fas fa-spinner fa-pulse"></i>}
                                                        </button>
                                                    </div>
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
                                        <div className="col-lg-12">
                                            <div className="rbt-sidebar-widget-wrapper filter-top-2 mt--60">
                                                <div className="row g-5">
                                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                        <div className="rbt-single-widget rbt-widget-categories has-show-more">
                                                            <div className="inner">
                                                                <h4 className="rbt-widget-title-2">Categories</h4>
                                                                <ul className="rbt-sidebar-list-wrapper categories-list-check has-show-more-inner-content">
                                                                    {uniqueCategories.map((category, index) => (
                                                                        <li className="rbt-check-group" key={category}>
                                                                            <input id={`cat-list-${index}`} type="checkbox" name={category} onChange={handleCategoryChange} />
                                                                            <label htmlFor={`cat-list-${index}`}>
                                                                                {category} <span className="rbt-lable count">{categoryCounts[category]}</span>
                                                                            </label>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                        <div className="rbt-single-widget rbt-widget-instructor">
                                                            <div className="inner">
                                                                <h4 className="rbt-widget-title-2">Levels</h4>
                                                                <ul className="rbt-sidebar-list-wrapper instructor-list-check">
                                                                    {levelData.map((level, levelIndex) => (
                                                                        <li className="rbt-check-group" key={levelIndex}>
                                                                            <input id={`lv-${levelIndex}`} type="checkbox" name={level.value} onChange={handleLevelChange} />
                                                                            <label htmlFor={`lv-${levelIndex}`}>
                                                                                {level.title} <span className="rbt-lable count">{levelCounts[level.value]}</span>
                                                                            </label>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                        <div className="rbt-single-widget rbt-widget-rating">
                                                            <div className="inner">
                                                                <h4 className="rbt-widget-title-2">Ratings</h4>
                                                                <ul className="rbt-sidebar-list-wrapper rating-list-check">
                                                                    <li className="rbt-check-group">
                                                                        <input id="cat-radio-1" type="radio" name="rating" value="5" onChange={handleRatingChange} />
                                                                        <label htmlFor="cat-radio-1">
                                                                            <span className="rating">
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="fas fa-star"></i>
                                                                            </span>
                                                                            <span className="fz-13">(5) star</span>
                                                                        </label>
                                                                    </li>
                                                                    <li className="rbt-check-group">
                                                                        <input id="cat-radio-2" type="radio" name="rating" value="4" onChange={handleRatingChange} />
                                                                        <label htmlFor="cat-radio-2">
                                                                            <span className="rating">
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="off fas fa-star"></i>
                                                                            </span>
                                                                            <span className="fz-13">(4) star</span>
                                                                        </label>
                                                                    </li>
                                                                    <li className="rbt-check-group">
                                                                        <input id="cat-radio-3" type="radio" name="rating" value="3" onChange={handleRatingChange} />
                                                                        <label htmlFor="cat-radio-3">
                                                                            <span className="rating">
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="off fas fa-star"></i>
                                                                                <i className="off fas fa-star"></i>
                                                                            </span>
                                                                            <span className="fz-13">(3) star</span>
                                                                        </label>
                                                                    </li>
                                                                    <li className="rbt-check-group">
                                                                        <input id="cat-radio-4" type="radio" name="rating" value="2" onChange={handleRatingChange} />
                                                                        <label htmlFor="cat-radio-4">
                                                                            <span className="rating">
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="off fas fa-star"></i>
                                                                                <i className="off fas fa-star"></i>
                                                                                <i className="off fas fa-star"></i>
                                                                            </span>
                                                                            <span className="fz-13">(2) star</span>
                                                                        </label>
                                                                    </li>

                                                                    <li className="rbt-check-group">
                                                                        <input id="cat-radio-5" type="radio" name="rating" value="1" onChange={handleRatingChange} />
                                                                        <label htmlFor="cat-radio-5">
                                                                            <span className="rating">
                                                                                <i className="fas fa-star"></i>
                                                                                <i className="off fas fa-star"></i>
                                                                                <i className="off fas fa-star"></i>
                                                                                <i className="off fas fa-star"></i>
                                                                                <i className="off fas fa-star"></i>
                                                                            </span>
                                                                            <span className="fz-13">(1) star</span>
                                                                        </label>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                                                        <div className="rbt-single-widget rbt-widget-prices">
                                                            <div className="inner">
                                                                <h4 className="rbt-widget-title-2">Prices</h4>
                                                                <ul className="rbt-sidebar-list-wrapper prices-list-check row">
                                                                    <li className="rbt-check-group m-0 pl--0 col-6">
                                                                        <label htmlFor="prices-list-1">Min</label>
                                                                        <input type="number" name="min" min="0" placeholder="0" onChange={handlePriceChange} />
                                                                    </li>
                                                                    <li className="rbt-check-group m-0 pr--0 col-6">
                                                                        <label htmlFor="prices-list-2">Max</label>
                                                                        <input type="number" name="max" min="0" placeholder="0" onChange={handlePriceChange} />
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="text-center mt-5">
                                                            <button className="rbt-btn btn-gradient btn-sm btn-not__hover fw-300 w-100" onClick={handleClearFilters}>
                                                                <i className="feather feather-filter"></i> Clear All Filters
                                                            </button>
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

                    <div className="rbt-section-overlayping-top rbt-section-gapBottom">
                        <div className="inner">
                            <div className="container">
                                <div className="rbt-course-grid-column">
                                    {currentCourses.length === 0 ? (
                                        <div className="mx-auto">
                                            <Lottie animationData={NoResult} loop={false} />
                                            <h2 className="text-center">No results found.</h2>
                                        </div>
                                    ) : (
                                        currentCourses.map((course) => {
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
                                        })
                                    )}
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 mt--60">{totalPages <= 1 || <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            )}
        </>
    );
}

export default Course;
