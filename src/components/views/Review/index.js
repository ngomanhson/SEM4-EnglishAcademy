function Review({ rating, formErrors, validationStar, handleEvent, formData, handleStarClick, handleChange }) {
    return (
        <>
            <h4 className="rbt-title-style-3 font-system mt-5">2. Your thoughts on the course</h4>

            <div className="has-show-more-inner-content rbt-featured-review-list-wrapper">
                <div className="rating-course mb-5">
                    {[...Array(5)].map((_, index) => (
                        <i key={index} className={index < rating ? "fas fa-star active" : "far fa-star"} onClick={() => handleStarClick(index)} />
                    ))}
                </div>
                <textarea
                    className={`form-control fz-15 p-3 pl--20 ${formErrors.message ? "is-invalid" : ""}`}
                    rows="3"
                    style={{ borderRadius: 8 }}
                    name="message"
                    placeholder="Please share your thoughts about this course"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                {validationStar && <div className="text-danger fz-14">Please choose a star!</div>}
                <div className="text-end mt-4">
                    <button className="rbt-btn btn-gradient btn-gradient-2 btn-not__hover fw-300" style={{ height: 45, lineHeight: "45px" }} onClick={handleEvent}>
                        Submit review
                    </button>
                </div>
            </div>
        </>
    );
}

export default Review;
