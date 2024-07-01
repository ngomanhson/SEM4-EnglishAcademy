import { Link, useParams, useNavigate } from "react-router-dom";
import Layout from "../../layouts";
import config from "../../../config";
import useAxiosGet from "../../../hooks/useAxiosGet";
import url from "../../../services/url";

import api from "../../../services/api";
import { useState } from "react";
import Loading from "../../layouts/Loading";
import ChooseCourse from "../Other/ChooseCourse";
import { getAccessToken, getDecodedToken } from "../../../utils/auth";
import { formatLevelCourse } from "../../../utils/formatLevelCourse";
import Payment from "../../../payment/index";
import { stripePromise } from "../../../payment/stripePromise";

function Checkout() {
    const { courseSlug } = useParams();
    const navigate = useNavigate();

    const { response, loading, errorStatus } = useAxiosGet({
        path: url.ONLINE_COURSE.DETAIL + `/${courseSlug}`,
    });

    const course = response || {};

    const formatLevel = formatLevelCourse(course.level);

    let totalItems = 0;
    let totalTest = 0;
    if (course && course.topicOnlineDetailList) {
        course.topicOnlineDetailList.forEach((topic) => {
            totalItems += topic.itemOnlineDTOList.length;
            totalTest += topic.testOnlineDTOList.length;
        });
    }

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit");

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const decodeToken = getDecodedToken();

    const createPayment = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        };
        try {
            const info = {
                studentId: decodeToken.Id,
                courseOnlineId: course.id,
                paymentMethod: selectedPaymentMethod,
            };

            const paymentRequest = await api.post(url.ONLINE_COURSE.BUY_COURSE, info, config);

            if (paymentRequest.status === 200) {
                navigate("thank-you");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleStripePaymentSuccess = async () => {
        await createPayment();
    };

    // Paypal
    const handlePaymentSuccess = async (details, data) => {
        await createPayment();
    };

    const handlePaymentCancel = (data) => {
        console.log("Payment canceled:", data);

        navigate(`/checkout/${courseSlug}/failed`);
    };

    const handlePaymentError = (err) => {
        console.error("Payment error:", err);

        navigate(`/checkout/${courseSlug}/failed`);
    };

    const checkByCourse = useAxiosGet({
        path: url.ONLINE_COURSE.CHECK_REGISTER + `/${courseSlug}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const statusCourse = checkByCourse.response || {};
    if (statusCourse === true) {
        navigate(`/learning-online/${courseSlug}`);
    }

    return (
        <>
            {loading && <Loading />}

            {errorStatus === 404 ? (
                <ChooseCourse />
            ) : (
                <Layout title="Checkout">
                    <div className="rbt-breadcrumb-default ptb--100 ptb_md--50 ptb_sm--30 bg-gradient-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb-inner text-center">
                                        <h2 className="title">Checkout</h2>
                                        <ul className="page-list">
                                            <li className="rbt-breadcrumb-item">
                                                <Link to={config.routes.home}>Home</Link>
                                            </li>
                                            <li>
                                                <div className="icon-right">
                                                    <i className="feather-chevron-right"></i>
                                                </div>
                                            </li>
                                            <li className="rbt-breadcrumb-item active">Checkout</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="checkout_area bg-color-white rbt-section-gap">
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-6 mx-auto">
                                    <div className="checkout-content-wrapper">
                                        <div className="d-flex align-items-start gap-4">
                                            <img src={course.image} alt={course.name} className="img-thumbnail checkout-course__img" />

                                            <div style={{ flex: 1 }}>
                                                <h4 className="font-system fw-500 mb-2">{course.name}</h4>
                                                {/* Total ${course.price} */}
                                                <div className="mt-3">
                                                    <p className="text-dark fw-300 mb-2" style={{ fontSize: 14 }}>
                                                        <i className="feather-tag"></i> Level {formatLevel}
                                                    </p>

                                                    <p className="text-dark fw-300 mb-2" style={{ fontSize: 14 }}>
                                                        <i className="feather-book"></i> {totalItems} Lessons
                                                    </p>
                                                    <p className="text-dark fw-300 m-0" style={{ fontSize: 14 }}>
                                                        <i className="feather-help-circle"></i> {totalTest} Test
                                                    </p>
                                                    <hr className="mt-3 mb-3" />
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <p className="text-dark fw-300 m-0" style={{ fontSize: 14 }}>
                                                            <i className="feather-clock"></i> {course.duration}
                                                        </p>
                                                        <p className="text-dark fw-300 m-0" style={{ fontSize: 14 }}>
                                                            <i className="feather-globe"></i> {course.language}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="mt-5" />

                                        <div className="rbt-form-group">
                                            <h5 className="font-system fw-500 mb-2" id="paymentModalLabel">
                                                Promotion Code
                                            </h5>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input type="text" name="fullName" className="form-control" placeholder="Enter promotion code" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <button className="rbt-btn btn-not__hover fw-300" style={{ height: 49, lineHeight: "normal" }}>
                                                        Apply
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <hr className="mt-5" />

                                        <h5 className="font-system fw-500 mb-3">Order summary</h5>
                                        <div className="background-secondary px-3">
                                            <div className="d-flex align-items-center justify-content-between p-3">
                                                <p className="font-system fz-16 fw-300 m-0">Discount</p>
                                                <p className="font-system fz-16 fw-300 m-0">0%</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between p-3">
                                                <p className="font-system fz-16 fw-300 m-0">Total</p>
                                                <p className="font-system fz-16 fw-300 m-0">${course.price && course.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <hr className="mt-5" />

                                        <Payment
                                            selectedPaymentMethod={selectedPaymentMethod}
                                            onPaymentMethodChange={handlePaymentMethodChange}
                                            handleEventStripe={handleStripePaymentSuccess}
                                            handleEventPayPal={handlePaymentSuccess}
                                            price={course.price}
                                            handlePaymentCancel={handlePaymentCancel}
                                            handlePaymentError={handlePaymentError}
                                            stripePromise={stripePromise}
                                        />
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

export default Checkout;
