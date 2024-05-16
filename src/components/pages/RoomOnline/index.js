import { useState } from "react";
import VideoRoom from "./VideoRoom";

function RoomOnline() {
    const [joined, setJoined] = useState(false);

    return (
        <div className="container">
            {joined ? (
                <>
                    <div className="video-content">
                        <h1 className="fz-25 mb-0">Visual Call</h1>
                        <p className="fz-14 mb-3 fw-300">Friday 5 April 2024</p>
                    </div>
                    <VideoRoom />
                </>
            ) : (
                <>
                    <div className="rbt-elements-area bg-color-white rbt-section-gap">
                        <div className="container">
                            <div className="row gy-5 row--30">
                                <div className="col-lg-5 mx-auto">
                                    <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                        <div className="text-left mb-4">
                                            <h5 className="title mb-0 fw-normal">Video calls and meetings for everyone</h5>
                                            <p className="fw-300 fz-12">English Academy provides secure, easy-to-use video calls and meetings for everyone, on any device.</p>
                                        </div>

                                        <form className="max-width-auto">
                                            <div className="rbt-form-group mb-3">
                                                <input type="text" className="form-control" required autoFocus />
                                            </div>

                                            <div className="mt-4">
                                                <button type="submit" className="rbt-btn btn-md fw-normal btn-not__hover fz-15 w-100" onClick={() => setJoined(true)}>
                                                    Join Room
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default RoomOnline;
