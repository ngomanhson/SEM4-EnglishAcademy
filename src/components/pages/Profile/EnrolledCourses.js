import { Link } from "react-router-dom";
import url from "../../../services/url";
import { useAxiosGet } from "../../../hooks";
import { getAccessToken } from "../../../utils/auth";
import LayoutProfile from "./LayoutProfile";
import { formatLevelCourse } from "../../../utils/formatLevelCourse";
import OnlineCourses from "../../views/Profile/EnrolledCourses/OnlineCourses";
import OfflineCourses from "../../views/Profile/EnrolledCourses/OfflineCourses";
import NotParticipated from "../../views/Profile/EnrolledCourses/NotParticipated";

function EnrolledCourses() {
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

    return (
        <>
            <LayoutProfile>
                <div className="col-lg-9">
                    <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                        <div className="content">
                            <div className="section-title">
                                <h4 className="rbt-title-style-3">Enrolled Courses</h4>
                            </div>

                            <div className="advance-tab-button mb--30">
                                <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="myTab-4" role="tablist">
                                    <li role="presentation">
                                        <Link to="" className="tab-button active" id="home-tab-4" data-bs-toggle="tab" data-bs-target="#home-4" role="tab" aria-controls="home-4" aria-selected="false">
                                            <span className="title">Offline Courses</span>
                                        </Link>
                                    </li>
                                    <li role="presentation">
                                        <Link
                                            to=""
                                            className="tab-button"
                                            id="profile-tab-4"
                                            data-bs-toggle="tab"
                                            data-bs-target="#profile-4"
                                            role="tab"
                                            aria-controls="profile-4"
                                            aria-selected="true"
                                        >
                                            <span className="title">Online Courses</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="tab-content">
                                <div className="tab-pane fade active show" id="home-4" role="tabpanel" aria-labelledby="home-tab-4">
                                    <div className="row g-5">
                                        {offlineCourses.errorStatus === 404 ? (
                                            <NotParticipated />
                                        ) : (
                                            <div className="row g-5">
                                                {offlineCourses.response?.map((course) => {
                                                    const formatLevel = formatLevelCourse(course.level);
                                                    return <OfflineCourses course={course} formatLevel={formatLevel} />;
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="profile-4" role="tabpanel" aria-labelledby="profile-tab-4">
                                    <div className="row g-5">
                                        {!onlineCourses.response || onlineCourses.response.length === 0 ? (
                                            <NotParticipated />
                                        ) : (
                                            <div className="row g-5">
                                                {onlineCourses.response?.map((course) => {
                                                    const formatLevel = formatLevelCourse(course.level);
                                                    return <OnlineCourses course={course} formatLevel={formatLevel} />;
                                                })}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutProfile>
        </>
    );
}

export default EnrolledCourses;
