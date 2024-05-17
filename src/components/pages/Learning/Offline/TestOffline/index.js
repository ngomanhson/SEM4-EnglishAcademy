// import { useCallback, useEffect, useMemo, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import api from "../../../../../services/api";
// import url from "../../../../../services/url";
// import AudioPlayer from "react-h5-audio-player";
// import Loading from "../../../../layouts/Loading";
// import NotFound from "../../../Other/NotFound";
// import { formatHour } from "../../../../../utils/FormatTime";
// import Lottie from "lottie-react";
// import ComingSoon from "../../../../../lottie/ComingSoon.json";
// import BreadcrumbTest from "../../../../layouts/BreadcrumbTest";
// import { useAxiosGet } from "../../../../../hooks";
// import { getAccessToken } from "../../../../../utils/auth";
// import { AudioRecorder } from "react-audio-voice-recorder";
// import { toast } from "react-toastify";
// import config from "../../../../../config";
// import Swal from "sweetalert2";

// function TestOffline() {
//     const { slug } = useParams();

//     const navigate = useNavigate();

//     const [selectedAnswers, setSelectedAnswers] = useState({});
//     const [selectedQuestionId, setSelectedQuestionId] = useState(null);
//     const [confirmed, setConfirmed] = useState(false);
//     const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
//     const [fileUrl, setFileUrl] = useState("");

//     const [timeRemaining, setTimeRemaining] = useState(1800);

//     const { response, loading, errorStatus } = useAxiosGet({
//         path: url.OFFLINE_COURSE.SUBJECT_TEST + `/${slug}`,
//         headers: {
//             Authorization: `Bearer ${getAccessToken()}`,
//         },
//     });

//     const testData = useMemo(() => response || [], [response]);

//     const handleConfirm = () => {
//         setConfirmed(true);
//     };

//     const handleAnswerSelect = (questionId, selectedOption) => {
//         const updatedAnswers = { ...selectedAnswers };
//         updatedAnswers[questionId] = selectedOption || fileUrl;
//         setSelectedAnswers(updatedAnswers);
//     };

//     const handleQuestionClick = (questionId) => {
//         setSelectedQuestionId(questionId);
//     };

//     const handleSubmitTest = useCallback(async () => {
//         try {
//             const answersToSubmit = testData.testOfflineSessionDetails.flatMap((session) =>
//                 session.questionTestOfflineDTOS.map((question) => ({
//                     content: selectedAnswers[question.id] || "",
//                     questionId: question.id,
//                 }))
//             );

//             const response = await api.post(url.OFFLINE_COURSE.TEST_OFFLINE_SUBMIT + `/${slug}`, answersToSubmit, {
//                 headers: {
//                     Authorization: `Bearer ${getAccessToken()}`,
//                 },
//             });

//             if (response.status === 200) {
//                 Swal.fire({
//                     title: "Good job!",
//                     text: "Test submitted successfully!",
//                     icon: "success",
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         navigate(config.routes.home);
//                     }
//                 });
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }, [navigate, selectedAnswers, slug, testData]);

//     useEffect(() => {
//         if (confirmed) {
//             const timer = setInterval(() => {
//                 setTimeRemaining((prevTime) => {
//                     if (prevTime > 0) {
//                         return prevTime - 1;
//                     } else {
//                         clearInterval(timer);
//                         handleSubmitTest();
//                         return 0;
//                     }
//                 });
//             }, 1000);
//             return () => clearInterval(timer);
//         }
//     }, [handleSubmitTest, confirmed]);

//     const totalSession = testData.testOfflineSessionDetails ? testData.testOfflineSessionDetails.length : 0;

//     const handleNextSession = () => {
//         setCurrentSessionIndex((prevIndex) => prevIndex + 1);
//     };

//     const handlePrevSession = () => {
//         setCurrentSessionIndex((prevIndex) => prevIndex - 1);
//     };

//     const addAudioElement = (blob, parentElement) => {
//         const url = URL.createObjectURL(blob);
//         const audio = document.createElement("audio");
//         audio.src = url;
//         audio.controls = true;
//         parentElement.appendChild(audio);
//     };

//     const parentElement = document.getElementById("parentElementAudio");

//     const [file, setFile] = useState({});
//     const [fileSubmit, setFileSubmit] = useState(false);

//     const validationFile = ["mp3", "webm", "flac"];

