import { useParams } from "react-router-dom";
import LayoutProfile from "../../Profile/LayoutProfile";
import { useAxiosGet } from "../../../../hooks";
import url from "../../../../services/url";
import { getAccessToken } from "../../../../utils/auth";
import NotFound from "../../Other/NotFound";
// import { format } from "date-fns";
import LoadingSpinner from "../../../layouts/LoadingSpinner";
import { useState } from "react";
import Swal from "sweetalert2";
import api from "../../../../services/api";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "../../../../payment/Stripe";
import { stripePromise } from "../../../../payment/stripePromise";
import { statusColor } from "../../../../utils/statusColor";

function ByPackage() {
    const { bookingId } = useParams();

    const bookingData = useAxiosGet({
        path: url.TUTOR.BOOKING_DETAIL_PACKAGE + `/${bookingId}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const bookingDetail = bookingData?.response || {};
    const [togglePayment, setTogglePayment] = useState(false);

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("credit");

    const handlePaymentMethodChange = (event) => {
        setSelectedPaymentMethod(event.target.value);
    };

    const createPayment = async () => {
        const config = {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        };

        try {
            const info = {
                bookingType: 1,
                id: Number(bookingId),
                paymentMethod: selectedPaymentMethod,
                price: bookingDetail?.packagePrice,
            };

            const paymentRequest = await api.post(url.TUTOR.PAYMENT, info, config);
            if (paymentRequest.status === 200) {
                setTogglePayment(false);
                Swal.fire({
                    title: "Successfully!",
                    text: "Payment success!",
                    icon: "success",
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Error! An error occurred. Please try again later!",
                icon: "error",
            });
        }
    };

    const handleStripePaymentSuccess = async () => {
        await createPayment();
    };

    return (
        <>
            {bookingData.errorStatus === 404 ? (
                <NotFound />
            ) : (
                <LayoutProfile>
                    <div className="col-lg-9">
                        <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                            <div className="content">
                                <div className="section-title">
                                    <h4 className="rbt-title-style-3">Booking Detail by Package</h4>
                                </div>
                                {bookingData.loading ? (
                                    <LoadingSpinner />
                                ) : (
                                    <>
                                        <div className="rbt-profile-row row row--15 mt--15">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="rbt-profile-content fw-500">
                                                    Student Name
                                                    <p className="m-0 fz-12 fw-300">{bookingDetail.studentName}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="rbt-profile-content fw-500">
                                                    Package Name
                                                    <p className="m-0 fz-12 fw-300">{bookingDetail.packageName}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rbt-profile-row row row--15 mt--15">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="rbt-profile-content fw-500">
                                                    Sessions
                                                    <p className="m-0 fz-12 fw-300">{bookingDetail.remainingSessions}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                {/* <div className="rbt-profile-content fw-500">
                                                    Purchase Date
                                                    <p className="mb-0 fz-12 fw-300">{(bookingDetail && format(new Date(bookingDetail.purchaseDate), "dd-MM-yyyy")) || "N/A"}</p>
                                                </div> */}
                                                <div className="rbt-profile-content fw-500">
                                                    Price
                                                    <p className="mb-0 fz-12 fw-300">${bookingDetail.packagePrice.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rbt-profile-row row row--15 mt--15">
                                            <div className="col-lg-6 col-md-6">
                                                <div className="rbt-profile-content fw-500">
                                                    Status
                                                    <p className={`m-0 fz-12 fw-300 ${statusColor(bookingDetail.status)}`}>{bookingDetail.status}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6">
                                                <div className="rbt-profile-content fw-500">
                                                    Created Date
                                                    <p className="mb-0 fz-12 fw-300">{bookingDetail.createdDate || "N/A"}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rbt-profile-row row row--15 mt--15">
                                            <div className="col-lg-12 col-md-12">
                                                <div className="rbt-profile-content fw-500">
                                                    Lesson
                                                    {bookingDetail?.lessonDays.map((lesson, lessonIndex) => (
                                                        <p className="mt-3 mb-3 fz-13 fw-300" key={lessonIndex}>
                                                            {lessonIndex + 1}. {lesson?.dayOfWeek}: {lesson.startTime} - {lesson.endTime}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {togglePayment && (
                                            <div className="rbt-profile-row row row--15 mt--15">
                                                <div className="rbt-feature">
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
                                                        <StripePaymentForm onSuccess={handleStripePaymentSuccess} amount={bookingDetail?.packagePrice} />
                                                    </Elements>
                                                )}

                                                {/* {selectedPaymentMethod === "paypal" && <PayPalComponent />} */}
                                            </div>
                                        )}

                                        {bookingDetail.status === "confirmed" && !togglePayment && bookingDetail.packagePrice > 0 && (
                                            <div className="rbt-profile-row row row--15 mt--15">
                                                <div className="col-lg-6 col-md-6 mt-auto">
                                                    <p className="text-danger fz-14">Note: Please pay before the next payment date!</p>
                                                </div>
                                                <div className="col-lg-6 col-md-6 text-end">
                                                    <button className="rbt-btn btn-gradient btn-not__hover" style={{ height: 50, lineHeight: "50px" }} onClick={() => setTogglePayment(!togglePayment)}>
                                                        Payment now
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </LayoutProfile>
            )}
        </>
    );
}

export default ByPackage;
