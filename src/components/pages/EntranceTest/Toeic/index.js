import { useState } from "react";
import AudioPlayer from "react-audio-player";
import { Helmet } from "react-helmet";

const questions = [
    {
        id: 1,
        question: "What is your family name?",
        image: null,
        audio: null,
        options: [
            { label: "A", text: "Do you want me to spell it?" },
            { label: "B", text: "Do you like my surname?" },
            { label: "C", text: "How could I say that?" },
            { label: "D", text: "All the answers above" },
        ],
    },
    {
        id: 2,
        question: "Choose the sentence that best describes the picture:",
        image: "https://www.anhngumshoa.com/uploads/images/resize/550x550/test/ybm_2020_lc_test_10_pic1.png",
        audio: "assets/audio/audio-demo.mp3",
        options: [
            { label: "A", text: "Option A" },
            { label: "B", text: "Option B" },
            { label: "C", text: "Option C" },
            { label: "D", text: "Option D" },
        ],
    },
];

function Toeic() {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleInputChange = (questionId, selectedOption) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionId]: selectedOption,
        });
    };

    const handleNextQuestion = () => {
        setSelectedAnswers({});
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePrevQuestion = () => {
        setSelectedAnswers({});
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    const currentQuestion = questions[currentQuestionIndex];
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
                                    Question {currentQuestionIndex + 1}: {currentQuestion.question}
                                </h5>
                                {currentQuestion.image && <img src={currentQuestion.image} className="w-100 mb-5" alt="" />}
                                {currentQuestion.audio && <AudioPlayer src={src} autoPlay={false} controls className="mb-5 w-100" />}
                                <div className="answer-group">
                                    {currentQuestion.options.map((option) => (
                                        <label key={option.label} className={`answers-group__label ${selectedAnswers[currentQuestion.id] === option.label ? "checked" : ""}`}>
                                            <input
                                                type="radio"
                                                className="answers-group__input"
                                                name="answer"
                                                value={option.label}
                                                checked={selectedAnswers[currentQuestion.id] === option.label}
                                                onChange={() => handleInputChange(currentQuestion.id, option.label)}
                                            />
                                            <div className="d-flex align-content-center">
                                                <div className="btn-choose">{option.label}</div> {option.text}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-end align-items-center mt-3">
                                    <button type="button" className="btn-circle" onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0}>
                                        <i className="feather-arrow-left"></i>
                                    </button>
                                    <button type="button" className="btn-circle ml-2" onClick={handleNextQuestion} disabled={currentQuestionIndex === questions.length - 1}>
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
                                            {questions.map((question, index) => (
                                                <button type="button" className="answers-btn" key={question.id}>
                                                    {index + 1}
                                                </button>
                                            ))}
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
