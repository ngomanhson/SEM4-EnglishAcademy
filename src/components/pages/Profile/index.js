import LayoutProfile from "../../layouts/LayoutProfile";

function Profile() {
    return (
        <LayoutProfile>
            <div className="col-lg-9">
                <div className="rbt-dashboard-content bg-color-white rbt-shadow-box">
                    <div className="content">
                        <div className="section-title">
                            <h4 className="rbt-title-style-3">My Profile</h4>
                        </div>

                        <div className="rbt-profile-row row row--15">
                            <div className="col-lg-4 col-md-4">
                                <div className="rbt-profile-content b2">Registration Date</div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="rbt-profile-content b2">February 25, 2025 6:01 am</div>
                            </div>
                        </div>

                        <div className="rbt-profile-row row row--15 mt--15">
                            <div className="col-lg-4 col-md-4">
                                <div className="rbt-profile-content b2">First Name</div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="rbt-profile-content b2">Emily</div>
                            </div>
                        </div>

                        <div className="rbt-profile-row row row--15 mt--15">
                            <div className="col-lg-4 col-md-4">
                                <div className="rbt-profile-content b2">Last Name</div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="rbt-profile-content b2">Hannah</div>
                            </div>
                        </div>

                        <div className="rbt-profile-row row row--15 mt--15">
                            <div className="col-lg-4 col-md-4">
                                <div className="rbt-profile-content b2">Username</div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="rbt-profile-content b2">instructor</div>
                            </div>
                        </div>

                        <div className="rbt-profile-row row row--15 mt--15">
                            <div className="col-lg-4 col-md-4">
                                <div className="rbt-profile-content b2">Email</div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="rbt-profile-content b2">example@gmail.com</div>
                            </div>
                        </div>

                        <div className="rbt-profile-row row row--15 mt--15">
                            <div className="col-lg-4 col-md-4">
                                <div className="rbt-profile-content b2">Phone Number</div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="rbt-profile-content b2">+1-202-555-0174</div>
                            </div>
                        </div>

                        <div className="rbt-profile-row row row--15 mt--15">
                            <div className="col-lg-4 col-md-4">
                                <div className="rbt-profile-content b2">Skill/Occupation</div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="rbt-profile-content b2">Application Developer</div>
                            </div>
                        </div>

                        <div className="rbt-profile-row row row--15 mt--15">
                            <div className="col-lg-4 col-md-4">
                                <div className="rbt-profile-content b2">Biography</div>
                            </div>
                            <div className="col-lg-8 col-md-8">
                                <div className="rbt-profile-content b2">
                                    I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutProfile>
    );
}

export default Profile;
