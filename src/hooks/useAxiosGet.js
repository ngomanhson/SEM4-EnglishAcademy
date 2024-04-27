import { useState, useEffect, useRef } from "react";
import api from "../services/api";

function useAxiosGet({ method, path, body = null, headers = null }) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(null);

    const headersRef = useRef(headers);

    useEffect(() => {
        const loadData = async () => {
            try {
                const responseData = await api.get(path, { headers: headersRef.current });

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
    }, [method, path, body]);

    useEffect(() => {
        headersRef.current = headers;
    }, [headers]);

    console.log(status);

    return { response, setResponse, error, loading, status };
}

export default useAxiosGet;
