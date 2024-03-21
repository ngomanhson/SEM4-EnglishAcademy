import { Link } from "react-router-dom";

function Register() {
    return (
        <div class="rbt-elements-area bg-color-white rbt-section-gap">
            <div class="container">
                <div class="row gy-5 row--30">
                    <div class="col-lg-5 mx-auto">
                        <div class="rbt-contact-form contact-form-style-1 max-width-auto">
                            <h3 class="title">Register</h3>
                            <form class="max-width-auto">
                                <div class="form-group">
                                    <input name="register_user" type="text" />
                                    <label>
                                        Full Name <span className="text-danger">*</span>
                                    </label>
                                    <span class="focus-border"></span>
                                </div>
                                <div class="form-group">
                                    <input name="register-email" type="text" />
                                    <label>
                                        Email address <span className="text-danger">*</span>
                                    </label>
                                    <span class="focus-border"></span>
                                </div>

                                <div class="form-group">
                                    <input name="register_password" type="password" />
                                    <label>
                                        Password <span className="text-danger">*</span>
                                    </label>
                                    <span class="focus-border"></span>
                                </div>

                                <div class="form-group">
                                    <input name="register_conpassword" type="password" />
                                    <label>
                                        Confirm Password <span className="text-danger">*</span>
                                    </label>
                                    <span class="focus-border"></span>
                                </div>

                                <p class="rbt-checkbox-wrapper">
                                    <input id="rbt-checkbox-2" name="rbt-checkbox-2" type="checkbox" value="yes" />
                                    <label for="rbt-checkbox-2">Accept the Terms and Privacy Policy</label>
                                </p>

                                <div class="form-submit-group">
                                    <button type="submit" class="rbt-btn btn-md btn-gradient hover-icon-reverse w-100">
                                        <span class="icon-reverse-wrapper">
                                            <span class="btn-text">Register</span>
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
