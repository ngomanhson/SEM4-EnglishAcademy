import config from "../config";

const url = {
    BASE_URL: config.key.BASE_API_URL,

    ONLINE_COURSE: {
        GET_ALL: "any/course-online",
        GET_ALL_BY_STUDENT: "any/course-online/by-student",
        DETAIL: "any/course-online/detail",
        TOPIC_ONLINE: "topic-online",
        ITEM_ONLINE: "item-online",
        EXERCISE: "topic-online",
        TEST: "test-online/detail",
        SUBMIT_TEST: "test-online/detail",
        RESULT_TEST: "test-online/result",
        COMPLETE_ITEM: "item-online",
        BUY_COURSE: "course-online-student",
        CHECK_REGISTER: "course-online-student/check",
        REVIEW: "/review",
    },

    ENTRANCE_TEST: {
        LIST: "test-input",
        TOIEC: "test-input/detail",
        IELTS: "test-input/detail",
        SUBMIT: "test-input/detail",
        RESULT: "test-input/result",
        POTENTIAL_CUSTOMER: "potential-customer",
        RESULT_DETAIL: "test-input/result-detail",
    },

    OFFLINE_COURSE: {
        GET_ALL_BY_STUDENT: "course-offline/get-by-class",
        DETAIL: "course-offline/detail",
        SUBJECT: "subject/detail",
        ITEM_SLOT: "item-slot",
        ITEM_SLOT_ANSWER: "answer-student-item-slot",
        ITEM_SLOT_VOTE_ANSWER: "answer-student-item-slot/score",
        SUBJECT_TEST: "test-offline/detail",
        TABLE_TIME: "schedule/student",
        TEST_OFFLINE_FILE: "test-offline/file",
        TEST_OFFLINE_SUBMIT: "test-offline/detail",
        LIST_STAR: "answer-student-item-slot/list-score",
    },

    DICTIONARY: {
        SEARCH: "https://api.dictionaryapi.dev/api/v2/entries/en",
    },

    AUTH: {
        REGISTER: "auth/student/signup",
        LOGIN: "auth/student/signip",
        CHANGE_PASSWORD: "student/change-password",
        FORGOT_PASSWORD: "auth/student/forgot-password",
        RESET_PASSWORD: "auth/student/reset-password",
    },

    PROFILE: {
        DETAIL: "student/profile",
        UPDATE_PROFILE: "student/update-profile",
    },

    TUTOR: {
        LIST: "any/tutor",
        DETAIL: "any/tutor-detail",
        BOOKING: "student/booking",
        CREATE_BOOKING: "booking",
        BOOKING_DETAIL: "student/booking",

        AVAILABILITY: "any/availability",
        PACKAGE: "any/package/by-tutor",

        BOOKING_WAITING: "student/booking-waiting",
        BOOKING_DETAIL_PACKAGE: "package-student/student",
        BOOKING_DETAIL_WEEKS: "subscription/student",

        PAYMENT: "payment",
    },

    CERTIFICATE: {
        CHECK_COMPLETE_COURSE: "certificate-online/complete-course",
        LIST: "generate-certificate/by-student",
        DETAIL: "any/generate-certificate",
    },
};

export default url;
