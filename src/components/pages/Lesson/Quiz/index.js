// import { useState } from "react";
// import LayoutLesson from "../../../layouts/LayoutLesson";

// const questionData = {
//     questions: [
//         {
//             id: 1,
//             question: "What is the capital of France?",
//             options: [
//                 { id: 1, answer: "Paris" },
//                 { id: 2, answer: "London" },
//                 { id: 3, answer: "Berlin" },
//                 { id: 4, answer: "Madrid" },
//             ],
//         },
//         {
//             id: 2,
//             question: "What is JavaScript?",
//             options: [
//                 { id: 1, answer: "A programming language" },
//                 { id: 2, answer: "A markup language" },
//                 { id: 3, answer: "A styling language" },
//                 { id: 4, answer: "All of the above" },
//             ],
//         },
//         {
//             id: 3,
//             question: "Which of the following are fruits?",
//             options: [
//                 { id: 1, answer: "Apple" },
//                 { id: 2, answer: "Carrot" },
//                 { id: 3, answer: "Banana" },
//                 { id: 4, answer: "Potato" },
//             ],
//         },
//     ],
// };

// function Quiz() {
//     const [questionIndex, setQuestionIndex] = useState(0);
//     const [selectedOptions, setSelectedOptions] = useState([]);
//     const [submittedAnswers, setSubmittedAnswers] = useState([]);

//     const handleNextQuestion = () => {
//         setQuestionIndex((prevIndex) => prevIndex + 1);
//     };

//     const handlePreviousQuestion = () => {
//         setQuestionIndex((prevIndex) => prevIndex - 1);
//     };

//     const handleOptionChange = (optionAnswer) => {
//         setSelectedOptions((prevOptions) => {
//             const updatedOptions = [...prevOptions];
//             updatedOptions[questionIndex] = optionAnswer;
//             return updatedOptions;
//         });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const answers = selectedOptions.map((optionAnswer, index) => ({
//             questionId: questionData.questions[index].id,
//             selectedOptionAnswer: optionAnswer,
//         }));
//         setSubmittedAnswers(answers);
//     };

//     console.log(submittedAnswers);
//     const currentQuestion = questionData.questions[questionIndex];

//     return (
//         <LayoutLesson title="Quiz">
//             <div className="rbt-lesson-rightsidebar overflow-hidden">
//                 <div className="inner">
//                     <div className="content">
//                         <form id="quiz-form" className="quiz-form-wrapper" onSubmit={handleSubmit}>
//                             <div className="question" style={{ display: "block" }}>
//                                 <div className="quize-top-meta">
//                                     <div className="quize-top-left">
//                                         <span>
//                                             Questions No:{" "}
//                                             <strong>
//                                                 {questionIndex + 1}/{questionData.questions.length}
//                                             </strong>
//                                         </span>
//                                         <span>
//                                             Attempts Allowed: <strong>1</strong>
//                                         </span>
//                                     </div>
//                                     <div className="quize-top-right">
//                                         <span>
//                                             Time remaining: <strong>No Limit</strong>
//                                         </span>
//                                     </div>
//                                 </div>
//                                 <hr />
//                                 <div className="rbt-single-quiz">
//                                     <h5>
//                                         Questions {questionIndex + 1}: {currentQuestion.question}
//                                     </h5>
//                                     <p className="mb-3" style={{ fontWeight: 300, fontSize: "1.6rem" }}>
//                                         <i className="far fa-chart-bar"></i> Level: Medium / 6.41 point
//                                     </p>
//                                     <p className="mb-3">Choose the correct answer:</p>
//                                     <div className="row g-3 mt--10">
//                                         {currentQuestion.options.map((option) => (
//                                             <div key={option.id} className="col-lg-6">
//                                                 <div className="rbt-form-check">
//                                                     <input
//                                                         className="form-check-input"
//                                                         type="radio"
//                                                         id={`rbt-radio-${option.id}`}
//                                                         checked={selectedOptions[questionIndex] === option.answer}
//                                                         onChange={() => handleOptionChange(option.answer)}
//                                                     />
//                                                     <label className="form-check-label" htmlFor={`rbt-radio-${option.id}`}>
//                                                         {option.answer}
//                                                     </label>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="rbt-quiz-btn-wrapper mt--30">
//                                 <div className="d-flex align-content-center justify-content-end gap-3">
//                                     <button type="button" className="btn btn-primary__custom" onClick={handlePreviousQuestion} disabled={questionIndex === 0}>
//                                         <span>
//                                             <i className="feather-arrow-left"></i>
//                                         </span>
//                                     </button>
//                                     <button type="button" className="btn btn-primary__custom" onClick={handleNextQuestion} disabled={questionIndex === questionData.questions.length - 1}>
//                                         <span>
//                                             <i className="feather-arrow-right"></i>
//                                         </span>
//                                     </button>
//                                 </div>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </LayoutLesson>
//     );
// }

