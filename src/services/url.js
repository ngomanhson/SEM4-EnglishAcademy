const url = {
    BASE_URL: "http://localhost:8080/api/v1",

    ONLINE_COURSE: {
        GET_ALL: "/course-online",
        DETAIL: "/course-online/detail",
        TOPIC_ONLINE: "/topic-online",
        ITEM_ONLINE: "/topic-online",
    },

    ENTRANCE_TEST: {
        TOIEC: "/test-input/detail",
        IELTS: "/test-input/detail",
        SUBMIT: "/test-input/detail",
        RESULT: "/test-input/result",
    },

    DICTIONARY: {
        SEARCH: "https://api.dictionaryapi.dev/api/v2/entries/en",
    },
};

export default url;
