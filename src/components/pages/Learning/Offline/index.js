// import { Link, useParams } from "react-router-dom";
// import useAxios from "../../../../hooks/useAxios";
// import url from "../../../../services/url";
// import Layout from "../../../layouts";
// import Loading from "../../../layouts/Loading";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";
// import { useEffect, useState } from "react";
// import { format } from "date-fns";
// import api from "../../../../services/api";
// import { toast } from "react-toastify";
// import ReactPlayer from "react-player";
// import NotFound from "../../Other/NotFound";

// const toolbarOptions = [
//     { header: [1, 2, 3, 4, 5, 6, false] },
//     { font: [] },
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "code-block",
//     "link",
//     "image",
//     { color: [] },
//     { align: [] },
//     "clean",
// ];

// function SubjectLearning() {
//     const { slug } = useParams();
//     const studentId = 1;

//     const [content, setContent] = useState("");
//     const [editorError, setEditorError] = useState("");
//     const [activeReactions, setActiveReactions] = useState({});

//     const { response, loading, status } = useAxios({
//
//         path: url.OFFLINE_COURSE.ITEM_SLOT + `/${slug}/${studentId}`,
//     });

//     const item = response || {};
//     const answerStudents = item.answerStudentItemSlotResponseListList || [];

//     const handleEditorChange = (value) => {
//         setContent(value);
//     };

//     const stripHtmlTags = (html) => {
//         return html.replace(/<[^>]*>?/gm, "");
//     };

