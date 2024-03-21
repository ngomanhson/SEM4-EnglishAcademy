import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
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
import Instructor from "./components/pages/Instructor/index.js";
import Quiz from "./components/pages/Lesson/Quiz/index.js";
import ContactUs from "./components/pages/ContactUs/index.js";
import Login from "./components/pages/Auth/Login.js";
import Register from "./components/pages/Auth/Register.js";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* ===== Start Home ===== */}
                <Route path="/" element={<Home />} />
                {/* ===== End Home ===== */}

                {/* ===== Start Course ===== */}
                <Route path="/courses" element={<Course />} />
                <Route path="/course-detail" element={<CourseDetail />} />
                {/* ===== End Course ===== */}

                {/* ===== Start Instructor ===== */}
                <Route path="/instructor" element={<Instructor />} />
                {/* ===== End Instructor ===== */}

                {/* ===== Start Lesson ===== */}
                <Route path="/lesson" element={<Lesson />} />
                <Route path="/lesson/quiz" element={<Quiz />} />
                {/* ===== End Lesson ===== */}

                {/* ===== Start Blog ===== */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-detail" element={<BlogDetail />} />
                {/* ===== End Blog ===== */}

                {/* ===== Start Contact ===== */}
                <Route path="/contact" element={<ContactUs />} />
                {/* ===== End Contact ===== */}

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
                {/* ===== End Auth page ===== */}

                {/* ===== Start Other page ===== */}
                <Route path="*" element={<NotFound />} />
                {/* ===== End Other page ===== */}
            </Routes>
        </div>
    );
}

export default App;
