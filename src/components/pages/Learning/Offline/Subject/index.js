import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Layout from "../../../../layouts";
import url from "../../../../../services/url";
import Loading from "../../../../layouts/Loading";
import NotFound from "../../../Other/NotFound";
import config from "../../../../../config";
import { useAxiosGet } from "../../../../../hooks";
import { getAccessToken } from "../../../../../utils/auth";
import Subject from "../../../../views/Learing/Offline/Subject";
import Lottie from "lottie-react";
import Learn from "../../../../../lottie/Learn.json";

function SubjectOffline() {
    const { slug } = useParams();

    const { response, loading, status } = useAxiosGet({
        path: url.OFFLINE_COURSE.DETAIL + `/${slug}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const course = response || [];
    const subjectList = course.subjectList || [];

    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const filteredSubject = subjectList.filter((subject) => subject.name.toLowerCase().includes(searchQuery.toLowerCase()));

    const totalPages = Math.ceil(filteredSubject.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredSubject.length);

    const currentSubject = filteredSubject.slice(startIndex, endIndex);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

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
                                                    <Link to={config.routes.my_course}>My Course</Link>
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
                                    {currentSubject.length === 0 ? (
                                        <div className="row ">
                                            <div className="col-5 mx-auto">
                                                <Lottie animationData={Learn} loop={true} />
                                                <p className="m-0 text-center">This slot has no content.</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="row">
                                            {currentSubject.map((subject) => (
                                                <Subject subject={subject} key={subject.id} />
                                            ))}

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
                                    )}
                                </div>
                                <div className="col-lg-4">
                                    <div className="widget">
                                        <h4 className="rbt-title-style-3 font-system">Search</h4>
                                        <form action="#" className="rbt-search-style-1">
                                            <input type="text" placeholder="Search Subject" required value={searchQuery} onChange={handleSearch} />

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
