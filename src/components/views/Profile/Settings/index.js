import LayoutProfile from "../../../layouts/LayoutProfile";
import ChangePassword from "./ChangePassword";
import Information from "./Information";
import Social from "./Social";

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
                            <Information />

                            <ChangePassword />

                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default Settings;
