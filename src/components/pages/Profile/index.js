import { useAxiosGet } from "../../../hooks";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LayoutProfile from "./LayoutProfile";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import LoadingSpinner from "../../layouts/LoadingSpinner";
import api from "../../../services/api";
import { toast } from "react-toastify";
import { format } from "date-fns";

function Profile() {
    const [info, setInfo] = useState({});
    const [isEditButtonVisible, setEditButtonVisible] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editedInfo, setEditedInfo] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);
    const [phoneError, setPhoneError] = useState("");

    const allowedExtensions = ["png", "jpg", "jpeg", "heic"];

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileExtension = file.name.split(".").pop().toLowerCase();
            if (!allowedExtensions.includes(fileExtension)) {
                e.target.value = "";
                return;
            }
            setAvatarFile(file);
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    const handleEditClick = () => {
        setIsEditing(!isEditing);
        setEditButtonVisible(false);
        if (!isEditing) {
            setEditedInfo({ ...info });
        }
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditButtonVisible(true);
        setEditedInfo({});
        setAvatarPreview(null);
        setPhoneError("");
    };

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const handlePhoneChange = (e) => {
        const { value } = e.target;
        setEditedInfo({ ...editedInfo, phone: value });

        if (validatePhoneNumber(value)) {
            setPhoneError("");
        } else {
            setPhoneError("Invalid phone number. It should be a 10-digit number.");
        }
    };

    const handleSaveClick = async () => {
        if (phoneError) {
            toast.error(phoneError, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            return;
        }

        setEditButtonVisible(true);
        try {
            const isConfirmed = await Swal.fire({
                title: "Are you sure?",
                text: "You want to update your information?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "I'm sure",
                reverseButtons: true,
            });

            if (isConfirmed.isConfirmed) {
                const updateResponse = await api.put(url.PROFILE.UPDATE_PROFILE, editedInfo, {
                    headers: { Authorization: `Bearer ${getAccessToken()}` },
                });

                if (updateResponse.status === 200) {
                    toast.success("Updated successfully!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    setInfo(editedInfo);
                    setIsEditing(false);
                }
            }
        } catch (error) {
            toast.error("Error! An error occurred. Please try again later!", {
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
    };

    const { response, loading } = useAxiosGet({
        path: url.PROFILE.DETAIL,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    useEffect(() => {
        if (response) {
            setInfo(response);
            setEditedInfo(response);
        }
    }, [response]);

    const studentInfo = response || {};

    return (
        <LayoutProfile>
            <div className="col-lg-9">
                <div className="widget">
                    {loading ? (
                        <LoadingSpinner />
                    ) : (
                        <>
                            <div className="rbt-dashboard-content-wrapper">
                                <div className="tutor-bg-photo bg_image bg_image--23 height-200"></div>
                                <div className="rbt-tutor-information">
                                    <div className="rbt-tutor-information-left">
                                        <div className="thumbnail rbt-avatars size-lg position-relative">
                                            <label htmlFor="avatarInput">
                                                {isEditing ? (
                                                    avatarPreview ? (
                                                        <div className="avatar-inner">
                                                            <img src={avatarPreview} alt="Avatar Preview" className="profile-user__avatar" />
                                                            <div className="rbt-edit-photo-inner">
                                                                <label htmlFor="avatarInput" className="rbt-edit-photo d-flex align-items-center justify-content-center cursor-pointer">
                                                                    <i className="feather-camera"></i>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="avatar-inner">
                                                            <img src="assets/images/client/avatar-04.jpeg" alt={studentInfo.fullname} className="profile-user__avatar" />
                                                            <div className="rbt-edit-photo-inner">
                                                                <label htmlFor="avatarInput" className="rbt-edit-photo d-flex align-items-center justify-content-center cursor-pointer">
                                                                    <i className="feather-camera"></i>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    )
                                                ) : (
                                                    <img src="assets/images/client/avatar-04.jpeg" alt={studentInfo.fullname} className="profile-user__avatar cursor-default" />
                                                )}
                                            </label>
                                            {isEditing && <input id="avatarInput" type="file" accept="image/*" style={{ display: "none" }} onChange={handleAvatarChange} />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                <div className="d-flex align-items-center justify-content-between mb-5 pb-4 border-bt-secondary">
                                    <h4 className="rbt-title-style-3 rbt-border-none m-0 p-0">Personal information</h4>
                                    <button className="btn-edit" onClick={handleEditClick} style={{ display: isEditButtonVisible ? "block" : "none" }}>
                                        <i className="feather-edit"></i>
                                    </button>
                                </div>

                                <div className="rbt-profile-row row row--15 mt--15">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="rbt-profile-content fw-300 info-content">Student Code</div>
                                    </div>
                                    <div className="col-lg-5 col-md-5">
                                        <div className="rbt-profile-content fw-300 info-content">{studentInfo.code}</div>
                                    </div>
                                </div>

                                <div className="rbt-profile-row row row--15 mt--15">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="rbt-profile-content fw-300 info-content">Full Name</div>
                                    </div>
                                    <div className="col-lg-5 col-md-5">
                                        <div className="rbt-profile-content fw-300 info-content">{studentInfo.fullName}</div>
                                    </div>
                                </div>

                                <div className="rbt-profile-row row row--15 mt--15">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="rbt-profile-content fw-300 info-content">Email</div>
                                    </div>
                                    <div className="col-lg-5 col-md-5">
                                        <div className="rbt-profile-content fw-300 info-content">{studentInfo.email}</div>
                                    </div>
                                </div>

                                <div className="rbt-profile-row row row--15 mt--15">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="rbt-profile-content fw-300 info-content">Birthday</div>
                                    </div>
                                    <div className="col-lg-5 col-md-5">
                                        <div className="rbt-profile-content fw-300 info-content">
                                            {isEditing ? (
                                                <input
                                                    type="date"
                                                    className="input-change"
                                                    value={editedInfo.dob || editedInfo.dayOfBirth}
                                                    onChange={(e) => setEditedInfo({ ...editedInfo, dob: e.target.value })}
                                                />
                                            ) : (
                                                format(new Date(editedInfo.dayOfBirth), "dd-MM-yyy") || "N/A"
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="rbt-profile-row row row--15 mt--15">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="rbt-profile-content fw-300 info-content">Gender</div>
                                    </div>
                                    <div className="col-lg-5 col-md-5">
                                        <div className="rbt-profile-content fw-300 info-content">
                                            {isEditing ? (
                                                <select
                                                    className="input-change"
                                                    style={{ paddingTop: 0, paddingBottom: 0, border: "1px solid #e6e3f1" }}
                                                    value={editedInfo.gender || ""}
                                                    onChange={(e) => setEditedInfo({ ...editedInfo, gender: e.target.value })}
                                                >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            ) : (
                                                studentInfo.gender || "N/A"
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="rbt-profile-row row row--15 mt--15">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="rbt-profile-content fw-300 info-content">Phone Number</div>
                                    </div>
                                    <div className="col-lg-5 col-md-5">
                                        <div className="rbt-profile-content fw-300 info-content">
                                            {isEditing ? (
                                                <>
                                                    <input type="tel" className="input-change" value={editedInfo.phone || ""} onChange={handlePhoneChange} />
                                                    {phoneError && <span className="text-danger fz-12">{phoneError}</span>}
                                                </>
                                            ) : (
                                                studentInfo.phone || "N/A"
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="rbt-profile-row row row--15 mt--15">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="rbt-profile-content fw-300 info-content">Address</div>
                                    </div>
                                    <div className="col-lg-5 col-md-5">
                                        <div className="rbt-profile-content fw-300 info-content">
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    className="input-change"
                                                    value={editedInfo.address || ""}
                                                    onChange={(e) => setEditedInfo({ ...editedInfo, address: e.target.value })}
                                                />
                                            ) : (
                                                studentInfo.address || "N/A"
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {isEditing && (
                                    <div className="d-flex justify-content-end mt-5">
                                        <button className="info-act__btn btn-light" onClick={handleCancelClick}>
                                            Cancel
                                        </button>
                                        <button className="info-act__btn btn-primary" onClick={handleSaveClick}>
                                            Save Change
                                        </button>
                                    </div>
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </LayoutProfile>
    );
}

export default Profile;
