import { LocalUser, RemoteUser, useIsConnected, useJoin, useLocalMicrophoneTrack, useLocalCameraTrack, usePublish, useRemoteUsers } from "agora-rtc-react";
import React, { useState } from "react";

export const Meeting = () => {
    const [calling, setCalling] = useState(false);
    const isConnected = useIsConnected();
    const [appId, setAppId] = useState("");
    const [channel, setChannel] = useState("");
    const [token, setToken] = useState("");

    useJoin({ appid: appId, channel: channel, token: token ? token : null }, calling);

    //local user
    const [micOn, setMic] = useState(true);
    const [cameraOn, setCamera] = useState(true);
    const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
    const { localCameraTrack } = useLocalCameraTrack(cameraOn);
    usePublish([localMicrophoneTrack, localCameraTrack]);

    //remote users
    const remoteUsers = useRemoteUsers();

    return (
        <div className="container">
            {isConnected ? (
                <div className="row">
                    <h1 className="fz-25 mb-0">Visual Call</h1>
                    <p className="fz-14 mb-3 fw-300">Friday 5 April 2024</p>
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="video-wrapper large-video">
                                    <LocalUser audioTrack={localMicrophoneTrack} cameraOn={cameraOn} micOn={micOn} videoTrack={localCameraTrack} cover="assets/images/icons/user-video.svg">
                                        <samp className="video-label">You</samp>
                                    </LocalUser>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {remoteUsers.map((user) => (
                                <div className="col-lg-4" key={user.uid}>
                                    <div className="video-wrapper">
                                        <RemoteUser cover="./assets/images/icons/user-video.svg" user={user}>
                                            <samp className="video-label">{user.uid}</samp>
                                        </RemoteUser>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {isConnected && (
                            <div className="row">
                                <div className="video-actions">
                                    <button className="btn-video__call" onClick={() => setMic((a) => !a)}>
                                        <i className={`feather-${!micOn ? "mic-off" : "mic"}`} />
                                    </button>
                                    <button className="btn-video__call" onClick={() => setCamera((a) => !a)}>
                                        <i className={`feather-${!cameraOn ? "video-off" : "video"}`} />
                                    </button>
                                    <button className="btn-video__call">
                                        <i className="feather-cast"></i>
                                    </button>
                                    <button className="btn-video__call missed" onClick={() => setCalling((a) => !a)}>
                                        {calling && <i className="feather-phone-missed" />}
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="rbt-elements-area bg-color-white rbt-section-gap">
                    <div className="container">
                        <div className="row gy-5 row--30">
                            <div className="col-lg-5 mx-auto">
                                <div className="rbt-contact-form contact-form-style-1 max-width-auto">
                                    <div className="text-center mb-4">
                                        <img src="assets/images/logo/logo.png" alt="English Academy" width={170} />
                                        <h5 className="title mb-0 fw-normal">Login with your email</h5>
                                    </div>
                                    <div className="join-room">
                                        <div className="rbt-form-group mb-3">
                                            <input type="text" className="form-control" onChange={(e) => setAppId(e.target.value)} placeholder="App ID" value={appId} />
                                        </div>
                                        <div className="rbt-form-group mb-3">
                                            <input type="text" className="form-control" onChange={(e) => setChannel(e.target.value)} placeholder="Channel" value={channel} />
                                        </div>

                                        <div className="rbt-form-group mb-5">
                                            <input type="text" className="form-control" onChange={(e) => setToken(e.target.value)} placeholder="Token" value={token} />
                                        </div>

                                        <button
                                            className={`rbt-btn btn-md fw-normal btn-not__hover w-100 ${!appId || !channel ? "disabled" : ""}`}
                                            disabled={!appId || !channel}
                                            onClick={() => setCalling(true)}
                                        >
                                            <span>Join Channel</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Meeting;
