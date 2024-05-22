import React from "react";
import { Link } from "react-router-dom";

function Review(props) {
    const review = props.review;

    const stars = [];
    const roundedScore = Math.round(review.score * 2) / 2;
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

    return (
        <div className="rbt-course-review about-author">
            <div className="media">
                <div className="thumbnail">
                    <Link to="">
                        <img src="assets/images/client/avatar-04.jpeg" alt="User Images" />
                    </Link>
                </div>
                <div className="media-body">
                    <div className="author-info">
                        <h5 className="title">
                            <Link to="" className="hover-flip-item-wrapper font-system">
                                {review.createdBy}
                            </Link>
                        </h5>
                        <div className="rating">{stars}</div>
                    </div>
                    <div className="content">
                        <p className="description font-system">{review.message}</p>
                        <ul className="social-icon social-default transparent-with-border justify-content-start">
                            <li>
                                <button type="button" style={{ lineHeight: 0 }}>
                                    <i className="feather-thumbs-up"></i>
                                </button>
                            </li>
                            <li>
                                <button type="button" style={{ lineHeight: 0 }}>
                                    <i className="feather-thumbs-down"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
