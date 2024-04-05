import config from "../config/index";

import Home from "../components/pages/Home";
import Course from "../components/pages/Course";
import CourseDetail from "../components/pages/Course/CourseDetail/index";
import Learning from "../components/pages/Learning/index";
import TestLesson from "../components/pages/Learning/TestLesson/index";
import EntranceTest from "../components/pages/EntranceTest/index";
import Ielts from "../components/pages/EntranceTest/Ielts/index";
import Toeic from "../components/pages/EntranceTest/Toeic/index";
import LearningPaths from "../components/pages/EntranceTest/LearningPaths/index";
import AnswerDetail from "../components/pages/EntranceTest/AnswerDetail/index";
import Tutor from "../components/pages/Tutor/index";
import TutorDetail from "../components/pages/Tutor/TutorDetail/index";
import Blog from "../components/pages/Blog/index";
import BlogDetail from "../components/pages/Blog/BlogDetail";
import AboutUs from "../components/pages/AboutUs/index";
import Dictionary from "../components/pages/Dictionary/index";
import Profile from "../components/pages/Profile/index";
import EnrolledCourses from "../components/views/Profile/EnrolledCourses";
import Wishlist from "../components/views/Profile/Wishlist";
import Reviews from "../components/views/Profile/Reviews";
import MyQuiz from "../components/views/Profile/MyQuiz";
import Settings from "../components/views/Profile/Settings/index";
import Login from "../components/pages/Auth/Login";
import Register from "../components/pages/Auth/Register";
import ForgotPassword from "../components/pages/Auth/ForgotPassword";
import ResetPassword from "../components/pages/Auth/ResetPassword";
import NotFound from "../components/pages/Other/NotFound";
import ResultTest from "../components/pages/Learning/ResultTest/index";

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.course, component: Course },
    { path: config.routes.course_detail, component: CourseDetail },
    { path: config.routes.learning, component: Learning },
    { path: config.routes.learning_test, component: TestLesson },
    { path: config.routes.result_test, component: ResultTest },
    { path: config.routes.entrance_test, component: EntranceTest },
    { path: config.routes.entrance_test_ielts, component: Ielts },
    { path: config.routes.entrance_test_toiec, component: Toeic },
    { path: config.routes.entrance_test_learning_paths, component: LearningPaths },
    { path: config.routes.entrance_test_answer, component: AnswerDetail },
    { path: config.routes.tutor, component: Tutor },
    { path: config.routes.tutor_detail, component: TutorDetail },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blog_detail, component: BlogDetail },
    { path: config.routes.about_us, component: AboutUs },
    { path: config.routes.dictionary, component: Dictionary },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.enrolled_courses, component: EnrolledCourses },
    { path: config.routes.wishlist, component: Wishlist },
    { path: config.routes.reviews, component: Reviews },
    { path: config.routes.my_quiz, component: MyQuiz },
    { path: config.routes.settings, component: Settings },
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.forgot_password, component: ForgotPassword },
    { path: config.routes.reset_password, component: ResetPassword },
    { path: config.routes.not_found, component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
