import Cookies from "js-cookie";
import { decodeToken } from "react-jwt";

// Store tokens in cookie after logging in
export const setAccessToken = (token, expiresIn) => {
    const expirationTime = new Date(Date.now() + expiresIn * 1000);
    Cookies.set("access_token", token, { expires: expirationTime });
};

// Get tokens from cookie when needed
export const getAccessToken = () => {
    return Cookies.get("access_token");
};

// Check if the user is logged in
export const isLoggedIn = () => {
    const token = getAccessToken();
    if (token) {
        const decodedToken = getDecodedToken();
        if (decodedToken) {
            const isTokenExpired = decodedToken.exp * 1000 < Date.now();
            if (isTokenExpired) {
                // If the token expires, delete the token and return false
                removeAccessToken();
                return false;
            }
            return true;
        }
    }
    return false;
};

// Remove token from cookie when logging out
export const removeAccessToken = () => {
    Cookies.remove("access_token");
};

// Decode tokens
export const getDecodedToken = () => {
    const token = getAccessToken();
    if (token) {
        try {
            const decodedToken = decodeToken(token);
            return decodedToken;
        } catch (error) {
            console.error("Error decoding token:", error);
        }
    }
    return null;
};
