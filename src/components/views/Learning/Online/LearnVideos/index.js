import VideoLesson from "./VideoLesson";

function LearnVideos({ lesson, handleCurrentTimeChange, formattedDate, formatTime, currentTime }) {
    return (
        <div className="inner">
            <VideoLesson onCurrentTimeChange={handleCurrentTimeChange} src={lesson.pathUrl} />

            <div className="content">
                <div className="content-top__lesson">
                    <div>
                        <h4 className="lesson-title mb-2">
                            {lesson.title} <i className="far fa-bookmark ml--10"></i>
                        </h4>
                        {lesson.modifiedDate && <span className="lesson-date">{formattedDate}</span>}
                    </div>

                    <button className="add-note">
                        <i className="feather-plus-circle"></i>
                        <span>Added note at {formatTime(currentTime)}</span>
                    </button>
                </div>

                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="content-body">
                            <div className="lesson-description">{lesson && lesson.content && <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: lesson.content }} />}</div>
                        </div>
                    </div>
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
    );
}

export default LearnVideos;
