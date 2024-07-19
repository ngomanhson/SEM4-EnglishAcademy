import { Link } from "react-router-dom";
import config from "../../../config";

function RoomNotFound() {
    return (
        <div className="rbt-error-area bg-gradient-11 rbt-section-gap">
            <div className="error-area">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-10">
                            <img src="assets/images/others/img-error-404.svg" alt="" />
                            {/* <h3 className="sub-title">Page not found</h3> */}
                            <p className="mt-5 fz-16 fw-300">
                                This room does not exist or <br /> you may not have permission to access.
                            </p>

                            <Link to={config.routes.room} className="rbt-btn btn-gradient icon-hover radius-round" style={{ height: 40, lineHeight: "40px" }}>
                                <span className="btn-text">Go Back</span>
                                <span className="btn-icon">
                                    <i className="feather-arrow-left"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoomNotFound;
