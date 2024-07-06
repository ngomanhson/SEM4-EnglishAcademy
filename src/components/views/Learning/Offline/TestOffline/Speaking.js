import { AudioRecorder } from "react-audio-voice-recorder";

function Speaking({ question, audioRefs, fileInputRefs, addAudioElement, handleFileSelect, selectedFiles, handPostAudio, fileSubmit, selectedAnswers }) {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center background-secondary  p-5">
            {selectedAnswers[question.id] ? (
                <div className="text-center">
                    <img src="assets/images/icons/card-icon-1.png" alt="" />
                    <p className="mt-3">You have completed this question!</p>
                </div>
            ) : (
                <div className="mt-3 text-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <AudioRecorder
                            onRecordingComplete={(blob) => addAudioElement(blob, question.id)}
                            audioTrackConstraints={{
                                noiseSuppression: true,
                                echoCancellation: true,
                            }}
                        />
                    </div>
                    <p className="fw-light my-3 fz-16"> Click to start recording, press "Confirm" to finish. </p>
                    {/* <p className="fw-light mb-0 fz-16">Select the recording file and press "Confirm" to finish.</p> */}

                    <p className="fw-light mb-4 fz-16 text-danger">Note: After pressing "Confirm," recording cannot be repeated.</p>

                    <div className="row">
                        <div className="col-lg-9">
                            <input
                                className="form-control form-control-lg"
                                name="file"
                                style={{ height: "inherit" }}
                                accept=".mp3, .webm, .flac"
                                type="file"
                                ref={(el) => (fileInputRefs.current[question.id] = el)}
                                id={`answer_${question.id}`}
                                onChange={(e) => handleFileSelect(e, question.id)}
                                hidden
                            />
                            <div className="parent-audio" ref={(el) => (audioRefs.current[question.id] = el)}></div>
                        </div>

                        <div className="col-lg-3 my-auto">
                            {fileSubmit[question.id] ? (
                                <button
                                    style={{ height: 30, lineHeight: "30px" }}
                                    className="d-flex align-items-center justify-content-center rbt-btn bg-primary-opacity btn-not__hover fz-14 w-100 p-0"
                                    disabled
                                >
                                    <div className="dot-loader mt-0"></div>
                                </button>
                            ) : (
                                selectedFiles[question.id] && (
                                    <button className="rbt-btn bg-primary-opacity btn-not__hover fz-14 w-100 p-0" style={{ height: 30, lineHeight: "30px" }} onClick={() => handPostAudio(question.id)}>
                                        <i className="feather-check-circle"></i> Confirm
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Speaking;
