import { useState, useEffect } from "react";
import api from "../services/api";

function useAxiosGet({ method, path, body = null, headers = null }) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const responseData = await api.get(path, { headers });

                setResponse(responseData.data.data);
                setError(false);
                setStatus(responseData.status);
            } catch (error) {
                setError(true);
            } finally {
                setTimeout(() => {
                    setLoading(false);
                }, 1500);
            }
        };
        loadData();
    }, [method, path, body, headers]);

    return { response, setResponse, error, loading, status };
}

export default useAxiosGet;
