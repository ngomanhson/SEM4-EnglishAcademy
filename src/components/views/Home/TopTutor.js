import React, { useState } from "react";
import useAxiosGet from "../../../hooks/useAxiosGet";
import url from "../../../services/url";
import { Link } from "react-router-dom";
import { formatLevelCourse } from "../../../utils/formatLevelCourse";
import Image from "../../commons/Image";

function TopTutor() {
    const tutorData = useAxiosGet({
        path: url.HOME.TOP_TUTOR,
    });

    const topTutor = tutorData.response || [];
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="rbt-team-area bg-color-white rbt-section-gap">
            <div className="container">
                <div className="row mb--60">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle bg-primary-opacity">Outstanding tutor</span>
                            <h2 className="title">
                                Outstanding Tutor at <br /> English Academy
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-lg-7">
                        <div className="rbt-team-tab-content tab-content" id="myTabContent">
                            {topTutor.map((tutor, index) => (
                                <div
                                    className={`tab-pane fade ${index === activeTab ? "active show" : ""}`}
                                    id={`team-tab${index + 1}`}
                                    role="tabpanel"
                                    aria-labelledby={`team-tab${index + 1}-tab`}
                                    key={tutor.id}
                                >
                                    <div className="inner">
                                        <div className="rbt-team-thumbnail">
                                            <div className="thumb">
                                                <Link to={`/tutor/${tutor.code}`}>
                                                    <Image src={tutor.avatar} alt={tutor.fullname} />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="rbt-team-details">
                                            <div className="author-info">
                                                <h4 className="title">
                                                    <Link to={`/tutor/${tutor.code}`}>{tutor.fullname}</Link>
                                                </h4>
                                                <span className="designation theme-gradient">{tutor.teachingSubject}</span>

                                                <span className="team-form">
                                                    <i className="feather-map-pin"></i>
                                                    <span className="location">{tutor.address}</span>
                                                </span>
                                            </div>

                                            <p>Esteemed as one of the premier tutors at English Academy.</p>

                                            <div className="d-flex gap-3">
                                                <p className="designation m-0">
                                                    <span className="rbt-badge-6 bg-secondary-opacity fz-12 m-0">{formatLevelCourse(tutor.level)}</span>
                                                </p>
                                                <p className="designation m-0">
                                                    <span className="rbt-badge-6 bg-primary-opacity fz-12 m-0">{tutor.teachingSubject}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="top-circle-shape"></div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <ul className="rbt-team-tab-thumb nav nav-tabs" id="myTab" role="tablist">
                            {topTutor.map((tutor, index) => (
                                <li key={tutor.id}>
                                    <button
                                        className={`border-0 nav-link ${index === activeTab ? "active" : ""}`}
                                        id={`team-tab${index + 1}-tab`}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#team-tab${index + 1}`}
                                        role="tab"
                                        aria-controls={`team-tab${index + 1}`}
                                        aria-selected={index === activeTab ? "true" : "false"}
                                        onClick={() => setActiveTab(index)}
                                    >
                                        <div className="rbt-team-thumbnail">
                                            <div className="thumb">
                                                <Image src={tutor.avatar} alt={tutor.fullname} className="object-fit-cover" />
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopTutor;
