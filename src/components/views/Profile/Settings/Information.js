function Information() {
    return (
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
                        <label htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="userName">User Name</label>
                        <input id="userName" type="text" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="tel" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="skill">Skill/Occupation</label>
                        <input id="skill" type="text" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <div className="filter-select rbt-modern-select">
                        <label htmlFor="displayname" className="">
                            Display name publicly as
                        </label>
                        <div className="dropdown bootstrap-select w-100">
                            <select id="displayname" className="w-100">
                                <option>Emily Hannah</option>
                                <option>John</option>
                                <option>Due</option>
                                <option>Due John</option>
                                <option>johndue</option>
                            </select>

                            <div className="dropdown-menu">
                                <div className="inner show" role="listbox" id="bs-select-1" tabIndex="-1">
                                    <ul className="dropdown-menu inner show" role="presentation"></ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            id="bio"
                            cols="20"
                            rows="5"
                            defaultValue={`I'm the Front-End Developer for #Rainbow IT in Bangladesh, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.`}
                        ></textarea>
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
    );
}

export default Information;
