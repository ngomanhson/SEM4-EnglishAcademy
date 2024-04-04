import { useState, useEffect } from "react";
import api from "../services/api";

function useAxios({ method, path, body = null, headers = null }) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

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
            } catch (error) {
                setError("Failed to fetch data");
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [method, path, body, headers]);

    return { response, error, loading };
}

export default useAxios;
