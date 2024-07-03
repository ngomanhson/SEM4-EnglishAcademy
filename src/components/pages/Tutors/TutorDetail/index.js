import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../../layouts";
import { useAxiosGet } from "../../../../hooks";
import url from "../../../../services/url";
import Loading from "../../../layouts/Loading";
import config from "../../../../config";
import { isLoggedIn } from "../../../../utils/auth";
import { formatLevelCourse } from "../../../../utils/formatLevelCourse";

function TutorDetail() {
    const { tutorCode } = useParams();
    const navigate = useNavigate();

    const { response, loading } = useAxiosGet({
        path: url.TUTOR.DETAIL + `/${tutorCode}`,
    });

    const tutor = response || {};

    const handleHire = () => {
        if (!isLoggedIn()) {
            localStorage.setItem("redirect_path", window.location.pathname);
            navigate(`${config.routes.login}`);
        } else {
            navigate(`/tutor/hire/${tutorCode}`);
        }
    };

    return (
        <>
            {loading && <Loading />}
            <Layout title="Tutor detail">
                <div className="rbt-single-product-area rbt-single-product rbt-section-gap">
                    <div className="container">
                        <div className="row g-5 row--30 align-items-start">
                            <div className="col-lg-4">
                                <div className="thumbnail">
                                    <img className="w-100 radius-10" src={tutor.avatar} alt={tutor.fullname} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="content">
                                        <h2 className="title mb--10 d-flex align-items-center" style={{ fontSize: 33 }}>
                                            {tutor.fullname}
                                            <svg aria-label="Verified" className="ml--10" fill="rgb(0, 149, 246)" height="20" role="img" viewBox="0 0 40 40" width="20">
                                                <path
                                                    d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z"
                                                    fillRule="evenodd"
                                                ></path>
                                            </svg>
                                        </h2>

                                        <span className="rbt-label-style description">
                                            <i className="fas fa-graduation-cap"></i> {tutor.teachingSubject}
                                        </span>

                                        {/* <span className="rbt-label-style description d-block">
                                            <i className="fas fa-map-marker-alt"></i> {tutor.address}
                                        </span> */}

                                        <span className="rbt-badge-6 bg-primary-opacity fz-12 m-0 ml--10" style={{ padding: "5px 15px" }}>
                                            {formatLevelCourse(tutor.level)}
                                        </span>

                                        <div className="rbt-review justify-content-start mt--10">
                                            <div className="rating">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <span className="rating-count">(75) - 100% Positive Reviews</span>
                                        </div>
                                    </div>

                                    <button type="button" className="rbt-btn bg-secondary-opacity btn-not__hover" onClick={handleHire}>
                                        <span className="btn-text">Hire a tutor</span>
                                        <span className="btn-icon">
                                            <i className="fas fa-pencil-alt"></i>
                                        </span>
                                    </button>
                                </div>

                                <div className="rbt-separator-mid mt-5">
                                    <hr className="rbt-separator m-0" />
                                </div>

                                <div className="edu mt-5">
                                    <h4 className="mb-4">Certificate</h4>
                                    <div className="content pr--0">{tutor && tutor.cetificate && <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: tutor.cetificate }} />}</div>
                                </div>

                                <div className="rbt-separator-mid mt-5">
                                    <hr className="rbt-separator m-0" />
                                </div>

                                <div className="edu mt-5">
                                    <h4 className="mb-4">Experience</h4>
                                    <div className="content pr--0">{tutor && tutor.experience && <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: tutor.experience }} />}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default TutorDetail;
