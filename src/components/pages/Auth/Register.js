import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
import { toast } from "react-toastify";
import Loading from "../../layouts/Loading";
import config from "../../../config";

function Register() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.fullname) {
            newErrors.fullname = "Please enter your full name.";
            valid = false;
        } else if (formData.fullname.length < 3) {
            newErrors.fullname = "Full name must have at least 3 characters";
            valid = false;
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

    const handleRegister = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const registerRequest = await api.post(url.AUTH.REGISTER, formData);

                if (registerRequest.status === 200) {
                    toast.success("Register successfully!", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    navigate("/login");
                }
            } catch (error) {}
        }
    };
    return (
        <>
            {loading && <Loading />}
            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row gy-5 row--30">
                        <div className="col-lg-5 mx-auto">
                            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                <div className="text-center mb-4">
                                    <img src="assets/images/logo/logo.png" alt="English Academy" width={170} />
                                    <h5 className="title mb-0 fw-normal">Sign up with your work email.</h5>
                                </div>

                                <form className="max-width-auto" onSubmit={handleRegister}>
                                    <div className="rbt-form-group mb-3">
                                        <label htmlFor="fullname" style={{ fontSize: 14, color: "#000" }} className="mb-2">
                                            Full Name <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-group__custom mb-3">
                                            <input
                                                type="text"
                                                name="fullname"
                                                className={`form-control ${formErrors.fullname ? "is-invalid" : ""}`}
                                                placeholder="Enter your fullname"
                                                value={formData.fullname}
                                                onChange={handleChange}
                                                autoFocus
                                            />
                                            {formErrors.fullname && <p className="invalid-feedback">{formErrors.fullname}</p>}
                                        </div>
                                    </div>

                                    <div className="rbt-form-group  mb-3">
                                        <label htmlFor="email" style={{ fontSize: 14, color: "#000" }} className="mb-2">
                                            Email Address <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-group__custom mb-3">
                                            <input
                                                type="email"
                                                name="email"
                                                className={`form-control ${formErrors.fullname ? "is-invalid" : ""}`}
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {formErrors.email && <p className="invalid-feedback">{formErrors.email}</p>}
                                        </div>
                                    </div>

                                    <div className="rbt-form-group  mb-3">
                                        <label htmlFor="password" style={{ fontSize: 14, color: "#000" }} className="mb-2">
                                            Password <span className="text-danger">*</span>
                                        </label>
                                        <div className="form-group__custom mb-3">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
                                                name="password"
                                                placeholder="******"
                                                value={formData.password}
                                                onChange={handleChange}
                                            />
                                            {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                                            {!formErrors.password && (
                                                <span className="view-password" onClick={handleTogglePassword}>
                                                    {!showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="rbt-checkbox">
                                        <input type="checkbox" id="agree" name="agree" required />
                                        <label htmlFor="agree">I agree to all the Terms & Condition</label>
                                    </div>

                                    <div className="mt-4">
                                        <button type="submit" className="rbt-btn btn-md fw-normal btn-not__hover w-100" style={{ fontSize: 15 }}>
                                            Register
                                        </button>
                                    </div>

                                    <div className="text-center mt-4" style={{ fontSize: 16, fontWeight: 300 }}>
                                        Do you already have an account?{" "}
                                        <Link to={config.routes.login} href="register.html" className="text-primary">
                                            Login now.
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
