import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../../../services/api";
import url from "../../../../../services/url";
import AudioPlayer from "react-h5-audio-player";
import Loading from "../../../../layouts/Loading";
import NotFound from "../../../Other/NotFound";
import { formatHour } from "../../../../../utils/FormatTime";
import Lottie from "lottie-react";
import ComingSoon from "../../../../../lottie/ComingSoon.json";
import BreadcrumbTest from "../../../../layouts/BreadcrumbTest";
import { useAxiosGet } from "../../../../../hooks";
import { getAccessToken } from "../../../../../utils/auth";
import { AudioRecorder } from "react-audio-voice-recorder";
import { toast } from "react-toastify";

function TestOffline() {
    const { slug } = useParams();

    const navigate = useNavigate();

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const [dataNotFound, setDataNotFound] = useState(false);
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);

    const [timeRemaining, setTimeRemaining] = useState(1800);
    const [startTime, setStartTime] = useState(null);

    const studentId = 1;

    const { response, loading, status } = useAxiosGet({
        path: url.OFFLINE_COURSE.SUBJECT_TEST + `/${slug}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const testData = useMemo(() => response || [], [response]);

    useEffect(() => {
        if (status === 404) {
            setDataNotFound(true);
        } else {
            setDataNotFound(false);
        }
    }, [status]);

    const handleConfirm = () => {
        setConfirmed(true);
        setStartTime(Date.now());
    };

    const handleAnswerSelect = (questionId, selectedOption) => {
        const updatedAnswers = { ...selectedAnswers };
        updatedAnswers[questionId] = selectedOption;
        setSelectedAnswers(updatedAnswers);
    };

    const handleQuestionClick = (questionId) => {
        setSelectedQuestionId(questionId);
    };

    const handleSubmitTest = useCallback(async () => {
        try {
            const answersToSubmit = testData.testOfflineSessionDetails.flatMap((session) =>
                session.questionTestOnlineDTOS.map((question) => ({
                    content: selectedAnswers[question.id] || "",
                    questionId: question.id,
                }))
            );

            const endTime = Date.now();
            const elapsedTimeInSeconds = Math.floor((endTime - startTime) / 1000);

            const dataSubmit = {
                time: elapsedTimeInSeconds,
                createAnswerStudentList: answersToSubmit,
            };

            const response = await api.post(url.ONLINE_COURSE.SUBMIT_TEST + `/${slug}/${studentId}`, dataSubmit);

            if (response.status === 200) {
                navigate(`/result-test/${response.data.data}`);
            }
        } catch (error) {
            console.log(error);
        }
    }, [navigate, selectedAnswers, startTime, slug, studentId, testData]);

    useEffect(() => {
        if (confirmed) {
            const timer = setInterval(() => {
                setTimeRemaining((prevTime) => {
                    if (prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        clearInterval(timer);
                        handleSubmitTest();
                        return 0;
                    }
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [handleSubmitTest, confirmed]);

    const totalSession = testData.testOfflineSessionDetails ? testData.testOfflineSessionDetails.length : 0;

    const handleNextSession = () => {
        setCurrentSessionIndex((prevIndex) => prevIndex + 1);
    };

    const handlePrevSession = () => {
        setCurrentSessionIndex((prevIndex) => prevIndex - 1);
    };

    const addAudioElement = (blob, parentElement) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        parentElement.appendChild(audio);
    };

    const parentElement = document.getElementById("parentElementAudio");

    const [file, setFile] = useState(null);
    const [fileSubmit, setFileSubmit] = useState(false);

    const validationFile = ["mp3", "webm,", "flac"];

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
            if (!validationFile.includes(fileExtension)) {
                toast.error("Only .mp3, .webm, .flac files are allowed.", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    theme: "colored",
                });
                // You can also reset the input field if needed
                e.target.value = "";
                return;
            }
        }

        setFile(selectedFile);
    };

    const handPostAudio = async () => {
        try {
            const formData = new FormData();
            formData.append("file", file);
            setFileSubmit(true);

            const response = await api.post(url.OFFLINE_COURSE.TEST_OFFLINE_FILE, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (response.status === 200) {
                toast.success("Added voice successfully!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                setFileSubmit(false);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Error! An error occurred. Please try again later.", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setFileSubmit(false);
        }
    };

    return (
        <>
            {loading && <Loading />}
            {dataNotFound ? (
                <NotFound />
            ) : testData.testOfflineSessionDetails && testData.testOfflineSessionDetails.length === 0 ? (
                <div className="col-lg-4 mx-auto">
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
                        <Lottie animationData={ComingSoon} loop={true} />
                    </div>
                </div>
            ) : (
                <div className="rbt-button-area">
                    <div className="container">
                        {!confirmed ? (
                            <div className="row mt--50">
                                <div className="col-lg-6 mx-auto">
                                    <div className="text-center">
                                        {/* <BreadcrumbTest title={testData.title} path={`/learning/${courseSlug}`} /> */}

                                        <div className="rbt-splash-service no-translate support h-100 not-hover mt-3">
                                            <div className="w-100">
                                                <h5 className="font-system fw-300">
                                                    <span className="text-danger">*</span> Some notes before taking the test
                                                </h5>

                                                <p className="font-system fw-300 m-0">
                                                    The test has a total of {totalSession} part and {testData.totalQuestion} questions:
                                                </p>
                                                <ul className="mb-4">
                                                    {testData.testOfflineSessionDetails?.map((session, sessionIndex) => (
                                                        <li className="font-system fw-300 mb-2" key={sessionIndex}>
                                                            Part {sessionIndex + 1}: {session.sessionName} <span>{session.totalQuestion} questions.</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <p className="font-system fw-300 mt-2" style={{ fontSize: 16 }}>
                                                    Instructions for taking the test: {testData.description}
                                                </p>
                                                <div className="text-center mt-5">
                                                    <button type="button" className="rbt-moderbt-btn" onClick={handleConfirm}>
                                                        <span className="moderbt-btn-text">Agree and start working</span>
                                                        <i className="feather-arrow-right"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="content">
                                <div className="question" style={{ display: "block" }}>
                                    <div className="mt-5">
                                        <BreadcrumbTest title={testData.title} path={`/learning/${slug}`} />
                                    </div>

                                    <div className="row mt--50">
                                        <div className="col-lg-9">
                                            {testData.testOfflineSessionDetails?.map((session, sessionIndex) => (
                                                <div className="widget border-lft-prm-opacity" style={{ display: currentSessionIndex === sessionIndex ? "block" : "none" }} key={sessionIndex}>
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-start mb-5">
                                                            <div>
                                                                <h4 className="mb-2">
                                                                    Part {sessionIndex + 1}: {session.sessionName}
                                                                </h4>
                                                                <p className="fw-300">The total number of questions: {session.totalQuestion}</p>
                                                            </div>
                                                            <div className="d-flex justify-content-end align-items-center">
                                                                <button type="button" className="btn-circle" onClick={handlePrevSession} disabled={currentSessionIndex === 0}>
                                                                    <i className="feather-chevron-left"></i>
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    className="btn-circle ml-2"
                                                                    onClick={handleNextSession}
                                                                    disabled={currentSessionIndex === testData.testOfflineSessionDetails?.length - 1}
                                                                >
                                                                    <i className="feather-chevron-right"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        {session.questionTestOfflineDTOS?.map((question, questionIndex) => (
                                                            <div className="rbt-single-quiz mb-5" key={questionIndex}>
                                                                <h5 className="exam__inner-desc fw-500 font-system" style={{ fontSize: 18 }}>
                                                                    Questions {questionIndex + 1}: {question.title}
                                                                </h5>
                                                                {question.image && <img src={question.image} className="w-100 mb-5" alt="" />}
                                                                {question.audiomp3 && <AudioPlayer src={question.audiomp3} autoPlay={false} className="mb-5 w-100" />}

                                                                <div className="row">
                                                                    {["option1", "option2", "option3", "option4"].map((option, optionIndex) => (
                                                                        <div className="col-lg-6" key={optionIndex}>
                                                                            {question[option] !== null && (
                                                                                <div className="answer-group">
                                                                                    <label className={`answers-group__label ${selectedAnswers[question.id] === question[option] ? "checked" : ""}`}>
                                                                                        <input
                                                                                            type="radio"
                                                                                            className="answers-group__input"
                                                                                            name={`answer_${question.id}`}
                                                                                            id={`answer_${question.id}_${option}`}
                                                                                            checked={selectedAnswers[question.id] === question[option]}
                                                                                            onChange={() => handleAnswerSelect(question.id, question[option])}
                                                                                        />
                                                                                        <div className="d-flex align-items-center font-system">
                                                                                            <div className="btn-choose">{String.fromCharCode(65 + optionIndex)}</div> {question[option]}
                                                                                        </div>
                                                                                    </label>
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </div>

                                                                {question.type === 1 && (
                                                                    <div className="d-flex flex-column justify-content-center align-items-center background-secondary p-5" id="parentElementAudio">
                                                                        {/* <button type="button" className="btn btn-circle-2">
                                                                        <i className="fas fa-microphone"></i>
                                                                    </button> */}
                                                                        <div className="mt-3 text-center">
                                                                            <div className="d-flex justify-content-center align-items-center">
                                                                                <AudioRecorder
                                                                                    onRecordingComplete={(blob) => addAudioElement(blob, parentElement)}
                                                                                    audioTrackConstraints={{
                                                                                        noiseSuppression: true,
                                                                                        echoCancellation: true,
                                                                                    }}
                                                                                    downloadOnSavePress={true}
                                                                                    downloadFileExtension="webm"
                                                                                />
                                                                            </div>
                                                                            <p className="fw-light mt-3 mb-0" style={{ fontSize: 15 }}>
                                                                                Click to start recording
                                                                            </p>
                                                                            <p className="fw-light mb-4" style={{ fontSize: 16 }}>
                                                                                Then select the recording file and press "Confirm" to complete.
                                                                            </p>

                                                                            {/* <label className="rbt-splash-service no-translate support h-100 not-hover mt-3 text-center" htmlFor="audio">
                                                                                        <div style={{ flex: 1 }} className="d-flex align-items-center justify-content-center">
                                                                                            <i className="feather-file-plus mr--10" style={{ fontSize: 35 }}></i> Choose File
                                                                                        </div>
                                                                                    </label>
                                                                                    <input
                                                                                        type="file"
                                                                                        name="file"
                                                                                        className="d-none"
                                                                                        onChange={handleFileSelect}
                                                                                        accept=".mp3, .webm, .flac"
                                                                                        id="audio"
                                                                                    /> */}
                                                                            <div className="d-flex justify-content-center align-items-center mb-5">
                                                                                <input
                                                                                    class="form-control form-control-lg"
                                                                                    name="file"
                                                                                    style={{ height: "inherit" }}
                                                                                    onChange={handleFileSelect}
                                                                                    accept=".mp3, .webm, .flac"
                                                                                    type="file"
                                                                                />

                                                                                {!fileSubmit && (
                                                                                    <button
                                                                                        className="rbt-btn bg-primary-opacity btn-not__hover fz-14 ml--10"
                                                                                        style={{ height: 30, lineHeight: "30px" }}
                                                                                        onClick={handPostAudio}
                                                                                    >
                                                                                        Confirm
                                                                                    </button>
                                                                                )}
                                                                            </div>

                                                                            {fileSubmit && (
                                                                                <button type="button" className="rbt-btn bg-primary-opacity btn-not__hover btn-not__hover w-100 mt-4" disabled>
                                                                                    <i className="fa fa-spinner fa-spin p-0"></i> Processing in progress...
                                                                                </button>
                                                                            )}

                                                                            {/* <div className="mb-3">
                                                                                <input
                                                                                    className="form-control"
                                                                                    type="file"
                                                                                    style={{ height: 50 }}
                                                                                    onChange={handleFileSelect}
                                                                                    accept=".mp3, .webm, .flac"
                                                                                    id="audio"
                                                                                />
                                                                                <button
                                                                                    className="rbt-btn btn-gradient btn-gradient-2 btn-not__hover w-100 mt-4"
                                                                                    style={{ height: 45, lineHeight: "45px" }}
                                                                                    onClick={handPostAudio}
                                                                                >
                                                                                    Submit voice
                                                                                </button>
                                                                            </div> */}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-lg-3">
                                            <div className="answers__inner">
                                                <div className="td-sidebar">
                                                    <div className="widget border-a-secondary">
                                                        <h5 className="text-center border-bt-secondary pb-3">Time remaining: {formatHour(timeRemaining)}</h5>

                                                        {testData.testOfflineSessionDetails?.map((session, index) => (
                                                            <div key={index}>
                                                                <p className="m-0 fz-16 label-session" onClick={() => setCurrentSessionIndex(index)}>
                                                                    Part {index + 1}: {session.sessionName}
                                                                </p>
                                                                <div className="mt-3 choice-wrapper mb-3">
                                                                    {session.questionTestOfflineDTOS.map((question, questionIndex) => (
                                                                        <button
                                                                            type="button"
                                                                            key={question.id}
                                                                            className={`choice-wrapper__btn ${selectedAnswers[question.id] ? "active" : ""}`}
                                                                            onClick={() => handleQuestionClick(selectedQuestionId)}
                                                                        >
                                                                            {questionIndex + 1}
                                                                        </button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div className="d-flex justify-content-end">
                                                            <button
                                                                type="button"
                                                                className="rbt-btn bg-pink-opacity rbt-marquee-btn w-100 mt-4 btn-not__hover"
                                                                style={{ height: 50, lineHeight: "50px" }}
                                                                onClick={handleSubmitTest}
                                                            >
                                                                <i className="fa fa-stop-circle"></i> Finish Test
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default TestOffline;
