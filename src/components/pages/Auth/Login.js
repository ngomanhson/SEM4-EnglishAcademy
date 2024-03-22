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
                            <h3 className="title">Login</h3>
                            <form onSubmit={handleLogin} className="max-width-auto">
                                <div className="form-group">
                                    <input type="email" name="email" className={`form-control ${formErrors.email ? "is-invalid" : ""}`} value={formData.email} onChange={handleChange} />
                                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                    <label>
                                        Email <span className="text-danger">*</span>
                                    </label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="form-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        onClick={handleTogglePassword}
                                    />
                                    {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                                    {!formErrors.password && (
                                        <span className="view-password" onClick={handleTogglePassword}>
                                            {!showPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                        </span>
                                    )}

                                    <label>
                                        Password <span className="text-danger">*</span>
                                    </label>
                                    <span className="focus-border"></span>
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
                                            <a className="rbt-btn-link" href="#!">
                                                Lost your password?
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-submit-group">
                                    <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Log In</span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right"></i>
                                            </span>
                                            <span className="btn-icon">
                                                <i className="feather-arrow-right"></i>
                                            </span>
                                        </span>
                                    </button>
                                </div>

                                <div className="text-center mt-4" style={{ fontSize: 16, fontWeight: 300 }}>
                                    Don't have an account?{" "}
                                    <Link to="/register" href="register.html" className="text-primary">
                                        Register Now
                                    </Link>
                                    .
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
