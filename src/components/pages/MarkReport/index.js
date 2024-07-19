import { useCallback, useEffect, useMemo, useState } from "react";
import Select from "react-select";
import { useAxiosGet } from "../../../hooks";
import url from "../../../services/url";
import { getAccessToken, getDecodedToken } from "../../../utils/auth";
import Layout from "../../layouts/index";
import api from "../../../services/api";
import config from "../../../config";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../layouts/LoadingSpinner";

function MarkReport() {
    const decodedToken = getDecodedToken();

    const enrolledCourseOfflineData = useAxiosGet({
        path: url.OFFLINE_COURSE.GET_ALL_BY_STUDENT,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const enrolledCourseOffline = useMemo(() => enrolledCourseOfflineData.response || [], [enrolledCourseOfflineData.response]);

    const [loading, setLoading] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedCourseName, setSelectedCourseName] = useState("");
    const [scores, setScores] = useState([]);

    const loadScoreData = useCallback(async () => {
        try {
            setLoading(true);
            const scoreRequest = await api.get(url.SUBJECT.GET_ALL_SCORE + `/${selectedCourse}`, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            });
            setScores(scoreRequest.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    }, [selectedCourse]);

    useEffect(() => {
        if (selectedCourse) {
            loadScoreData();
            const course = enrolledCourseOffline.find((enrolled) => enrolled.slug === selectedCourse);
            setSelectedCourseName(course ? course.name : "");
        }
    }, [selectedCourse, loadScoreData, enrolledCourseOffline]);

    const courseOptions = enrolledCourseOffline.map((course) => ({
        value: course.slug,
        label: course.name,
    }));

    const handleCourseChange = (selectedOption) => {
        setSelectedCourse(selectedOption.value);
        setSelectedCourseName(selectedOption.label);
    };

    return (
        <Layout title="Mark Report">
            <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3 bg-color-darker p-0" style={{ minHeight: 280 }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <div className="content text-start">
                                    <ul className="page-list">
                                        <li className="rbt-breadcrumb-item">
                                            <Link to={config.routes.home}>Home</Link>
                                        </li>
                                        <li>
                                            <div className="icon-right">
                                                <i className="feather-chevron-right"></i>
                                            </div>
                                        </li>
                                        <li className="rbt-breadcrumb-item font-system active">Grade report for {decodedToken.Fullname || ""}</li>
                                    </ul>
                                    <h2 className="title font-system mb--0">Grade report for {decodedToken.Fullname || ""}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rbt-single-product-area rbt-single-product rbt-section-gap">
                <div className="container">
                    <div className="widget">
                        <Select options={courseOptions} onChange={handleCourseChange} className="mb-5" placeholder="Please Choose Course" />

                        <h3>{selectedCourseName}</h3>

                        {loading ? (
                            <LoadingSpinner />
                        ) : (
                            <>
                                {selectedCourse && scores.length === 0 && <p>There are currently no scores for this subject.</p>}
                                {scores.length > 0 && (
                                    <div className="rbt-dashboard-table table-responsive mobile-table-750">
                                        <table className="rbt-table table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Slot</th>
                                                    <th>Subject</th>
                                                    <th>Grade</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {scores.map((score, scoreIndex) => (
                                                    <tr key={scoreIndex}>
                                                        <td>{scoreIndex + 1}</td>
                                                        <td>{score.totalSlot}</td>
                                                        <th>{score.name}</th>
                                                        <td>{score.score}</td>
                                                        <td>
                                                            <span
                                                                className={`rbt-badge-5 ${score.status === true ? "bg-color-success-opacity color-success" : "bg-color-danger-opacity color-danger"}`}
                                                            >
                                                                {score.status === true ? "Passed" : "Not Pass"}
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default MarkReport;
