import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
import config from "../../../config/index";
import { toast } from "react-toastify";

function ResetPassword() {
    const { resetToken } = useParams();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        newPassword: "",
    });

    const [formErrors, setFormErrors] = useState({
        email: "",
        newPassword: "",
    });

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

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

        if (!formData.newPassword) {
            newErrors.newPassword = "Please enter a new password.";
            valid = false;
        } else if (formData.newPassword.length < 6) {
            newErrors.newPassword = "New password must be at least 6 characters.";
            valid = false;
        } else if (formData.newPassword.length > 50) {
            newErrors.newPassword = "New password must be less than 50 characters.";
            valid = false;
        }

        setFormErrors(newErrors);

        return valid;
    };

    const submitResponse = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const response = await api.post(url.AUTH.RESET_PASSWORD + `/${resetToken}`, formData);
                if (response.status === 200) {
                    setTimeout(() => {
                        toast.success("Password reset successful. Please login again.", {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 5000,
                        });
                    }, 1500);
                    navigate(`${config.routes.login}`);
                }
            } catch (error) {
                toast.error("Error! An error occurred. Please try again later.", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 5000,
                });
            }
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
                                <div className="rbt-form-group mb-3">
                                    <label htmlFor="email" style={{ fontSize: 14, color: "#000" }} className="mb-2">
                                        Email Address <span className="text-danger">*</span>
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

                                <div className="rbt-form-group">
                                    <label htmlFor="email" style={{ fontSize: 14, color: "#000" }} className="mb-2">
                                        New Password <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-group__custom mb-3">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={`form-control ${formErrors.newPassword ? "is-invalid" : ""}`}
                                            name="newPassword"
                                            id="newPassword"
                                            placeholder="******"
                                            value={formData.newPassword}
                                            onChange={handleChange}
                                        />
                                        {formErrors.newPassword && <div className="invalid-feedback">{formErrors.newPassword}</div>}
                                        {!formErrors.newPassword && (
                                            <span className="view-password" onClick={handleTogglePassword}>
                                                {!showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button type="submit" className="rbt-btn btn-md fw-normal btn-not__hover w-100" style={{ fontSize: 15 }}>
                                        Reset Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
