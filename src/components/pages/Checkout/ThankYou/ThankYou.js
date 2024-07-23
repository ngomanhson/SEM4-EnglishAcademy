import Layout from "../../../layouts";
import Lottie from "lottie-react";
import Success from "../../../../lottie/Success.json";
import { Link } from "react-router-dom";
import config from "../../../../config";

function ThankYouTutor() {
    return (
        <Layout title="Thank You">
            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row gy-5 row--30">
                        <div className="col-lg-5 mx-auto">
                            <div className="widget contact-form-style-1 max-width-auto">
                                <div className="d-flex align-items-center justify-content-center">
                                    <Lottie animationData={Success} loop={true} style={{ width: 200 }} />
                                </div>
                                <div className="text-center mt-5">
                                    <h4 className="font-system fw-500" style={{ fontSize: 25 }}>
                                        Thank you for registering to study with a tutor!
                                    </h4>
                                    <p className="font-system fw-300 fz-15">We're excited to have you on board! Start your learning journey now by exploring our course content.</p>

                                    <Link to={config.routes.booking} className="rbt-moderbt-btn">
                                        <span className="moderbt-btn-text">View sessions with tutors</span>
                                        <i className="feather-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ThankYouTutor;
