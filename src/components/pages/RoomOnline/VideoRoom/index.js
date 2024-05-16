import AgoraRTC from "agora-rtc-sdk-ng";
import { useEffect, useState, useRef } from "react";
import VideoPlayer from "../VideoPlayer";
import userJoinedSound from "../../../../sound/notification.wav";

const APP_ID = "4f2bc4d6cbc64238a52d34f6f80abbcf";
const TOKEN = "007eJxTYFjU1eoqXR/ZwpN9SayM9ficjWZ6XiKv0qVKvkVrMwRsYFdgMEkzSko2STFLTko2MzEytkg0NUoxNkkzS7MwSExKSk7jv+qa1hDIyKAkK8XEyACBID47Q1F+fq5uWiYDAwCjvRyL";
const CHANNEL = "room-fi";

const client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
});

function VideoRoom() {
    const [users, setUsers] = useState([]);
    // const [localTracks, setLocalTracks] = useState([]);
    const localTracksRef = useRef([]);
    const [largeVideo, setLargeVideo] = useState(null);

    const [isMicMuted, setIsMicMuted] = useState(false);
    const [isCameraOff, setIsCameraOff] = useState(false);
    const [isScreenSharing, setIsScreenSharing] = useState(false);

    const handleUserJoined = async (user, mediaType) => {
        await client.subscribe(user, mediaType);

        if (mediaType === "video") {
            setUsers((previousUsers) => [...previousUsers, user]);
        }

        if (mediaType === "audio") {
            user.audioTrack.play();
        }
    };

    const playUserJoinedSound = () => {
        const audio = new Audio(userJoinedSound);
        audio.play();
    };

    useEffect(() => {
        playUserJoinedSound();
    }, []);

    const handleUserLeft = (user) => {
        setUsers((previousUsers) => previousUsers.filter((u) => u.uid !== user.uid));
    };

    useEffect(() => {
        client.on("user-published", handleUserJoined);
        client.on("user-left", handleUserLeft);

        client
            .join(APP_ID, CHANNEL, TOKEN, null)
            .then((uid) => Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid]))
            .then(([tracks, uid]) => {
                const [audioTrack, videoTrack] = tracks;
                // setLocalTracks(tracks);
                localTracksRef.current = tracks;
                setUsers((previousUsers) => [
                    ...previousUsers,
                    {
                        uid,
                        videoTrack,
                        audioTrack,
                    },
                ]);
                client.publish(tracks);
            });

        return () => {
            for (let localTrack of localTracksRef.current) {
                // for (let localTrack of localTracks) {
                localTrack.stop();
                localTrack.close();
            }
            client.off("user-published", handleUserJoined);
            client.off("user-left", handleUserLeft);
            client.unpublish(localTracksRef.current).then(() => client.leave());
        };
    }, []);

    const handleVideoClick = (uid) => {
        setLargeVideo(uid);
        setUsers((previousUsers) => {
            const updatedUsers = previousUsers.filter((user) => user.uid !== uid);
            const clickedUser = previousUsers.find((user) => user.uid === uid);
            return [clickedUser, ...updatedUsers];
        });
    };

    const toggleMic = (user) => {
        if (user.audioTrack) {
            if (!isMicMuted) {
                user.audioTrack.setEnabled(false);
                setIsMicMuted(true);
            } else {
                user.audioTrack.setEnabled(true);
                setIsMicMuted(false);
            }
        }
    };

    const toggleCamera = (user) => {
        if (user.videoTrack) {
            if (!isCameraOff) {
                user.videoTrack.setEnabled(false);
                setIsCameraOff(true);
            } else {
                user.videoTrack.setEnabled(true);
                setIsCameraOff(false);
            }
        }
    };

    const toggleScreenSharing = () => {
        setIsScreenSharing(!isScreenSharing);
    };

    return (
        <div className="row">
            <div className="col-lg-9">
                <div className="row">
                    {users.map((user) => (
                        <div className={`col-lg-${user.uid === largeVideo ? 12 : 4}`} key={user.uid}>
                            <VideoPlayer key={user.uid} user={user} onVideoClick={handleVideoClick} isLarge={user.uid === largeVideo} />
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="video-actions">
                        <button className="btn-video__call" onClick={toggleMic}>
                            {isMicMuted ? <i className="feather-mic-off"></i> : <i className="feather-mic"></i>}
                        </button>

                        <button className="btn-video__call" onClick={toggleCamera}>
                            {isCameraOff ? <i className="feather-video-off"></i> : <i className="feather-video"></i>}
                        </button>

                        <button className="btn-video__call" onClick={toggleScreenSharing}>
                            {isScreenSharing ? <i className="feather-slash"></i> : <i className="feather-cast"></i>}
                        </button>

                        <button className="btn-video__call missed">
                            <i className="feather-phone-missed"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    );
}

export default VideoRoom;
