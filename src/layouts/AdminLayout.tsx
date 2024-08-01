import NavBar from "../components/NavBar.tsx";
import {Outlet} from "react-router-dom";

export default function AdminLayout() {
    const NavBarProps = [
        {name: 'Home', link: '/'},
        {name: 'Dashboard', link: '/admin/dashboard'},
        {name: 'Bookings', link: '/admin/bookings'},
        {name: 'Users', link: '/admin/users'},
    ];


    return (
        <div>
            <NavBar items={NavBarProps}/>
            <div className=" flex justify-center">
                <div className="w-[48rem] p-8">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}