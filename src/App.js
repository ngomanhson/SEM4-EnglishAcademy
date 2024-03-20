import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";
import EnrolledCourses from "./components/views/Profile/EnrolledCourses";
import Wishlist from "./components/views/Profile/Wishlist";
import Reviews from "./components/views/Profile/Reviews";
import MyQuiz from "./components/views/Profile/MyQuiz";
import Settings from "./components/views/Profile/Settings";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* ===== Start Home ===== */}
                <Route path="/" element={<Home />} />
                {/* ===== End Home ===== */}

                {/* ===== Start Profile ===== */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/enrolled-courses" element={<EnrolledCourses />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/my-quiz" element={<MyQuiz />} />
                <Route path="/settings" element={<Settings />} />

                {/* ===== End Home ===== */}
            </Routes>
        </div>
    );
}

export default App;
