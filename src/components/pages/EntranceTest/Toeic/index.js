import React, { useState } from "react";
import AudioPlayer from "react-audio-player";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const questionData = {
    questions: [
        {
            id: 1,
            question: "What is the capital of France?",
            image: null,
            audio: null,
            options: [
                { id: 1, answer: "Paris" },
                { id: 2, answer: "London" },
                { id: 3, answer: "Berlin" },
                { id: 4, answer: "Madrid" },
            ],
        },
        {
            id: 2,
            question: "What is JavaScript?",
            image: "https://www.anhngumshoa.com/uploads/images/resize/550x550/test/ybm_2020_lc_test_10_pic1.png",
            audio: "assets/audio/audio-demo.mp3",
            options: [
                { id: 1, answer: "A programming language" },
                { id: 2, answer: "A markup language" },
                { id: 3, answer: "A styling language" },
                { id: 4, answer: "All of the above" },
            ],
        },
        {
            id: 3,
            question: "Which of the following are fruits?",
            options: [
                { id: 1, answer: "Apple" },
                { id: 2, answer: "Carrot" },
                { id: 3, answer: "Banana" },
                { id: 4, answer: "Potato" },
            ],
        },
    ],
};

function Toeic() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(questionData.questions.length).fill(""));
    const [submittedAnswers, setSubmittedAnswers] = useState([]);

    const navigate = useNavigate();

    const handleNextQuestion = () => {
        setQuestionIndex((prevIndex) => Math.min(prevIndex + 1, questionData.questions.length - 1));
    };

    const handlePreviousQuestion = () => {
        setQuestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handleOptionChange = (optionAnswer) => {
        setSelectedOptions((prevOptions) => {
            const updatedOptions = [...prevOptions];
            updatedOptions[questionIndex] = optionAnswer;
            return updatedOptions;
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const answers = selectedOptions.map((optionAnswer, index) => ({
            questionId: questionData.questions[index].id,
            selectedOptionAnswer: optionAnswer,
        }));
        setSubmittedAnswers(answers);

        console.log(submittedAnswers);

        navigate("/entrance-test/learning-paths");
    };

    const currentQuestion = questionData.questions[questionIndex];
    const src = currentQuestion.audio;

    return (
        <>
            <Helmet>
                <title>TOEIC entrance test | English Academy</title>
            </Helmet>
            <div className="rbt-button-area">
                <div className="container">
                    <div className="row mt--50">
                        <div className="col-12">
                            <h4>TOEIC entrance test - Full test</h4>
                        </div>
                    </div>
                    <div className="row mt--50">
                        <div className="col-lg-8 col-12">
                            <div className="widget">
                                <h5 className="exam__inner-desc">
                                    Question {questionIndex + 1}: {currentQuestion.question}
                                </h5>
                                {currentQuestion.image && <img src={currentQuestion.image} className="w-100 mb-5" alt="" />}
                                {currentQuestion.audio && <AudioPlayer src={src} autoPlay={false} controls className="mb-5 w-100" />}
                                <div className="answer-group">
                                    {currentQuestion.options.map((option) => (
                                        <label key={option.id} className={`answers-group__label ${selectedOptions[questionIndex] === option.answer ? "checked" : ""}`}>
                                            <input
                                                type="radio"
                                                className="answers-group__input"
                                                name="answer"
                                                id={`rbt-radio-${option.id}`}
                                                checked={selectedOptions[questionIndex] === option.answer}
                                                onChange={() => handleOptionChange(option.answer)}
                                            />
                                            <div className="d-flex align-content-center">
                                                <div className="btn-choose">A</div> {option.answer}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-end align-items-center mt-3">
                                    <button type="button" className="btn-circle" onClick={handlePreviousQuestion} disabled={questionIndex === 0}>
                                        <i className="feather-arrow-left"></i>
                                    </button>
                                    <button type="button" className="btn-circle ml-2" onClick={handleNextQuestion} disabled={questionIndex === questionData.questions.length - 1}>
                                        <i className="feather-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-12">
                            <div className="answers__inner">
                                <div className="td-sidebar">
                                    <div className="widget">
                                        <h5 className="text-center">Time remaining: </h5>
                                        <div className="answers_number">
                                            {questionData.questions.map((question, index) => (
                                                <button type="button" className="answers-btn" key={question.id}>
                                                    {index + 1}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <button type="button" onClick={handleSubmit} className="rbt-btn bg-pink-opacity rbt-marquee-btn w-100 mt-4">
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
        </>
    );
}

export default Toeic;
