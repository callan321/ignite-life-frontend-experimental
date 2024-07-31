import NavBar from "../components/NavBar.tsx";
import {Outlet} from "react-router-dom";

export default function AdminLayout() {
    const NavBarProps = [
        {name: 'Dashboard', link: '/admin/dashboard'},
        {name: 'Bookings', link: '/admin/bookings'},
        {name: 'Users', link: '/admin/users'},
    ];


    return (
        <div>
            <NavBar items={NavBarProps}/>
            <Outlet/>
        </div>
    )
}