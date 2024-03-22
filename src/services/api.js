import axios from "axios";

import url from "./url";

export default axios.create({
    baseURL: url.BASE_URL,
});
