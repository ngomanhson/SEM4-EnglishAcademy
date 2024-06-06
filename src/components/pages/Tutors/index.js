import { Link } from "react-router-dom";
import Layout from "../../layouts/index";
import Tutor from "../../views/Tutor";
import { useAxiosGet } from "../../../hooks";
import url from "../../../services/url";
import Loading from "../../layouts/Loading";
import { useState } from "react";
import Pagination from "../../layouts/Pagination";

function Tutors() {
    const { response, loading } = useAxiosGet({
        path: url.TUTOR.LIST,
    });

    const tutors = response || [];

    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(tutors.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, tutors.length);

    const currentTutor = tutors.slice(startIndex, endIndex);

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
            <Layout title="Tutor">
                <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-center">
                                    <h2 className="title">Tutor</h2>
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right"></i>
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">Tutor</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-team-area bg-color-extra2 rbt-section-gap">
                    <div className="container">
                        <div className="row g-5">
                            {currentTutor.map((tutor) => (
                                <Tutor tutor={tutor} key={tutor.id} />
                            ))}
                        </div>

                        {totalPages === 1 || (
                            <div className="row">
                                <div className="col-lg-12 mt--60">
                                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Tutors;
