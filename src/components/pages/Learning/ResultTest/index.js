import { useEffect, useMemo, useState } from "react";
import Layout from "../../../layouts/index";
import { useAxios } from "../../../../hooks";
import { Link, useParams } from "react-router-dom";
import Chart from "react-apexcharts";
import url from "../../../../services/url";
import Loading from "../../../layouts/Loading";
import { format } from "date-fns";
import config from "../../../../config";
import NotFound from "../../Other/NotFound";
import { formatHour } from "../../../../utils/FormatTime";

function ResultTest() {
    const { testCode } = useParams();
    const [chartData, setChartData] = useState([]);
    const { response, loading, status } = useAxios({
        method: "GET",
        path: url.ONLINE_COURSE.RESULT_TEST + `/${testCode}`,
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
                                                                <td>{resultTest.status ? <span className="text-success">Pass</span> : <span className="text-danger">Not Pass</span>}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Score</th>
                                                                <td>{resultTest.score}</td>
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
                                                        <Link to={config.routes.home} className="rbt-btn-link">
                                                            <i className="feather-arrow-left"></i> Back to Home
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

export default ResultTest;
