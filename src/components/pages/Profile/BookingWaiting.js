import { Link } from "react-router-dom";
import { useAxiosGet } from "../../../hooks";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LayoutProfile from "./LayoutProfile";
// import { format } from "date-fns";
import LoadingSpinner from "../../layouts/LoadingSpinner";
import { statusColor } from "../../../utils/statusColor";

function BookingWaiting() {
    const bookingData = useAxiosGet({
        path: url.TUTOR.BOOKING_WAITING,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const bookings = bookingData.response;

    return (
        <LayoutProfile>
            <div className="col-lg-9">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                        <div className="section-title">
                            <h4 className="rbt-title-style-3">Booking Waiting</h4>
                        </div>

                        {bookingData.loading ? (
                            <LoadingSpinner />
                        ) : (
                            <>
                                {/* <div className="advance-tab-button mb--30">
                                    <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="myTab-4" role="tablist">
                                        <li role="presentation">
                                            <Link
                                                to=""
                                                className="tab-button active"
                                                id="home-tab-4"
                                                data-bs-toggle="tab"
                                                data-bs-target="#home-4"
                                                role="tab"
                                                aria-controls="home-4"
                                                aria-selected="false"
                                            >
                                                <span className="title">Booking by Package</span>
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
                                                <span className="title"> Booking by Week</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div> */}

                                <div className="tab-content">
                                    {/* <div className="tab-pane fade active show" id="home-4" role="tabpanel" aria-labelledby="home-tab-4"> */}
                                    <div className="row g-5">
                                        <div className="rbt-dashboard-table table-responsive mobile-table-750">
                                            <table className="rbt-table table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th>No.</th>
                                                        <th>Student</th>
                                                        <th>Sessions</th>
                                                        <th>Status</th>
                                                        <th className="text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {bookings?.studentPackageDTOS.map((booking, bookingIndex) => (
                                                        <tr key={bookingIndex}>
                                                            <th>{bookingIndex + 1}</th>
                                                            <td>
                                                                <Link to={`/booking-waiting/package/${booking.id}`}>{booking.studentName}</Link>
                                                            </td>
                                                            <td>{booking.remainingSessions}</td>
                                                            <td className={`fz-12 mt-3 ${statusColor(booking.status)}`}>{booking.status}</td>
                                                            <td className="text-center">
                                                                <Link to={`/booking-waiting/package/${booking.id}`} className="bg-color-success-opacity color-success">
                                                                    <i className="feather-eye"></i>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    {/* </div> */}

                                    {/* <div className="tab-pane fade" id="profile-4" role="tabpanel" aria-labelledby="profile-tab-4">
                                        <div className="row g-5">
                                            <div className="rbt-dashboard-table table-responsive mobile-table-750">
                                                <table className="rbt-table table table-borderless">
                                                    <thead>
                                                        <tr>
                                                            <th>No.</th>
                                                            <th>Student</th>
                                                            <th>Total</th>
                                                            <th>Next Payment Date</th>
                                                            <th>Status</th>
                                                            <th className="text-center">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {bookings?.subscriptionDTOS.map((booking, bookingIndex) => (
                                                            <tr key={bookingIndex}>
                                                                <th>{bookingIndex + 1}</th>
                                                                <td>
                                                                    <Link to={`/booking-waiting/weeks/${booking.id}`}>{booking.studentName}</Link>
                                                                </td>

                                                                <td>${booking.price.toFixed(2)}</td>
                                                                <td>{format(new Date(booking.nextPaymentDate), "dd-MM-yyyy")}</td>
                                                                <td className={`fz-12 mt-3 ${statusColor(booking.status)}`}>{booking.status}</td>
                                                                <td className="text-center">
                                                                    <Link to={`/booking-waiting/weeks/${booking.id}`} className="bg-color-success-opacity color-success">
                                                                        <i className="feather-eye"></i>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default BookingWaiting;
