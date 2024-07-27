import React, { useState } from "react";
import Layout from "../../../../layouts";
import url from "../../../../../services/url";
import { Link, useParams } from "react-router-dom";
import config from "../../../../../config";
import Loading from "../../../../layouts/Loading";
import NotFound from "../../../Other/NotFound";
import { useAxiosGet } from "../../../../../hooks";
import { getAccessToken } from "../../../../../utils/auth";
import { format } from "date-fns";

function SlotOffline() {
    const { slug } = useParams();

    const { response, loading, status } = useAxiosGet({
        path: url.OFFLINE_COURSE.SUBJECT + `/${slug}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const subject = response || {};
    const slotList = subject.slotResponseDetailList || [];
    const finalTest = subject.testOfflineResponseList || [];

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredSlotList = slotList.filter(
        (slot) => slot.name.toLowerCase().includes(searchQuery.toLowerCase()) || slot.itemSlotResponseList.some((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <>
            {loading && <Loading />}
            {status === 404 ? (
                <NotFound />
            ) : (
                <Layout title="Subject">
                    <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3 bg-color-darker p-0" style={{ minHeight: 280 }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="content">
                                        <div className="content text-start">
                                            <ul className="page-list">
                                                <li className="rbt-breadcrumb-item">
                                                    <Link to={config.routes.my_courses}>Enrolled Courses</Link>
                                                </li>
                                                <li>
                                                    <div className="icon-right">
                                                        <i className="feather-chevron-right"></i>
                                                    </div>
                                                </li>
                                                <li className="rbt-breadcrumb-item font-system active">{subject.name}</li>
                                            </ul>
                                            <h2 className="title font-system mb--0">{subject.name}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="rbt-pricing-area bg-color-white rbt-section-gap pt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="course-content rbt-shadow-box coursecontent-wrapper border-lft-darker" id="coursecontent">
                                        <div className="rbt-course-feature-inner">
                                            <div className="section-title">
                                                <h4 className="rbt-title-style-3 font-system">Slot Content</h4>
                                            </div>
                                            {filteredSlotList && filteredSlotList.length === 0 ? (
                                                <p>This subject has no slot.</p>
                                            ) : (
                                                <div className="rbt-accordion-style rbt-accordion-02 accordion">
                                                    <div className="accordion" id="accordionExampleb2">
                                                        {filteredSlotList.map((slot, index) => {
                                                            const accordionId = `accordion-${slot.id}-${index}`;
                                                            const collapseId = `collapse-${slot.id}-${index}`;
                                                            return (
                                                                <div className="accordion-item card" key={index}>
                                                                    <h2 className="accordion-header card-header" style={{ fontSize: 18 }} id={`heading-${accordionId}`}>
                                                                        <button
                                                                            className="accordion-button collapsed font-system"
                                                                            type="button"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target={`#${collapseId}`}
                                                                            aria-expanded="false"
                                                                            aria-controls={collapseId}
                                                                        >
                                                                            {slot.name}
                                                                        </button>
                                                                        <span
                                                                            className="fz-12 fw-300 cursor-pointer"
                                                                            data-bs-toggle="collapse"
                                                                            data-bs-target={`#${collapseId}`}
                                                                            aria-expanded="false"
                                                                            aria-controls={collapseId}
                                                                        >
                                                                            {slot.time}
                                                                        </span>
                                                                    </h2>
                                                                    <div
                                                                        id={collapseId}
                                                                        className="accordion-collapse collapse"
                                                                        aria-labelledby={`heading-${accordionId}`}
                                                                        data-bs-parent="#accordionExampleb2"
                                                                    >
                                                                        <div className="accordion-body card-body pr--0 p-0">
                                                                            <ul className="rbt-course-main-content liststyle">
                                                                                {slot.itemSlotResponseList ? (
                                                                                    slot.itemSlotResponseList.length === 0 ? (
                                                                                        <p className="fw-300" style={{ padding: "20px 5px" }}>
                                                                                            This slot has no content.
                                                                                        </p>
                                                                                    ) : (
                                                                                        slot.itemSlotResponseList.map((slotItem) => (
                                                                                            <li className="item-subject" key={slotItem.id}>
                                                                                                <Link to={`/subject-learning/${slotItem.slug}`}>
                                                                                                    <div className="wrap" style={{ flex: 1 }}>
                                                                                                        <div className="course-content-left">
                                                                                                            <div className="d-flex align-content-center" style={{ flex: 1 }}>
                                                                                                                {slotItem.itemType === 0 && <i className="feather-hash mt-1"></i>}
                                                                                                                {slotItem.itemType === 1 && <i className="feather-clipboard mt-1"></i>}
                                                                                                                {slotItem.itemType === 2 && <i className="feather-help-circle mt-1"></i>}
                                                                                                                <div className="d-flex flex-column">
                                                                                                                    <span className="text">{slotItem.title}</span>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </Link>
                                                                                            </li>
                                                                                        ))
                                                                                    )
                                                                                ) : (
                                                                                    <p className="fw-300" style={{ padding: "20px 5px" }}>
                                                                                        This slot has no content.
                                                                                    </p>
                                                                                )}
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            )}

                                            {finalTest && finalTest.length === 0 ? (
                                                <p>This subject has no slot.</p>
                                            ) : (
                                                <div className="rbt-accordion-style rbt-accordion-02 accordion">
                                                    <div className="accordion" id="accordionExampleb2">
                                                        {finalTest?.[0] && (
                                                            <div className="accordion-item card" key={0}>
                                                                <h2 className="accordion-header card-header" style={{ fontSize: 18 }} id={`heading-accordion-${finalTest[0].id}-0`}>
                                                                    <button
                                                                        className="accordion-button collapsed font-system"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target={`#collapse-${finalTest[0].id}-0`}
                                                                        aria-expanded="false"
                                                                        aria-controls={`collapse-${finalTest[0].id}-0`}
                                                                    >
                                                                        Final exam
                                                                    </button>
                                                                    <span
                                                                        className="fz-12 fw-300 cursor-pointer"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target={`#collapse-${finalTest[0].id}-0`}
                                                                        aria-expanded="false"
                                                                        aria-controls={`collapse-${finalTest[0].id}-0`}
                                                                    >
                                                                        Start Date: {format(new Date(finalTest[0].startDate), "HH:mm:ss dd-MM-yyyy")}
                                                                    </span>
                                                                </h2>
                                                                <div
                                                                    id={`collapse-${finalTest[0].id}-0`}
                                                                    className="accordion-collapse collapse"
                                                                    aria-labelledby={`heading-accordion-${finalTest[0].id}-0`}
                                                                    data-bs-parent="#accordionExampleb2"
                                                                >
                                                                    <div className="accordion-body card-body pr--0 p-0">
                                                                        <ul className="rbt-course-main-content liststyle">
                                                                            {finalTest.length === 0 ? (
                                                                                <p className="fw-300" style={{ padding: "20px 5px" }}>
                                                                                    This slot has no content.
                                                                                </p>
                                                                            ) : (
                                                                                finalTest?.[0] && (
                                                                                    <li className="item-subject" key={finalTest[0].id}>
                                                                                        <Link to={`/subject-test/${finalTest[0].slug}`}>
                                                                                            <div className="wrap" style={{ flex: 1 }}>
                                                                                                <div className="course-content-left">
                                                                                                    <div className="d-flex align-content-center" style={{ flex: 1 }}>
                                                                                                        <i className="fas fa-file-signature"></i>
                                                                                                        <div className="d-flex flex-column">
                                                                                                            <span className="text">{finalTest[0].title}</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </li>
                                                                                )
                                                                            )}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="widget">
                                        <h4 className="rbt-title-style-3 font-system">Search</h4>
                                        <form action="#" className="rbt-search-style-1">
                                            <input type="text" placeholder="Search Slot" value={searchQuery} onChange={handleSearchChange} required />
                                            <button type="submit" className="rbt-btn bg-color-darker btn-not__hover w-100 mt-4" style={{ height: 50, lineHeight: "50px" }}>
                                                <i className="feather-search"></i> Search
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Layout>
            )}
        </>
    );
}

export default SlotOffline;
