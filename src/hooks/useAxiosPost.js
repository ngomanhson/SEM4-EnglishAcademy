// import { useState } from "react";
// import api from "../services/api";

// function useAxiosPost() {
//     const [response, setResponse] = useState(null);
//     const [status, setStatus] = useState(null);
//     const [error, setError] = useState(null);

//     const makeRequest = async (path, body = null, headers = null) => {
//         try {
//             const responseData = await api.post(path, body, { headers });
//             setResponse(responseData.data);
//             setStatus(responseData.status);
//         } catch (error) {
//             setError(true);
//             setStatus(error.response.status);
//         }
//     };

//     return { makeRequest, response, setResponse, error, status };
// }

// export default useAxiosPost;
