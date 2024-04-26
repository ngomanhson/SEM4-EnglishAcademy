import { Link, useParams, useNavigate } from "react-router-dom";
import Layout from "../../layouts";
import config from "../../../config";
import useAxios from "../../../hooks/useAxiosGet";
import url from "../../../services/url";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "../../../payment/Stripe";
import api from "../../../services/api";
import { useState } from "react";
import Loading from "../../layouts/Loading";
import ChooseCourse from "../Other/ChooseCourse";
import { getAccessToken, getDecodedToken } from "../../../utils/auth";
const stripePromise = (async () => {
    try {
        return await loadStripe("pk_test_51OVqT0DQZzhwaulm9QNS20I55bgkpOt6eQa1gHTm113njc8xGE3A3YoiJ5WEweMhQizzHnQGtFH0zEw8mXCYFbcB00s9xR5vEC");
    } catch (err) {
        console.error(err);
        window.location.reload();
    }
})();

function Checkout() {
    const { courseSlug } = useParams();
    const navigate = useNavigate();

    const { response, loading, status } = useAxios({
        path: url.ONLINE_COURSE.DETAIL + `/${courseSlug}`,
    });

    const course = response || {};

    let formatLevel;
    if (course.level === 0) {
        formatLevel = "Basic";
    } else if (course.level === 1) {
        formatLevel = "Intermediate";
    } else if (course.level === 2) {
        formatLevel = "Advanced";
    } else if (course.level === 3) {
        formatLevel = "Expert";
    }

    let totalItems = 0;
    let totalTest = 0;
    if (course && course.topicOnlineDetailList) {
        course.topicOnlineDetailList.forEach((topic) => {
            totalItems += topic.itemOnlineDTOList.length;
            totalTest += topic.testOnlineDTOList.length;
        });
    }

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit");

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const decodeToken = getDecodedToken();

    const createPayment = async () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
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
    return (
        <>
            {loading && <Loading />}
            {status === 404 ? (
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
                                <div className="col-lg-7 mx-auto">
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

                                        {/* <hr className="mt-5" />

                                        <div className="bg-primary-opacity radius-6 p-5 d-flex align-items-center justify-content-between">
                                            <h6 className="font-system m-0">Total</h6>
                                            <h6 className="font-system m-0">${course.price}</h6>
                                        </div> */}
                                        <hr className="mt-5" />

                                        <div className="rbt-feature mt-5">
                                            <div>
                                                <h5 className=" font-system fw-500 m-0" id="paymentModalLabel">
                                                    Payment Methods
                                                </h5>
                                                <p className="fw-300" style={{ fontSize: 12 }}>
                                                    Choose the payment method that's right for you!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="form-checkout mt-4">
                                            <input
                                                type="radio"
                                                className="form-checkout__input"
                                                name="paymentMethod"
                                                id="credit"
                                                value="credit"
                                                checked={selectedPaymentMethod === "credit"}
                                                onChange={handlePaymentMethodChange}
                                            />
                                            <label htmlFor="credit" className="form-checkout__label">
                                                <div className="d-flex align-items-center">
                                                    <img src="./assets/images/payment/visa.png" className="form-checkout__image" alt="" />
                                                    <div>
                                                        <p className="m-0 form-checkout__title">Credit or Debit Card</p>
                                                        <span className="form-checkout__desc">Use a credit or debit card to pay with automatic payments</span>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <div className="form-checkout">
                                            <input
                                                type="radio"
                                                className="form-checkout__input"
                                                name="paymentMethod"
                                                id="paypal"
                                                value="paypal"
                                                checked={selectedPaymentMethod === "paypal"}
                                                onChange={handlePaymentMethodChange}
                                            />

                                            <label htmlFor="paypal" className="form-checkout__label">
                                                <div className="d-flex align-items-center">
                                                    <img src="./assets/images/payment/paypal.png" className="form-checkout__image" alt="" />
                                                    <div>
                                                        <p className="m-0 form-checkout__title">PayPal</p>
                                                        <span className="form-checkout__desc">Use your Paypal account to make payments</span>
                                                    </div>
                                                </div>
                                            </label>
                                        </div>
                                        <hr className="mt-5" />

                                        {selectedPaymentMethod === "credit" && (
                                            <Elements stripe={stripePromise}>
                                                <StripePaymentForm onSuccess={handleStripePaymentSuccess} amount={course.price} />
                                            </Elements>
                                        )}

                                        {/* {selectedPaymentMethod === "paypal" && <PayPalComponent />} */}
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
