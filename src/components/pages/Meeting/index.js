import { LocalUser, RemoteUser, useIsConnected, useJoin, useLocalMicrophoneTrack, useLocalCameraTrack, usePublish, useRemoteUsers, RemoteVideoTrack } from "agora-rtc-react";
import { useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import config from "../../../config/index";
import { Helmet } from "react-helmet";

import AgoraRTC from "agora-rtc-sdk-ng";

function Meeting() {
    const [calling, setCalling] = useState(false);
    const isConnected = useIsConnected();
    const [channel, setChannel] = useState("");
    const [largeVideo, setLargeVideo] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    const token = "007eJxTYHjcsEo+wTXuwtcd00TbtvMdZr9X3d7gZXPr5c69PHUFJ38pMJikGSUlm6SYJSclm5kYGVskmhqlGJukmaVZGCQmJSWnPfvjmfaNyytt3qEURkYGRgYWIAYBJjDJDCZZwCQ7Q1F+fq5uWiYDAwDUfCPY";
    const appId = "4f2bc4d6cbc64238a52d34f6f80abbcf";

    useJoin({ appid: appId, channel: channel, token: token ? token : null }, calling);

    //local user
    const [micOn, setMic] = useState(true);
    const [cameraOn, setCamera] = useState(true);
    const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
    const { localCameraTrack } = useLocalCameraTrack(cameraOn);

    const [screenOn, setScreen] = useState(false);
    const [screenTrack, setScreenTrack] = useState(null);
    usePublish([localMicrophoneTrack, localCameraTrack]);

    //remote users
    const remoteUsers = useRemoteUsers();

    const handleVideoClick = (user) => {
        if (selectedUser === user.uid) {
            setLargeVideo(null);
            setSelectedUser(null);
        } else {
            setLargeVideo(user.uid);
            setSelectedUser(user.uid);
        }
    };

    const currentDate = new Date();
    const formattedDate = format(currentDate, "EEEE, MMMM d yyyy");

    const startScreenShare = async () => {
        try {
            if (isConnected) {
                const screenTrack = await AgoraRTC.createScreenVideoTrack();
                setScreen(true);
                setScreenTrack(screenTrack);
            } else {
                console.error("Not connected to channel yet!");
            }
        } catch (error) {
            console.error("Failed to start screen sharing:", error);
        }
    };

    const stopScreenShare = async () => {
        try {
            if (screenTrack) {
                screenTrack.close();
                setScreenTrack(null);
                setScreen(false);
            }
        } catch (error) {
            console.error("Failed to stop screen sharing:", error);
        }
    };

    return (
        <>
            <Helmet>
                <title>Meeting | English Academy</title>
            </Helmet>
            <div className="container">
                {isConnected ? (
                    <div className="row">
                        <h1 className="fz-25 mt-3 mb-0">Visual Room: {channel}</h1>
                        <p className="fz-14 mb-3 fw-300">{formattedDate}</p>
                        <div className="col-lg-9">
                            <div className="row">
                                {screenOn && (
                                    <div className="col-lg-12">
                                        {screenTrack && (
                                            <div className="video-wrapper large-video shadow">
                                                <RemoteVideoTrack play track={screenTrack} style={{ width: "100%", height: "100%" }} />
                                                <samp className="video-label">Screen Share</samp>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {remoteUsers.map(
                                    (user) =>
                                        user.uid === largeVideo && (
                                            <div className={`col-lg-${screenOn ? 4 : 12}`} key={user.uid} onDoubleClick={() => handleVideoClick(user)}>
                                                <div className={`video-wrapper ${screenOn ? "" : "large-video"}`}>
                                                    <RemoteUser cover="./assets/images/icons/user-video.svg" user={user}>
                                                        <samp className="video-label">{user.uid}</samp>
                                                    </RemoteUser>
                                                </div>
                                            </div>
                                        )
                                )}

                                <div className="col-lg-4">
                                    <div className="video-wrapper">
                                        <LocalUser audioTrack={localMicrophoneTrack} cameraOn={cameraOn} micOn={micOn} videoTrack={localCameraTrack} cover="assets/images/icons/user-video.svg">
                                            <samp className="video-label">You</samp>
                                        </LocalUser>
                                    </div>
                                </div>

                                {remoteUsers.map(
                                    (user) =>
                                        user.uid !== largeVideo && (
                                            <div className="col-lg-4" key={user.uid} onDoubleClick={() => handleVideoClick(user)}>
                                                <div className="video-wrapper">
                                                    <RemoteUser cover="./assets/images/icons/user-video.svg" user={user}>
                                                        <samp className="video-label">{user.uid}</samp>
                                                    </RemoteUser>
                                                </div>
                                            </div>
                                        )
                                )}
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
                                        <button className="btn-video__call" onClick={screenOn ? stopScreenShare : startScreenShare}>
                                            {screenOn ? <i className="feather-stop-circle cast-animation" /> : <i className="feather-cast" />}
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
                                            <Link to={config.routes.home}>
                                                <img src="assets/images/logo/logo.png" alt="English Academy" width={170} />
                                            </Link>
                                        </div>
                                        <div className="join-room">
                                            <div className="rbt-form-group mb-4">
                                                <input type="text" className="form-control" onChange={(e) => setChannel(e.target.value)} placeholder="Enter Channel" value={channel} />
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
        </>
    );
}
export default Meeting;
