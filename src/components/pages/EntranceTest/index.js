import { Link } from "react-router-dom";
import Layout from "../../layouts";
import { useState } from "react";
import url from "../../../services/url";
import Loading from "../../layouts/Loading";
import { useAxiosGet } from "../../../hooks";
import { getAccessToken } from "../../../utils/auth";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

function EntranceTest() {
    const [selectedTestSlug, setSelectedTestSlug] = useState("");
    const [selectedTestType, setSelectedTestType] = useState(null);

    const { response, loading } = useAxiosGet({
        path: url.ENTRANCE_TEST.LIST,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const testList = response || [];

    const handleTestSelection = (slug, type) => {
        setSelectedTestSlug(slug);
        setSelectedTestType(type);
    };

    const filteredTests = (type) => {
        return testList.filter((test) => test.type === type);
    };

    const startTestLink = selectedTestType === 1 ? `/entrance-test/ielts/${selectedTestSlug}` : selectedTestType === 0 ? `/entrance-test/toiec/${selectedTestSlug}` : "";

    return (
        <>
            {loading && <Loading />}
            <Layout title="Entrance Test">
                <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="breadcrumb-inner text-start">
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right"></i>
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item active">Entrance Test</li>
                                    </ul>
                                    <h2 className="title">Entrance Test</h2>
                                    <p className="description fw-light text-secondary">Please choose a test that is suitable for you to evaluate your ability!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rbt-become-area bg-color-white rbt-section-gap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <div className="section-title text-center">
                                        <span className="subtitle bg-secondary-opacity">Choose an test</span>
                                        <h2 className="title">List of tests.</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row row--30">
                            <div className="col-lg-8 mx-auto mt_md--40 mt_sm--40 order-2 order-lg-1">
                                <div className="advance-tab-button">
                                    <ul className="nav nav-tabs tab-button-style-2" id="myTab-4" role="tablist">
                                        <li role="presentation">
                                            <a
                                                href="#!"
                                                className="tab-button active"
                                                id="home-tab-4"
                                                data-bs-toggle="tab"
                                                data-bs-target="#home-4"
                                                role="tab"
                                                aria-controls="home-4"
                                                aria-selected="false"
                                            >
                                                <span className="title">Take the IELTS test</span>
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a
                                                href="#!"
                                                className="tab-button"
                                                id="profile-tab-4"
                                                data-bs-toggle="tab"
                                                data-bs-target="#profile-4"
                                                role="tab"
                                                aria-controls="profile-4"
                                                aria-selected="true"
                                            >
                                                <span className="title">Take the TOEIC test</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="tab-content advance-tab-content-style-2 p-0">
                                    <div className="tab-pane fade active show" id="home-4" role="tabpanel" aria-labelledby="home-tab-4">
                                        {filteredTests(1).map((test) => (
                                            <div className="content" key={test.id}>
                                                <label className="d-flex align-items-center position-relative content-label-tab mb-5">
                                                    <div className="border-gradient">
                                                        <div className="text-start">
                                                            <div className="d-flex align-items-center mb-4">
                                                                <h5 className="font-system tab-title mb-0">{capitalizeFirstLetter(test.title)}</h5>
                                                                <input type="radio" name="exam-option" className="input-tab__option" onChange={() => handleTestSelection(test.slug, test.type)} />
                                                            </div>
                                                            <p className="fw-light tab-time mb-0">Total number of questions: {test.totalQuestion}</p>
                                                            <ul className="tab-list">
                                                                <li>{test.description}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="tab-pane fade" id="profile-4" role="tabpanel" aria-labelledby="profile-tab-4">
                                        {filteredTests(0).map((test) => (
                                            <div className="content" key={test.id}>
                                                <label className="d-flex align-items-center position-relative content-label-tab mb-5">
                                                    <div className="text-start">
                                                        <div className="d-flex align-items-center mb-4">
                                                            <h5 className="font-system tab-title mb-0">{capitalizeFirstLetter(test.title)}</h5>
                                                            <input type="radio" name="exam-option" className="input-tab__option" onChange={() => handleTestSelection(test.slug, test.type)} />
                                                        </div>
                                                        <p className="fw-light tab-time mb-0">Total number of questions: {test.totalQuestion}</p>
                                                        <ul className="tab-list">
                                                            <li>{test.description}</li>
                                                        </ul>
                                                    </div>
                                                </label>
                                            </div>
                                        ))}
                                    </div>

                                    {selectedTestSlug && (
                                        <div className="mt-5">
                                            <Link to={startTestLink} className="rbt-moderbt-btn">
                                                <span className="moderbt-btn-text">Start taking the test</span>
                                                <i className="feather-arrow-right"></i>
                                            </Link>
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

export default EntranceTest;
