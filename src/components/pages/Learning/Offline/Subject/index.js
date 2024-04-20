import useAxios from "../../../../../hooks/useAxios";
import Layout from "../../../../layouts";
import url from "../../../../../services/url";
import { Link, useParams } from "react-router-dom";
import config from "../../../../../config";
import Loading from "../../../../layouts/Loading";
import NotFound from "../../../Other/NotFound";

function SubjectOffline() {
    const { slug } = useParams();
    const studentId = 1;

    const { response, loading, status } = useAxios({
        method: "GET",
        path: url.OFFLINE_COURSE.SUBJECT + `/${slug}/${studentId}`,
    });

    const subject = response || {};
    const slotList = subject.slotResponseDetailList || [];

    return (
        <>
            {loading && <Loading />}
            {status === 404 ? (
                <NotFound />
            ) : (
                <Layout title="Subject">
                    <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3 p-0" style={{ minHeight: 280 }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="content">
                                        <div className="content text-start">
                                            <ul className="page-list">
                                                <li className="rbt-breadcrumb-item">
                                                    <Link to={config.routes.enrolled_courses}>Enrolled Courses</Link>
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
                    <section className="rbt-pricing-area bg-color-white rbt-section-gap pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="course-content rbt-shadow-box coursecontent-wrapper border-lft-prm-opacity" id="coursecontent">
                                        <div className="rbt-course-feature-inner">
                                            <div className="section-title">
                                                <h4 className="rbt-title-style-3 font-system">Subject Content</h4>
                                            </div>

                                            <div className="rbt-accordion-style rbt-accordion-02 accordion">
                                                <div className="accordion" id="accordionExampleb2">
                                                    {slotList.map((slot, index) => {
                                                        const accordionId = `accordion-${slot.id}-${index}`;
                                                        const collapseId = `collapse-${slot.id}-${index}`;
                                                        return (
                                                            <div className="accordion-item card" key={index}>
                                                                <h2 className="accordion-header card-header" id={`heading-${accordionId}`}>
                                                                    <button
                                                                        className="accordion-button collapsed font-system"
                                                                        type="button"
                                                                        data-bs-toggle="collapse"
                                                                        data-bs-target={`#${collapseId}`}
                                                                        aria-expanded="false"
                                                                        aria-controls={collapseId}
                                                                    >
                                                                        {slot.name}
                                                                        {/* <span className="rbt-badge-5 ml--10">1hr 30min</span> */}
                                                                    </button>
                                                                </h2>
                                                                <div
                                                                    id={collapseId}
                                                                    className="accordion-collapse collapse"
                                                                    aria-labelledby={`heading-${accordionId}`}
                                                                    data-bs-parent="#accordionExampleb2"
                                                                >
                                                                    <div className="accordion-body card-body pr--0">
                                                                        <ul className="rbt-course-main-content liststyle">
                                                                            {slot.itemSlotResponseList.map((slotItem) => {
                                                                                return (
                                                                                    <li className="mb-4" key={slotItem.id}>
                                                                                        {slotItem.length === 0 ? (
                                                                                            <p>Coming soon..</p>
                                                                                        ) : (
                                                                                            <Link to={`/subject-learning/${slotItem.slug}`}>
                                                                                                <div className="wrap" style={{ flex: 1 }}>
                                                                                                    <div className="course-content-left">
                                                                                                        <div className="d-flex align-content-center" style={{ flex: 1 }}>
                                                                                                            {slotItem.itemType === 0 && <i className="feather-play-circle"></i>}
                                                                                                            {slotItem.itemType === 1 && <i className="feather-help-circle"></i>}
                                                                                                            {slotItem.itemType === 2 && <i className="feather-hash"></i>}
                                                                                                            <div className="d-flex flex-column">
                                                                                                                <span className="text">{slotItem.title}</span>
                                                                                                                {/* <span className="text time">04:00</span> */}
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div className="course-content-right">
                                                                                                        <span className="rbt-check">
                                                                                                            <i className="feather-unlock"></i>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </Link>
                                                                                        )}
                                                                                    </li>
                                                                                );
                                                                            })}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="widget">
                                        <h4 className="rbt-title-style-3 font-system">Search</h4>
                                        <form action="#" className="rbt-search-style-1">
                                            <input type="text" placeholder="Search Subject" />
                                            <button className="search-btn mb-3">
                                                <i className="feather-search"></i>
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

export default SubjectOffline;
