import { Link, useParams } from "react-router-dom";
import { useAxiosGet } from "../../../hooks";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import Layout from "../../layouts";
import { format } from "date-fns";
import LoadingSpinner from "../../layouts/LoadingSpinner";
import NotFound from "../Other/NotFound";

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

    return (
        <>
            {bookingData.errorStatus === 404 ? (
                <NotFound />
            ) : (
                <Layout title="Booking Detail">
                    <div className="py-5 my-5">
                        <div className="row ">
                            <div className="col-lg-9 mx-auto">
                                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                                    <div className="content">
                                        <div className="section-title border-bottom mb-5">
                                            <h4 className="fz-15">Booking Detail</h4>
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
                                                        Lesson
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
                                                            <th>Room Meeting</th>
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
                                                                    <Link to={`${lesson.path === null ? "" : `/room/${lesson.path}`}`} className="text-primary">
                                                                        {getLastSegment(lesson.path) || "N/A"}
                                                                    </Link>
                                                                </td>

                                                                <td>{formatDateTime(lesson.scheduledStartTime)}</td>
                                                                <td>{formatDateTime(lesson.scheduledEndTime)}</td>
                                                                <td>{formatDateTime(lesson.actualStartTime)}</td>
                                                                <td>{formatDateTime(lesson.actualEndTime)}</td>
                                                                <td className="color-success">{lesson.status}</td>
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
