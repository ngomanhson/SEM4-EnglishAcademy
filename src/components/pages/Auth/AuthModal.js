import { useState } from "react";
import api from "../../../services/api";
import url from "../../../services/url";
import { toast } from "react-toastify";
import { setAccessToken } from "../../../utils/auth";

function AuthModal({ handleEvent }) {
    const [formType, setFormType] = useState("login");
    const [formData, setFormData] = useState({
        fullname: "",
        phone: "",
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        fullname: "",
        phone: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (formType === "register") {
            if (!formData.fullname) {
                newErrors.fullname = "Please enter your full name.";
                valid = false;
            } else if (formData.fullname.length < 3) {
                newErrors.fullname = "Full name must have at least 3 characters";
                valid = false;
            }

            if (!formData.phone) {
                newErrors.phone = "Please enter your phone number.";
                valid = false;
            } else if (!/^\d+$/.test(formData.phone)) {
                newErrors.phone = "Please enter a valid phone number.";
                valid = false;
            }
        }

        if (!formData.email) {
            newErrors.email = "Please enter your email address.";
            valid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = "Please enter your password.";
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            valid = false;
        } else if (formData.password.length > 50) {
            newErrors.password = "Password must be less than 50 characters.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    const handleCreateAccount = async () => {
        if (validateForm()) {
            try {
                const registerRequest = await api.post(url.AUTH.REGISTER, formData);
                if (registerRequest.status === 200) {
                    const token = registerRequest.data.data;
                    setAccessToken(token);

                    const backdrop = document.querySelector(".modal-backdrop");
                    if (backdrop) {
                        backdrop.parentNode.removeChild(backdrop);
                    }
                    setFormData({
                        fullname: "",
                        phone: "",
                        email: "",
                        password: "",
                    });
                    await handleEvent();
                }
            } catch (error) {
                toast.error("Error! An error occurred. Please try again later", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
    };

    const handleLogin = async () => {
        if (validateForm()) {
            try {
                const loginRequest = await api.post(url.AUTH.LOGIN, {
                    email: formData.email,
                    password: formData.password,
                });
                if (loginRequest.status === 200) {
                    const token = loginRequest.data.token;
                    setAccessToken(token);

                    const backdrop = document.querySelector(".modal-backdrop");
                    if (backdrop) {
                        backdrop.parentNode.removeChild(backdrop);
                    }
                    setFormData({
                        email: "",
                        password: "",
                    });

                    await handleEvent();
                }
            } catch (error) {
                toast.error("Error! An error occurred. Please try again later", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        }
    };

    const handleChangeForm = () => {
        setFormType(formType === "login" ? "register" : "login");
        setFormData({
            fullname: "",
            phone: "",
            email: "",
            password: "",
        });

        setFormErrors({
            fullname: "",
            phone: "",
            email: "",
            password: "",
        });

        setShowPassword(false);
    };

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="modal fade" id="login-modal" tabIndex="-1" aria-labelledby="modal-label" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content border-0">
                    <div className="modal-header p-5 pb-2" style={{ alignItems: "start", border: "none" }}>
                        <div>
                            <h5 className="modal-title fw-500" id="modal-label">
                                {formType === "login" ? "Login to your account" : "Create an account to save results"}
                            </h5>
                            <p className="fz-12 fw-300">
                                {formType === "login"
                                    ? "Enter your credentials to access your account."
                                    : "Please provide your personal information to view results. Your information will be kept confidential and used for this purpose only."}
                            </p>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-5 pt-0">
                        {formType === "login" ? (
                            <div className="max-width-auto mt-3">
                                <div className="rbt-form-group my-3">
                                    <label htmlFor="email" className="fz-14 text-dark mb-2">
                                        Email <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                    />
                                    {formErrors.email && <div className="invalid-feedback fz-12">{formErrors.email}</div>}
                                </div>

                                <div className="form-group__custom mb-3">
                                    <label htmlFor="password" className="fz-14 text-dark mb-2">
                                        Password <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-group__custom mb-3">
                                        <input
                                            type={`${showPassword ? "text" : "password"}`}
                                            name="password"
                                            id="password"
                                            className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="********"
                                        />
                                        {formErrors.password && <div className="invalid-feedback fz-12">{formErrors.password}</div>}
                                        {!formErrors.password && (
                                            <span className="view-password" onClick={handleTogglePassword}>
                                                {!showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="rbt-form-group mt-5">
                                    <button className="rbt-btn btn-violet btn-not__hover w-100 fz-15" onClick={handleLogin}>
                                        Login
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="max-width-auto mt-3">
                                <div className="rbt-form-group mt-3">
                                    <label htmlFor="fullname" className="fz-14 text-dark mb-2">
                                        Full Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fullname"
                                        id="fullname"
                                        className={`form-control ${formErrors.fullname ? "is-invalid" : ""}`}
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        placeholder="Enter full name"
                                    />
                                    {formErrors.fullname && <div className="invalid-feedback fz-12">{formErrors.fullname}</div>}
                                </div>

                                <div className="rbt-form-group mt-3">
                                    <label htmlFor="email" className="fz-14 text-dark mb-2">
                                        Email <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email address"
                                    />
                                    {formErrors.email && <div className="invalid-feedback fz-12">{formErrors.email}</div>}
                                </div>

                                <div className="rbt-form-group mt-3">
                                    <label htmlFor="phone" className="fz-14 text-dark mb-2">
                                        Phone Number <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        className={`form-control ${formErrors.phone ? "is-invalid" : ""}`}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter phone number"
                                    />
                                    {formErrors.phone && <div className="invalid-feedback fz-12">{formErrors.phone}</div>}
                                </div>

                                <div className="rbt-form-group mt-3">
                                    <label htmlFor="password" className="fz-14 text-dark mb-2">
                                        Password <span className="text-danger">*</span>
                                    </label>
                                    <div className="form-group__custom mb-3">
                                        <input
                                            type={`${showPassword ? "text" : "password"}`}
                                            name="password"
                                            id="password"
                                            className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="********"
                                        />
                                        {formErrors.password && <div className="invalid-feedback fz-12">{formErrors.password}</div>}
                                        {!formErrors.password && (
                                            <span className="view-password" onClick={handleTogglePassword}>
                                                {!showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="rbt-form-group mt-5">
                                    <button className="rbt-btn btn-violet hover-icon-reverse btn-not__hover w-100 fz-15" onClick={handleCreateAccount}>
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Continue</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right"></i>
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right"></i>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        )}
                        <div className="text-center mt-3">
                            <button className="btn btn-link" onClick={handleChangeForm}>
                                {formType === "login" ? "Create an account" : "Already have an account? Login"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthModal;
