import { Link } from "react-router-dom";
import Layout from "../../layouts";

function Blog() {
    return (
        <Layout title="Blog">
            <div className="rbt-page-banner-wrapper">
                <div className="rbt-banner-image"></div>

                <div className="rbt-banner-content">
                    <div className="rbt-banner-content-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right"></i>
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">Blog</li>
                                    </ul>

                                    <div className=" title-wrapper">
                                        <h1 className="title mb--0">All Blog</h1>
                                    </div>

                                    <p className="description">Blog that help beginner designers become true unicorns. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div className="rbt-card variation-02 height-330 rbt-hover">
                                <div className="rbt-card-img">
                                    <Link to="/blog-detail">
                                        <img src="assets/images/blog/blog-card-01.jpg" alt="Card" />
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <h3 className="rbt-card-title">
                                        <Link to="/blog-detail">React</Link>
                                    </h3>
                                    <p className="rbt-card-text">It is a long established fact that a reader.</p>
                                    <div className="rbt-card-bottom">
                                        <Link to="/blog-detail" className="transparent-button">
                                            Learn More
                                            <i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 col-12 sal-animate" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <div className="rbt-card card-list variation-02 rbt-hover">
                                <div className="rbt-card-img">
                                    <Link to="/blog-detail">
                                        <img src="assets/images/blog/blog-card-02.jpg" alt="Card" />
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <h5 className="rbt-card-title">
                                        <Link to="/blog-detail">Why Is Education So Famous?</Link>
                                    </h5>
                                    <div className="rbt-card-bottom">
                                        <Link to="/blog-detail" className="transparent-button">
                                            Read Article
                                            <i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                                <div className="rbt-card-img">
                                    <Link to="/blog-detail">
                                        <img src="assets/images/blog/blog-card-03.jpg" alt="Card" />
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <h5 className="rbt-card-title">
                                        <Link to="/blog-detail">Difficult Things About Education.</Link>
                                    </h5>
                                    <div className="rbt-card-bottom">
                                        <Link to="/blog-detail" className="transparent-button">
                                            Read Article
                                            <i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="rbt-card card-list variation-02 rbt-hover mt--30">
                                <div className="rbt-card-img">
                                    <Link to="/blog-detail">
                                        <img src="assets/images/blog/blog-card-04.jpg" alt="Card" />
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <h5 className="rbt-card-title">
                                        <Link to="/blog-detail">Education Is So Famous, But Why?</Link>
                                    </h5>
                                    <div className="rbt-card-bottom">
                                        <Link to="/blog-detail" className="transparent-button">
                                            Read Article
                                            <i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-5 mt--15">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="rbt-card variation-02 rbt-hover">
                                <div className="rbt-card-img">
                                    <Link to="/blog-detail">
                                        <img src="assets/images/blog/blog-grid-01.jpg" alt="Card" />
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <h5 className="rbt-card-title">
                                        <Link to="/blog-detail">The Latest Trend In Education.</Link>
                                    </h5>
                                    <p className="rbt-card-text">It is a long established fact that a reader.</p>
                                    <div className="rbt-card-bottom">
                                        <Link to="/blog-detail" className="transparent-button">
                                            Learn More
                                            <i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="rbt-card variation-02 rbt-hover">
                                <div className="rbt-card-img">
                                    <Link to="/blog-detail">
                                        <img src="assets/images/blog/blog-grid-02.jpg" alt="Card" />
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <h5 className="rbt-card-title">
                                        <Link to="/blog-detail">The Modern Rules Of Education.</Link>
                                    </h5>
                                    <p className="rbt-card-text">It is a long established fact that a reader.</p>
                                    <div className="rbt-card-bottom">
                                        <Link to="/blog-detail" className="transparent-button">
                                            Learn More
                                            <i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="rbt-card variation-02 rbt-hover">
                                <div className="rbt-card-img">
                                    <Link to="/blog-detail">
                                        <img src="assets/images/blog/blog-grid-03.jpg" alt="Card" />
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <h5 className="rbt-card-title">
                                        <Link to="/blog-detail">Why Is Education So Famous?</Link>
                                    </h5>
                                    <p className="rbt-card-text">It is a long established fact that a reader.</p>
                                    <div className="rbt-card-bottom">
                                        <Link to="/blog-detail" className="transparent-button">
                                            Learn More
                                            <i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="rbt-card variation-02 rbt-hover">
                                <div className="rbt-card-img">
                                    <Link to="/blog-detail">
                                        <img src="assets/images/blog/blog-grid-04.jpg" alt="Card" />
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <h5 className="rbt-card-title">
                                        <Link to="/blog-detail">Industry Insiders Say Education.</Link>
                                    </h5>
                                    <p className="rbt-card-text">Industry a long established that a reader.</p>
                                    <div className="rbt-card-bottom">
                                        <Link to="/blog-detail" className="transparent-button">
                                            Learn More
                                            <i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="rbt-card variation-02 rbt-hover">
                                <div className="rbt-card-img">
                                    <Link to="/blog-detail">
                                        <img src="assets/images/blog/blog-grid-05.jpg" alt="Card" />
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <h5 className="rbt-card-title">
                                        <Link to="/blog-detail">Make You Love And Hate Education.</Link>
                                    </h5>
                                    <p className="rbt-card-text">Make a long established fact a reader.</p>
                                    <div className="rbt-card-bottom">
                                        <Link to="/blog-detail" className="transparent-button">
                                            Learn More
                                            <i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="rbt-card variation-02 rbt-hover">
                                <div className="rbt-card-img">
                                    <Link to="/blog-detail">
                                        <img src="assets/images/blog/blog-grid-06.jpg" alt="Card" />
                                    </Link>
                                </div>
                                <div className="rbt-card-body">
                                    <h5 className="rbt-card-title">
                                        <Link to="/blog-detail">Education Only A Handful Of People.</Link>
                                    </h5>
                                    <p className="rbt-card-text">Education established fact that a reader.</p>
                                    <div className="rbt-card-bottom">
                                        <Link to="/blog-detail" className="transparent-button">
                                            Learn More
                                            <i>
                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                    </g>
                                                </svg>
                                            </i>
                                        </Link>
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
        </Layout>
    );
}

export default Blog;
