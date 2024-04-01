import { useCallback, useEffect, useState } from "react";
import VideoLesson from "./VideoLesson";
import LayoutLesson from "../../layouts/LayoutLesson";
import { useLocation } from "react-router-dom";
import api from "../../../services/api";
import url from "../../../services/url";
import { format } from "date-fns";
import Loading from "../../layouts/Loading";

function Lesson() {
    const location = useLocation();
    const itemSlug = new URLSearchParams(location.search).get("lesson");
    const [lessonData, setLessonData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const loadItemOnline = useCallback(async () => {
        try {
            setLoading(true);
            const itemOnlineResponse = await api.get(url.ONLINE_COURSE.ITEM_ONLINE + "/" + itemSlug);
            setLessonData(itemOnlineResponse.data.data);
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }, [itemSlug]);

    useEffect(() => {
        loadItemOnline();
    }, [loadItemOnline]);

    const [currentTime, setCurrentTime] = useState(0);

    const handleCurrentTimeChange = (newTime) => {
        setCurrentTime(newTime);
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
    return (
        <>
            {loading && <Loading />}
            <LayoutLesson title="Lesson">
                {error ? (
                    <div className="d-flex align-items-center justify-content-center mx-auto">
                        <p>Please select 1 lesson!</p>
                    </div>
                ) : (
                    <div className="rbt-lesson-rightsidebar overflow-hidden lesson-video">
                        <div className="inner">
                            <VideoLesson onCurrentTimeChange={handleCurrentTimeChange} src={lessonData.pathUrl} />

                            <div className="content">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 className="lesson-title">
                                            {lessonData.title} <i className="far fa-bookmark"></i>
                                        </h4>
                                        {lessonData.modifiedDate && <span className="lesson-date">Updated {format(new Date(lessonData.modifiedDate), "dd/MM/yyyy")}</span>}
                                    </div>

                                    <button className="add-note">
                                        <i className="feather-plus-circle"></i>
                                        <span>Added note at {formatTime(currentTime)}</span>
                                    </button>
                                </div>

                                <div className="content-body">
                                    <p className="lesson-description">{lessonData.content}</p>

                                    <p className="m-0 resource-title">Resources in the lesson:</p>

                                    <ol className="resource-list">
                                        <li>
                                            <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">https://getbootstrap.com/docs/5.3/getting-started/introduction/</a>
                                        </li>
                                        <li>
                                            <a href="https://github.com/feathericons/feather#feather">https://github.com/feathericons/feather#feather</a>
                                        </li>
                                        <li>
                                            <a href="https://cssgradient.io/blog/css-gradient-text/">https://cssgradient.io/blog/css-gradient-text/</a>
                                        </li>
                                    </ol>
                                </div>

                                <div className="text-center">
                                    <div className="d-flex align-content-center justify-content-center gap-3">
                                        <button className="btn btn-primary__custom">
                                            <span>
                                                <i className="feather-thumbs-up"></i>
                                            </span>
                                        </button>
                                        <button className="btn btn-primary__custom">
                                            <span>
                                                <i className="feather-thumbs-down"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <p className="mt-3 lesson-question">How do you see this lesson?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </LayoutLesson>
        </>
    );
}

export default Lesson;
