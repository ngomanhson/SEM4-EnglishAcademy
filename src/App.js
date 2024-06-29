import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { publicRoutes, privateRoutes, authenticationRoutes } from "./routes/routes";
import { isLoggedIn, removeAccessToken } from "./utils/auth";
import { useEffect } from "react";
import { useState } from "react";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn());
    const navigate = useNavigate();

    useEffect(() => {
        let isMounted = true;

        const checkAuthStatus = () => {
            if (!isMounted) return;

            const loggedIn = isLoggedIn();
            if (!loggedIn) {
                removeAccessToken();
                navigate("/login");
            }
            setIsAuthenticated(loggedIn);

            if (isMounted) {
                setTimeout(checkAuthStatus, 60000);
            }
        };

        checkAuthStatus();

        return () => {
            isMounted = false;
        };
    }, [navigate]);

    const ProtectedRoute = ({ element }) => {
        return isAuthenticated ? element : <Navigate to="/login" replace />;
    };

    const ProtectedAuthRoute = ({ element }) => {
        return isAuthenticated ? <Navigate to="/" replace /> : element;
    };

    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
                {privateRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<ProtectedRoute element={<Page />} />} />;
                })}
                {authenticationRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<ProtectedAuthRoute element={<Page />} />} />;
                })}
            </Routes>
        </div>
    );
}

export default App;
