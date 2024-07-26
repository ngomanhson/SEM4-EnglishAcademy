import config from "../../../config";
import { useAxiosGet } from "../../../hooks";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LoadingSpinner from "../../layouts/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../layouts/index";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import Pagination from "../../layouts/Pagination";
import { useState } from "react";
import { toast } from "react-toastify";

function BookingList() {
    const navigate = useNavigate();

    const bookingData = useAxiosGet({
        path: url.TUTOR.BOOKING,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const lessonBookingData = useAxiosGet({
        path: url.LESSON_BOOKING.GET_BY_STUDENT,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const bookingDetail = bookingData.response || [];
    const lessonBooking = lessonBookingData.response || [];

    const addHours = (date, hours) => {
        date.setHours(date.getHours() + hours);
        return date;
    };

    const formattedEvents = lessonBooking.map((event) => {
        const formattedStartTime = event.scheduledStartTime.slice(0, 19);
        const formattedEndTime = event.scheduledEndTime.slice(0, 19);

        const isNullEvent = event.path === null;
        const eventTitle = isNullEvent ? "N/A" : event.path;

        const now = addHours(new Date(), 7).toISOString().slice(0, 19);

        const isPastEvent = formattedEndTime < now;

        return {
            title: eventTitle,
            start: formattedStartTime,
            end: formattedEndTime,
            backgroundColor: isPastEvent ? "#d3d3d3" : isNullEvent ? "#eff0f2" : "#ecfafb",
            textColor: isPastEvent ? "#a9a9a9" : isNullEvent ? "#5b6b79" : "#2ca87f",
            borderColor: isPastEvent ? "#a9a9a9" : isNullEvent ? "#5b6b79" : "#2ca87f",
            isNullEvent: isNullEvent,
            isPastEvent: isPastEvent,
        };
    });

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(bookingDetail.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, bookingDetail.length);

    const currentBooking = bookingDetail.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Layout title="Sessions with tutors">
            <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3 bg-color-darker p-0" style={{ minHeight: 280 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <div className="content text-start">
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link to={config.routes.home}>Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right"></i>
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item font-system active">Sessions with tutors</li>
                                    </ul>
                                    <h2 className="title font-system mb--0">Sessions with tutors</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                <div className="container">
                    <div className="content">
                        {bookingData.loading ? (
                            <LoadingSpinner />
                        ) : (
                            <div className="row g-5">
                                <div className="col-lg-6 col-12">
                                    {currentBooking.length > 0 ? (
                                        currentBooking.map((booking, bookingIndex) => (
                                            <div className="widget mt-3 p-3" key={bookingIndex}>
                                                <div className="accordion-collapse">
                                                    <Link to={`/booking/${booking.id}`}>
                                                        <div className="d-flex align-items-center" key={booking.id}>
                                                            <div className="flex-shrink-0">
                                                                <div className="avatar-icon border">
                                                                    <i className="fas fa-graduation-cap fz-13"></i>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1 ms-3">
                                                                <div className="row g-1">
                                                                    <div className="col-6">
                                                                        <h6 className="mb-0">{booking.tutorName}</h6>
                                                                        <p className="text-muted mb-0 fw-300">
                                                                            <small className="fz-12">Status: {booking.status}</small>
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-6 text-end my-auto">
                                                                        <i className="feather-more-vertical fz16"></i>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                                <hr className="my-3" />
                                                <div>
                                                    <h6 className="m-0">Schedule</h6>
                                                    {booking.lessonDays.map((lesson, lessonIndex) => (
                                                        <p key={lessonIndex} className="my-3 fz-13 fw-300 px-3">
                                                            Session {lessonIndex + 1}: {lesson.dayOfWeek} {lesson.startTime} - {lesson.endTime}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="fw-300 fz-15">
                                            You don't have any class schedules with a tutor yet.{" "}
                                            <Link className="text-primary" to={config.routes.tutor}>
                                                Register to study with a tutor now!
                                            </Link>
                                        </p>
                                    )}

                                    {currentBooking.length > 0 && (
                                        <div className="mt-5">
                                            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                                        </div>
                                    )}
                                </div>

                                {currentBooking.length > 0 && (
                                    <div className="col-lg-6 col-12">
                                        <FullCalendar
                                            initialView="dayGridMonth"
                                            plugins={[dayGridPlugin, timeGridPlugin]}
                                            headerToolbar={{
                                                left: "prev,next today",
                                                center: "title",
                                                right: "dayGridMonth,timeGridWeek,timeGridDay",
                                            }}
                                            eventDisplay="block"
                                            events={formattedEvents}
                                            eventContent={(arg) => {
                                                return { html: arg.event.title };
                                            }}
                                            eventClick={(info) => {
                                                const eventId = info.event.title;
                                                if (info.event.extendedProps.isPastEvent) {
                                                    toast.error("This event is in the past and cannot be accessed.");
                                                } else if (!info.event.extendedProps.isNullEvent) {
                                                    navigate(`/room/${eventId}`);
                                                } else {
                                                    toast.error("Event not available.");
                                                }
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default BookingList;
