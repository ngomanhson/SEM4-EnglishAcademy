import { useCallback, useEffect, useRef, useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import { toast } from "react-toastify";
import { useAxiosGet } from "../../../hooks";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import Fail from "../../../lottie/Fail.json";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Review from "../Review";
import Loading from "../../layouts/Loading";

function Certificate() {
    const { courseSlug } = useParams();

    const [rating, setRating] = useState(0);
    const [validationStar, setValidationStar] = useState(false);

    const [formData, setFormData] = useState({
        message: "",
    });

    const [formErrors, setFormErrors] = useState({
        message: "",
    });

    const handleStarClick = (starIndex) => {
        setRating(starIndex + 1);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.message) {
            newErrors.message = "Please share your thoughts about this course.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    const handleCreateReview = async (e) => {
        e.preventDefault();

        try {
            const reviewData = {
                courseOnlineSlug: courseSlug,
                score: rating,
                message: formData.message,
            };

            if (validateForm()) {
                if (rating >= 1) {
                    const reviewRequest = await api.post(url.ONLINE_COURSE.REVIEW, reviewData, {
                        headers: {
                            Authorization: `Bearer ${getAccessToken()}`,
                        },
                    });
                    if (reviewRequest.status === 200) {
                        setRating(0);
                        setFormData({ message: "" });
                        toast.success("Successfully", {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }
                } else {
                    setValidationStar(true);
                }
            }
        } catch (error) {
            console.log(error);

            toast.error(error.response.data.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    // Check completed course
    const [completeCourse, setCompletedCourse] = useState(false);
    const [checkCertificate, setCheckCertificate] = useState({});

    const checkCompletedCourse = useCallback(async () => {
        try {
            const checkRequest = await api.post(url.CERTIFICATE.CHECK_COMPLETE_COURSE + `/${courseSlug}`, null, { headers: { Authorization: `Bearer ${getAccessToken()}` } });

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
        <div className="rbt-lesson-rightsidebar overflow-hidden scrollbar-screen">
            {certificateData.loading ? (
                <Loading />
            ) : (
                <div className="pb-5">
                    {completeCourse ? (
                        <div className="content">
                            <h3 className="fw-500 mb-3">Complete the course </h3>
                            <ul className="liststyle py-3 pl--20 fw-300">
                                <li>🎉 Congratulations on completing the course! </li>
                                <li>🎉 Wishing you success in your career path and continuous learning of new things!</li>
                            </ul>

                            <div className="mt-5">
                                <h4 className="rbt-title-style-3 font-system">1. Get a certificate</h4>
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

                                <Review
                                    rating={rating}
                                    formData={formData}
                                    formErrors={formErrors}
                                    validationStar={validationStar}
                                    handleEvent={handleCreateReview}
                                    handleStarClick={handleStarClick}
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center justify-content-center flex-column" style={{ height: "100vh" }}>
                            <Lottie animationData={Fail} loop={true} style={{ width: 200 }} />
                            <h5 className="mt-5  text-center">We're sorry, but it looks like you haven't completed the course yet.</h5>
                            <p className="text-center fw-300 fz-14">Please complete all the required lessons and tests to unlock your certificate of completion.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Certificate;
