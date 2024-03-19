import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Profile from "./components/pages/Profile";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* Start Home */}
                <Route path="/" element={<Home />} />
                {/* End Home */}

                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
