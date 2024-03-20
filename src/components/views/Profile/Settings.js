import LayoutProfile from "../../layouts/LayoutProfile";

function Settings() {
    return (
        <LayoutProfile>
            <div className="col-lg-9">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                        <div className="section-title">
                            <h4 className="rbt-title-style-3">Settings</h4>
                        </div>

                        <div className="advance-tab-button mb--30">
                            <ul className="nav nav-tabs tab-button-style-2 justify-content-start" id="settinsTab-4" role="tablist">
                                <li role="presentation">
                                    <a href="#!" className="tab-button active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" role="tab" aria-controls="profile" aria-selected="true">
                                        <span className="title">Profile</span>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#!" className="tab-button" id="password-tab" data-bs-toggle="tab" data-bs-target="#password" role="tab" aria-controls="password" aria-selected="false">
                                        <span className="title">Password</span>
                                    </a>
                                </li>
                                <li role="presentation">
                                    <a href="#!" className="tab-button" id="social-tab" data-bs-toggle="tab" data-bs-target="#social" role="tab" aria-controls="social" aria-selected="false">
                                        <span className="title">Social Share</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="tab-content">
                            <div className="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="rbt-dashboard-content-wrapper">
                                    <div className="tutor-bg-photo bg_image bg_image--23 height-245"></div>

                                    <div className="rbt-tutor-information">
                                        <div className="rbt-tutor-information-left">
                                            <div className="thumbnail rbt-avatars size-lg position-relative">
                                                <img src="assets/images/team/avatar-2.jpg" alt="Instructor" />
                                                <div className="rbt-edit-photo-inner">
                                                    <button className="rbt-edit-photo" title="Upload Photo">
                                                        <i className="feather-camera"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="rbt-tutor-information-right">
                                            <div className="tutor-btn">
                                                <a className="rbt-btn btn-sm btn-border color-white radius-round-10" href="#!">
                                                    Edit Cover Photo
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="rbt-form-group">
                                            <label for="firstname">First Name</label>
                                            <input id="firstname" type="text" value="John" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="rbt-form-group">
                                            <label for="lastname">Last Name</label>
                                            <input id="lastname" type="text" value="Due" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="rbt-form-group">
                                            <label for="username">User Name</label>
                                            <input id="username" type="text" value="johndue" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="rbt-form-group">
                                            <label for="phonenumber">Phone Number</label>
                                            <input id="phonenumber" type="tel" value="+1-202-555-0174" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="rbt-form-group">
                                            <label for="skill">Skill/Occupation</label>
                                            <input id="skill" type="text" value="Full Stack Developer" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div className="filter-select rbt-modern-select">
                                            <label for="displayname" className="">
                                                Display name publicly as
                                            </label>
                                            <div className="dropdown bootstrap-select w-100">
                                                <select id="displayname" className="w-100" tabindex="null">
                                                    <option>Emily Hannah</option>
                                                    <option>John</option>
                                                    <option>Due</option>
                                                    <option>Due John</option>
                                                    <option>johndue</option>
                                                </select>
                                                <button
                                                    type="button"
                                                    tabindex="-1"
                                                    className="btn dropdown-toggle btn-light"
                                                    data-bs-toggle="dropdown"
                                                    role="combobox"
                                                    aria-owns="bs-select-1"
                                                    aria-haspopup="listbox"
                                                    aria-expanded="false"
                                                    title="Due"
                                                    data-id="displayname"
                                                >
                                                    <div className="filter-option">
                                                        <div className="filter-option-inner">
                                                            <div className="filter-option-inner-inner">Due</div>
                                                        </div>
                                                    </div>
                                                </button>
                                                <div className="dropdown-menu" style="max-height: 270px; overflow: hidden; min-height: 72px">
                                                    <div
                                                        className="inner show"
                                                        role="listbox"
                                                        id="bs-select-1"
                                                        tabindex="-1"
                                                        aria-activedescendant="bs-select-1-2"
                                                        style="max-height: 258px; overflow-y: auto; min-height: 60px"
                                                    >
                                                        <ul className="dropdown-menu inner show" role="presentation" style="margin-top: 0px; margin-bottom: 0px">
                                                            <li className="">
                                                                <a role="option" className="dropdown-item" id="bs-select-1-0" tabindex="0" aria-setsize="5" aria-posinset="1">
                                                                    <span className="text">Emily Hannah</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a role="option" className="dropdown-item" id="bs-select-1-1" tabindex="0">
                                                                    <span className="text">John</span>
                                                                </a>
                                                            </li>
                                                            <li className="selected active">
                                                                <a
                                                                    role="option"
                                                                    className="dropdown-item active selected"
                                                                    id="bs-select-1-2"
                                                                    tabindex="0"
                                                                    aria-setsize="5"
                                                                    aria-posinset="3"
                                                                    aria-selected="true"
                                                                >
                                                                    <span className="text">Due</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a role="option" className="dropdown-item" id="bs-select-1-3" tabindex="0" aria-setsize="5" aria-posinset="4">
                                                                    <span className="text">Due John</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a role="option" className="dropdown-item" id="bs-select-1-4" tabindex="0" aria-setsize="5" aria-posinset="5">
                                                                    <span className="text">johndue</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="rbt-form-group">
                                            <label for="bio">Bio</label>
                                            <textarea id="bio" cols="20" rows="5">
                                                I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user
                                                experiences.
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="col-12 mt--20">
                                        <div className="rbt-form-group">
                                            <a className="rbt-btn btn-gradient" href="#!">
                                                Update Info
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                                <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                                    <div className="col-12">
                                        <div className="rbt-form-group">
                                            <label for="currentpassword">Current Password</label>
                                            <input id="currentpassword" type="password" placeholder="Current Password" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="rbt-form-group">
                                            <label for="newpassword">New Password</label>
                                            <input id="newpassword" type="password" placeholder="New Password" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="rbt-form-group">
                                            <label for="retypenewpassword">Re-type New Password</label>
                                            <input id="retypenewpassword" type="password" placeholder="Re-type New Password" />
                                        </div>
                                    </div>
                                    <div className="col-12 mt--10">
                                        <div className="rbt-form-group">
                                            <a className="rbt-btn btn-gradient" href="#!">
                                                Update Password
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
                                <form action="#" className="rbt-profile-row rbt-default-form row row--15">
                                    <div className="col-12">
                                        <div className="rbt-form-group">
                                            <label for="facebook">
                                                <i className="feather-facebook"></i> Facebook
                                            </label>
                                            <input id="facebook" type="text" placeholder="https://facebook.com/" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="rbt-form-group">
                                            <label for="twitter">
                                                <i className="feather-twitter"></i> Twitter
                                            </label>
                                            <input id="twitter" type="text" placeholder="https://twitter.com/" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="rbt-form-group">
                                            <label for="linkedin">
                                                <i className="feather-linkedin"></i> Linkedin
                                            </label>
                                            <input id="linkedin" type="text" placeholder="https://linkedin.com/" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="rbt-form-group">
                                            <label for="website">
                                                <i className="feather-globe"></i> Website
                                            </label>
                                            <input id="website" type="text" placeholder="https://website.com/" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="rbt-form-group">
                                            <label for="github">
                                                <i className="feather-github"></i> Github
                                            </label>
                                            <input id="github" type="text" placeholder="https://github.com/" />
                                        </div>
                                    </div>
                                    <div className="col-12 mt--10">
                                        <div className="rbt-form-group">
                                            <a className="rbt-btn btn-gradient" href="#!">
                                                Update Profile
                                            </a>
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

export default Settings;
