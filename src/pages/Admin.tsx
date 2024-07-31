import {useEffect, useState} from "react";
import UserTable from "../components/admin/UserTable.tsx";


export default function Admin() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://ignite-life-backend.test/api/users").then(res => res.json()).then(users => setUsers(users));
    })


    return (
        <div className=" flex justify-center">
            <div className="w-[48rem] py-8">
                <UserTable items={users}  />
            </div>
        </div>

    )
}