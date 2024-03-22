import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [showPassword, setShowPassword] = useState(false);

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
        }
    };
    return (
        <div className="rbt-elements-area bg-color-white rbt-section-gap">
            <div className="container">
                <div className="row gy-5 row--30">
                    <div className="col-lg-5 mx-auto">
                        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                            <h3 className="title">Register</h3>
                            <form className="max-width-auto" onSubmit={handleRegister}>
                                <div className="form-group">
                                    <input type="text" name="fullname" className={`form-control ${formErrors.fullname ? "is-invalid" : ""}`} value={formData.fullname} onChange={handleChange} />
                                    <label>
                                        Full Name <span className="text-danger">*</span>
                                    </label>
                                    <span className="focus-border"></span>

                                    {formErrors.fullname && <p className="invalid-feedback">{formErrors.fullname}</p>}
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className={`form-control ${formErrors.email ? "is-invalid" : ""}`} value={formData.email} onChange={handleChange} />
                                    {formErrors.email && <p className="invalid-feedback">{formErrors.email}</p>}
                                    <label>
                                        Email address <span className="text-danger">*</span>
                                    </label>
                                    <span className="focus-border"></span>
                                </div>

                                <div className="form-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
                                        value={formData.password}
                                        onChange={handleChange}
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

                                <p className="rbt-checkbox-wrapper">
                                    <input id="rbt-checkbox-2" name="rbt-checkbox-2" type="checkbox" value="yes" />
                                    <label htmlFor="rbt-checkbox-2">Accept the Terms and Privacy Policy</label>
                                </p>

                                <div className="form-submit-group">
                                    <button type="submit" className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                        <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Register</span>
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
                                    Already have an account?{" "}
                                    <Link to="/login" className="text-primary">
                                        Login
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

export default Register;
