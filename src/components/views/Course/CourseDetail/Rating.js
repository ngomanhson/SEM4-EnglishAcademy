function Rating() {
    return (
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
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <span className="sub-title">Course Rating</span>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="review-wrapper">
                            <div className="single-progress-bar">
                                <div className="rating rating-text">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "63%" }} aria-valuenow="63" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="value-text">63%</span>
                            </div>

                            <div className="single-progress-bar">
                                <div className="rating rating-text">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "29%" }} aria-valuenow="29" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="value-text">29%</span>
                            </div>

                            <div className="single-progress-bar">
                                <div className="rating rating-text">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "6%" }} aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="value-text">6%</span>
                            </div>

                            <div className="single-progress-bar">
                                <div className="rating rating-text">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{ width: "1%" }} aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <span className="value-text">1%</span>
                            </div>

                            <div className="single-progress-bar">
                                <div className="rating rating-text">
                                    <i className="fa fa-star"></i>
                                    <i className="fas fa-star-half-alt"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
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
    );
}

export default Rating;