//     const handleFileSelect = (e) => {
//         const selectedFile = e.target.files[0];

//         if (selectedFile) {
//             const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
//             if (!validationFile.includes(fileExtension)) {
//                 toast.error("Only .mp3, .webm, .flac files are allowed.", {
//                     position: toast.POSITION.TOP_RIGHT,
//                     autoClose: 2000,
//                     theme: "colored",
//                 });
//                 // You can also reset the input field if needed
//                 e.target.value = "";
//                 return;
//             }
//         }

//         setFile(selectedFile);
//     };

//     const handPostAudio = async (questionId) => {
//         try {
//             const formData = new FormData();
//             formData.append("file", file);
//             setFileSubmit((prevFileSubmit) => ({ ...prevFileSubmit, [questionId]: true }));
//             const response = await api.post(url.OFFLINE_COURSE.TEST_OFFLINE_FILE, formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             });

//             if (response.status === 200) {
//                 const fileUrl = response.data;
//                 setFileUrl(fileUrl);

//                 const updatedAnswers = { ...selectedAnswers };
//                 updatedAnswers[questionId] = fileUrl;
//                 setSelectedAnswers(updatedAnswers);

//                 toast.success("Added voice successfully!", {
//                     position: "top-right",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "colored",
//                 });
//                 setFileSubmit((prevFileSubmit) => ({ ...prevFileSubmit, [questionId]: false }));
//                 setFile(null);
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             if (error.response.status === 400) {
//                 toast.error("Please select audio file!", {
//                     position: "top-right",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "colored",
//                 });
//             }
//             setFileSubmit((prevFileSubmit) => ({ ...prevFileSubmit, [questionId]: false }));
//         }
//     };

//     return (
//         <>
//             {loading && <Loading />}
//             {errorStatus === 404 ? (
//                 <NotFound />
//             ) : testData.testOfflineSessionDetails && testData.testOfflineSessionDetails.length === 0 ? (
//                 <div className="col-lg-4 mx-auto">
//                     <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: "100vh" }}>
//                         <Lottie animationData={ComingSoon} loop={true} />
//                     </div>
//                 </div>
//             ) : (
//                 <div className="rbt-button-area">
//                     <div className="container">
//                         {!confirmed ? (
//                             <div className="row mt--50">
//                                 <div className="col-lg-6 mx-auto">
//                                     <div className="text-center">
//                                         <div className="rbt-splash-service no-translate support h-100 not-hover mt-3">
//                                             <div className="w-100">
//                                                 <h5 className="font-system fw-300">
//                                                     <span className="text-danger">*</span> Some notes before taking the test
//                                                 </h5>

//                                                 <p className="font-system fw-300 m-0">
//                                                     The test has a total of {totalSession} part and {testData.totalQuestion} questions:
//                                                 </p>
//                                                 <ul className="mb-4">
//                                                     {testData.testOfflineSessionDetails?.map((session, sessionIndex) => (
//                                                         <li className="font-system fw-300 mb-2" key={sessionIndex}>
//                                                             Part {sessionIndex + 1}: {session.sessionName} <span>{session.totalQuestion} questions.</span>
//                                                         </li>
//                                                     ))}
//                                                 </ul>

//                                                 <p className="font-system fw-300 mt-2" style={{ fontSize: 16 }}>
//                                                     Instructions for taking the test: {testData.description}
//                                                 </p>
//                                                 <div className="text-center mt-5">
//                                                     <button type="button" className="rbt-moderbt-btn" onClick={handleConfirm}>
//                                                         <span className="moderbt-btn-text">Agree and start working</span>
//                                                         <i className="feather-arrow-right"></i>
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="content">
//                                 <div className="question" style={{ display: "block" }}>
//                                     <div className="mt-5">
//                                         <BreadcrumbTest title={testData.title} />
//                                     </div>

//                                     <div className="row mt--50">
//                                         <div className="col-lg-9">
//                                             {testData.testOfflineSessionDetails?.map((session, sessionIndex) => (
//                                                 <div className="widget border-lft-prm-opacity" style={{ display: currentSessionIndex === sessionIndex ? "block" : "none" }} key={sessionIndex}>
//                                                     <div className="w-100">
//                                                         <div className="d-flex justify-content-between align-items-start mb-5">
//                                                             <div>
//                                                                 <h4 className="mb-2">
//                                                                     Part {sessionIndex + 1}: {session.sessionName}
//                                                                 </h4>
//                                                                 <p className="fw-300">The total number of questions: {session.totalQuestion}</p>
//                                                             </div>
//                                                             <div className="d-flex justify-content-end align-items-center">
//                                                                 <button type="button" className="btn-circle" onClick={handlePrevSession} disabled={currentSessionIndex === 0}>
//                                                                     <i className="feather-chevron-left"></i>
//                                                                 </button>

//                                                                 <button
//                                                                     type="button"
//                                                                     className="btn-circle ml-2"
//                                                                     onClick={handleNextSession}
//                                                                     disabled={currentSessionIndex === testData.testOfflineSessionDetails?.length - 1}
//                                                                 >
//                                                                     <i className="feather-chevron-right"></i>
//                                                                 </button>
//                                                             </div>
//                                                         </div>
//                                                         {session.questionTestOfflineDTOS?.map((question, questionIndex) => (
//                                                             <div className="rbt-single-quiz mb-5" key={questionIndex}>
//                                                                 <h5 className="exam__inner-desc fw-500 font-system" style={{ fontSize: 18 }}>
//                                                                     Questions {questionIndex + 1}: {question.title}
//                                                                 </h5>
//                                                                 {question.image && <img src={question.image} className="w-100 mb-5" alt="" />}
//                                                                 {question.audiomp3 && <AudioPlayer src={question.audiomp3} autoPlay={false} className="mb-5 w-100" />}

//                                                                 <div className="row">
//                                                                     {["option1", "option2", "option3", "option4"].map((option, optionIndex) => (
//                                                                         <div className="col-lg-6" key={optionIndex}>
//                                                                             {question[option] !== null && (
//                                                                                 <div className="answer-group">
//                                                                                     <label className={`answers-group__label ${selectedAnswers[question.id] === question[option] ? "checked" : ""}`}>
//                                                                                         <input
//                                                                                             type="radio"
//                                                                                             className="answers-group__input"
//                                                                                             name={`answer_${question.id}`}
//                                                                                             id={`answer_${question.id}_${option}`}
//                                                                                             checked={selectedAnswers[question.id] === question[option]}
//                                                                                             onChange={() => handleAnswerSelect(question.id, question[option])}
//                                                                                         />
//                                                                                         <div className="d-flex align-items-center font-system">
//                                                                                             <div className="btn-choose">{String.fromCharCode(65 + optionIndex)}</div> {question[option]}
//                                                                                         </div>
//                                                                                     </label>
//                                                                                 </div>
//                                                                             )}
//                                                                         </div>
//                                                                     ))}
//                                                                 </div>

//                                                                 {question.type === 1 && (
//                                                                     <div className="d-flex flex-column justify-content-center align-items-center background-secondary p-5" id="parentElementAudio">
//                                                                         <div className="mt-3 text-center">
//                                                                             <div className="d-flex justify-content-center align-items-center">
//                                                                                 <AudioRecorder
//                                                                                     onRecordingComplete={(blob) => addAudioElement(blob, parentElement)}
//                                                                                     audioTrackConstraints={{
//                                                                                         noiseSuppression: true,
//                                                                                         echoCancellation: true,
//                                                                                     }}
//                                                                                     downloadOnSavePress={true}
//                                                                                     downloadFileExtension="webm"
//                                                                                 />
//                                                                             </div>
//                                                                             <p className="fw-light mt-3 mb-0" style={{ fontSize: 15 }}>
//                                                                                 Click to start recording
//                                                                             </p>
//                                                                             <p className="fw-light mb-4" style={{ fontSize: 16 }}>
//                                                                                 Then select the recording file and press "Confirm" to complete.
//                                                                             </p>

//                                                                             <div className="row">
//                                                                                 <div className="col-lg-9">
//                                                                                     <input
//                                                                                         className="form-control form-control-lg"
//                                                                                         name="file"
//                                                                                         style={{ height: "inherit" }}
//                                                                                         accept=".mp3, .webm, .flac"
//                                                                                         type="file"
//                                                                                         id={`answer_${question.id}`}
//                                                                                         onChange={handleFileSelect}
//                                                                                     />
//                                                                                 </div>

//                                                                                 <div className="col-lg-3">
//                                                                                     {fileSubmit[question.id] ? (
//                                                                                         <button
//                                                                                             style={{ height: 30, lineHeight: "30px" }}
//                                                                                             className="rbt-btn bg-primary-opacity btn-not__hover fz-14 w-100 p-0"
//                                                                                             disabled
//                                                                                         >
//                                                                                             <div className="dot-loader mt-0 ml--50"></div>
//                                                                                         </button>
//                                                                                     ) : (
//                                                                                         <>
//                                                                                             {file ? (
//                                                                                                 <button
//                                                                                                     className="rbt-btn bg-primary-opacity btn-not__hover fz-14 w-100"
//                                                                                                     style={{ height: 30, lineHeight: "30px" }}
//                                                                                                     onClick={() => handPostAudio(question.id)}
//                                                                                                 >
//                                                                                                     Confirm
//                                                                                                 </button>
//                                                                                             ) : (
//                                                                                                 <button
//                                                                                                     className="rbt-btn bg-primary-opacity btn-not__hover fz-14 w-100"
//                                                                                                     style={{ height: 30, lineHeight: "30px" }}
//                                                                                                     disabled
//                                                                                                 >
//                                                                                                     Confirm
//                                                                                                 </button>
//                                                                                             )}
//                                                                                         </>
//                                                                                     )}
//                                                                                 </div>
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 )}
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                         <div className="col-lg-3">
//                                             <div className="answers__inner">
//                                                 <div className="td-sidebar">
//                                                     <div className="widget border-a-secondary">
//                                                         <h5 className="text-center border-bt-secondary pb-3">Time remaining: {formatHour(timeRemaining)}</h5>

