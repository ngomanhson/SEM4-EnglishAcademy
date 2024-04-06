import { useState } from "react";
import Layout from "../../../layouts/index";
import Confetti from "react-confetti-boom";

function EntranceTestSuccess() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const [formErrors, setFormErrors] = useState({
        fullName: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isPhoneNumberValid = (phone) => {
        return /^\d+$/.test(phone) && phone.length === 10;
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.fullName.trim()) {
            valid = false;
            newErrors.fullName = "Please enter your full name.";
        }

        if (!formData.email.trim()) {
            valid = false;
            newErrors.email = "Please enter your email.";
        } else if (!isEmailValid(formData.email)) {
            valid = false;
            newErrors.email = "Please enter a valid email address.";
        }

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

    const submitResponse = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                setSubmitting(true);
            } catch (error) {}
            // finally {
            //     setSubmitting(false);
            // }
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
                                    <div className="rbt-form-group">
                                        <label htmlFor="email" style={{ fontSize: 14, color: "#000" }} className="mb-2">
                                            Full Name <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className={`form-control ${formErrors.fullName ? "is-invalid" : ""}`}
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Full name"
                                        />
                                        {formErrors.fullName && <div className="invalid-feedback">{formErrors.fullName}</div>}
                                    </div>

                                    <div className="rbt-form-group mt-3">
                                        <label htmlFor="email" style={{ fontSize: 14, color: "#000" }} className="mb-2">
                                            Email Address <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                                            value={formData.email}
                                            onChange={handleChange}
                                            name="email"
                                            placeholder="Email Address"
                                        />
                                        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                    </div>

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
                                            <button type="button" className="rbt-btn btn-md fw-normal btn-block w-100" disabled>
                                                Processing <i className="fa fa-spinner fa-spin p-0"></i>
                                            </button>
                                        )}

                                        {!submitting && !formSubmitted && (
                                            <>
                                                <button type="submit" className="rbt-btn btn-md fw-normal btn-not__hover w-100" style={{ fontSize: 15 }}>
                                                    Continue
                                                </button>
                                            </>
                                        )}

                                        {formSubmitted && (
                                            <div className="text-start mt-2">
                                                <p className="text-success">Please check your email address.</p>
                                            </div>
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
