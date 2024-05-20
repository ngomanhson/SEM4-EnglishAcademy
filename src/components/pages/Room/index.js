import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import config from "../../../config";

function Room() {
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate(`/room/${roomCode}`);
    };

    return (
        <>
            <Helmet>
                <title>Create Room | English Academy</title>
            </Helmet>
            <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="container">
                    <div className="row gy-5 row--30">
                        <div className="col-lg-5 mx-auto">
                            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                <Link to={config.routes.home}>
                                    <img src="assets/images/logo/logo.png" alt="English Academy" width={170} style={{ marginLeft: -10 }} />
                                </Link>

                                <div className="d-flex justify-content-between align-items-center">
                                    <h5 className="title mb-0 fw-normal" style={{ fontSize: 20 }}>
                                        Create Room
                                    </h5>
                                    <Link to={config.routes.home} className="text-primary fw-300 fz-14">
                                        Back to Home
                                    </Link>
                                </div>

                                <form onSubmit={handleFormSubmit} className="mt-3">
                                    <div className="rbt-form-group mb-4">
                                        <label htmlFor="room" className="mb-2 fz-14 text-dark">
                                            Room Code <span className="text-danger">*</span>
                                        </label>
                                        <input type="text" id="room" value={roomCode} onChange={(e) => setRoomCode(e.target.value)} placeholder="Enter room code" />
                                    </div>

                                    <button type="submit" className={`rbt-btn btn-md fw-normal btn-not__hover w-100 ${!roomCode ? "disabled" : ""}`} disabled={!roomCode}>
                                        <span>Create Room</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Room;
