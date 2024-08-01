import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import AdminLayout from "./layouts/AdminLayout.tsx";
import AdminUsers from "./pages/admin/AdminUsers.tsx";
import AdminDashboard from "./pages/admin/AdminDashboard.tsx";
import AdminBookings from "./pages/admin/AdminBookings.tsx";
import EditUser from "./pages/admin/EditUser.tsx";
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
                <Route path="users/edit/:id" element={<EditUser />} />
            </Route>
        </Routes>
    )
}

