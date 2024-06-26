import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import LayoutProfile from "./LayoutProfile";
import useAxiosGet from "../../../hooks/useAxiosGet";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LoadingSpinner from "../../layouts/LoadingSpinner";

function Timetable() {
    const { response, loading } = useAxiosGet({
        path: url.OFFLINE_COURSE.TABLE_TIME,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const timetable = response || [];

    const formattedEvents = timetable.map((event) => {
        const formattedStartTime = event.startTime.slice(0, 19);
        const formattedEndTime = event.endTime.slice(0, 19);
        return {
            title: `<div>${event.className}</div><div>- Room: ${event.roomName}</div><div>- ${event.ca}</div>`,
            start: formattedStartTime,
            end: formattedEndTime,
        };
    });

    return (
        <LayoutProfile>
            <div className="col-lg-9">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <FullCalendar
                            initialView="dayGridMonth"
                            plugins={[dayGridPlugin, timeGridPlugin]}
                            headerToolbar={{
                                left: "prev,next today",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek",
                            }}
                            eventDisplay="block"
                            displayEventTime={false}
                            events={formattedEvents}
                            eventContent={(arg) => {
                                return { html: arg.event.title };
                            }}
                        />
                    )}
                </div>
            </div>
        </LayoutProfile>
    );
}

export default Timetable;