//                                                         {testData.testOfflineSessionDetails?.map((session, index) => (
//                                                             <div key={index}>
//                                                                 <p className="m-0 fz-16 label-session" onClick={() => setCurrentSessionIndex(index)}>
//                                                                     Part {index + 1}: {session.sessionName}
//                                                                 </p>
//                                                                 <div className="mt-3 choice-wrapper mb-3">
//                                                                     {session.questionTestOfflineDTOS.map((question, questionIndex) => (
//                                                                         <button
//                                                                             type="button"
//                                                                             key={question.id}
//                                                                             className={`choice-wrapper__btn ${selectedAnswers[question.id] ? "active" : ""}`}
//                                                                             onClick={() => handleQuestionClick(selectedQuestionId)}
//                                                                         >
//                                                                             {questionIndex + 1}
//                                                                         </button>
//                                                                     ))}
//                                                                 </div>
//                                                             </div>
//                                                         ))}
//                                                         <div className="d-flex justify-content-end">
//                                                             <button
//                                                                 type="button"
//                                                                 className="rbt-btn bg-pink-opacity rbt-marquee-btn w-100 mt-4 btn-not__hover"
//                                                                 style={{ height: 50, lineHeight: "50px" }}
//                                                                 onClick={handleSubmitTest}
//                                                             >
//                                                                 <i className="fa fa-stop-circle"></i> Finish Test
//                                                             </button>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }

