const routes = {
    home: "/",
    course: "/courses",
    course_detail: "/course-detail/:slug",
    learning: "/learning/:courseSlug",
    learning_test: "/learning/test/:courseSlug",
    entrance_test: "/entrance-test",
    entrance_test_ielts: "/entrance-test/ielts/:slug",
    entrance_test_toiec: "/entrance-test/toiec/:slug",
    entrance_test_learning_paths: "/entrance-test/learning-paths",
    entrance_test_answer: "/entrance-test/answer-detail",
    tutor: "/tutor",
    tutor_detail: "/tutor/:slug",
    blog: "/blog",
    blog_detail: "/blog-detail",
    about_us: "/about",
    dictionary: "/dictionary",
    profile: "/profile",
    enrolled_courses: "/enrolled-courses",
    wishlist: "/wishlist",
    reviews: "/reviews",
    my_quiz: "my-quiz",
    settings: "/settings",
    login: "/login",
    register: "/register",
    forgot_password: "/forgot-password",
    reset_password: "/reset-password/:resetToken",
    not_found: "*",
};
export default routes;
