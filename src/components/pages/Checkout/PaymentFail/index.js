import Layout from "../../../layouts";
import Lottie from "lottie-react";
import Fail from "../../../../lottie/Fail.json";
import { Link, useParams } from "react-router-dom";

function PaymentFail() {
    const { courseSlug } = useParams();
    return (
        <Layout title="Payment Failed">
            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row gy-5 row--30">
                        <div className="col-lg-5 mx-auto">
                            <div className="widget contact-form-style-1 max-width-auto">
                                <div className="d-flex align-items-center justify-content-center">
                                    <Lottie animationData={Fail} loop={true} style={{ width: 150 }} />
                                </div>
                                <div className="text-center mt-5">
                                    <h4 className="font-system fw-500" style={{ fontSize: 25 }}>
                                        Payment failed!
                                    </h4>
                                    <p className="font-system fw-300" style={{ fontSize: 15, lineHeight: 1.6 }}>
                                        We're sorry to inform you that your payment was unsuccessful. Please make sure your payment details are correct and try again.
                                    </p>

                                    <div className="d-flex align-items-center justify-content-evenly">
                                        <Link to={`/checkout/${courseSlug}`} className="w-100 rbt-btn icon-hover btn-not__hover">
                                            Actually pay again
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default PaymentFail;
