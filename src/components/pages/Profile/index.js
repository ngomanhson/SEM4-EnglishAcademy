import { format } from "date-fns";
import { useAxiosGet } from "../../../hooks";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import LayoutProfile from "../../layouts/LayoutProfile";
import { useState } from "react";
import Swal from "sweetalert2";

function Profile() {
    const [info, setInfo] = useState("");

    const [isEditButtonVisible, setEditButtonVisible] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [editedInfo, setEditedInfo] = useState({});

    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);

    const allowedExtensions = ["png", "jpg", "jpeg", "heic"];

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const fileExtension = file.name.split(".").pop().toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                // You can also reset the input field if needed
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
    };

    const handleSaveClick = async () => {
        setEditButtonVisible(true);
        try {
            // Send the request
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
                const updateResponse = "";

                if (updateResponse.status === 204) {
                    console.log("Successfully updated");
                }
            }

            // Update the local state with edited information
            setInfo(editedInfo);
            setIsEditing(false);
        } catch (error) {}
    };

    // =================================================
    const { response } = useAxiosGet({
        path: url.PROFILE.DETAIL,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const studentInfo = response || {};

    return (
        <LayoutProfile>
            <div className="col-lg-9">
                <div className="widget">
                    <div className="rbt-dashboard-content-wrapper">
                        <div className="tutor-bg-photo bg_image bg_image--23 height-245"></div>

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
                                                    <img src="assets/images/client/avatar-04.jpeg" alt={info.fullname} className="profile-user__avatar" />
                                                    <div className="rbt-edit-photo-inner">
                                                        <label htmlFor="avatarInput" className="rbt-edit-photo d-flex align-items-center justify-content-center cursor-pointer">
                                                            <i className="feather-camera"></i>
                                                        </label>
                                                    </div>
                                                </div>
                                            )
                                        ) : (
                                            <img src="assets/images/client/avatar-04.jpeg" alt={info.fullname} className="profile-user__avatar cursor-default" />
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
                                <div className="rbt-profile-content fw-300 info-content">{studentInfo.fullName || "unavailable"}</div>
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
                                <div className="rbt-profile-content fw-300 info-content">{(studentInfo.dayOfBirth && format(new Date(studentInfo.dayOfBirth), "dd-MM-yyyy")) || "unavailable"}</div>
                            </div>
                        </div>

                        <div className="rbt-profile-row row row--15 mt--15">
                            <div className="col-lg-3 col-md-3">
                                <div className="rbt-profile-content fw-300 info-content">Gender</div>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <div className="rbt-profile-content fw-300 info-content">
                                    {isEditing ? (
                                        <select className="input-change" style={{ paddingTop: 0, paddingBottom: 0, border: "1px solid #e6e3f1" }}>
                                            <option value="0">Male</option>
                                            <option value="1">Female</option>
                                            <option value="2">Other</option>
                                        </select>
                                    ) : (
                                        studentInfo.gender || "unavailable"
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
                                        <input type="tel" className="input-change" value={editedInfo.phone || ""} onChange={(e) => setEditedInfo({ ...editedInfo, phone: e.target.value })} />
                                    ) : (
                                        studentInfo.phone || "unavailable"
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
                                        <input type="text" className="input-change" value={editedInfo.address || ""} onChange={(e) => setEditedInfo({ ...editedInfo, address: e.target.value })} />
                                    ) : (
                                        studentInfo.address || "unavailable"
                                    )}
                                </div>
                            </div>
                        </div>

                        {isEditing && (
                            <div className="d-flex justify-content-end">
                                <button className="info-act__btn btn-light" onClick={handleCancelClick}>
                                    Cancel
                                </button>
                                <button className="info-act__btn btn-primary" onClick={handleSaveClick}>
                                    Save Change
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default Profile;
