import { useEffect, useMemo, useState } from "react";
import Layout from "../../../../layouts/index";
import { Link, useParams } from "react-router-dom";
import Chart from "react-apexcharts";
import url from "../../../../../services/url";
import Loading from "../../../../layouts/Loading";
import { format } from "date-fns";
import NotFound from "../../../Other/NotFound";
import { formatHour } from "../../../../../utils/formatTime";
import { useAxiosGet } from "../../../../../hooks";
import { getAccessToken } from "../../../../../utils/auth";

function ResultTestOnline() {
    const { courseSlug, testCode } = useParams();
    const [chartData, setChartData] = useState([]);
    const { response, loading, status } = useAxiosGet({
        path: url.ONLINE_COURSE.RESULT_TEST + `/${testCode}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const resultTest = useMemo(() => response || {}, [response]);

    const options = {
        chart: {
            type: "bar",
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        xaxis: {
            categories: ["Reading", "Listening", "Vocabulary", "Grammar"],
        },
        fill: {
            opacity: 0.9,
        },
        stroke: {
            width: 1,
            colors: ["#fff"],
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                    legend: {
                        position: "bottom",
                    },
                },
            },
        ],
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
        },
        tooltip: {
            enabled: true,
            followCursor: true,
            y: {
                formatter: function (val) {
                    return val + "%";
                },
            },
        },
        colors: "#41E5A1",
    };

    useEffect(() => {
        if (Object.keys(resultTest).length !== 0) {
            const correctData = [
                (resultTest.correctReading / resultTest.totalQuestionReading) * 100 || 0,
                (resultTest.correctListening / resultTest.totalQuestionListening) * 100 || 0,
                (resultTest.correctVocabulary / resultTest.totalQuestionVocabulary) * 100 || 0,
                (resultTest.correctGrammar / resultTest.totalQuestionGrammar) * 100 || 0,
            ];

            setChartData([{ name: "Correct answer", data: correctData }]);
        }
    }, [resultTest]);

    const processColor = (value) => {
        if (value >= 90) {
            return "#41E5A1";
        } else if (value >= 50) {
            return "#ff9d4d";
        } else {
            return "#ff4d4d";
        }
    };

    return (
        <>
            {loading && <Loading />}
            {status === 404 ? (
                <NotFound />
            ) : (
                <Layout title="Result Test">
                    <div className="rbt-become-area bg-color-white rbt-section-gap">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="content widget">
                                        <div className="row">
                                            <div className="col-lg-6 col-12">
                                                <div className="advice-description radius-10 p-5">
                                                    <h5 className="font-system fw-500">Result Test: {resultTest.code}</h5>

                                                    <table className="rbt-table ss table table-borderless font-system">
                                                        <tbody>
                                                            <tr>
                                                                <th>Status</th>
                                                                <td>{resultTest.status ? <span className="text-success">Passed</span> : <span className="text-danger">Not Pass</span>}</td>
                                                            </tr>
                                                            <tr>
                                                                <th className="align-middle">Score</th>
                                                                <td>
                                                                    <div className="progress-circle">
                                                                        <svg className="progress-ring" width="50" height="50">
                                                                            <circle className="progress-ring-circle" stroke="#f1f1f1" strokeWidth="4" fill="transparent" r="20" cx="25" cy="25" />
                                                                            <circle
                                                                                className="progress-ring-circle progress-ring-indicator"
                                                                                stroke={processColor(resultTest.score)}
                                                                                strokeWidth="4"
                                                                                fill="transparent"
                                                                                r="20"
                                                                                cx="25"
                                                                                cy="25"
                                                                                style={{ strokeDashoffset: `${((100 - resultTest.score) * 125) / 100}px` }}
                                                                            />
                                                                            <text x="50%" y="50%" dy="4px" textAnchor="middle">
                                                                                <tspan className="progress-text" fill={processColor(resultTest.score)}>
                                                                                    {resultTest.score}
                                                                                </tspan>
                                                                            </text>
                                                                        </svg>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>The test duration </th>
                                                                <td>{formatHour(resultTest.time)}</td>
                                                            </tr>

                                                            <tr>
                                                                <th>The completion time of the test</th>
                                                                <td>{resultTest.createdDate && format(new Date(resultTest.createdDate), "HH:mm:ss  dd-MM-yyyy")}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <div className="text-start mt-5">
                                                        <Link to={`/learning-online/${courseSlug}`} className="rbt-btn-link">
                                                            <i className="feather-arrow-left"></i> Continue studying
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">{!loading && <Chart options={options} series={chartData} type="bar" />}</div>
                                        </div>
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

export default ResultTestOnline;
