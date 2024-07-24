import { useNavigate, useParams } from "react-router-dom";
import { useAxiosGet } from "../../../../hooks";
import url from "../../../../services/url";
import Layout from "../../../layouts";
import { useState } from "react";
import api from "../../../../services/api";
import { getAccessToken } from "../../../../utils/auth";
import Swal from "sweetalert2";
import config from "../../../../config";
import Loading from "../../../layouts/Loading";
import PackageSlider from "../../../views/Tutor/PackageSlider";
import Slider from "react-slick";
import Image from "../../../commons/Image";

function HireTutor() {
    const { tutorCode } = useParams();
    const navigate = useNavigate();

    // Call API Tutor Detail
    const tutorData = useAxiosGet({
        path: url.TUTOR.DETAIL + `/${tutorCode}`,
    });

    // Call API Availability by Tutor
    const availabilityData = useAxiosGet({
        path: url.TUTOR.AVAILABILITY + `/${tutorCode}`,
    });

    // Call API Package by Tutor
    const packageData = useAxiosGet({
        path: url.TUTOR.PACKAGE + `/${tutorCode}`,
    });

    const tutor = tutorData.response || {};
    const availability = availabilityData.response || [];
    const packageHire = packageData.response || [];

    const [selectedLessons, setSelectedLessons] = useState([]);
    const [selectPackage, setSelectedPackage] = useState(0);
    const [message, setMessage] = useState("");

    const [submitting, setSubmitting] = useState(false);
    // const [selection, setSelection] = useState("package");
    // const [typeBooking, setTypeBooking] = useState(1);

    // useEffect(() => {
    //     if (selectPackage === 0) {
    //         setTypeBooking(2);
    //     } else {
    //         setTypeBooking(1);
    //     }
    // }, [selectPackage]);

    const formatTime = (time) => time.substring(0, 5);

    const handleChangePackage = (packageId) => {
        setSelectedPackage(packageId);
    };

    const handleCheckboxChange = (id, isChecked) => {
        if (isChecked) {
            if (selectedLessons.length >= 2) {
                Swal.fire({
                    title: "Not allowed!",
                    text: "You can only select up to 2 lessons per week.",
                    icon: "warning",
                });
                return;
            }
            setSelectedLessons([...selectedLessons, id]);
        } else {
            setSelectedLessons(selectedLessons.filter((selectedId) => selectedId !== id));
        }
    };

    const isLessonSelected = (id) => {
        return selectedLessons.includes(id);
    };

    const handleBooking = async () => {
        const isConfirmed = await Swal.fire({
            title: "Are you sure?",
            text: "You want to delete selected data?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I'm sure",
        });
        if (isConfirmed.isConfirmed) {
            try {
                setSubmitting(true);
                const data = {
                    typeBooking: 1,
                    tutorId: tutor.id,
                    packageId: selectPackage,
                    description: message,
                    lessonDays: selectedLessons,
                };

                const bookingRequest = await api.post(url.TUTOR.CREATE_BOOKING, data, {
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                });

                if (bookingRequest.status === 200) {
                    Swal.fire({
                        title: "Successfully!",
                        text: "Request sent successfully!",
                        icon: "success",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate(config.routes.booking_waiting);
                        }
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: "Error! An error occurred. Please try again later!",
                    icon: "error",
                });
            } finally {
                setSubmitting(false);
            }
        }
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <>
            {tutorData.loading && availabilityData.loading && <Loading />}
            <Layout title="Hire a Tutor">
                <div className="rbt-single-product-area rbt-single-product rbt-section-gap">
                    <div className="container">
                        <div className="row ">
                            <div className="col-xl-8 col-md-12 mx-auto">
                                <div className="checkout-content-wrapper">
                                    <h5>
                                        <i className="feather-edit-3"></i> Hire a Tutor
                                    </h5>
                                    <div className="d-flex align-items-center">
                                        <Image src={tutor.avatar} alt={tutor.fullname} className="hire-avatar" />
                                        <div className="content ml--20">
                                            <h5 className="d-flex align-items-center mb-2">
                                                {tutor.fullname}
                                                <svg aria-label="Verified" className="ml--5" fill="rgb(0, 149, 246)" height="13" role="img" viewBox="0 0 40 40" width="13">
                                                    <path
                                                        d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                                        fillRule="evenodd"
                                                    ></path>
                                                </svg>
                                            </h5>
                                            <p className="fz-15 mb-0">{tutor.teachingSubject}</p>
                                            <p className="mt-2 fz-15 text-danger">Note: You can only choose 2 lessons/week</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mt-5 mx-auto">
                                        <div className="content">
                                            {/* <label className="mb-4 fz-14">
                                                Select options <span className="text-danger">*</span>
                                            </label>

                                            <select value={selection} onChange={(e) => setSelection(e.target.value)} className="mb-5 fw-300 fz-15 d-block">
                                                <option value="package">Package</option>
                                                <option value="week">Week</option>
                                            </select> */}

                                            <label className="mb-4 fz-14 d-block">
                                                Choose a package<span className="text-danger">*</span>
                                            </label>

                                            {/* {selection === "package" ? ( */}
                                            <div className="row mb-4">
                                                <Slider {...settings}>
                                                    {packageHire.map((packageHr, packageIndex) => (
                                                        <PackageSlider key={packageIndex} packageHr={packageHr} handleChangePackage={handleChangePackage} />
                                                    ))}
                                                </Slider>
                                            </div>

                                            <label className="fz-14 d-block">
                                                Choose a time when you can study <span className="text-danger">*</span>
                                            </label>

                                            <div className="advance-tab-button advance-tab-button-1 advance-tab-button__custom right-top mt-5">
                                                <ul className="nav nav-tabs tab-button-list tab-button-list__custom" id="myTab-3" role="tablist" style={{ justifyContent: "space-around" }}>
                                                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                                                        <li className="nav-item" role="presentation" key={day}>
                                                            <a
                                                                href={`#${day.toLowerCase()}`}
                                                                className={`nav-link tab-button nav-link_custom ${index === 0 ? "active" : ""}`}
                                                                id={`${day.toLowerCase()}-tab`}
                                                                data-bs-toggle="tab"
                                                                data-bs-target={`#${day.toLowerCase()}`}
                                                                role="tab"
                                                                aria-controls={day.toLowerCase()}
                                                                aria-selected={index === 0 ? "true" : "false"}
                                                            >
                                                                <div className="tab">
                                                                    <h5 className="title tab-custom__title mb-0">{day}</h5>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-lg-12 mt-5">
                                                <div className="tab-content">
                                                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, dayIndex) => (
                                                        <div
                                                            className={`tab-pane fade advance-tab-content-1 ${dayIndex === 0 ? "show active" : ""}`}
                                                            id={day.toLowerCase()}
                                                            role="tabpanel"
                                                            aria-labelledby={`${day.toLowerCase()}-tab`}
                                                            key={day}
                                                        >
                                                            <div className="row">
                                                                {availability.length === 0 ? (
                                                                    <div className="p-3">
                                                                        <p className="alert alert-warning mb-5 fz-15">There is currently no data available. Please choose another session!</p>
                                                                    </div>
                                                                ) : availability.filter((timeSlot) => timeSlot.dayOfWeek.toLowerCase() === day.toLowerCase()).length === 0 ? (
                                                                    <div className="p-3">
                                                                        <p className="alert alert-warning mb-5 fz-15">There is currently no data available. Please choose another session!</p>
                                                                    </div>
                                                                ) : (
                                                                    availability
                                                                        .filter((timeSlot) => timeSlot.dayOfWeek.toLowerCase() === day.toLowerCase())
                                                                        .map((timeSlot, timeIndex) => (
                                                                            <div className="col-lg-4" key={timeIndex}>
                                                                                <div className="choose-wrapper">
                                                                                    <input
                                                                                        type="checkbox"
                                                                                        id={`xs-${day}-${timeSlot.id}`}
                                                                                        className="d-none"
                                                                                        checked={isLessonSelected(timeSlot.id)}
                                                                                        onChange={(e) => handleCheckboxChange(timeSlot.id, e.target.checked)}
                                                                                        disabled={timeSlot.status === true}
                                                                                    />
                                                                                    <label htmlFor={`xs-${day}-${timeSlot.id}`} className="chs-cal">
                                                                                        {`${formatTime(timeSlot.startTime)} - ${formatTime(timeSlot.endTime)}`}
                                                                                    </label>
                                                                                </div>
                                                                            </div>
                                                                        ))
                                                                )}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* ) : (
                                                <>
                                                    <div className="advance-tab-button advance-tab-button-1 advance-tab-button__custom right-top">
                                                        <ul className="nav nav-tabs tab-button-list tab-button-list__custom" id="myTab-3" role="tablist" style={{ justifyContent: "space-around" }}>
                                                            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
                                                                <li className="nav-item" role="presentation" key={day}>
                                                                    <a
                                                                        href={`#${day.toLowerCase()}`}
                                                                        className={`nav-link tab-button nav-link_custom ${index === 0 ? "active" : ""}`}
                                                                        id={`${day.toLowerCase()}-tab`}
                                                                        data-bs-toggle="tab"
                                                                        data-bs-target={`#${day.toLowerCase()}`}
                                                                        role="tab"
                                                                        aria-controls={day.toLowerCase()}
                                                                        aria-selected={index === 0 ? "true" : "false"}
                                                                    >
                                                                        <div className="tab">
                                                                            <h5 className="title tab-custom__title mb-0">{day}</h5>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="col-lg-12 mt-5">
                                                        <div className="tab-content">
                                                            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, dayIndex) => (
                                                                <div
                                                                    className={`tab-pane fade advance-tab-content-1 ${dayIndex === 0 ? "show active" : ""}`}
                                                                    id={day.toLowerCase()}
                                                                    role="tabpanel"
                                                                    aria-labelledby={`${day.toLowerCase()}-tab`}
                                                                    key={day}
                                                                >
                                                                    <div className="row">
                                                                        {availability.length === 0 ? (
                                                                            <div className="p-3">
                                                                                <p className="alert alert-warning mb-5 fz-15">There is currently no data available. Please choose another session!</p>
                                                                            </div>
                                                                        ) : availability.filter((timeSlot) => timeSlot.dayOfWeek.toLowerCase() === day.toLowerCase()).length === 0 ? (
                                                                            <div className="p-3">
                                                                                <p className="alert alert-warning mb-5 fz-15">There is currently no data available. Please choose another session!</p>
                                                                            </div>
                                                                        ) : (
                                                                            availability
                                                                                .filter((timeSlot) => timeSlot.dayOfWeek.toLowerCase() === day.toLowerCase())
                                                                                .map((timeSlot, timeIndex) => (
                                                                                    <div className="col-lg-4" key={timeIndex}>
                                                                                        <div className="choose-wrapper">
                                                                                            <input
                                                                                                type="checkbox"
                                                                                                id={`xs-${day}-${timeSlot.id}`}
                                                                                                className="d-none"
                                                                                                checked={isLessonSelected(timeSlot.id)}
                                                                                                onChange={(e) => handleCheckboxChange(timeSlot.id, e.target.checked)}
                                                                                                disabled={timeSlot.status === true}
                                                                                            />
                                                                                            <label htmlFor={`xs-${day}-${timeSlot.id}`} className="chs-cal">
                                                                                                {`${formatTime(timeSlot.startTime)} - ${formatTime(timeSlot.endTime)}`}
                                                                                            </label>
                                                                                        </div>
                                                                                    </div>
                                                                                ))
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </>
                                            )} */}
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-5">
                                        <div className="rbt-form-group">
                                            <label htmlFor="message" className="mb-2 fz-14">
                                                Message
                                            </label>
                                            <textarea cols="30" rows="3" id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                        </div>
                                    </div>

                                    {selectedLessons.length === 0 ? (
                                        ""
                                    ) : (
                                        <div className="col-lg-12">
                                            <h6 className="mb-2">Selected study time: {selectedLessons.length} session </h6>
                                            <div className="data-texteditor">
                                                <ul>
                                                    {selectedLessons.map((selected, selectedIndex) => {
                                                        const timeSlot = availability.find((slot) => slot.id === selected);
                                                        return (
                                                            <li key={selectedIndex}>
                                                                {timeSlot.dayOfWeek}: {formatTime(timeSlot.startTime)} - {formatTime(timeSlot.endTime)}
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                    {selectedLessons.length === 0 ? (
                                        ""
                                    ) : submitting ? (
                                        <div className="text-end mt-5">
                                            <button className="rbt-btn bg-primary-opacity btn-not__hover" style={{ height: 50, lineHeight: "50px" }} disabled>
                                                <i className="fas fa-spinner fa-spin p-0"></i> Submitting...
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="text-end mt-5">
                                            <button className="rbt-btn bg-primary-opacity btn-not__hover" style={{ height: 50, lineHeight: "50px" }} onClick={handleBooking}>
                                                Submit request
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default HireTutor;