//     const validateContent = (content) => {
//         const textContent = stripHtmlTags(content);
//         if (textContent.trim().length < 3) {
//             setEditorError("Content must be at least 3 characters.");
//             return false;
//         } else {
//             setEditorError("");
//             return true;
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (validateContent(content)) {
//             console.log(content);
//             try {
//                 const answerResponse = await api.post(url.OFFLINE_COURSE.ITEM_SLOT_ANSWER, {
//                     itemSlotId: item.id,
//                     content: content,
//                 });

//                 if (answerResponse.status === 200) {
//                     toast.success("Submitted successfully!", {
//                         position: "top-right",
//                         autoClose: 2000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "colored",
//                     });
//                 }
//             } catch (error) {
//                 if (error.response && error.response.status === 400) {
//                     const errorMessage = error.response.data.message;
//                     toast.error(errorMessage, {
//                         position: "top-right",
//                         autoClose: 2000,
//                         hideProgressBar: false,
//                         closeOnClick: true,
//                         pauseOnHover: true,
//                         draggable: true,
//                         progress: undefined,
//                         theme: "colored",
//                     });
//                 }
//             }
//         }
//     };

//     const formatDate = (dateString) => {
//         const date = new Date(dateString);
//         return format(date, "MMM dd, yyyy 'at' hh:mm a");
//     };

//     const handleVoteClick = (answerId) => {
//         setActiveReactions((prevState) => ({
//             ...prevState,
//             [answerId]: !prevState[answerId],
//         }));
//     };

//     const [timeRemaining, setTimeRemaining] = useState("");

//     const endDate = item.endDate;

//     const calculateTimeRemaining = () => {
//         const endTime = new Date(endDate).getTime();
//         const currentTime = new Date().getTime();
//         const difference = endTime - currentTime;

//         if (difference <= 0) {
//             // Nếu thời gian đã qua, hiển thị thời gian hết hạn
//             setTimeRemaining("Expired");
//         } else {
//             // Tính số ngày, giờ, phút và giây còn lại
//             const days = Math.floor(difference / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//             const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
//             const seconds = Math.floor((difference % (1000 * 60)) / 1000);

//             // Tạo chuỗi thời gian còn lại
//             let remainingTime = "";
//             if (days > 0) {
//                 remainingTime += `${days} days `;
//             }
//             if (hours > 0) {
//                 remainingTime += `${hours} hours `;
//             }
//             if (minutes > 0) {
//                 remainingTime += `${minutes} minutes `;
//             }
//             if (seconds > 0) {
//                 remainingTime += `${seconds} seconds`;
//             }

//             setTimeRemaining(remainingTime);
//         }
//     };

//     useEffect(() => {
//         // Tính thời gian còn lại ban đầu khi component được render
//         calculateTimeRemaining();

//         // Cập nhật thời gian còn lại sau mỗi 1 giây
//         const interval = setInterval(() => {
//             calculateTimeRemaining();
//         }, 1000); // 1 giây = 1000 miligiây

//         // Xóa interval khi component unmount để tránh rò rỉ bộ nhớ
//         return () => clearInterval(interval);
//     }, [endDate]); // eslint-disable-line react-hooks/exhaustive-deps

//     return (
//         <>
//             {loading && <Loading />}
//             {status === 404 ? (
//                 <NotFound />
//             ) : (
//                 <Layout title="Learning">
//                     <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3" style={{ minHeight: 280 }}>
//                         <div className="container">
//                             <div className="widget border-lft-prm-opacity">
//                                 <h5 className="font-system">Content</h5>
//                                 <hr />
//                                 <div className="row">
//                                     <div className="col-lg-6">
//                                         <div className="content pr--0">{item && item.content && <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: item.content }} />}</div>
//                                         <div className="mt-5">
//                                             <p className="fw-300 fz-16" style={{ color: timeRemaining === "Expired" ? "red" : "inherit" }}>
//                                                 <span className="text-danger">*</span>Time remaining: {timeRemaining}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="col-lg-6">{item.pathUrl && <ReactPlayer url={item.pathUrl} width={"100%"} />}</div>
//                                 </div>
//                             </div>

//                             {timeRemaining === "Expired" ? (
//                                 ""
//                             ) : (
//                                 <div className="widget border-lft-prm-opacity mt-5">
//                                     <div className="row">
//                                         <div className="col-lg-6">
//                                             <h5 className="font-system">Your answer</h5>
//                                             <hr />
//                                             <ReactQuill
//                                                 value={content}
//                                                 onChange={handleEditorChange}
//                                                 theme="snow"
//                                                 modules={{
//                                                     toolbar: toolbarOptions,
//                                                 }}
//                                                 style={{
//                                                     height: "auto",
//                                                 }}
//                                             />
//                                             {editorError && <p className="text-danger shake mt-3">{editorError}</p>}
//                                         </div>
//                                         <div className="col-lg-6">
//                                             <h5 className="font-system">Preview</h5>
//                                             <hr />
//                                             {content && (
//                                                 <div className="wrapper-content">
//                                                     <div className="content p-0">
//                                                         <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: content }} />
//                                                     </div>
//                                                 </div>
//                                             )}

//                                             <div className="text-end">
//                                                 {content.length > 3 ? (
//                                                     <button onClick={handleSubmit} className="rbt-btn btn-gradient btn-gradient-3 btn-not__hover mt-5" style={{ height: 42, lineHeight: "42px" }}>
//                                                         Submit answer
//                                                     </button>
//                                                 ) : (
//                                                     ""
//                                                 )}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             )}

//                             <div className="row mt-5">
//                                 <div className="col-lg-8">
//                                     <div className="widget border-lft-prm-opacity">
//                                         <div className="rbt-comment-area">
//                                             <h4 className="heading-discuss" style={{ fontSize: 25 }}>
//                                                 Discuss
//                                             </h4>
//                                             <ul className="comment-list">
//                                                 {answerStudents.map((answer) => (
//                                                     <li className="comment" key={answer.id}>
//                                                         <div className="comment-body">
//                                                             <div className="single-comment">
//                                                                 <div className="comment-img">
//                                                                     <img src="assets/images/others/default-avatar.png" alt="Author Images" />
//                                                                 </div>
//                                                                 <div className="comment-inner">
//                                                                     <h6 className="commenter">
//                                                                         <Link to="" className="font-system">
//                                                                             {answer.createdBy}
//                                                                         </Link>
//                                                                     </h6>
//                                                                     <div className="comment-meta">
//                                                                         <div className="time-spent">{answer.modifiedDate && formatDate(answer.modifiedDate)}</div>
//                                                                         {timeRemaining === "Expired" ? (
//                                                                             ""
//                                                                         ) : (
//                                                                             <div className="reply-edit">
//                                                                                 <div className="reply">
//                                                                                     <div className="vote-container">
//                                                                                         <Link to="" onClick={() => handleVoteClick(answer.id)} className="comment-reply-link vote-hv" href="#!">
//                                                                                             {activeReactions[answer.id] ? "Hide" : "Vote"}
//                                                                                         </Link>
//                                                                                         <div className={`reaction-star ${activeReactions[answer.id] ? "active" : ""}`}>
//                                                                                             <div className="reaction-content">
//                                                                                                 <div className="text-danger fz-12">
//                                                                                                     <i className="fa fa-star text-warning"></i> = 1
//                                                                                                 </div>
//                                                                                                 <span>Remain {answer.star1Count}</span>
//                                                                                             </div>
//                                                                                             <div className="reaction-content">
//                                                                                                 <div className="text-success fz-12">
//                                                                                                     <i className="fa fa-star text-warning"></i> = 2
//                                                                                                 </div>
//                                                                                                 <span>Remain {answer.star2Count}</span>
//                                                                                             </div>
//                                                                                             <div className="reaction-content">
//                                                                                                 <div className="text-primary fz-12">
//                                                                                                     <i className="fa fa-star text-warning"></i> = 3
//                                                                                                 </div>
//                                                                                                 <span>Remain {answer.star3Count}</span>
//                                                                                             </div>
//                                                                                         </div>
//                                                                                     </div>
//                                                                                 </div>
//                                                                             </div>
//                                                                         )}
//                                                                     </div>
//                                                                     <div className="comment-text">
//                                                                         <div className="wrapper-content">
//                                                                             <div className="content p-0">
//                                                                                 <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: answer.content }} />
//                                                                             </div>
//                                                                             <span className="answer-star shadow">
//                                                                                 <i className="fa fa-star text-warning"></i> {answer.star}
//                                                                             </span>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                         {/* <ul className="children">
//                                                 <li className="comment">
//                                                     <div className="comment-body">
//                                                         <div className="single-comment">
//                                                             <div className="comment-img">
//                                                                 <img src="assets/images/testimonial/testimonial-2.jpg" alt="Author Images" />
//                                                             </div>
//                                                             <div className="comment-inner">
//                                                                 <h6 className="commenter">
//                                                                     <a href="#!">John Due</a>
//                                                                 </h6>
//                                                                 <div className="comment-meta">
//                                                                     <div className="time-spent">Nov 23, 2018 at 12:23 pm</div>
//                                                                     <div className="reply-edit">
//                                                                         <div className="reply">
//                                                                             <a className="comment-reply-link" href="#!">
//                                                                                 Reply
//                                                                             </a>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="comment-text">
//                                                                     <p className="b2">
//                                                                         Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse lobortis cursus
//                                                                         lacinia. Vestibulum vitae leo id diam pellentesque ornare.
//                                                                     </p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </li>
//                                             </ul> */}
//                                                     </li>
//                                                 ))}
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-4">
//                                     <div className="chat-box">
//                                         <div className="chat-box__header">
//                                             <div className="d-flex align-items-center justify-content-between">
//                                                 <h5 className="chat-box__heading fw-500">Group chat</h5>

//                                                 <button className="chat-box__close-btn">
//                                                     <i className="feather-x"></i>
//                                                 </button>
//                                             </div>
//                                         </div>

//                                         <div className="chat-box__content">
//                                             <div className="chat-box__content-container">
//                                                 <div className="content-container__avatar">
//                                                     <img src="./assets/images/testimonial/client-01.png" alt="" />
//                                                 </div>
//                                                 <div className="message-container">
//                                                     <span className="message-container__name">Phung Vu</span>
//                                                     <p className="message-container__presentation">hello</p>
//                                                 </div>
//                                             </div>

//                                             <div className="chat-box__content-container">
//                                                 <div className="content-container__avatar">
//                                                     <img src="./assets/images/testimonial/client-05.png" alt="" />
//                                                 </div>
//                                                 <div className="message-container">
//                                                     <span className="message-container__name">Trinh Van Trung</span>
//                                                     <p className="message-container__presentation">Lo con cac =))</p>
//                                                 </div>
//                                             </div>

//                                             <div className="chat-box__content-container">
//                                                 <div className="content-container__avatar">
//                                                     <img src="./assets/images/testimonial/client-03.png" alt="" />
//                                                 </div>
//                                                 <div className="message-container">
//                                                     <span className="message-container__name">Chu Duc Hoang</span>
//                                                     <p className="message-container__presentation">Bla Bla</p>
//                                                     <p className="message-container__presentation">iPhone bạn đang dùng so với iPhone 15 Pro Max. Hãy xem bạn đang bỏ lỡ điều gì.</p>
//                                                 </div>
//                                             </div>

//                                             <div className="chat-box__content-container reversed">
//                                                 <div className="message-container">
//                                                     <span className="message-container__name">Ngo Manh Son (You)</span>
//                                                     <p className="message-container__presentation">Trà đá đeeeee</p>
//                                                     <p className="message-container__presentation">MacBook Air 13” và 15” mới với chip M3 mạnh mẽ.</p>
//                                                 </div>
//                                             </div>

//                                             <div className="chat-box__content-container">
//                                                 <div className="content-container__avatar">
//                                                     <img src="./assets/images/testimonial/client-03.png" alt="" />
//                                                 </div>
//                                                 <div className="message-container">
//                                                     <span className="message-container__name">Sai Tien Duc</span>
//                                                     <p className="message-container__presentation">Okeee</p>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         <div className="chat-box__bottom">
//                                             <form>
//                                                 <div className="d-flex align-items-center chat-box__wrapper">
//                                                     <button type="button" className="chat-box__action-btn p-0">
//                                                         <i className="feather-plus"></i>
//                                                     </button>

//                                                     <div className="chat-box__bottom-inner">
//                                                         <input type="text" name="message" placeholder="Type a message..." className="chat-box__bottom-input"/>

//                                                         <button type="submit" className="chat-box__send-btn">
//                                                         <i className="fas fa-paper-plane"></i>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Layout>
//             )}
//         </>
//     );
// }

// export default SubjectLearning;

import { Link, useParams } from "react-router-dom";
import url from "../../../../services/url";
import Layout from "../../../layouts";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import api from "../../../../services/api";
import { toast } from "react-toastify";
import ReactPlayer from "react-player";

import * as Stomp from "webstomp-client";
import SockJS from "sockjs-client";
import { useAxiosGet } from "../../../../hooks";

const toolbarOptions = [
    { header: [1, 2, 3, 4, 5, 6, false] },
    { font: [] },
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "code-block",
    "link",
    "image",
    { color: [] },
    { align: [] },
    "clean",
];

function SubjectLearning() {
    const { slug } = useParams();

    const [content, setContent] = useState("");
    const [editorError, setEditorError] = useState("");
    const [activeReactions, setActiveReactions] = useState({});

    const { response, setResponse } = useAxiosGet({
        path: url.OFFLINE_COURSE.ITEM_SLOT + `/${slug}`,
    });

    const item = response || {};
    const setItem = setResponse;
    const answerStudents = item.answerStudentItemSlotResponseListList || [];

    useEffect(() => {
        // Tạo kết nối WebSocket
        const socket = new SockJS("http://localhost:8080/ws");
        const stompClient = Stomp.over(socket);

        // Kết nối tới server
        stompClient.connect({}, function (frame) {
            console.log("Connected: " + frame);

            // Đăng ký để nhận dữ liệu từ topic
            stompClient.subscribe(`/topic/question-1`, function (message) {
                // Xử lý dữ liệu nhận được từ WebSocket
                const data = JSON.parse(message.body);
                setItem(data);
            });
        });

        return () => {
            // Đóng kết nối khi component unmount
            stompClient.disconnect();
        };
    }, [setItem]);

    const handleEditorChange = (value) => {
        setContent(value);
    };

    const stripHtmlTags = (html) => {
        return html.replace(/<[^>]*>?/gm, "");
    };

    const validateContent = (content) => {
        const textContent = stripHtmlTags(content);
        if (textContent.trim().length < 3) {
            setEditorError("Content must be at least 3 characters.");
            return false;
        } else {
            setEditorError("");
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateContent(content)) {
            console.log(content);
            try {
                const answerResponse = await api.post(url.OFFLINE_COURSE.ITEM_SLOT_ANSWER, {
                    itemSlotId: item.id,
                    content: content,
                });

                if (answerResponse.status === 200) {
                    toast.success("Submitted successfully!", {
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
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    const errorMessage = error.response.data.message;
                    toast.error(errorMessage, {
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
            }
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, "MMM dd, yyyy 'at' hh:mm a");
    };

    const handleVoteClick = (answerId) => {
        setActiveReactions((prevState) => ({
            ...prevState,
            [answerId]: !prevState[answerId],
        }));
    };

    const [timeRemaining, setTimeRemaining] = useState("");

    const endDate = item.endDate;

    const calculateTimeRemaining = () => {
        const endTime = new Date(endDate).getTime();
        const currentTime = new Date().getTime();
        const difference = endTime - currentTime;

        if (difference <= 0) {
            // Nếu thời gian đã qua, hiển thị thời gian hết hạn
            setTimeRemaining("Expired");
        } else {
            // Tính số ngày, giờ, phút và giây còn lại
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Tạo chuỗi thời gian còn lại
            let remainingTime = "";
            if (days > 0) {
                remainingTime += `${days} days `;
            }
            if (hours > 0) {
                remainingTime += `${hours} hours `;
            }
            if (minutes > 0) {
                remainingTime += `${minutes} minutes `;
            }
            if (seconds > 0) {
                remainingTime += `${seconds} seconds`;
            }

            setTimeRemaining(remainingTime);
        }
    };

    useEffect(() => {
        // Tính thời gian còn lại ban đầu khi component được render
        calculateTimeRemaining();

        // Cập nhật thời gian còn lại sau mỗi 1 giây
        const interval = setInterval(() => {
            calculateTimeRemaining();
        }, 1000); // 1 giây = 1000 miligiây

        // Xóa interval khi component unmount để tránh rò rỉ bộ nhớ
        return () => clearInterval(interval);
    }, [endDate]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Layout title="Learning">
                <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3" style={{ minHeight: 280 }}>
                    <div className="container">
                        <div className="widget border-lft-prm-opacity">
                            <h5 className="font-system">Content</h5>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content pr--0">{item && item.content && <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: item.content }} />}</div>
                                    <div className="mt-5">
                                        <p className="fw-300 fz-16" style={{ color: timeRemaining === "Expired" ? "red" : "inherit" }}>
                                            <span className="text-danger">*</span>Time remaining: {timeRemaining}
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6">{item.pathUrl && <ReactPlayer url={item.pathUrl} width={"100%"} />}</div>
                            </div>
                        </div>

                        {timeRemaining === "Expired" ? (
                            ""
                        ) : (
                            <div className="widget border-lft-prm-opacity mt-5">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="font-system">Your answer</h5>
                                        <hr />
                                        <ReactQuill
                                            value={content}
                                            onChange={handleEditorChange}
                                            theme="snow"
                                            modules={{
                                                toolbar: toolbarOptions,
                                            }}
                                            style={{
                                                height: "auto",
                                            }}
                                        />
                                        {editorError && <p className="text-danger shake mt-3">{editorError}</p>}
                                    </div>
                                    <div className="col-lg-6">
                                        <h5 className="font-system">Preview</h5>
                                        <hr />
                                        {content && (
                                            <div className="wrapper-content">
                                                <div className="content p-0">
                                                    <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: content }} />
                                                </div>
                                            </div>
                                        )}

                                        <div className="text-end">
                                            {content.length > 3 ? (
                                                <button onClick={handleSubmit} className="rbt-btn btn-gradient btn-gradient-3 btn-not__hover mt-5" style={{ height: 42, lineHeight: "42px" }}>
                                                    Submit answer
                                                </button>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="row mt-5">
                            <div className="col-lg-8">
                                <div className="widget border-lft-prm-opacity">
                                    <div className="rbt-comment-area">
                                        <h4 className="heading-discuss" style={{ fontSize: 25 }}>
                                            Discuss
                                        </h4>
                                        <ul className="comment-list">
                                            {answerStudents.map((answer) => (
                                                <li className="comment" key={answer.id}>
                                                    <div className="comment-body">
                                                        <div className="single-comment">
                                                            <div className="comment-img">
                                                                <img src="assets/images/others/default-avatar.png" alt="Author Images" />
                                                            </div>
                                                            <div className="comment-inner">
                                                                <h6 className="commenter">
                                                                    <Link to="" className="font-system">
                                                                        {answer.createdBy}
                                                                    </Link>
                                                                </h6>
                                                                <div className="comment-meta">
                                                                    <div className="time-spent">{answer.modifiedDate && formatDate(answer.modifiedDate)}</div>
                                                                    {timeRemaining === "Expired" ? (
                                                                        ""
                                                                    ) : (
                                                                        <div className="reply-edit">
                                                                            <div className="reply">
                                                                                <div className="vote-container">
                                                                                    <Link to="" onClick={() => handleVoteClick(answer.id)} className="comment-reply-link vote-hv" href="#!">
                                                                                        {activeReactions[answer.id] ? "Hide" : "Vote"}
                                                                                    </Link>
                                                                                    <div className={`reaction-star ${activeReactions[answer.id] ? "active" : ""}`}>
                                                                                        <div className="reaction-content">
                                                                                            <div className="text-danger fz-12">
                                                                                                <i className="fa fa-star text-warning"></i> = 1
                                                                                            </div>
                                                                                            <span>Remain {answer.star1Count}</span>
                                                                                        </div>
                                                                                        <div className="reaction-content">
                                                                                            <div className="text-success fz-12">
                                                                                                <i className="fa fa-star text-warning"></i> = 2
                                                                                            </div>
                                                                                            <span>Remain {answer.star2Count}</span>
                                                                                        </div>
                                                                                        <div className="reaction-content">
                                                                                            <div className="text-primary fz-12">
                                                                                                <i className="fa fa-star text-warning"></i> = 3
                                                                                            </div>
                                                                                            <span>Remain {answer.star3Count}</span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <div className="comment-text">
                                                                    <div className="wrapper-content">
                                                                        <div className="content p-0">
                                                                            <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: answer.content }} />
                                                                        </div>
                                                                        <span className="answer-star shadow">
                                                                            <i className="fa fa-star text-warning"></i> {answer.star}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* <ul className="children">
                                                <li className="comment">
                                                    <div className="comment-body">
                                                        <div className="single-comment">
                                                            <div className="comment-img">
                                                                <img src="assets/images/testimonial/testimonial-2.jpg" alt="Author Images" />
                                                            </div>
                                                            <div className="comment-inner">
                                                                <h6 className="commenter">
                                                                    <a href="#!">John Due</a>
                                                                </h6>
                                                                <div className="comment-meta">
                                                                    <div className="time-spent">Nov 23, 2018 at 12:23 pm</div>
                                                                    <div className="reply-edit">
                                                                        <div className="reply">
                                                                            <a className="comment-reply-link" href="#!">
                                                                                Reply
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="comment-text">
                                                                    <p className="b2">
                                                                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse lobortis cursus
                                                                        lacinia. Vestibulum vitae leo id diam pellentesque ornare.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul> */}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="chat-box">
                                    <div className="chat-box__header">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <h5 className="chat-box__heading fw-500">Group chat</h5>

                                            <button className="chat-box__close-btn">
                                                <i className="feather-x"></i>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="chat-box__content">
                                        <div className="chat-box__content-container">
                                            <div className="content-container__avatar">
                                                <img src="./assets/images/testimonial/client-01.png" alt="" />
                                            </div>
                                            <div className="message-container">
                                                <span className="message-container__name">Phung Vu</span>
                                                <p className="message-container__presentation">hello</p>
                                            </div>
                                        </div>

                                        <div className="chat-box__content-container">
                                            <div className="content-container__avatar">
                                                <img src="./assets/images/testimonial/client-05.png" alt="" />
                                            </div>
                                            <div className="message-container">
                                                <span className="message-container__name">Trinh Van Trung</span>
                                                <p className="message-container__presentation">Lo con cac =))</p>
                                            </div>
                                        </div>

                                        <div className="chat-box__content-container">
                                            <div className="content-container__avatar">
                                                <img src="./assets/images/testimonial/client-03.png" alt="" />
                                            </div>
                                            <div className="message-container">
                                                <span className="message-container__name">Chu Duc Hoang</span>
                                                <p className="message-container__presentation">Bla Bla</p>
                                                <p className="message-container__presentation">iPhone bạn đang dùng so với iPhone 15 Pro Max. Hãy xem bạn đang bỏ lỡ điều gì.</p>
                                            </div>
                                        </div>

                                        <div className="chat-box__content-container reversed">
                                            <div className="message-container">
                                                <span className="message-container__name">Ngo Manh Son (You)</span>
                                                <p className="message-container__presentation">Trà đá đeeeee</p>
                                                <p className="message-container__presentation">MacBook Air 13” và 15” mới với chip M3 mạnh mẽ.</p>
                                            </div>
                                        </div>

                                        <div className="chat-box__content-container">
                                            <div className="content-container__avatar">
                                                <img src="./assets/images/testimonial/client-03.png" alt="" />
                                            </div>
                                            <div className="message-container">
                                                <span className="message-container__name">Sai Tien Duc</span>
                                                <p className="message-container__presentation">Okeee</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="chat-box__bottom">
                                        <form>
                                            <div className="d-flex align-items-center chat-box__wrapper">
                                                <button type="button" className="chat-box__action-btn p-0">
                                                    <i className="feather-plus"></i>
                                                </button>

                                                <div className="chat-box__bottom-inner">
                                                    <input type="text" name="message" placeholder="Type a message..." className="chat-box__bottom-input" />

                                                    <button type="submit" className="chat-box__send-btn">
                                                        <i className="fas fa-paper-plane"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default SubjectLearning;
