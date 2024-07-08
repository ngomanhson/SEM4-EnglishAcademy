import { useState } from "react";
import Layout from "../../../layouts/index";
import Confetti from "react-confetti-boom";
import { getAccessToken, getDecodedToken } from "../../../../utils/auth";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function EntranceTestSuccess() {
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    const decodeToken = getDecodedToken();

    const [formData, setFormData] = useState({
        fullname: decodeToken.Fullname || "",
        email: decodeToken.sub || "",
        phone: "",
    });

    const [formErrors, setFormErrors] = useState({
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const isPhoneNumberValid = (phone) => {
        return /^\d+$/.test(phone) && phone.length === 10;
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.phone.trim()) {
            valid = false;
            newErrors.phone = "Please enter your phone number.";
        } else if (!isPhoneNumberValid(formData.phone)) {
            valid = false;
            newErrors.phone = "Please enter a valid phone number.";
        }

        setFormErrors(newErrors);

        return valid;
    };

    // Get data from local storage
    const storedData = sessionStorage.getItem("entrance_data");

    const submitResponse = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const createRequest = await api.post(url.ENTRANCE_TEST.POTENTIAL_CUSTOMER, formData, { headers: { Authorization: `Bearer ${getAccessToken()}` } });

                if (createRequest.status === 200) {
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

                    setFormData({ phone: "" });

                    // Remove backdrop
                    const backdrop = document.querySelector(".modal-backdrop");
                    if (backdrop) {
                        backdrop.parentNode.removeChild(backdrop);
                    }

                    if (storedData) {
                        const testData = JSON.parse(storedData);

                        if (testData.type === "ielts") {
                            navigate(`/learning-paths/ielts/${testData.code}`);
                        }

                        if (testData.type === "toeic") {
                            navigate(`/learning-paths/toeic/${testData.code}`);
                        }
                    }
                }
                setSubmitting(true);
            } catch (error) {
            } finally {
                setSubmitting(false);
            }
        }
    };
    return (
        <>
            <Confetti mode="fall" y={1} launchSpeed={5} colors={["#8000ff", "#ff00fb", "#29f500", "#e1ff00", "#ff0000"]} />
            <Layout title="The test has been completed">
                <div className="rbt-team-area rbt-section-gap">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 mx-auto">
                                <div className="text-center">
                                    <div className="rbt-splash-service no-translate support h-100 not-hover mt-3" style={{ zIndex: 0 }}>
                                        <div className="w-100">
                                            <div className="d-flex flex-column align-items-center justify-content-center">
                                                <div className="checkmark">
                                                    <svg className="confetti" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                                                            fill="#0A7CFF"
                                                        />
                                                    </svg>
                                                    <svg className="confetti" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                                                            fill="#0A7CFF"
                                                        />
                                                    </svg>
                                                    <svg className="confetti" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                                                            fill="#0A7CFF"
                                                        />
                                                    </svg>
                                                    <svg className="confetti" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                                                            fill="#0A7CFF"
                                                        />
                                                    </svg>
                                                    <svg className="confetti" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                                                            fill="#0A7CFF"
                                                        />
                                                    </svg>
                                                    <svg className="confetti" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8.296.747c.532-.972 1.393-.973 1.925 0l2.665 4.872 4.876 2.66c.974.532.975 1.393 0 1.926l-4.875 2.666-2.664 4.876c-.53.972-1.39.973-1.924 0l-2.664-4.876L.76 10.206c-.972-.532-.973-1.393 0-1.925l4.872-2.66L8.296.746z"
                                                            fill="#0A7CFF"
                                                        />
                                                    </svg>
                                                    <svg className="checkmark__check" height="36" viewBox="0 0 48 36" width="48" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M47.248 3.9L43.906.667a2.428 2.428 0 0 0-3.344 0l-23.63 23.09-9.554-9.338a2.432 2.432 0 0 0-3.345 0L.692 17.654a2.236 2.236 0 0 0 .002 3.233l14.567 14.175c.926.894 2.42.894 3.342.01L47.248 7.128c.922-.89.922-2.34 0-3.23" />
                                                    </svg>
                                                    <svg className="checkmark__back" height="115" viewBox="0 0 120 115" width="120" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M107.332 72.938c-1.798 5.557 4.564 15.334 1.21 19.96-3.387 4.674-14.646 1.605-19.298 5.003-4.61 3.368-5.163 15.074-10.695 16.878-5.344 1.743-12.628-7.35-18.545-7.35-5.922 0-13.206 9.088-18.543 7.345-5.538-1.804-6.09-13.515-10.696-16.877-4.657-3.398-15.91-.334-19.297-5.002-3.356-4.627 3.006-14.404 1.208-19.962C10.93 67.576 0 63.442 0 57.5c0-5.943 10.93-10.076 12.668-15.438 1.798-5.557-4.564-15.334-1.21-19.96 3.387-4.674 14.646-1.605 19.298-5.003C35.366 13.73 35.92 2.025 41.45.22c5.344-1.743 12.628 7.35 18.545 7.35 5.922 0 13.206-9.088 18.543-7.345 5.538 1.804 6.09 13.515 10.696 16.877 4.657 3.398 15.91.334 19.297 5.002 3.356 4.627-3.006 14.404-1.208 19.962C109.07 47.424 120 51.562 120 57.5c0 5.943-10.93 10.076-12.668 15.438z"
                                                            fill="#0A7CFF"
                                                        />
                                                    </svg>
                                                </div>
                                                <h5 className="font-system fw-300">
                                                    Congratulations on completing the test. View the results{" "}
                                                    <span className="text-primary" style={{ cursor: "pointer" }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        here.
                                                    </span>
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header p-5 pb-2" style={{ alignItems: "start", border: "none" }}>
                                <div>
                                    <h5 className="modal-title fw-500" id="exampleModalLabel">
                                        Please enter your information.
                                    </h5>
                                    <p className="fw-300" style={{ fontSize: 12 }}>
                                        Please provide your personal information to view results. Your information will be kept confidential and used for this purpose only.
                                    </p>
                                </div>

                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-5 pt-0">
                                <form className="max-width-auto mt-3" onSubmit={submitResponse}>
                                    <div className="rbt-form-group mt-3">
                                        <label htmlFor="phone" style={{ fontSize: 14, color: "#000" }} className="mb-2">
                                            Phone Number <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className={`form-control ${formErrors.phone ? "is-invalid" : ""}`}
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                        />
                                        {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                                    </div>

                                    <div className="rbt-form-group mt-5">
                                        {submitting && (
                                            <button type="button" className="rbt-btn bg-primary-opacity btn-not__hover w-100" disabled>
                                                <div className="d-flex align-items-center justify-content-center">
                                                    Processing <div className="dot-loader ml--15 mt-1"></div>
                                                </div>
                                            </button>
                                        )}

                                        {!submitting && (
                                            <>
                                                <button type="submit" className="rbt-btn btn-md fw-normal btn-not__hover w-100 fz-15">
                                                    Continue
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default EntranceTestSuccess;
