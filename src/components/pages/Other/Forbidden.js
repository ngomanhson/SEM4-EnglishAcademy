import { Link } from "react-router-dom";

function Forbidden() {
    return (
        <div className="rbt-error-area bg-gradient-11 rbt-section-gap">
            <div className="error-area">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-10">
                            <h1 className="title">Stop!</h1>
                            <h3 className="sub-title">Access forbidden</h3>
                            <p>You cannot access this resource.</p>
                            <Link to="/" className="rbt-btn btn-gradient icon-hover">
                                <span className="btn-text">Back To Home</span>
                                <span className="btn-icon">
                                    <i className="feather-arrow-right"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forbidden;
