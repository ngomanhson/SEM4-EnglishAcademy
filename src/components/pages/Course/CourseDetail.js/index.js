import { Link } from "react-router-dom";
import Layout from "../../../layouts";

function CourseDetail() {
    return (
        <Layout title="Course Detail">
            <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
                <div className="breadcrumb-inner">
                    <img src="assets/images/bg/bg-image-10.jpg" alt="Education Images" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="content text-start">
                                <ul className="page-list">
                                    <li className="rbt-breadcrumb-item">
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li>
                                        <div className="icon-right">
                                            <i className="feather-chevron-right"></i>
                                        </div>
                                    </li>
                                    <li className="rbt-breadcrumb-item active">Web Development</li>
                                </ul>
                                <h2 className="title">The Complete Histudy 2023: From Zero to Expert!</h2>
                                <p className="description">Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!</p>

                                <div className="d-flex align-items-center mb--20 flex-wrap rbt-course-details-feature">
                                    <div className="feature-sin best-seller-badge">
                                        <span className="rbt-badge-2">
                                            <span className="image">
                                                <img src="assets/images/icons/card-icon-1.png" alt="Best Seller Icon" />
                                            </span>{" "}
                                            Bestseller
                                        </span>
                                    </div>

                                    <div className="feature-sin rating">
                                        <a href="#!">4.8</a>
                                        <a href="#!">
                                            <i className="fa fa-star"></i>
                                        </a>
                                        <a href="#!">
                                            <i className="fa fa-star"></i>
                                        </a>
                                        <a href="#!">
                                            <i className="fa fa-star"></i>
                                        </a>
                                        <a href="#!">
                                            <i className="fa fa-star"></i>
                                        </a>
                                        <a href="#!">
                                            <i className="fa fa-star"></i>
                                        </a>
                                    </div>

                                    <div className="feature-sin total-rating">
                                        <a className="rbt-badge-4" href="#!">
                                            215,475 rating
                                        </a>
                                    </div>

                                    <div className="feature-sin total-student">
                                        <span>616,029 students</span>
                                    </div>
                                </div>

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

                                <ul className="rbt-meta">
                                    <li>
                                        <i className="feather-calendar"></i>Last updated 12/2024
                                    </li>
                                    <li>
                                        <i className="feather-globe"></i>English
                                    </li>
                                    <li>
                                        <i className="feather-award"></i>Certified Course
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rbt-course-details-area ptb--60">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="course-details-content">
                                <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
                                    <img className="w-100" src="assets/images/course/course-01.jpg" alt="Card" />
                                </div>

                                <div className="rbt-inner-onepage-navigation sticky-top mt--30">
                                    <nav className="mainmenu-nav onepagenav">
                                        <ul className="mainmenu">
                                            <li className="current">
                                                <a href="#overview">Overview</a>
                                            </li>
                                            <li>
                                                <a href="#coursecontent">Course Content</a>
                                            </li>
                                            <li>
                                                <a href="#details">Details</a>
                                            </li>
                                            <li>
                                                <a href="#intructor">Intructor</a>
                                            </li>
                                            <li>
                                                <a href="#review">Review</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="rbt-course-feature-box overview-wrapper rbt-shadow-box mt--30 has-show-more" id="overview">
                                    <div className="rbt-course-feature-inner has-show-more-inner-content">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">What you'll learn</h4>
                                        </div>
                                        <p>
                                            Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending
                                            the course by building a CMS system similar to WordPress, Joomla or Drupal. Knowing PHP has allowed me to make enough money to stay home and make courses
                                            like this one for students all over the world.
                                        </p>

                                        <div className="row g-5 mb--30">
                                            <div className="col-lg-6">
                                                <ul className="rbt-list-style-1">
                                                    <li>
                                                        <i className="feather-check"></i>Become an advanced, confident, and modern JavaScript developer from scratch.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Have an intermediate skill level of Python programming.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Have a portfolio of various data analysis projects.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Use the numpy library to create and manipulate arrays.
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-6">
                                                <ul className="rbt-list-style-1">
                                                    <li>
                                                        <i className="feather-check"></i>Use the Jupyter Notebook Environment. JavaScript developer from scratch.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Use the pandas module with Python to create and structure data.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Have a portfolio of various data analysis projects.
                                                    </li>
                                                    <li>
                                                        <i className="feather-check"></i>Create data visualizations using matplotlib and the seaborn.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, aliquam voluptas laudantium incidunt architecto nam excepturi provident rem laborum
                                            repellendus placeat neque aut doloremque ut ullam, veritatis nesciunt iusto officia alias, non est vitae. Eius repudiandae optio quam alias aperiam nemo nam
                                            tempora, dignissimos dicta excepturi ea quo ipsum omnis maiores perferendis commodi voluptatum facere vel vero. Praesentium quisquam iure veritatis,
                                            perferendis adipisci sequi blanditiis quidem porro eligendi fugiat facilis inventore amet delectus expedita deserunt ut molestiae modi laudantium, quia
                                            tenetur animi natus ea. Molestiae molestias ducimus pariatur et consectetur. Error vero, eum soluta delectus necessitatibus eligendi numquam hic at?
                                        </p>
                                    </div>
                                    <div className="rbt-show-more-btn">Show More</div>
                                </div>

                                <div className="course-content rbt-shadow-box coursecontent-wrapper mt--30" id="coursecontent">
                                    <div className="rbt-course-feature-inner">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Course Content</h4>
                                        </div>
                                        <div className="rbt-accordion-style rbt-accordion-02 accordion">
                                            <div className="accordion" id="accordionExampleb2">
                                                <div className="accordion-item card">
                                                    <h2 className="accordion-header card-header" id="headingTwo1">
                                                        <button
                                                            className="accordion-button"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo1"
                                                            aria-expanded="true"
                                                            aria-controls="collapseTwo1"
                                                        >
                                                            Intro to Course and Histudy <span className="rbt-badge-5 ml--10">1hr 30min</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo1" className="accordion-collapse collapse show" aria-labelledby="headingTwo1" data-bs-parent="#accordionExampleb2">
                                                        <div className="accordion-body card-body pr--0">
                                                            <ul className="rbt-course-main-content liststyle">
                                                                <li>
                                                                    <Link to="/lesson">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Course Intro</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="min-lable">30 min</span>
                                                                            <span className="rbt-badge variation-03 bg-primary-opacity">
                                                                                <i className="feather-eye"></i> Preview
                                                                            </span>
                                                                        </div>
                                                                    </Link>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Watch Before Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="min-lable">0.5 min</span>
                                                                            <span className="rbt-badge variation-03 bg-primary-opacity">
                                                                                <i className="feather-eye"></i> Preview
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item card">
                                                    <h2 className="accordion-header card-header" id="headingTwo2">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo2"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTwo2"
                                                        >
                                                            Course Fundamentals <span className="rbt-badge-5 ml--10">2hr 30min</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo2" className="accordion-collapse collapse" aria-labelledby="headingTwo2" data-bs-parent="#accordionExampleb2">
                                                        <div className="accordion-body card-body pr--0">
                                                            <ul className="rbt-course-main-content liststyle">
                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Course Intro</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Why You Should Not Go To Education.</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Ten Factors That Affect Education's Longevity.</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item card">
                                                    <h2 className="accordion-header card-header" id="headingTwo3">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo3"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTwo3"
                                                        >
                                                            You can develop skill and setup <span className="rbt-badge-5 ml--10">1hr 50min</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo3" className="accordion-collapse collapse" aria-labelledby="headingTwo3" data-bs-parent="#accordionExampleb2">
                                                        <div className="accordion-body card-body pr--0">
                                                            <ul className="rbt-course-main-content liststyle">
                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Course Intro</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Why You Should Not Go To Education.</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Ten Factors That Affect Education's Longevity.</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item card">
                                                    <h2 className="accordion-header card-header" id="headingTwo4">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo4"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTwo4"
                                                        >
                                                            15 Things To Know About Education? <span className="rbt-badge-5 ml--10">2hr 60min</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo4" className="accordion-collapse collapse" aria-labelledby="headingTwo4" data-bs-parent="#accordionExampleb2">
                                                        <div className="accordion-body card-body pr--0">
                                                            <ul className="rbt-course-main-content liststyle">
                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Course Intro</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Why You Should Not Go To Education.</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Ten Factors That Affect Education's Longevity.</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="accordion-item card">
                                                    <h2 className="accordion-header card-header" id="headingTwo5">
                                                        <button
                                                            className="accordion-button collapsed"
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#collapseTwo5"
                                                            aria-expanded="false"
                                                            aria-controls="collapseTwo5"
                                                        >
                                                            Course Description <span className="rbt-badge-5 ml--10">2hr 20min</span>
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo5" className="accordion-collapse collapse" aria-labelledby="headingTwo5" data-bs-parent="#accordionExampleb2">
                                                        <div className="accordion-body card-body pr--0">
                                                            <ul className="rbt-course-main-content liststyle">
                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Course Intro</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Why You Should Not Go To Education.</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-play-circle"></i> <span className="text">Ten Factors That Affect Education's Longevity.</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>

                                                                <li>
                                                                    <a href="lesson.html">
                                                                        <div className="course-content-left">
                                                                            <i className="feather-file-text"></i> <span className="text">Read Before You Start</span>
                                                                        </div>
                                                                        <div className="course-content-right">
                                                                            <span className="course-lock">
                                                                                <i className="feather-lock"></i>
                                                                            </span>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30" id="details">
                                    <div className="row g-5">
                                        <div className="col-lg-6">
                                            <div className="section-title">
                                                <h4 className="rbt-title-style-3 mb--20">Requirements</h4>
                                            </div>
                                            <ul className="rbt-list-style-1">
                                                <li>
                                                    <i className="feather-check"></i>Become an advanced, confident, and modern JavaScript developer from scratch.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Have an intermediate skill level of Python programming.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Have a portfolio of various data analysis projects.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Use the numpy library to create and manipulate arrays.
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="section-title">
                                                <h4 className="rbt-title-style-3 mb--20">Description</h4>
                                            </div>
                                            <ul className="rbt-list-style-1">
                                                <li>
                                                    <i className="feather-check"></i>Use the Jupyter Notebook Environment. JavaScript developer from scratch.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Use the pandas module with Python to create and structure data.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Have a portfolio of various data analysis projects.
                                                </li>
                                                <li>
                                                    <i className="feather-check"></i>Create data visualizations using matplotlib and the seaborn.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30" id="intructor">
                                    <div className="about-author border-0 pb--0 pt--0">
                                        <div className="section-title mb--30">
                                            <h4 className="rbt-title-style-3">Instructor</h4>
                                        </div>
                                        <div className="media align-items-center">
                                            <div className="thumbnail">
                                                <a href="#!">
                                                    <img src="assets/images/testimonial/testimonial-7.jpg" alt="Author Images" />
                                                </a>
                                            </div>
                                            <div className="media-body">
                                                <div className="author-info">
                                                    <h5 className="title">
                                                        <a className="hover-flip-item-wrapper" href="author.html">
                                                            B.M. Rafekul Islam
                                                        </a>
                                                    </h5>
                                                    <span className="b3 subtitle">Advanced Educator</span>
                                                    <ul className="rbt-meta mb--20 mt--10">
                                                        <li>
                                                            <i className="fa fa-star color-warning"></i>75,237 Reviews <span className="rbt-badge-5 ml--5">4.4 Rating</span>
                                                        </li>
                                                        <li>
                                                            <i className="feather-users"></i>912,970 Students
                                                        </li>
                                                        <li>
                                                            <a href="#!">
                                                                <i className="feather-video"></i>16 Courses
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="content">
                                                    <p className="description">John is a brilliant educator, whose life was spent for computer science and love of nature.</p>

                                                    <ul className="social-icon social-default icon-naked justify-content-start">
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
                                </div>

                                <div className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30" id="review">
                                    <div className="course-content">
                                        <div className="section-title">
                                            <h4 className="rbt-title-style-3">Review</h4>
                                        </div>
                                        <div className="row g-5 align-items-center">
                                            <div className="col-lg-3">
                                                <div className="rating-box">
                                                    <div className="rating-number">5.0</div>
                                                    <div className="rating">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                    </div>
                                                    <span className="sub-title">Course Rating</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div className="review-wrapper">
                                                    <div className="single-progress-bar">
                                                        <div className="rating-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "63%" }} aria-valuenow="63" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="value-text">63%</span>
                                                    </div>

                                                    <div className="single-progress-bar">
                                                        <div className="rating-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "29%" }} aria-valuenow="29" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="value-text">29%</span>
                                                    </div>

                                                    <div className="single-progress-bar">
                                                        <div className="rating-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "6%" }} aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="value-text">6%</span>
                                                    </div>

                                                    <div className="single-progress-bar">
                                                        <div className="rating-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "1%" }} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="value-text">1%</span>
                                                    </div>

                                                    <div className="single-progress-bar">
                                                        <div className="rating-text">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{ width: "1%" }} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                        </div>
                                                        <span className="value-text">1%</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-author-list rbt-shadow-box featured-wrapper mt--30 has-show-more">
                                    <div className="section-title">
                                        <h4 className="rbt-title-style-3">Featured review</h4>
                                    </div>
                                    <div className="has-show-more-inner-content rbt-featured-review-list-wrapper">
                                        <div className="rbt-course-review about-author">
                                            <div className="media">
                                                <div className="thumbnail">
                                                    <a href="#!">
                                                        <img src="assets/images/testimonial/testimonial-3.jpg" alt="Author Images" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="author-info">
                                                        <h5 className="title">
                                                            <a className="hover-flip-item-wrapper" href="#!">
                                                                {" "}
                                                                Farjana Bawnia{" "}
                                                            </a>
                                                        </h5>
                                                        <div className="rating">
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="description">
                                                            At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
                                                        </p>
                                                        <ul className="social-icon social-default transparent-with-border justify-content-start">
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-up"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-down"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rbt-course-review about-author">
                                            <div className="media">
                                                <div className="thumbnail">
                                                    <a href="#!">
                                                        <img src="assets/images/testimonial/testimonial-4.jpg" alt="Author Images" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="author-info">
                                                        <h5 className="title">
                                                            <a className="hover-flip-item-wrapper" href="#!">
                                                                Razwan Islam
                                                            </a>
                                                        </h5>
                                                        <div className="rating">
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="description">
                                                            My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
                                                        </p>
                                                        <ul className="social-icon social-default transparent-with-border justify-content-start">
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-up"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-down"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rbt-course-review about-author">
                                            <div className="media">
                                                <div className="thumbnail">
                                                    <a href="#!">
                                                        <img src="assets/images/testimonial/testimonial-1.jpg" alt="Author Images" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="author-info">
                                                        <h5 className="title">
                                                            <a className="hover-flip-item-wrapper" href="#!">
                                                                Babor Azom
                                                            </a>
                                                        </h5>
                                                        <div className="rating">
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="description">
                                                            My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
                                                        </p>
                                                        <ul className="social-icon social-default transparent-with-border justify-content-start">
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-up"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-down"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rbt-course-review about-author">
                                            <div className="media">
                                                <div className="thumbnail">
                                                    <a href="#!">
                                                        <img src="assets/images/testimonial/testimonial-6.jpg" alt="Author Images" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="author-info">
                                                        <h5 className="title">
                                                            <a className="hover-flip-item-wrapper" href="#!">
                                                                Mohammad Ali
                                                            </a>
                                                        </h5>
                                                        <div className="rating">
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="description">
                                                            My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
                                                        </p>
                                                        <ul className="social-icon social-default transparent-with-border justify-content-start">
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-up"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-down"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rbt-course-review about-author">
                                            <div className="media">
                                                <div className="thumbnail">
                                                    <a href="#!">
                                                        <img src="assets/images/testimonial/testimonial-8.jpg" alt="Author Images" />
                                                    </a>
                                                </div>
                                                <div className="media-body">
                                                    <div className="author-info">
                                                        <h5 className="title">
                                                            <a className="hover-flip-item-wrapper" href="#!">
                                                                Sakib Al Hasan
                                                            </a>
                                                        </h5>
                                                        <div className="rating">
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                            <a href="#!">
                                                                <i className="fa fa-star"></i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="content">
                                                        <p className="description">
                                                            My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
                                                        </p>
                                                        <ul className="social-icon social-default transparent-with-border justify-content-start">
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-up"></i>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#!">
                                                                    <i className="feather-thumbs-down"></i>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rbt-show-more-btn">Show More</div>
                                </div>
                            </div>
                            <div className="related-course mt--60">
                                <div className="row g-5 align-items-end mb--40">
                                    <div className="col-lg-8 col-md-8 col-12">
                                        <div className="section-title">
                                            <span className="subtitle bg-pink-opacity">Top Course</span>
                                            <h4 className="title">
                                                More Course By <strong className="color-primary">Angela</strong>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="read-more-btn text-start text-md-end">
                                            <a className="rbt-btn rbt-switch-btn btn-border btn-sm" href="#!">
                                                <span data-text="View All Course">View All Course</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-5">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                        <div className="rbt-card variation-01 rbt-hover">
                                            <div className="rbt-card-img">
                                                <a href="course-details.html">
                                                    <img src="assets/images/course/course-online-01.jpg" alt="Card" />
                                                    <div className="rbt-badge-3 bg-white">
                                                        <span>-40%</span>
                                                        <span>Off</span>
                                                    </div>
                                                </a>
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
                                                    <a href="course-details.html">React Front To Back</a>
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

                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                                        <div className="rbt-card variation-01 rbt-hover">
                                            <div className="rbt-card-img">
                                                <a href="course-details.html">
                                                    <img src="assets/images/course/course-online-02.jpg" alt="Card" />
                                                </a>
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
                                                    <a href="course-details.html">PHP Beginner Advanced</a>
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
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
                                <div className="inner">
                                    <a
                                        className="video-popup-with-text video-popup-wrapper text-center popup-video sidebar-video-hidden mb--15"
                                        href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                                        style={{ display: "none" }}
                                    >
                                        <div className="video-content">
                                            <img className="w-100 rbt-radius" src="assets/images/others/video-01.jpg" alt="Video Images" />
                                            <div className="position-to-top">
                                                <span className="rbt-btn rounded-player-2 with-animation">
                                                    <span className="play-icon"></span>
                                                </span>
                                            </div>
                                            <span className="play-view-text d-block color-white">
                                                <i className="feather-eye"></i> Preview this course
                                            </span>
                                        </div>
                                    </a>

                                    <div className="content-item-content">
                                        <div className="rbt-price-wrapper d-flex flex-wrap align-items-center justify-content-between">
                                            <div className="rbt-price">
                                                <span className="current-price">$60.99</span>
                                                <span className="off-price">$84.99</span>
                                            </div>
                                            <div className="discount-time">
                                                <span className="rbt-badge color-danger bg-color-danger-opacity">
                                                    <i className="feather-clock"></i> 3 days left!
                                                </span>
                                            </div>
                                        </div>

                                        <div className="add-to-card-button mt--15">
                                            <a className="rbt-btn btn-gradient icon-hover w-100 d-block text-center" href="#!">
                                                <span className="btn-text">Add to Cart</span>
                                                <span className="btn-icon">
                                                    <i className="feather-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>

                                        <div className="buy-now-btn mt--15">
                                            <a className="rbt-btn btn-border icon-hover w-100 d-block text-center" href="#!">
                                                <span className="btn-text">Buy Now</span>
                                                <span className="btn-icon">
                                                    <i className="feather-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>

                                        <span className="subtitle">
                                            <i className="feather-rotate-ccw"></i> 30-Day Money-Back Guarantee
                                        </span>

                                        <div className="rbt-widget-details has-show-more">
                                            <ul className="has-show-more-inner-content rbt-course-details-list-wrapper">
                                                <li>
                                                    <span>Start Date</span>
                                                    <span className="rbt-feature-value rbt-badge-5">5 Hrs 20 Min</span>
                                                </li>
                                                <li>
                                                    <span>Enrolled</span>
                                                    <span className="rbt-feature-value rbt-badge-5">100</span>
                                                </li>
                                                <li>
                                                    <span>Lectures</span>
                                                    <span className="rbt-feature-value rbt-badge-5">50</span>
                                                </li>
                                                <li>
                                                    <span>Skill Level</span>
                                                    <span className="rbt-feature-value rbt-badge-5">Basic</span>
                                                </li>
                                                <li>
                                                    <span>Language</span>
                                                    <span className="rbt-feature-value rbt-badge-5">English</span>
                                                </li>
                                                <li>
                                                    <span>Quizzes</span>
                                                    <span className="rbt-feature-value rbt-badge-5">10</span>
                                                </li>
                                                <li>
                                                    <span>Certificate</span>
                                                    <span className="rbt-feature-value rbt-badge-5">Yes</span>
                                                </li>
                                                <li>
                                                    <span>Pass Percentage</span>
                                                    <span className="rbt-feature-value rbt-badge-5">95%</span>
                                                </li>
                                            </ul>
                                            <div className="rbt-show-more-btn">Show More</div>
                                        </div>

                                        <div className="social-share-wrapper mt--30 text-center">
                                            <div className="rbt-post-share d-flex align-items-center justify-content-center">
                                                <ul className="social-icon social-default transparent-with-border justify-content-center">
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
                                            <hr className="mt--20" />
                                            <div className="contact-with-us text-center">
                                                <p>For details about the course</p>
                                                <p className="rbt-badge-2 mt--10 justify-content-center w-100">
                                                    <i className="feather-phone mr--5"></i> Call Us:{" "}
                                                    <a href="#!">
                                                        <strong>+444 555 666 777</strong>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
                <div className="container">
                    <div className="section-title mb--30">
                        <span className="subtitle bg-primary-opacity">More Similar Courses</span>
                        <h4 className="title">Related Courses</h4>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-online-03.jpg" alt="Card" />
                                        <div className="rbt-badge-3 bg-white">
                                            <span>-10%</span>
                                            <span>Off</span>
                                        </div>
                                    </a>
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
                                        <a href="course-details.html">Angular Zero to Mastery</a>
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

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-online-04.jpg" alt="Card" />
                                        <div className="rbt-badge-3 bg-white">
                                            <span>-40%</span>
                                            <span>Off</span>
                                        </div>
                                    </a>
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
                                        <a href="course-details.html">Web Front To Back</a>
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

                        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="rbt-card variation-01 rbt-hover">
                                <div className="rbt-card-img">
                                    <a href="course-details.html">
                                        <img src="assets/images/course/course-online-05.jpg" alt="Card" />
                                        <div className="rbt-badge-3 bg-white">
                                            <span>-20%</span>
                                            <span>Off</span>
                                        </div>
                                    </a>
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
                                        <a href="course-details.html">SQL Beginner Advanced</a>
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
                    </div>
                </div>
            </div>

            <div className="rbt-course-action-bottom rbt-course-action-active">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="section-title text-center text-md-start">
                                <h5 className="title mb--0">The Complete Histudy 2023: From Zero to Expert!</h5>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt_sm--15">
                            <div className="course-action-bottom-right rbt-single-group">
                                <div className="rbt-single-list rbt-price large-size justify-content-center">
                                    <span className="current-price color-primary">$750.00</span>
                                    <span className="off-price">$1500.00</span>
                                </div>
                                <div className="rbt-single-list action-btn">
                                    <a className="rbt-btn btn-gradient hover-icon-reverse btn-md" href="#!">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Purchase Now</span>
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
            </div>
        </Layout>
    );
}

export default CourseDetail;