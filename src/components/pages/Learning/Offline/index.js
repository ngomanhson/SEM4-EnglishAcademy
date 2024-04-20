import { Link, useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import url from "../../../../services/url";
import Layout from "../../../layouts";
import Loading from "../../../layouts/Loading";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { format } from "date-fns";
import api from "../../../../services/api";
import { toast } from "react-toastify";
import ReactPlayer from "react-player";
import NotFound from "../../Other/NotFound";

function SubjectLearning() {
    const { slug } = useParams();
    const studentId = 1;

    const [content, setContent] = useState("");
    const [editorError, setEditorError] = useState("");
    const [activeReactions, setActiveReactions] = useState({});

    const { response, loading, status } = useAxios({
        method: "GET",
        path: url.OFFLINE_COURSE.ITEM_SLOT + `/${slug}/${studentId}`,
    });

    const item = response || {};
    const answerStudents = item.answerStudentItemSlotResponseListList || [];

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

    return (
        <>
            {loading && <Loading />}
            {status === 404 ? (
                <NotFound />
            ) : (
                <Layout title="Learning">
                    <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3" style={{ minHeight: 280 }}>
                        <div className="container">
                            <div className="widget border-lft-prm-opacity">
                                <h5 className="font-system">Content</h5>
                                <hr />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="content">{item && item.content && <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: item.content }} />}</div>
                                        <div className="mt-5">
                                            <p className="fw-300 text-dark fz-15">
                                                <span className="text-danger">*</span>End Date: {item.endDate && format(new Date(item.endDate), "HH:mm:ss dd-MM-yyyy")}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">{item.pathUrl && <ReactPlayer url={item.pathUrl} width={"100%"} />}</div>
                                </div>
                            </div>

                            <div className="widget border-lft-prm-opacity mt-5">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5 className="font-system">Your answer</h5>
                                        <hr />
                                        <ReactQuill
                                            value={content}
                                            onChange={handleEditorChange}
                                            theme="snow"
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
                                                <div className="content">
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

                            <div className="row mt-5">
                                <div className="col-lg-8">
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
                                                                <img src="assets/images/testimonial/testimonial-1.jpg" alt="Author Images" />
                                                            </div>
                                                            <div className="comment-inner">
                                                                <h6 className="commenter">
                                                                    <Link to="" className="font-system">
                                                                        {answer.createdBy}
                                                                    </Link>
                                                                </h6>
                                                                <div className="comment-meta">
                                                                    <div className="time-spent">{answer.modifiedDate && formatDate(answer.modifiedDate)}</div>
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
                                                                </div>
                                                                <div className="comment-text">
                                                                    <div className="wrapper-content">
                                                                        <div className="content">
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
                        </div>
                    </div>
                </Layout>
            )}
        </>
    );
}

export default SubjectLearning;
