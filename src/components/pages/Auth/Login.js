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
        <div class="rbt-elements-area bg-color-white rbt-section-gap">
            <div class="container">
                <div class="row gy-5 row--30">
                    <div class="col-lg-5 mx-auto">
                        <div class="rbt-contact-form contact-form-style-1 max-width-auto">
                            <h3 class="title">Login</h3>
                            <form onSubmit={handleLogin} class="max-width-auto">
                                <div class="form-group">
                                    <input type="email" name="email" className={`form-control ${formErrors.email ? "is-invalid" : ""}`} value={formData.email} onChange={handleChange} />
                                    {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                    <label>
                                        Email <span className="text-danger">*</span>
                                    </label>
                                    <span class="focus-border"></span>
                                </div>
                                <div class="form-group">
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
                                    <span class="focus-border"></span>
                                </div>

                                <div class="row mb--30">
                                    <div class="col-lg-6">
                                        <div class="rbt-checkbox">
                                            <input type="checkbox" id="rememberMe" name="rememberMe" />
                                            <label for="rememberMe">Remember me</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="rbt-lost-password text-end">
                                            <a class="rbt-btn-link" href="#!">
                                                Lost your password?
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-submit-group">
                                    <button type="submit" class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                        <span class="icon-reverse-wrapper">
                                            <span class="btn-text">Log In</span>
                                            <span class="btn-icon">
                                                <i class="feather-arrow-right"></i>
                                            </span>
                                            <span class="btn-icon">
                                                <i class="feather-arrow-right"></i>
                                            </span>
                                        </span>
                                    </button>
                                </div>

                                <div class="text-center mt-4" style={{ fontSize: 16, fontWeight: 300 }}>
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
