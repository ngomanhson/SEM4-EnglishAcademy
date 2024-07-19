import { Link } from "react-router-dom";
import { formatNumber } from "../../../utils/formatNumber";

function Courses({ course, stars }) {
    // const imgNotFound = "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";

    // const handleImageError = (e) => {
    //     e.target.src = imgNotFound;
    // };

    return (
        <div className="course-grid-3">
            <div className="rbt-card variation-01 rbt-hover">
                <div className="rbt-card-img">
                    <Link to={`/course-online/${course.slug}`}>
                        <img
                            src={
                                course.image
                                // || imgNotFound
                            }
                            alt={course.name}
                            className="course-item__image"
                            // onError={handleImageError}
                        />
                        <div className="rbt-badge-3 bg-white">
                            <img
                                src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2025.3.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Objects'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FDBE11;}%20.st1{opacity:0.67;fill:%23F99B1C;}%20.st2{opacity:0.53;fill:%23FFFFFF;}%20.st3{opacity:0.55;fill:%23F99B1C;}%20.st4{fill:%23FFBB33;}%20.st5{opacity:0.51;fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpolygon%20class='st0'%20points='31.6,7.8%2026.3,24%2026.1,24.6%2026.1,24.7%206.5,24.7%206.5,24.6%206.2,23.9%200.4,6.9%209.5,11.8%2015.7,2.6%2016.1,2%2016.2,2.2%2018.6,6%2020.9,9.5%2022.2,11.6%2022.4,11.8%20'/%3e%3cpath%20class='st1'%20d='M26.3,24l-0.2,0.7l0,0.1H6.5l0-0.1l-0.2-0.7c0.1-0.1,0.2-0.1,0.4-0.1h19.3C26,23.8,26.2,23.9,26.3,24z'/%3e%3cpolygon%20class='st2'%20points='18.6,6%2016.2,14.1%2016.2,14.3%2015.8,15.4%2015.3,17.3%2015,18.2%2014.7,19.2%2014.3,20.6%2013.3,23.8%2013.1,24.6%2013,24.7%209,24.7%209.1,24.6%209.3,23.8%2015.7,2.6%2016.1,2%2016.2,2.2%20'/%3e%3cpolygon%20class='st2'%20points='22.2,11.6%2018.6,23.8%2018.3,24.6%2018.3,24.7%2016.3,24.7%2016.3,24.6%2016.6,23.8%2017.4,21%2017.5,20.9%2018.4,17.6%2018.7,16.8%2020.9,9.5%20'/%3e%3cpath%20class='st3'%20d='M16.2,24.7V2.2L18.6,6l2.2,3.5l1.4,2.1l0.1,0.2l9.2-4L26.3,24l-0.2,0.7C26.5,24.8,16.2,24.7,16.2,24.7z'/%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20class='st4'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.1,0-0.1,0-0.2,0H7.2c-0.5,0-0.9-0.6-0.9-1.4c0-0.7,0.4-1.3,0.8-1.4%20c0,0,0.1,0,0.1,0h18.4c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3cpolygon%20class='st5'%20points='17.8,27.2%2017.8,27.3%2017,30%2017,30%2013,30%2013.8,27.3%2013.8,27.2%20'/%3e%3cpolygon%20class='st5'%20points='23.2,27.2%2023.1,27.3%2022.3,30%2022.3,30%2020.3,30%2020.3,30%2021.1,27.3%2021.2,27.2%20'/%3e%3c/g%3e%3cpath%20class='st3'%20d='M26.5,28.6c0,0.7-0.3,1.2-0.7,1.4c-0.7,0-2,0-3.5,0c-0.3,0-0.6,0-0.9,0c-0.4,0-0.7,0-1.1,0c-1.3,0-2.6,0-3.3,0%20c-0.4,0-0.7,0-0.7,0v-2.8h9.3c0.1,0,0.2,0,0.2,0C26.2,27.4,26.5,27.9,26.5,28.6z'/%3e%3c/g%3e%3c/svg%3e"
                                alt=""
                                style={{ width: 20 }}
                            />
                            <span style={{ fontWeight: 500 }}>{course.categoryName}</span>
                        </div>
                    </Link>
                </div>
                <div className="rbt-card-body">
                    <div className="rbt-card-top">
                        <div className="rbt-review">
                            <div className="rating">{stars}</div>
                            <span className="rating-count"> ({formatNumber(course.totalReview)} Reviews)</span>
                        </div>
                        <div className="rbt-bookmark-btn">
                            <button className="rbt-round-btn" title="Bookmark">
                                <i className="feather-bookmark"></i>
                            </button>
                        </div>
                    </div>

                    <h4 className="rbt-card-title">
                        <Link to={`/course-online/${course.slug}`} className="font-system">
                            {course.name}
                        </Link>
                    </h4>

                    <ul className="rbt-meta">
                        <li>
                            <i className="feather-book"></i>12 Lessons
                        </li>
                        <li>
                            <i className="feather-users"></i>50 Students
                        </li>
                    </ul>

                    <p className="rbt-card-text line-clamp">{course.description}</p>

                    <div className="rbt-card-bottom">
                        <div className="rbt-price">
                            <span className="current-price">${course.price && course.price.toFixed(2)}</span>
                            {/* <span className="off-price">$120</span> */}
                        </div>
                        <Link to={`/course-online/${course.slug}`} className="rbt-btn-link">
                            Learn More<i className="feather-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
