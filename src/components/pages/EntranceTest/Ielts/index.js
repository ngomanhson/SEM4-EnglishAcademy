import { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import api from "../../../../services/api";
import url from "../../../../services/url";
import { useEffect } from "react";

function Ielts() {
    const navigate = useNavigate();

    const [testIelts, setTestIelts] = useState({});
    const [timeRemaining, setTimeRemaining] = useState(1800);

    const loadTest = async () => {
        try {
            const testResponse = await api.get(url.ENTRANCE_TEST.IELTS + "/test-2");
            setTestIelts(testResponse.data.data);
            console.log(testResponse.data.data);
        } catch (error) {
            console.error("Error loading test:", error);
        }
    };

    useEffect(() => {
        loadTest();
    }, []);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timer);

                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleSubmit = () => {
        navigate("/entrance-test/learning-paths");
    };
    return (
        <>
            <Helmet>
                <title>Ielts entrance test | English Academy</title>
            </Helmet>
            <div className="rbt-button-area">
                <div className="container">
                    <div className="row mt--50">
                        <div className="col-12">
                            <h4>Ielts entrance test - Full test</h4>
                        </div>
                    </div>
                    <div className="row mt--50">
                        <div className="col-lg-8 col-12">
                            <div className="widget">
                                <h5 className="exam__inner-desc">Question 1: Record yourself reading the following words: "Chef"</h5>
                                <div className="answer-group">
                                    <div className="d-flex flex-column justify-content-center align-items-center background-secondary p-5">
                                        <button type="button" className="btn btn-circle-2">
                                            <i className="fas fa-microphone"></i>
                                        </button>
                                        <div className="mt-3 text-center">
                                            <p className="fw-light mb-0" style={{ fontSize: 15 }}>
                                                Click to start recording
                                            </p>
                                            <p className="fw-light" style={{ fontSize: 16 }}>
                                                The system will automatically process your speech
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h5 className="exam__inner-desc">Question 2: Where did you buy that hat?</h5>

                                    <div className="answer-group">
                                        <label className="answers-group__label">
                                            <input type="radio" className="answers-group__input" name="answer" />
                                            <div className="d-flex align-content-center">
                                                <div className="btn-choose">A</div> I made it myself did_you
                                            </div>
                                        </label>
                                    </div>

                                    <div className="answer-group">
                                        <label className="answers-group__label">
                                            <input type="radio" className="answers-group__input" name="answer" />
                                            <div className="d-flex align-content-center">
                                                <div className="btn-choose">B</div> I made it myself that_hat
                                            </div>
                                        </label>
                                    </div>

                                    <div className="answer-group">
                                        <label className="answers-group__label">
                                            <input type="radio" className="answers-group__input" name="answer" />
                                            <div className="d-flex align-content-center">
                                                <div className="btn-choose">C</div> I made it myself made_it
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h5 className="exam__inner-desc">Question 3: Record yourself reading the following sentence, paying attention to stressing the words in bold</h5>
                                    <p className="fw-light">
                                        If I am to <strong>talk</strong> about a <strong>person</strong> in my <strong>family</strong> whom I spent <strong>most</strong> time with, I would{" "}
                                        <strong>describe</strong> my <strong>mother</strong>, who is now <strong>working</strong> as a <strong>primary</strong> school <strong>teacher</strong>.
                                    </p>

                                    <div className="answer-group">
                                        <div className="d-flex flex-column justify-content-center align-items-center background-secondary p-5">
                                            <button type="button" className="btn btn-circle-2">
                                                <i className="fas fa-microphone"></i>
                                            </button>
                                            <div className="mt-3 text-center">
                                                <p className="fw-light mb-0" style={{ fontSize: 15 }}>
                                                    Click to start recording
                                                </p>
                                                <p className="fw-light" style={{ fontSize: 16 }}>
                                                    The system will automatically process your speech
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-end align-items-center mt-3">
                                    <button type="button" className="btn-circle">
                                        <i className="feather-arrow-left"></i>
                                    </button>
                                    <button type="button" className="btn-circle ml-2">
                                        <i className="feather-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="answers__inner">
                                <div className="td-sidebar">
                                    <div className="widget">
                                        <h5 className="text-center">Time remaining: {formatTime(timeRemaining)}</h5>
                                        <div className="answers_number">
                                            <button type="button" className="answers-btn">
                                                1
                                            </button>
                                            <button type="button" className="answers-btn">
                                                2
                                            </button>
                                            <button type="button" className="answers-btn">
                                                3
                                            </button>
                                            <button type="button" className="answers-btn">
                                                4
                                            </button>
                                            <button type="button" className="answers-btn">
                                                5
                                            </button>
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

export default Ielts;