// export default Quiz;

import { useState } from "react";
import LayoutLesson from "../../../layouts/LayoutLesson";

const questionData = {
    questions: [
        {
            id: 1,
            question: "What is the capital of France?",
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

function Quiz() {
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(questionData.questions.length).fill(""));
    const [submittedAnswers, setSubmittedAnswers] = useState([]);

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

    const isAllQuestionsAnswered = () => {
        return selectedOptions.every((option) => option !== "");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const answers = selectedOptions.map((optionAnswer, index) => ({
            questionId: questionData.questions[index].id,
            selectedOptionAnswer: optionAnswer,
        }));
        setSubmittedAnswers(answers);
    };

    const currentQuestion = questionData.questions[questionIndex];

    return (
        <LayoutLesson title="Quiz">
            <div className="rbt-lesson-rightsidebar overflow-hidden">
                <div className="inner">
                    <div className="content">
                        <form id="quiz-form" className="quiz-form-wrapper" onSubmit={handleSubmit}>
                            <div className="question" style={{ display: "block" }}>
                                <div className="quize-top-meta">
                                    <div className="quize-top-left">
                                        <span>
                                            Questions No:{" "}
                                            <strong>
                                                {questionIndex + 1}/{questionData.questions.length}
                                            </strong>
                                        </span>
                                        <span>
                                            Attempts Allowed: <strong>1</strong>
                                        </span>
                                    </div>
                                    <div className="quize-top-right">
                                        <span>
                                            Time remaining: <strong>No Limit</strong>
                                        </span>
                                    </div>
                                </div>
                                <hr />
                                <div className="rbt-single-quiz">
                                    <h5>
                                        Questions {questionIndex + 1}: {currentQuestion.question}
                                    </h5>
                                    <p className="mb-3" style={{ fontWeight: 300, fontSize: "1.6rem" }}>
                                        <i className="far fa-chart-bar"></i> Level: Medium / 6.41 point
                                    </p>
                                    <p className="mb-3">Choose the correct answer:</p>
                                    <div className="row g-3 mt--10">
                                        {currentQuestion.options.map((option) => (
                                            <div key={option.id} className="col-lg-6">
                                                <div className="rbt-form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        id={`rbt-radio-${option.id}`}
                                                        checked={selectedOptions[questionIndex] === option.answer}
                                                        onChange={() => handleOptionChange(option.answer)}
                                                    />
                                                    <label className="form-check-label" htmlFor={`rbt-radio-${option.id}`}>
                                                        {option.answer}
                                                    </label>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="rbt-quiz-btn-wrapper mt--30">
                                <div className="d-flex align-content-center justify-content-end gap-3">
                                    <button type="button" className="btn btn-primary__custom" onClick={handlePreviousQuestion} disabled={questionIndex === 0}>
                                        <span>
                                            <i className="feather-arrow-left"></i>
                                        </span>
                                    </button>
                                    <button type="button" className="btn btn-primary__custom" onClick={handleNextQuestion} disabled={questionIndex === questionData.questions.length - 1}>
                                        <span>
                                            <i className="feather-arrow-right"></i>
                                        </span>
                                    </button>
                                    {isAllQuestionsAnswered() && (
                                        <button type="submit" className="btn ">
                                            <i className="fas fa-stop-circle"></i> Finish Quiz
                                        </button>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </LayoutLesson>
    );
}

export default Quiz;
