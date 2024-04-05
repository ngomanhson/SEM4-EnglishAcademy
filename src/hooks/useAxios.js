import { useState, useEffect } from "react";
import api from "../services/api";

function useAxios({ method, path, body = null, headers = null }) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                let responseData;

                if (method === "GET") {
                    responseData = await api.get(path, { headers });
                } else if (method === "POST") {
                    responseData = await api.post(path, body, { headers });
                }

                setResponse(responseData.data.data);
                setError(false);
                setStatus(responseData.status);
            } catch (error) {
                setError(true);
                setStatus(error.response.status);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }
        };

        loadData();
    }, [method, path, body, headers]);

    return { response, error, loading, status };
}

export default useAxios;
