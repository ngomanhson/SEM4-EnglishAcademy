import { useEffect, useRef } from "react";

function VideoPlayer({ user, onVideoClick, isLarge }) {
    const ref = useRef();

    useEffect(() => {
        user.videoTrack.play(ref.current);
    }, [user]);

    const handleClick = () => {
        if (onVideoClick) {
            onVideoClick(user.uid);
        }
    };

    return (
        <div ref={ref} className={`video-wrapper ${isLarge ? "large-video" : ""}`} onDoubleClick={handleClick}>
            <p className="video-label">{user.uid}</p>
        </div>
    );
}

export default VideoPlayer;
