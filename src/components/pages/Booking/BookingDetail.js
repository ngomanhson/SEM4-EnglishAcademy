import { Link, useParams } from "react-router-dom";
import { useAxiosGet } from "../../../hooks";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Layout from "../../layouts";
import LoadingSpinner from "../../layouts/LoadingSpinner";
import NotFound from "../Other/NotFound";
import { format } from "date-fns";

function BookingDetail() {
    const { lessonId } = useParams();

    const bookingData = useAxiosGet({
        path: url.TUTOR.BOOKING_DETAIL + `/${lessonId}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const lessons = bookingData.response || {};

    const getLastSegment = (url) => {
        try {
            const pathSegments = url.split("/");
            return pathSegments[pathSegments.length - 1];
        } catch (error) {
            console.log(error);
        }
    };

    const formatDateTime = (dateTime) => {
        return dateTime ? format(new Date(dateTime), "HH:mm:ss dd-MM-yyyy") : "N/A";
    };

    const statusColor = (status) => {
        switch (status) {
            case "scheduled":
                return "text-info";
            case "inprogress":
                return "text-primary";
            case "completed":
                return "text-success";
            case "cancelled":
                return "text-danger";
            case "rescheduled":
                return "text-warning";
            default:
                return "color-success";
        }
    };

    return (
        <>
            {bookingData.errorStatus === 404 ? (
                <NotFound />
            ) : (
                <Layout title="Sessions Detail With Tutors">
                    <div className="py-5 my-5">
                        <div className="row ">
                            <div className="col-lg-9 mx-auto">
                                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                                    <div className="content">
                                        <div className="section-title border-bottom mb-5">
                                            <h4 className="fw-normal" style={{ fontSize: 20 }}>
                                                Sessions Detail With Tutors
                                            </h4>
                                        </div>

                                        {bookingData.loading ? (
                                            <LoadingSpinner />
                                        ) : (
                                            <>
                                                <div className="rbt-profile-row row row--15 mt--15">
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="rbt-profile-content fw-500">
                                                            Student Name
                                                            <p className="m-0 fz-12 fw-300">{lessons.studentName}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6">
                                                        <div className="rbt-profile-content fw-500">
                                                            Tutor Name
                                                            <p className="m-0 fz-12 fw-300">{lessons.tutorName}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 col-md-12 mt-3">
                                                    <div className="rbt-profile-content fw-500">
                                                        Schedule
                                                        {lessons?.lessonDays?.map((lesson, lessonIndex) => (
                                                            <p className="mt-3 mb-3 fz-13 fw-300" key={lessonIndex}>
                                                                {lessonIndex + 1}. {lesson?.dayOfWeek}: {lesson.startTime} - {lesson.endTime}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                                <h4 className="fz-15 fw-300 mt-5">Information about lessons:</h4>
                                                <table className="rbt-table table table-borderless ">
                                                    <thead>
                                                        <tr>
                                                            <th>No.</th>
                                                            <th>Room</th>
                                                            <th>Scheduled Start</th>
                                                            <th>Scheduled End</th>
                                                            <th>Actual Start Time</th>
                                                            <th>Actual End Time</th>
                                                            <th>Status</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {lessons?.lessionBookingDTOS?.map((lesson, index) => (
                                                            <tr key={index}>
                                                                <td>{index + 1}</td>
                                                                <td>
                                                                    {lesson.path === null || lesson.path === "" ? (
                                                                        "N/A"
                                                                    ) : lesson.status === "completed" ? (
                                                                        <p className="m-0 fw-400 fz-14">
                                                                            {lesson.path} <span className="text-danger">(closed)</span>
                                                                        </p>
                                                                    ) : (
                                                                        <Link to={`/room/${lesson.path}`} className="text-primary" target="_blank">
                                                                            {getLastSegment(lesson.path)}
                                                                        </Link>
                                                                    )}
                                                                </td>

                                                                <td>{formatDateTime(lesson.scheduledStartTime)}</td>
                                                                <td>{formatDateTime(lesson.scheduledEndTime)}</td>
                                                                <td>{formatDateTime(lesson.actualStartTime)}</td>
                                                                <td>{formatDateTime(lesson.actualEndTime)}</td>
                                                                <td className={`${statusColor(lesson.status)}`}>{lesson.status}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Layout>
            )}
        </>
    );
}

export default BookingDetail;
