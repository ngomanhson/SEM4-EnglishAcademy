import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Questions = ({ question, questionIndex, selectedAnswers, handleAnswerSelect }) => {
    return (
        <div key={questionIndex}>
            <h5 className="exam__inner-desc fw-500">
                Question {questionIndex + 1}: {question.title}
            </h5>
            {question.image && <img src={question.image} className="w-100 mb-5" alt="" />}
            {question.audiomp3 && <AudioPlayer src={question.audiomp3} autoPlay={false} controls className="mb-5 w-100" />}
            {["option1", "option2", "option3", "option4"].map((option, optionIndex) => (
                <div className="answer-group" key={optionIndex}>
                    <label className={`answers-group__label ${selectedAnswers[question.id] === question[option] ? "checked" : ""}`}>
                        <input
                            type="radio"
                            className="answers-group__input"
                            name={`answer_${question.id}`}
                            id={`answer_${question.id}_${option}`}
                            checked={selectedAnswers[question.id] === question[option]}
                            onChange={() => handleAnswerSelect(question.id, question[option])}
                        />
                        <div className="d-flex align-items-center">
                            <div className="btn-choose">{String.fromCharCode(65 + optionIndex)}</div> {question[option]}
                        </div>
                    </label>
                </div>
            ))}
        </div>
    );
};

export default Questions;
