import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { useState } from "react";
import Layout from "../../../../layouts";
import url from "../../../../../services/url";
import Loading from "../../../../layouts/Loading";
import NotFound from "../../../Other/NotFound";
import config from "../../../../../config";
import { useAxiosGet } from "../../../../../hooks";

function SubjectOffline() {
    const { slug } = useParams();

    const studentId = 1;
    const { response, loading, status } = useAxiosGet({
        path: url.OFFLINE_COURSE.DETAIL + `/${slug}/${studentId}`,
    });

    const course = response || [];
    const subjectList = course.subjectList || [];

    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(subjectList.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, subjectList.length);

    const currentSubject = subjectList.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({
            top: 380,
            behavior: "smooth",
        });
    };
    return (
        <>
            {loading && <Loading />}
            {status === 404 ? (
                <NotFound />
            ) : (
                <Layout title="Course Detail">
                    <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3 bg-color-darker p-0" style={{ minHeight: 280 }}>
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
                                                <li className="rbt-breadcrumb-item font-system active">{course.name}</li>
                                            </ul>
                                            <h2 className="title font-system mb--0">{course.name}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rbt-course-details-area ptb--60">
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-8">
                                    <div className="row">
                                        {currentSubject.map((subject) => (
                                            <div className="col-lg-6" key={subject.id}>
                                                <div className="widget border-a-secondary p-4">
                                                    <Link to={`/subject-slot/${subject.slug}`}>
                                                        <h5 className="border-bt-secondary mb-4 pb-3">{subject.name}</h5>
                                                    </Link>

                                                    <p className="d-flex align-items-center mb-4 fz-16 fw-300">
                                                        <i className="fab fa-leanpub pr--5"></i> Slot: 0{subject.totalSlot}
                                                    </p>

                                                    <p className="d-flex align-items-center mb-4 fz-16 fw-300">
                                                        <i className="fas fa-calendar-alt pr--5"></i> {subject.createdDate && format(new Date(subject.createdDate), "dd-MM-yyyy")}
                                                    </p>

                                                    <div className="d-flex align-items-center justify-content-between border-t-secondary pt-3">
                                                        <p className="d-flex align-items-center m-0 fw-300 fz-16">
                                                            <i className="fas fa-user-graduate pr--5"></i> {subject.totalSlot} students
                                                        </p>

                                                        <Link to={`/subject-slot/${subject.slug}`} className="transparent-button fw-300" href="#!">
                                                            Learn More
                                                            <i>
                                                                <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                                                    <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                                        <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                                        <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                                                    </g>
                                                                </svg>
                                                            </i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {currentSubject.length <= 6 ? (
                                        ""
                                    ) : (
                                        <div className="row">
                                            <div className="col-lg-12 mt--60">
                                                <nav>
                                                    <ul className="rbt-pagination">
                                                        <li className={`${currentPage === 1 ? "disabled" : ""}`}>
                                                            <button onClick={() => handlePageChange(currentPage - 1)}>
                                                                <i className="feather-chevron-left"></i>
                                                            </button>
                                                        </li>
                                                        {Array.from({ length: totalPages }, (_, index) => (
                                                            <li key={index} className={`${currentPage === index + 1 ? "active" : ""}`}>
                                                                <button onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                                                            </li>
                                                        ))}
                                                        <li className={`${currentPage === totalPages ? "disabled" : ""}`}>
                                                            <button onClick={() => handlePageChange(currentPage + 1)}>
                                                                <i className="feather-chevron-right"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="col-lg-4">
                                    <div className="widget">
                                        <h4 className="rbt-title-style-3 font-system">Search</h4>
                                        <form action="#" className="rbt-search-style-1">
                                            <input type="text" placeholder="Search Subject" required />
                                            {/* <button className="search-btn mb-3">
                                                <i className="feather-search"></i>
                                            </button> */}
                                            <button type="submit" className="rbt-btn bg-color-darker btn-not__hover w-100 mt-4" style={{ height: 50, lineHeight: "50px" }}>
                                                <i className="feather-search"></i> Search
                                            </button>
                                        </form>
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

export default SubjectOffline;
