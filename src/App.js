import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* Start Home */}
                <Route path="/" element={<Home />} />
                {/* End Home */}
            </Routes>
        </div>
    );
}

export default App;
