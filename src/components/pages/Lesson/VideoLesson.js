import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

function VideoLesson(props) {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);
    const [controlsVisible, setControlsVisible] = useState(true);

    const handlePlay = () => {
        setPlaying(true);
    };

    const handlePause = () => {
        setPlaying(false);
    };

    const handleProgressChange = (e) => {
        const newProgress = parseFloat(e.target.value);
        setProgress(newProgress);
        playerRef.current.seekTo(newProgress, "fraction");
    };

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (newVolume === 0) {
            setMuted(true);
        } else {
            setMuted(false);
        }
    };

    const handleMuteToggle = () => {
        setMuted(!muted);
        if (muted) {
            setVolume(1);
        } else {
            setVolume(0);
        }
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    const handleDuration = (duration) => {
        setDuration(duration);
    };

    const handleProgress = (progress) => {
        setCurrentTime(progress.playedSeconds);
        setProgress(progress.played);

        props.onCurrentTimeChange(progress.playedSeconds);
    };

    useEffect(() => {
        const hideControlsTimeout = setTimeout(() => {
            setControlsVisible(false);
        }, 3000);

        return () => clearTimeout(hideControlsTimeout);
    }, [controlsVisible]);

    const showControls = () => {
        setControlsVisible(true);
    };

    return (
        <div className="plyr plyr--full-ui plyr--video plyr--youtube plyr--fullscreen-enabled plyr--paused plyr--stopped plyr__poster-enabled" onMouseMove={showControls} onTouchStart={showControls}>
            {controlsVisible && (
                <div className="plyr__controls">
                    <button type="button" className="plyr__controls__item plyr__control" onClick={playing ? handlePause : handlePlay}>
                        {playing ? <i className="feather-pause"></i> : <i className="fas fa-play"></i>}
                    </button>

                    <div className="plyr__controls__item plyr__progress__container">
                        <div className="plyr__progress">
                            <input
                                type="range"
                                min={0}
                                max={1}
                                step="any"
                                value={progress}
                                onChange={handleProgressChange}
                                style={{
                                    "--value": `${progress * 100}%`,
                                }}
                            />
                        </div>
                    </div>

                    <span className="plyr__controls__item plyr__time--current">
                        {formatTime(currentTime)} / {formatTime(duration)}
                    </span>

                    <div className="plyr__controls__item plyr__volume">
                        <button type="button" className="plyr__control" onClick={handleMuteToggle}>
                            {muted ? <i className="feather-volume-x"></i> : <i className="feather-volume-2"></i>}
                        </button>
                        <input
                            type="range"
                            min={0}
                            max={1}
                            step="any"
                            value={volume}
                            onChange={handleVolumeChange}
                            style={{
                                "--value": `${volume * 100}%`,
                            }}
                        />
                    </div>

                    <button className="plyr__controls__item plyr__control" type="button">
                        <i className="feather-maximize"></i>
                        {/* <i className="feather-minimize"></i> */}
                    </button>
                </div>
            )}

            <div className="plyr__video-wrapper plyr__video-embed" style={{ aspectRatio: 16 / 9 }}>
                <ReactPlayer
                    ref={playerRef}
                    url={props.src}
                    playing={playing}
                    controls={false}
                    volume={volume}
                    muted={muted}
                    onDuration={handleDuration}
                    onProgress={handleProgress}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    width="100%"
                    height="auto"
                    config={{
                        youtube: {
                            playerVars: { showinfo: 1 },
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default VideoLesson;
