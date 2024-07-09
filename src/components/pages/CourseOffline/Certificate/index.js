import { Link, useParams } from "react-router-dom";
import Layout from "../../../layouts";

import Lottie from "lottie-react";
import Fail from "../../../../lottie/Fail.json";
import Loading from "../../../layouts/Loading";
import { useCallback, useEffect, useRef, useState } from "react";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { useAxiosGet } from "../../../../hooks";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { getAccessToken } from "../../../../utils/auth";

function CourseOfflineCertificate() {
    const { courseSlug } = useParams();

    const [completeCourse, setCompletedCourse] = useState(false);
    const [checkCertificate, setCheckCertificate] = useState({});

    const checkCompletedCourse = useCallback(async () => {
        try {
            const checkRequest = await api.post(url.CERTIFICATE.CHECK_COMPLETE_COURSE_OFFLINE + `/${courseSlug}`, null, { headers: { Authorization: `Bearer ${getAccessToken()}` } });

            setCheckCertificate(checkRequest.data.data);
            setCompletedCourse(true);
        } catch (error) {
            setCompletedCourse(false);
            console.log(error);
        }
    }, [courseSlug]);

    useEffect(() => {
        checkCompletedCourse();
    }, [checkCompletedCourse]);

    const certificateCode = checkCertificate.code || null;

    // Get Certificate
    const certificateData = useAxiosGet({
        path: url.CERTIFICATE.DETAIL + `/${certificateCode}`,
    });

    // Format date
    const certificate = certificateData.response || {};
    const issuedDate = new Date(certificate.issuedDate);
    const formatDate = issuedDate.getDate() < 10 ? `0${issuedDate.getDate()}` : issuedDate.getDate();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = "Ha Noi, " + formatDate + " " + months[issuedDate.getMonth()] + " " + issuedDate.getFullYear();

    // Create Certificate
    const certificateRef = useRef();
    const certificateName = `${certificate.fullName + " " + certificate.courseName + " Certificate"}`;

    const createPDF = () => {
        html2canvas(certificateRef.current, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("landscape");

            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const widthRatio = pdfWidth / imgWidth;
            const heightRatio = pdfHeight / imgHeight;
            const ratio = Math.min(widthRatio, heightRatio);

            const canvasWidth = imgWidth * ratio;
            const canvasHeight = imgHeight * ratio;

            pdf.addImage(imgData, "PNG", 0, 0, canvasWidth, canvasHeight);
            pdf.save(`${certificateName}.pdf`);
        });
    };

    const createImage = () => {
        html2canvas(certificateRef.current).then((canvas) => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = `${certificateName}.png`;
            link.click();
        });
    };

    return (
        <Layout title="Certificate">
            <div className="container">
                {certificateData.loading ? (
                    <Loading />
                ) : (
                    <div className="pb-5">
                        {completeCourse ? (
                            <div className="content">
                                <div className="mt-5">
                                    <div className="mx-auto text-center">
                                        <div className="certificate">
                                            <div className="certificate-inner" ref={certificateRef}>
                                                <img src="assets/certificate/certificate.png" alt="" />
                                                <div className="certificate-name">{certificate.fullName}</div>
                                                <p className="certificate-desc">{certificate.courseName}</p>
                                                <p className="certificate-date">{formattedDate}</p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center justify-content-center mt-5 gap-5">
                                            <button className="rbt-btn bg-secondary-opacity btn-not__hover" onClick={createImage} style={{ height: 50, lineHeight: "50px" }}>
                                                Download PNG
                                            </button>
                                            <button className="rbt-btn bg-danger btn-not__hover" onClick={createPDF} style={{ height: 50, lineHeight: "50px" }}>
                                                Download PDF
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="d-flex align-items-center justify-content-center flex-column" style={{ height: "100vh" }}>
                                <Lottie animationData={Fail} loop={true} style={{ width: 200 }} />
                                <h5 className="mt-5  text-center">We're sorry, but it looks like you haven't completed the course yet.</h5>
                                <p className="text-center fw-300 fz-14">Please complete all the required lessons and tests to unlock your certificate of completion.</p>
                                <Link to={-1} class="rbt-btn btn-white hover-icon-reverse">
                                    <span class="icon-reverse-wrapper">
                                        <span class="btn-text">Keep Studying</span>
                                        <span class="btn-icon">
                                            <i class="feather-arrow-right"></i>
                                        </span>
                                        <span class="btn-icon">
                                            <i class="feather-arrow-right"></i>
                                        </span>
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default CourseOfflineCertificate;
