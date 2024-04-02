import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/routes";

function App() {
    return (
        <div className="App">
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}
            </Routes>
        </div>
    );
}

export default App;
