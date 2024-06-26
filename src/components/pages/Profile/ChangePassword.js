import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
import { getAccessToken, removeAccessToken } from "../../../utils/auth";
import { toast } from "react-toastify";
import LayoutProfile from "./LayoutProfile";

function ChangePassword() {
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleTogglePassword = (fieldName) => {
        switch (fieldName) {
            case "currentPassword":
                setShowCurrentPassword(!showCurrentPassword);
                break;
            case "newPassword":
                setShowNewPassword(!showNewPassword);
                break;
            case "confirmPassword":
                setShowConfirmPassword(!showConfirmPassword);
                break;
            default:
                break;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
        setIncorrectPassword(false);
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.currentPassword) {
            newErrors.currentPassword = "Please enter your password.";
            valid = false;
        } else if (formData.currentPassword.length < 6) {
            newErrors.currentPassword = "Password must be at least 6 characters.";
            valid = false;
        } else if (formData.currentPassword.length > 50) {
            newErrors.currentPassword = "Password must be less than 50 characters.";
            valid = false;
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

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password.";
            valid = false;
        } else if (formData.confirmPassword !== formData.newPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const passwordResponse = await api.post(url.AUTH.CHANGE_PASSWORD, formData, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                });

                if (passwordResponse.status === 200) {
                    removeAccessToken();

                    navigate("/login");

                    setTimeout(() => {
                        toast.success("Password changed successfully. Please login again!", {
                            position: toast.POSITION.TOP_RIGHT,
                            autoClose: 2000,
                        });
                    }, 1500);
                }
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    setIncorrectPassword(true);
                } else {
                    toast.error("An error occurred while changing the password.", {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 5000,
                    });
                }
            }
        }
    };

    return (
        <LayoutProfile>
            <div className="col-lg-9">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                        <div className="section-title">
                            <h4 className="rbt-title-style-3">ChangePassword</h4>
                        </div>

                        <div className="tab-content">
                            <div className="">
                                <form onSubmit={handleChangePassword} className="rbt-profile-row rbt-default-form row row--15">
                                    <div className="col-12">
                                        <div className="rbt-form-group">
                                            <label htmlFor="currentPassword">Current Password</label>
                                            <div className="form-group__custom">
                                                <input
                                                    type={showCurrentPassword ? "text" : "password"}
                                                    id="currentPassword"
                                                    name="currentPassword"
                                                    className={`form-control m-0 ${formErrors.currentPassword || incorrectPassword ? "is-invalid" : ""}`}
                                                    value={formData.currentPassword}
                                                    onChange={handleChange}
                                                    placeholder="Current Password"
                                                />
                                                {formErrors.currentPassword && <div className="invalid-feedback">{formErrors.currentPassword}</div>}
                                                {incorrectPassword && <div className="invalid-feedback">Incorrect old password.</div>}
                                                {!formErrors.currentPassword && !incorrectPassword && (
                                                    <span className="view-password" onClick={() => handleTogglePassword("currentPassword")}>
                                                        {!showCurrentPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="rbt-form-group mt-4">
                                            <label htmlFor="newPassword">New Password</label>
                                            <div className="form-group__custom">
                                                <input
                                                    id="newPassword"
                                                    type={showNewPassword ? "text" : "password"}
                                                    className={`form-control m-0 ${formErrors.newPassword ? "is-invalid" : ""}`}
                                                    name="newPassword"
                                                    value={formData.newPassword}
                                                    onChange={handleChange}
                                                    placeholder="New Password"
                                                />
                                                {formErrors.newPassword && <div className="invalid-feedback">{formErrors.newPassword}</div>}
                                                {!formErrors.newPassword && (
                                                    <span className="view-password" onClick={() => handleTogglePassword("newPassword")}>
                                                        {!showNewPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="rbt-form-group mt-4">
                                            <label htmlFor="confirmPassword">Confirm New Password</label>
                                            <div className="form-group__custom">
                                                <input
                                                    type={showConfirmPassword ? "text" : "password"}
                                                    className={`form-control m-0 ${formErrors.confirmPassword ? "is-invalid" : ""}`}
                                                    name="confirmPassword"
                                                    id="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={handleChange}
                                                    placeholder="Re-type New Password"
                                                />
                                                {formErrors.confirmPassword && <div className="invalid-feedback">{formErrors.confirmPassword}</div>}
                                                {!formErrors.confirmPassword && (
                                                    <span className="view-password" onClick={() => handleTogglePassword("confirmPassword")}>
                                                        {!showConfirmPassword ? <i className="fa fa-eye-slash"></i> : <i className="fa fa-eye"></i>}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt--10">
                                        <div className="rbt-form-group text-end">
                                            <button type="submit" className="rbt-btn btn-gradient btn-not__hover" style={{ height: 45, lineHeight: "45px" }}>
                                                Update Password
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default ChangePassword;
