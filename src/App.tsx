import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import AdminLayout from "./layouts/AdminLayout.tsx";
import AdminUsers from "./pages/AdminUsers.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import AdminBookings from "./pages/AdminBookings.tsx";
import {useEffect} from "react";


export default function App() {
    useEffect(() => {
        document.title = "Ignite Life - Bowen Therapy";
    }, []);

    return (
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<Navigate to={"/home"}/> } />
                <Route path="home" element={<Home/>}/>

            </ Route>
            <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to={"/admin/dashboard"}/> } />
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="bookings" element={<AdminBookings />} />
                <Route path="users" element={<AdminUsers />} />
            </Route>
        </Routes>
    )
}

