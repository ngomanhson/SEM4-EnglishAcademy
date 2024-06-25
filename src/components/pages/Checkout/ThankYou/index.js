import Layout from "../../../layouts";
import Lottie from "lottie-react";
import Success from "../../../../lottie/Success.json";
import { Link, useParams } from "react-router-dom";

function ThankYou() {
    const { courseSlug } = useParams();
    return (
        <Layout title="Thank You">
            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row gy-5 row--30">
                        <div className="col-lg-5 mx-auto">
                            <div className="widget contact-form-style-1 max-width-auto">
                                <div className="d-flex align-items-center justify-content-center">
                                    <Lottie animationData={Success} loop={true} style={{ width: 150 }} />
                                </div>
                                <div className="text-center mt-5">
                                    <h4 className="font-system fw-500" style={{ fontSize: 25 }}>
                                        Thank you for enrolling in our course!
                                    </h4>
                                    <p className="font-system fw-300" style={{ fontSize: 15 }}>
                                        We're excited to have you on board! Start your learning journey now by exploring our course content.
                                    </p>

                                    <Link to={`/learning-online/${courseSlug}`} className="rbt-moderbt-btn">
                                        <span class="moderbt-btn-text">Learning Now</span>
                                        <i class="feather-arrow-right"></i>
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

export default ThankYou;
