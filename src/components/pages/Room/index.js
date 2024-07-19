import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import config from "../../../config";
import url from "../../../services/url";
import { getAccessToken } from "../../../utils/auth";
import { toast } from "react-toastify";
import api from "../../../services/api";

function Room() {
    const navigate = useNavigate();
    const [roomCode, setRoomCode] = useState("");

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const checkRequest = await api.get(url.ROOM_MEETING.CHECK_STUDENT + `/${roomCode}`, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            console.log(checkRequest.data.status);
            if (checkRequest.data.status) {
                navigate(`/room/${roomCode}`);
            }
        } catch (error) {
            toast.error("This room does not exist or you may not have permission to access.", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    };

    return (
        <>
            <Helmet>
                <title>Room | English Academy</title>
            </Helmet>
            <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
                <div className="container">
                    <div className="row gy-5 row--30">
                        <div className="col-lg-5 mx-auto">
                            <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to={config.routes.home}>
                                        <img src="assets/images/logo/logo.png" alt="English Academy" width={170} style={{ marginLeft: -10 }} />
                                    </Link>

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
                                        <span>Join Room</span>
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
