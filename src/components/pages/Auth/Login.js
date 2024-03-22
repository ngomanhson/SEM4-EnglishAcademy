import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
    });

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

        if (!formData.email) {
            newErrors.email = "Please enter your email address.";
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

    const handleLogin = async (e) => {
        e.preventDefault();
        if (validateForm()) {
        }
    };
    return (
        <div className="rbt-elements-area bg-color-white rbt-section-gap">
            <div className="container">
                <div className="row gy-5 row--30">
                    <div className="col-lg-5 mx-auto">
                        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                            <div className="text-center mb-4">
                                <img src="assets/images/logo/logo.png" alt="English Academy" width={170} />
                                <h5 className="title mb-0 fw-normal">Login with your email</h5>
                            </div>

                            <form className="max-width-auto" onSubmit={handleLogin}>
                                <div className="rbt-form-group mb-3">
                                    <input
                                        type="email"
                                        className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                                        placeholder="Email Address"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        autoFocus
                                    />
                                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                </div>

                                <div className="rbt-form-group mt-4 mb-3">
                                    <div className="form-group__custom mb-3">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
                                            name="password"
                                            placeholder="Password"
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

                                <div className="row mb--30">
                                    <div className="col-lg-6">
                                        <div className="rbt-checkbox">
                                            <input type="checkbox" id="rememberMe" name="rememberMe" />
                                            <label htmlFor="rememberMe">Remember me</label>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="rbt-lost-password text-end">
                                            <Link to="/forgot-password" className="rbt-btn-link">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button type="submit" className="rbt-btn btn-md fw-normal w-100" style={{ fontSize: 15 }}>
                                        Login
                                    </button>
                                </div>
                            </form>

                            <div className="saprator my-3">
                                <span>OR</span>
                            </div>

                            <ul className="social-icon social-default">
                                <li>
                                    <a href="https://www.facebook.com/">
                                        <i className="feather-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.twitter.com">
                                        <i className="feather-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/">
                                        <i className="feather-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkdin.com/">
                                        <i className="feather-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
