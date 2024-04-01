import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/index";
import Profile from "./components/pages/Profile";
import EnrolledCourses from "./components/views/Profile/EnrolledCourses";
import Wishlist from "./components/views/Profile/Wishlist";
import Reviews from "./components/views/Profile/Reviews";
import MyQuiz from "./components/views/Profile/MyQuiz";
import Settings from "./components/views/Profile/Settings";
import Course from "./components/pages/Course/index.js";
import CourseDetail from "./components/pages/Course/CourseDetail.js/index.js";
import Lesson from "./components/pages/Lesson/index.js";
import NotFound from "./components/pages/Other/NotFound.js";
import Blog from "./components/pages/Blog/index.js";
import BlogDetail from "./components/pages/Blog/BlogDetail.js";
import Quiz from "./components/pages/Lesson/Quiz/index.js";
import Login from "./components/pages/Auth/Login.js";
import Register from "./components/pages/Auth/Register.js";
import ForgotPassword from "./components/pages/Auth/ForgotPassword.js";
import ResetPassword from "./components/pages/Auth/ResetPassword.js";
import AboutUs from "./components/pages/AboutUs/index.js";
import EntranceTest from "./components/pages/EntranceTest/index.js";
import Ielts from "./components/pages/EntranceTest/Ielts/index.js";
import Toeic from "./components/pages/EntranceTest/Toeic/index.js";
import LearningPaths from "./components/pages/EntranceTest/LearningPaths/index.js";
import Tutor from "./components/pages/Tutor/index.js";
import TutorDetail from "./components/pages/Tutor/TutorDetail/index.js";
import AnswerDetail from "./components/pages/EntranceTest/AnswerDetail/index.js";
import Dictionary from "./components/pages/Dictionary/index.js";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* ===== Start Home ===== */}
                <Route path="/" element={<Home />} />
                {/* ===== End Home ===== */}

                {/* ===== Start Course ===== */}
                <Route path="/courses" element={<Course />} />
                <Route path="/course-detail/:slug" element={<CourseDetail />} />
                {/* ===== End Course ===== */}

                {/* ===== Start Tutor ===== */}
                <Route path="/tutor" element={<Tutor />} />
                <Route path="/tutor/:slug" element={<TutorDetail />} />
                {/* ===== End Tutor ===== */}

                {/* ===== Start Lesson ===== */}
                <Route path="/lesson/:slug" element={<Lesson />} />
                <Route path="/lesson/quiz" element={<Quiz />} />
                {/* ===== End Lesson ===== */}

                {/* ===== Start Entrance Test ===== */}
                <Route path="/entrance-test" element={<EntranceTest />} />
                <Route path="/entrance-test/ielts/:slug" element={<Ielts />} />
                <Route path="/entrance-test/toiec/:slug" element={<Toeic />} />
                <Route path="/entrance-test/learning-paths" element={<LearningPaths />} />
                <Route path="/entrance-test/answer-detail" element={<AnswerDetail />} />
                {/* ===== End Entrance Test ===== */}

                {/* ===== Start Blog ===== */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-detail" element={<BlogDetail />} />
                {/* ===== End Blog ===== */}

                {/* ===== Start Contact ===== */}
                <Route path="/about" element={<AboutUs />} />
                {/* ===== End Contact ===== */}

                {/* ===== Start Dictionary ===== */}
                <Route path="/dictionary" element={<Dictionary />} />
                {/* ===== End Dictionary ===== */}

                {/* ===== Start Profile ===== */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/enrolled-courses" element={<EnrolledCourses />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/my-quiz" element={<MyQuiz />} />
                <Route path="/settings" element={<Settings />} />
                {/* ===== End Profile ===== */}

                {/* ===== Start Auth page ===== */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
                {/* ===== End Auth page ===== */}

                {/* ===== Start Other page ===== */}
                <Route path="*" element={<NotFound />} />
                {/* ===== End Other page ===== */}
            </Routes>
        </div>
    );
}

export default App;
