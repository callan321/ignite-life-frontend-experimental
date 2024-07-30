import NavBar from "../components/NavBar.tsx";
import {Outlet} from "react-router-dom";

export default function MainLayout() {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    )
}
