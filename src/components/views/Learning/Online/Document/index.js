function Document({ lesson }) {
    return (
        <div className="rbt-lesson-rightsidebar overflow-hidden">
            <div className="inner">
                <div className="content">{lesson && lesson.content && <div className="data-texteditor" dangerouslySetInnerHTML={{ __html: lesson.content }} />}</div>
            </div>
        </div>
    );
}

export default Document;
