import { Link } from "react-router-dom";

function OurApp() {
    return (
        <div className="rbt-brand-area bg-color-extra2 rbt-section-gap">
            <div className="container">
                <div className="row g-5">
                    <div className="col-xl-7 col-lg-7 order-lg-1 order-md-2 order-2">
                        <div className="content">
                            <img src="./assets/images/others/app.png" alt="" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 order-lg-2 order-md-1 order-1">
                        <div className="content text-lg-start text-center">
                            <span className="rbt-badge-6 bg-primary-opacity">OUR APP</span>
                            <h2>
                                Learn From <br />
                                <span className="color-primary">Anywhere</span>
                            </h2>

                            <p className="fw-300 fz-16">Take classes on the go with the educrat app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>

                            <div className="d-flex align-items-center gap-5 justify-content-lg-start justify-content-center">
                                <Link to="https://apps.apple.com/app/apple-store-link" target="_blank" rel="noopener noreferrer">
                                    <img src="./assets/images/others/appstore.png" alt="" />
                                </Link>
                                <Link to="https://play.google.com/store/apps/google-play-link" target="_blank" rel="noopener noreferrer">
                                    <img src="./assets/images/others/googleplay.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurApp;
