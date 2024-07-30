import NavBar from "../components/NavBar.tsx";
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    const NavBarProps = [
        { name: 'Home', link: '/' },
        { name: 'Admin', link: '/admin' },
    ]
    return (
        <div>
            <NavBar items={NavBarProps} />
            <Outlet/>
        </div>
    )
}
