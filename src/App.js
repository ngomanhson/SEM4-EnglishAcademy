import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes, authenticationRoutes } from "./routes/routes";
import { isLoggedIn } from "./utils/auth";

function App() {
    const ProtectedRoute = ({ element }) => {
        const isAuthenticated = isLoggedIn();
        return isAuthenticated ? element : <Navigate to="/login" replace />;
    };

    const ProtectedAuthRoute = ({ element }) => {
        const isAuthenticated = isLoggedIn();
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
