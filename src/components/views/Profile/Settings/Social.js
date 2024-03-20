function Social() {
    return (
        <div className="tab-pane fade" id="social" role="tabpanel" aria-labelledby="social-tab">
            <form className="rbt-profile-row rbt-default-form row row--15">
                <div className="col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="facebook">
                            <i className="feather-facebook"></i> Facebook
                        </label>
                        <input id="facebook" type="text" className="form-group" placeholder="https://facebook.com/" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="twitter">
                            <i className="feather-twitter"></i> Twitter
                        </label>
                        <input id="twitter" type="text" className="form-group" placeholder="https://twitter.com/" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="linkedin">
                            <i className="feather-linkedin"></i> Linkedin
                        </label>
                        <input id="linkedin" type="text" className="form-group" placeholder="https://linkedin.com/" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="website">
                            <i className="feather-globe"></i> Website
                        </label>
                        <input id="website" type="text" className="form-group" placeholder="https://website.com/" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="rbt-form-group">
                        <label htmlFor="github">
                            <i className="feather-github"></i> Github
                        </label>
                        <input id="github" type="text" className="form-group" placeholder="https://github.com/" />
                    </div>
                </div>
                <div className="col-12 mt--10">
                    <div className="rbt-form-group">
                        <bu className="rbt-btn btn-gradient" href="#!">
                            Update Profile
                        </bu>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Social;
