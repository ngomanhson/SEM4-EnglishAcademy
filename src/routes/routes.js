import config from "../config/index";

import Home from "../components/pages/Home";
import Course from "../components/pages/Course";
import EntranceTest from "../components/pages/EntranceTest/index";
import Ielts from "../components/pages/EntranceTest/Ielts/index";
import Toeic from "../components/pages/EntranceTest/Toeic/index";
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
import Login from "../components/pages/Auth/Login";
import Register from "../components/pages/Auth/Register";
import ForgotPassword from "../components/pages/Auth/ForgotPassword";
import ResetPassword from "../components/pages/Auth/ResetPassword";
import NotFound from "../components/pages/Other/NotFound";
import LearningPathIelts from "../components/pages/EntranceTest/LearningPaths/Ielts";
import LearningPathToeic from "../components/pages/EntranceTest/LearningPaths/Toeic";
import EntranceTestSuccess from "../components/pages/EntranceTest/TestSuccess";
import Checkout from "../components/pages/Checkout";
import ThankYou from "../components/pages/Checkout/ThankYou";
import PaymentFail from "../components/pages/Checkout/PaymentFail";
import CourseDetailOnline from "../components/pages/Course/CourseDetail/CourseDetailOnline";
import LearningOnline from "../components/pages/Learning/Online";
import TestLessonOnline from "../components/pages/Learning/Online/TestLesson";
import ResultTestOnline from "../components/pages/Learning/Online/ResultTest";
import SubjectLearning from "../components/pages/Learning/Offline/index";
import SubjectOffline from "../components/pages/Learning/Offline/Subject";
import SlotOffline from "../components/pages/Learning/Offline/Slot";
import TestOffline from "../components/pages/Learning/Offline/TestOffline";
import ChangePassword from "../components/views/Profile/ChangePassword";

const publicRoutes = [
    // Home routes
    { path: config.routes.home, component: Home },

    // Course Online routes
    { path: config.routes.course, component: Course },
    { path: config.routes.course_detail_online, component: CourseDetailOnline },

    // Tutor routes
    { path: config.routes.tutor, component: Tutor },
    { path: config.routes.tutor_detail, component: TutorDetail },

    // Blog routes
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blog_detail, component: BlogDetail },
    { path: config.routes.about_us, component: AboutUs },
    { path: config.routes.dictionary, component: Dictionary },

    // Other routes
    { path: config.routes.not_found, component: NotFound },
];

const privateRoutes = [
    // Course Online routes
    { path: config.routes.learning_online, component: LearningOnline },
    { path: config.routes.learning_test, component: TestLessonOnline },
    { path: config.routes.result_test, component: ResultTestOnline },

    // Checkout routes
    { path: config.routes.checkout, component: Checkout },
    { path: config.routes.checkout_thank_you, component: ThankYou },
    { path: config.routes.checkout_fail, component: PaymentFail },

    // Course Offline routes
    { path: config.routes.subject_offline, component: SubjectOffline },
    { path: config.routes.slot_offline, component: SlotOffline },
    { path: config.routes.subject_learning_offline, component: SubjectLearning },
    { path: config.routes.subject_test_offline, component: TestOffline },

    // Entrance test routes
    { path: config.routes.entrance_test, component: EntranceTest },
    { path: config.routes.entrance_test_ielts, component: Ielts },
    { path: config.routes.entrance_test_toiec, component: Toeic },
    { path: config.routes.entrance_test_success, component: EntranceTestSuccess },
    { path: config.routes.learning_paths_ielts, component: LearningPathIelts },
    { path: config.routes.learning_paths_toeic, component: LearningPathToeic },
    { path: config.routes.entrance_test_answer, component: AnswerDetail },

    // Profile routes
    { path: config.routes.profile, component: Profile },
    { path: config.routes.enrolled_courses, component: EnrolledCourses },
    { path: config.routes.wishlist, component: Wishlist },
    { path: config.routes.reviews, component: Reviews },
    { path: config.routes.my_quiz, component: MyQuiz },
    { path: config.routes.change_password, component: ChangePassword },
];

const authenticationRoutes = [
    { path: config.routes.login, component: Login },
    { path: config.routes.register, component: Register },
    { path: config.routes.forgot_password, component: ForgotPassword },
    { path: config.routes.reset_password, component: ResetPassword },
];

export { publicRoutes, privateRoutes, authenticationRoutes };
