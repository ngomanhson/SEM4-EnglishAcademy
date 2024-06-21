import { useParams } from "react-router-dom";
import { useAxiosGet } from "../../../hooks";
import url from "../../../services/url";
import LayoutProfile from "../Profile/LayoutProfile";
import { getAccessToken } from "../../../utils/auth";

function BookingDetail() {
    const { lessonId } = useParams();

    const bookingData = useAxiosGet({
        path: url.TUTOR.BOOKING_DETAIL + `/${lessonId}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    return (
        <LayoutProfile>
            <div className="col-lg-9">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                        <div className="section-title">
                            <div className="d-flex justify-content-between rbt-title-style-3 pb-0">
                                <h4 className="fz-15">Booking List</h4>
                                {/* <Link to={config.routes.booking_waiting} className="transparent-button">
                                    Booking Waiting <i className="feather-arrow-right"></i>
                                </Link> */}
                            </div>
                        </div>
                        {/* {bookingData.loading ? (
                            <LoadingSpinner />
                        ) : ( */}
                        <div className="row g-5">
                            <div className="rbt-dashboard-table table-responsive mobile-table-750">
                                <table className="rbt-table table table-borderless">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Tutor</th>
                                            <th>Student</th>
                                            <th>Description</th>
                                            <th>Status</th>
                                            <th className="text-center">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {bookingDetail.map((booking, bookingIndex) => (
                                                <tr key={bookingIndex}>
                                                    <th>{bookingIndex + 1}</th>
                                                    <td>{booking.tutorName}</td>
                                                    <td>{booking.studentName}</td>
                                                    <td>{booking.description}</td>
                                                    <td className={`fz-12 mt-3 ${statusColor(booking.status)}`}>confirmed</td>
                                                    <td className="text-center">
                                                        <a className="bg-color-success-opacity color-success" href="/booking-waiting/package/1">
                                                            <i className="feather-eye"></i>
                                                        </a>
                                                    </td>
                                                </tr>
                                            ))} */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* )} */}
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default BookingDetail;
