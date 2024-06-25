import { Link, useNavigate, useParams } from "react-router-dom";
import url from "../../../../services/url";
import Layout from "../../../layouts";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useCallback, useEffect, useState } from "react";
import { format } from "date-fns";
import api from "../../../../services/api";
import { toast } from "react-toastify";
import ReactPlayer from "react-player";

import * as Stomp from "webstomp-client";
import SockJS from "sockjs-client";
import { getAccessToken, getDecodedToken } from "../../../../utils/auth";
import useAxiosGet from "../../../../hooks/useAxiosGet";
import config from "../../../../config";
import { toolbarOptions } from "../../../../utils/toolbaroptions";
import key from "../../../../config/key";

function SubjectLearning() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const [content, setContent] = useState("");
    const [editorError, setEditorError] = useState("");
    const [activeReactions, setActiveReactions] = useState({});

    const { response, setResponse } = useAxiosGet({
        path: url.OFFLINE_COURSE.ITEM_SLOT + `/${slug}`,
        headers: {
            Authorization: `Bearer ${getAccessToken()}`,
        },
    });

    const item = response || {};
    const setItem = setResponse;
    const answerStudents = item.answerStudentItemSlotResponseListList || [];

    useEffect(() => {
        const socket = new SockJS(key.WEBSOCKET_URL, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        });
        const stompClient = Stomp.over(socket);

        stompClient.connect({}, function (frame) {
            // console.log("Connected: " + frame);

            stompClient.subscribe(`/topic/${slug}`, function (message) {
                const data = JSON.parse(message.body);
                setItem(data);
            });
        });

        return () => {
            stompClient.disconnect();
        };
    }, [setItem, slug]);

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
            const answerData = {
                itemSlotId: item.id,
                content: content,
            };

            try {
                const answerResponse = await api.post(url.OFFLINE_COURSE.ITEM_SLOT_ANSWER, answerData, {
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
                });

                if (answerResponse.status === 200) {
                    setContent("");
                    setNotAnswered(null);
                    await listStar();
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

    const handleToggleVote = (answerId) => {
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

    const decodeToken = getDecodedToken();
    let studentIdFromToken;

    if (decodeToken && decodeToken.Id) {
        studentIdFromToken = decodeToken.Id;
    } else {
        studentIdFromToken = null;
    }

    const handleVoteClick = async (answerId, star) => {
        let voteData = {};
        const studentId = studentIdFromToken;
        if (studentId) {
            voteData = {
                answerStudentItemSlotId: answerId,
                star: star,
                studentId: studentId,
            };
        } else {
            navigate(`${config.routes.login}`);
        }

        try {
            const voteRequest = await api.put(url.OFFLINE_COURSE.ITEM_SLOT_VOTE_ANSWER, voteData, { headers: { Authorization: `Bearer ${getAccessToken()}` } });
            if (voteRequest.status === 200) {
                setActiveReactions({});
                await listStar();
                toast.success("Vote successfully!", {
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
            setActiveReactions({});
            toast.error("Error!", {
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
    };

    const [formData, setFormData] = useState({
        link: "",
    });

    const [formErrors, setFormErrors] = useState({
        link: "",
    });

    const isURLValid = (url) => {
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return urlRegex.test(url);
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.link) {
            newErrors.link = "Please enter a link in this field.";
            valid = false;
        } else if (!isURLValid(formData.link)) {
            newErrors.link = "Please enter a valid link.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    // Practical test
    const handleSubmitTest = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const answerData = {
                itemSlotId: item.id,
                content: formData.link,
            };
            try {
                const answerResponse = await api.post(url.OFFLINE_COURSE.ITEM_SLOT_ANSWER, answerData, {
                    headers: {
                        Authorization: `Bearer ${getAccessToken()}`,
                    },
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

    const answerPracticalTest = item.answerStudentItemSlotResponseListList;

    const [startCount, setStartCount] = useState({});
    const [notAnswered, setNotAnswered] = useState(null);

    const listStar = useCallback(async () => {
        try {
            const startResponse = await api.get(url.OFFLINE_COURSE.LIST_STAR + `/${slug}`, {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            });

            setStartCount(startResponse.data.data);
        } catch (error) {
            setNotAnswered(true);
        }
    }, [slug]);

    useEffect(() => {
        listStar();
    }, [listStar]);

    return (
        <>
            <Layout title="Learning">
                <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3" style={{ minHeight: 280 }}>
                    <div className="container">
                        {item.itemType === 0 && (
                            <>
                                <div className="widget border-lft-prm-opacity">
                                    <h5 className="font-system">Document</h5>
                                    <hr />
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="content pr--0">{item && item.content && <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: item.content }} />}</div>
                                        </div>

                                        <div className="col-lg-6">{item.pathUrl && <ReactPlayer url={item.pathUrl} width={"100%"} />}</div>
                                    </div>
                                </div>
                            </>
                        )}

                        {item.itemType === 1 && (
                            <>
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
                                    <div className="col-lg-12">
                                        <div className="widget border-lft-prm-opacity">
                                            <div className="rbt-comment-area">
                                                <ul className="comment-list">
                                                    {answerStudents.map((answer) => (
                                                        <li className="comment border-top-0" key={answer.id}>
                                                            <div className="comment-body">
                                                                <div className="single-comment bg-color-black-opacity p-5 mb-4" style={{ borderRadius: 8 }}>
                                                                    <div className="comment-img">
                                                                        <img src="assets/images/others/user-placeholder.png" alt={answer.createdBy} />
                                                                    </div>
                                                                    <div className="comment-inner">
                                                                        <h6 className="commenter">
                                                                            <Link to="" className="font-system">
                                                                                {answer.createdBy} {answer.studentId === studentIdFromToken ? "(You)" : ""}
                                                                            </Link>
                                                                        </h6>
                                                                        <div className="comment-meta">
                                                                            <div className="time-spent">{answer.modifiedDate && formatDate(answer.modifiedDate)}</div>
                                                                            {timeRemaining === "Expired" ? (
                                                                                ""
                                                                            ) : (
                                                                                <div className="reply-edit">
                                                                                    {answer.studentId === studentIdFromToken ? (
                                                                                        ""
                                                                                    ) : (
                                                                                        <div className="reply">
                                                                                            {!notAnswered ? (
                                                                                                <div className="vote-container">
                                                                                                    <Link to="" onClick={() => handleToggleVote(answer.id)} className="comment-reply-link vote-hv">
                                                                                                        {activeReactions[answer.id] ? "Hidden" : "Vote"}
                                                                                                    </Link>
                                                                                                    <div className={`reaction-star ${activeReactions[answer.id] ? "active" : ""}`}>
                                                                                                        <div
                                                                                                            className={`reaction-content ${startCount.star1Count === 0 ? "disable" : ""}`}
                                                                                                            onClick={answer.star1Count !== 0 ? () => handleVoteClick(answer.id, "1") : null}
                                                                                                        >
                                                                                                            <div className="text-danger fz-12">
                                                                                                                <i className="fa fa-star text-warning"></i> = 1
                                                                                                            </div>
                                                                                                            <span>Remain {startCount.star1Count}</span>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className={`reaction-content ${startCount.star2Count === 0 ? "disable" : ""}`}
                                                                                                            onClick={() => handleVoteClick(answer.id, "2")}
                                                                                                        >
                                                                                                            <div className="text-success fz-12">
                                                                                                                <i className="fa fa-star text-warning"></i> = 2
                                                                                                            </div>
                                                                                                            <span>Remain {startCount.star2Count}</span>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className={`reaction-content ${startCount.star3Count === 0 ? "disable" : ""}`}
                                                                                                            onClick={() => handleVoteClick(answer.id, "3")}
                                                                                                        >
                                                                                                            <div className="text-primary fz-12">
                                                                                                                <i className="fa fa-star text-warning"></i> = 3
                                                                                                            </div>
                                                                                                            <span>Remain {startCount.star3Count}</span>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            ) : (
                                                                                                <div className="vote-container">
                                                                                                    <Link to="" onClick={() => handleToggleVote(answer.id)} className="comment-reply-link vote-hv">
                                                                                                        {activeReactions[answer.id] ? "Hidden" : "Vote"}
                                                                                                    </Link>
                                                                                                    <div className={`reaction-star ${activeReactions[answer.id] ? "active" : ""}`}>
                                                                                                        <p className="fw-300 fz-15">
                                                                                                            <span className="text-danger">*</span>Answer questions before rating!
                                                                                                        </p>
                                                                                                    </div>
                                                                                                </div>
                                                                                            )}
                                                                                        </div>
                                                                                    )}
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
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-4">
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
                                                        <p className="message-container__presentation">=))</p>
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
                                    </div> */}
                                </div>
                            </>
                        )}

                        {item.itemType === 2 && (
                            <div className="widget mt-5">
                                <h5 className="font-system">Content</h5>
                                <hr />
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="content pr--0">{item && item.content && <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: item.content }} />}</div>
                                        <div className="mt-5">
                                            <p className="fw-300 fz-16" style={{ color: timeRemaining === "Expired" ? "red" : "inherit" }}>
                                                <span className="text-danger">*</span>Time remaining: {timeRemaining}
                                            </p>
                                        </div>
                                        <div className="mt-5">
                                            {answerPracticalTest.length === 0 && timeRemaining !== "Expired" ? (
                                                <button
                                                    className="rbt-btn bg-secondary-opacity btn-not__hover"
                                                    style={{ height: 50, lineHeight: "50px" }}
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal"
                                                >
                                                    Submit test
                                                </button>
                                            ) : (
                                                <div className="text-success">You have submitted the test.</div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {answerPracticalTest.length === 0 ? (
                                    ""
                                ) : (
                                    <div className="row mt-5">
                                        <div className="col-lg-4 col-12">
                                            <div className="td-sidebar">
                                                <div className="widget border-lft-darker">
                                                    <h5>Submission Status</h5>
                                                    {answerPracticalTest.length === 0 ? <p className="fz-16 text-danger"> Not submitted.</p> : <p className="fz-16 text-success">Submitted.</p>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12">
                                            <div className="td-sidebar">
                                                <div className="widget border-lft-darker">
                                                    <h5>Submission Time</h5>

                                                    {answerPracticalTest.length === 0 ? (
                                                        <p className="fz-16">No data.</p>
                                                    ) : (
                                                        <p className="fz-16">{format(new Date(answerPracticalTest[0].createdDate), "HH:ss:mm dd-mm-yyyy")}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-12">
                                            <div className="td-sidebar">
                                                <div className="widget border-lft-darker overflow-hidden">
                                                    <h5>Submission Link</h5>

                                                    {answerPracticalTest.length === 0 ? (
                                                        <p>No data.</p>
                                                    ) : (
                                                        <a href={answerPracticalTest[0].content} rel="noreferrer" target="_blank" className="text-primary">
                                                            {answerPracticalTest[0].content}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header p-5 pb-0" style={{ alignItems: "start", border: "none" }}>
                                <div>
                                    <h5 className="modal-title fw-500" id="exampleModalLabel">
                                        Enter link:
                                    </h5>
                                </div>

                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-5 pt-0">
                                <form className="max-width-auto mt-3" onSubmit={handleSubmitTest}>
                                    <div className="rbt-form-group">
                                        <input
                                            type="text"
                                            name="link"
                                            className={`form-control ${formErrors.link ? "is-invalid" : ""}`}
                                            value={formData.link}
                                            onChange={(e) => {
                                                const { name, value } = e.target;
                                                setFormData({ ...formData, [name]: value });
                                            }}
                                        />
                                        {formErrors.link && <div className="invalid-feedback">{formErrors.link}</div>}
                                    </div>
                                    <p className="fw-300 fz-14 mt-3 mb-0">
                                        <span className="text-danger">*</span>Note: Submit your test using the link.
                                    </p>

                                    <div className="rbt-form-group mt-3">
                                        <button type="submit" className="rbt-btn btn-md fw-normal btn-not__hover w-100" style={{ fontSize: 15 }}>
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default SubjectLearning;
