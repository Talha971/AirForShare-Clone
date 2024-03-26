import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import HomePage from "../pages/home";
function AppRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter