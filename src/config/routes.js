const routes = {
    home: "/",
    course: "/courses",
    course_detail_online: "/course-online/:slug",
    checkout: "/checkout/:courseSlug",
    checkout_thank_you: "/checkout/:courseSlug/thank-you",
    checkout_fail: "/checkout/:courseSlug/failed",

    // Online
    learning_online: "/learning-online/:courseSlug",
    learning_test: "/learning-test/:courseSlug",
    result_test: "/result-test/:testCode",
    entrance_test: "/entrance-test",

    // Offline
    course_detail_offline: "/course-offline/:slug",
    subject_offline: "/subject/:slug",
    subject_learning_offline: "/subject-learning/:slug",

    entrance_test_ielts: "/entrance-test/ielts/:slug",
    entrance_test_toiec: "/entrance-test/toiec/:slug",
    entrance_test_success: "/entrance-test/success",
    learning_paths_toeic: "/learning-paths/toeic/:testCode",
    learning_paths_ielts: "/learning-paths/ielts/:testCode",
    entrance_test_answer: "/entrance-test/answer-detail/:testCode",
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