// export default TestOffline;

import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../../../services/api";
import url from "../../../../../services/url";
import AudioPlayer from "react-h5-audio-player";
import Loading from "../../../../layouts/Loading";
import NotFound from "../../../Other/NotFound";
import { formatHour } from "../../../../../utils/formatTime";
import Lottie from "lottie-react";
import ComingSoon from "../../../../../lottie/ComingSoon.json";
import BreadcrumbTest from "../../../../layouts/BreadcrumbTest";
import { useAxiosGet } from "../../../../../hooks";
import { getAccessToken } from "../../../../../utils/auth";
import { AudioRecorder } from "react-audio-voice-recorder";
import { toast } from "react-toastify";
import config from "../../../../../config";
import Swal from "sweetalert2";

function TestOffline() {
    const { slug } = useParams();

    const navigate = useNavigate();

    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [selectedQuestionId, setSelectedQuestionId] = useState(null);
    const [confirmed, setConfirmed] = useState(false);
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);
    const [fileUrl, setFileUrl] = useState("");

    const [timeRemaining, setTimeRemaining] = useState(1800);

    const { response, loading, errorStatus } = useAxiosGet({
        path: url.OFFLINE_COURSE.SUBJECT_TEST + `/${slug}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const testData = useMemo(() => response || [], [response]);

    const handleConfirm = () => {
        setConfirmed(true);
    };

    const handleAnswerSelect = (questionId, selectedOption) => {
        const updatedAnswers = { ...selectedAnswers };
        updatedAnswers[questionId] = selectedOption || fileUrl;
        setSelectedAnswers(updatedAnswers);
    };

    const handleQuestionClick = (questionId) => {
        setSelectedQuestionId(questionId);
    };

    const handleSubmitTest = useCallback(async () => {
        try {
            const answersToSubmit = testData.testOfflineSessionDetails.flatMap((session) =>
                session.questionTestOfflineDTOS.map((question) => ({
                    content: selectedAnswers[question.id] || "",
                    questionId: question.id,
                }))
            );

            const response = await api.post(url.OFFLINE_COURSE.TEST_OFFLINE_SUBMIT + `/${slug}`, answersToSubmit, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            });

            if (response.status === 200) {
                Swal.fire({
                    title: "Good job!",
                    text: "Test submitted successfully!",
                    icon: "success",
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate(config.routes.home);
                    }
                });
            }
        } catch (error) {
            console.log(error);
        }
    }, [navigate, selectedAnswers, slug, testData]);

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

    const [fileSubmit, setFileSubmit] = useState(false);

    const validationFile = ["mp3", "wav", "flac"];

    const [selectedFiles, setSelectedFiles] = useState({});

    const handleFileSelect = (e, questionId) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
            if (!validationFile.includes(fileExtension)) {
                toast.error("Only .mp3, .wav, .flac files are allowed.", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 2000,
                    theme: "colored",
                });
                // You can also reset the input field if needed
                e.target.value = "";
                return;
            }
        }

        setSelectedFiles((prevSelectedFiles) => ({
            ...prevSelectedFiles,
            [questionId]: selectedFile,
        }));
    };

    const handPostAudio = async (questionId) => {
        const selectedFile = selectedFiles[questionId];

        try {
            if (!selectedFile) {
                toast.error("Please select audio file!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                return;
            }

            const formData = new FormData();
            formData.append("file", selectedFile);
            setFileSubmit((prevFileSubmit) => ({ ...prevFileSubmit, [questionId]: true }));
            const response = await api.post(url.OFFLINE_COURSE.TEST_OFFLINE_FILE, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            });

            if (response.status === 200) {
                const fileUrl = response.data;
                setFileUrl(fileUrl);

                const updatedAnswers = { ...selectedAnswers };
                updatedAnswers[questionId] = fileUrl;
                setSelectedAnswers(updatedAnswers);

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
                setFileSubmit((prevFileSubmit) => ({ ...prevFileSubmit, [questionId]: false }));
                setSelectedFiles((prevSelectedFiles) => ({
                    ...prevSelectedFiles,
                    [questionId]: null, // Reset selected file after successful submission
                }));
            }
        } catch (error) {
            console.error("Error:", error);
            if (error.response && error.response.status === 400) {
                toast.error("Please select audio file!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            setFileSubmit((prevFileSubmit) => ({ ...prevFileSubmit, [questionId]: false }));
        }
    };

    return (
        <>
            {loading && <Loading />}
            {errorStatus === 404 ? (
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
                                        <BreadcrumbTest title={testData.title} />
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

                                                                            <div className="row">
                                                                                <div className="col-lg-9">
                                                                                    <input
                                                                                        className="form-control form-control-lg"
                                                                                        name="file"
                                                                                        style={{ height: "inherit" }}
                                                                                        accept=".mp3, .webm, .flac"
                                                                                        type="file"
                                                                                        id={`answer_${question.id}`}
                                                                                        onChange={(e) => handleFileSelect(e, question.id)}
                                                                                    />
                                                                                </div>

                                                                                <div className="col-lg-3">
                                                                                    {fileSubmit[question.id] ? (
                                                                                        <button
                                                                                            style={{ height: 30, lineHeight: "30px" }}
                                                                                            className="rbt-btn bg-primary-opacity btn-not__hover fz-14 w-100 p-0"
                                                                                            disabled
                                                                                        >
                                                                                            <div className="dot-loader mt-0 ml--50"></div>
                                                                                        </button>
                                                                                    ) : (
                                                                                        <button
                                                                                            className="rbt-btn bg-primary-opacity btn-not__hover fz-14 w-100"
                                                                                            style={{ height: 30, lineHeight: "30px" }}
                                                                                            onClick={() => handPostAudio(question.id)}
                                                                                        >
                                                                                            Confirm
                                                                                        </button>
                                                                                    )}
                                                                                </div>
                                                                            </div>
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
