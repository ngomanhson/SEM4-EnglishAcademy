import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes, authenticationRoutes } from "./routes/routes";
import authMiddleware from "./context/authMiddleware";
import { getAccessToken } from "./utils/auth";
import { useJwt } from "react-jwt";

function App() {
    const ProtectedRoute = authMiddleware(({ element }) => element);

    const ProtectedAuthRoute = ({ element }) => {
        const token = getAccessToken();
        const { isExpired, isInvalid } = useJwt(token);

        if (token && !isExpired && !isInvalid) {
            return <Navigate to="/" />;
        }

        return element;
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
