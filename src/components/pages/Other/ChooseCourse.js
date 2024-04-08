import Layout from "../../layouts";
import Lottie from "lottie-react";
import Panda from "../../../lottie/Panda.json";
import { Link } from "react-router-dom";
import config from "../../../config";

function ChooseCourse() {
    return (
        <Layout title="Please select a course before paying">
            <div className="rbt-elements-area bg-color-white rbt-section-gap">
                <div className="container">
                    <div className="row gy-5 row--30">
                        <div className="col-lg-5 mx-auto">
                            <div className="d-flex flex-column align-items-center justify-content-center">
                                <Lottie animationData={Panda} loop={true} style={{ width: 200 }} />

                                <div className="mt-5">
                                    <h5 className="font-system">Opps. Please select a course before paying!</h5>
                                </div>

                                <Link to={config.routes.course} className="transparent-button">
                                    Go to Course
                                    <i>
                                        <svg width="17" height="12" xmlns="http://www.w3.org/2000/svg">
                                            <g stroke="#27374D" fill="none" fillRule="evenodd">
                                                <path d="M10.614 0l5.629 5.629-5.63 5.629"></path>
                                                <path strokeLinecap="square" d="M.663 5.572h14.594"></path>
                                            </g>
                                        </svg>
                                    </i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ChooseCourse;
