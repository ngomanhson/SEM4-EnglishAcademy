const routes = {
    // Home routes
    home: "/",

    // Course Online routes
    course: "/courses",
    course_detail_online: "/course-online/:slug",
    learning_online: "/learning-online/:courseSlug",
    learning_test: "/learning-test/:courseSlug",
    result_test: "/:courseSlug/result-test/:testCode",

    // Checkout routes
    checkout: "/checkout/:courseSlug",
    checkout_thank_you: "/checkout/:courseSlug/thank-you",
    checkout_fail: "/checkout/:courseSlug/failed",
    thank_you: "/thank-you",

    // Course Offline routes
    subject_offline: "/subject-offline/:slug",
    slot_offline: "/subject-slot/:slug",
    subject_learning_offline: "/subject-learning/:slug",
    subject_test_offline: "/subject-test/:slug",
    certificate_offline_course: "/certificate/:slug",
    mark_report: "/mark-report",

    // Entrance test routes
    entrance_test: "/entrance-test",
    entrance_test_ielts: "/entrance-test/ielts/:slug",
    entrance_test_toiec: "/entrance-test/toiec/:slug",
    entrance_test_success: "/entrance-test/success",
    learning_paths_toeic: "/learning-paths/toeic/:testCode",
    learning_paths_ielts: "/learning-paths/ielts/:testCode",
    entrance_test_answer: "/entrance-test/answer-detail/:testCode",

    // Tutor routes
    tutor: "/tutor",
    tutor_detail: "/tutor/:tutorCode",
    hire_tutor: "/tutor/hire/:tutorCode",

    // Booking
    booking: "/booking",
    booking_detail: "/booking/:lessonId",

    booking_waiting: "/booking-waiting",
    booking_waiting_package: "/booking-waiting/package/:bookingId",
    booking_waiting_weeks: "/booking-waiting/weeks/:bookingId",

    // Blog routes
    blog: "/blog",
    blog_detail: "/blog-detail",
    about_us: "/about",
    dictionary: "/dictionary",

    // Profile routes
    profile: "/profile",
    my_course: "/my-course",
    reviews: "/reviews",
    my_quiz: "/my-quiz",
    timetable: "/timetable",

    // Auth routes
    login: "/login",
    register: "/register",
    change_password: "/change-password",
    forgot_password: "/forgot-password",
    reset_password: "/reset-password/:resetToken",

    // Other routes
    not_found: "*",

    // Meetings routes
    room: "/room",
    meeting: "/room/:roomId",
    meeting_personal: "room-personal/:roomId",
};
export default routes;
