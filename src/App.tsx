import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Admin from "./pages/Admin.tsx";
import MainLayout from "./layouts/MainLayout.tsx";


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </ Route>
        </Routes>
    )
}

