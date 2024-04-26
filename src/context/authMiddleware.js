import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn, removeAccessToken, getDecodedToken } from "../utils/auth";
import { useJwt } from "react-jwt";

const authMiddleware = (Component) => {
    const AuthWrapper = (props) => {
        const navigate = useNavigate();
        const { decodedToken } = useJwt();

        useEffect(() => {
            const checkToken = async () => {
                if (isLoggedIn()) {
                    const token = getDecodedToken();

                    if (token) {
                        // console.log("Decoded Token:", token);

                        // Check if the token has expired
                        const isTokenExpired = token && token.exp ? token.exp * 1000 < Date.now() : true;

                        if (isTokenExpired) {
                            console.error("Token has expired.");

                            // If the token is invalid or expired, delete the token and navigate to the login page
                            removeAccessToken();
                            navigate("/login");
                        }
                    } else {
                        // If there is no decoding information from the token, delete the token and navigate to the login page
                        removeAccessToken();
                        navigate("/login");
                    }
                } else {
                    navigate("/login");
                }
            };

            checkToken();
        }, [navigate, decodedToken]);

        return <Component {...props} />;
    };

    return AuthWrapper;
};

export default authMiddleware;
