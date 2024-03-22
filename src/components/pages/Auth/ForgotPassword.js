import { useState } from "react";
import { Link } from "react-router-dom";
function ForgotPassword() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
    });

    const [formErrors, setFormErrors] = useState({
        email: "",
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

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.email) {
            valid = false;
            newErrors.email = "Please enter your email.";
        } else if (!isEmailValid(formData.email)) {
            valid = false;
            newErrors.email = "Please enter a valid email address.";
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
        <div className="rbt-elements-area bg-color-white rbt-section-gap">
            <div className="container">
                <div className="row gy-5 row--30">
                    <div className="col-lg-5 mx-auto">
                        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                            <img src="assets/images/logo/logo.png" alt="English Academy" width={170} style={{ marginLeft: -10 }} />

                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="title mb-0 fw-normal" style={{ fontSize: 25 }}>
                                    Forgot Password
                                </h5>
                                <Link to="/login" className="text-primary" style={{ fontWeight: 300, fontSize: 14 }}>
                                    Back to Login
                                </Link>
                            </div>
                            <form className="max-width-auto mt-3" onSubmit={submitResponse}>
                                <div class="rbt-form-group">
                                    <label for="email" style={{ fontSize: 14, color: "#000" }} className="mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                                        name="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                </div>

                                <p className="mt-5 mb-3" style={{ fontWeight: 300, fontSize: 12 }}>
                                    Do not forgot to check SPAM box.
                                </p>

                                {submitting && (
                                    <button type="button" className="rbt-btn btn-md fw-normal btn-block w-100" disabled>
                                        <i className="fa fa-spinner fa-spin p-0"></i> Submitting...
                                    </button>
                                )}

                                {!submitting && !formSubmitted && (
                                    <>
                                        <button type="submit" className="rbt-btn btn-md fw-normal w-100" style={{ fontSize: 15 }}>
                                            Send Password Reset Email
                                        </button>
                                    </>
                                )}

                                {formSubmitted && (
                                    <div className="text-start mt-2">
                                        <p className="text-success">Your password reset email has been sent.</p>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
