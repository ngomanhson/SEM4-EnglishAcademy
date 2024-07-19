import { Link } from "react-router-dom";
import url from "../../../services/url";
import { useAxiosGet } from "../../../hooks";
import { getAccessToken } from "../../../utils/auth";
import Layout from "../../layouts/index";
import config from "../../../config";
import Course from "../../views/MyCourse/Course";
import { formatNumber } from "../../../utils/formatNumber";
import Loading from "../../layouts/Loading";

function MyCourse() {
    const offlineCourses = useAxiosGet({
        path: url.OFFLINE_COURSE.GET_ALL_BY_STUDENT,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const onlineCourses = useAxiosGet({
        path: url.ONLINE_COURSE.GET_ALL_BY_STUDENT,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const totalCourseOnline = onlineCourses?.response && Array.isArray(onlineCourses.response) ? onlineCourses.response.length : 0;
    const totalCourseOffline = offlineCourses?.response && Array.isArray(offlineCourses.response) ? offlineCourses.response.length : 0;

    const totalEnrollCourse = totalCourseOffline + totalCourseOnline;

    return (
        <>
            {offlineCourses.loading || onlineCourses.loading ? (
                <Loading />
            ) : (
                <Layout title={`My Courses`}>
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
                                                <li className="rbt-breadcrumb-item active">My Courses</li>
                                            </ul>

                                            <div className="title-wrapper">
                                                <h1 className="title mb--0 font-system">My Courses</h1>
                                                <div className="rbt-badge-2">
                                                    <p className="image">🎉</p>
                                                    {formatNumber(totalEnrollCourse)} Courses
                                                </div>
                                            </div>

                                            <p className="description fw-light">English Language relates to Teaching & Academics Personal Development.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rbt-section-overlayping-top rbt-section-gapBottom">
                        <div className="rbt-course-details-area ptb--60">
                            <div className="container">
                                <div className="row">
                                    {offlineCourses.response?.map((course) => (
                                        <Course key={course.id} course={course} type="Offline" />
                                    ))}

                                    {onlineCourses.response?.map((course) => (
                                        <Course key={course.id} course={course} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            )}
        </>
    );
}

export default MyCourse;
