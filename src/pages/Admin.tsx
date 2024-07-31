import {useEffect, useState} from "react";
import UserTable from "../components/admin/UserTable.tsx";
import AddUser from "../components/admin/AddUser.tsx";


export default function Admin() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://ignite-life-backend.test/api/users").then(res => res.json()).then(users => setUsers(users));
    })



    return (
        <div className=" flex justify-center">
            <div className="w-[48rem] py-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                        <p className="mt-2 text-sm text-gray-700">
                            A list of all the users in your account including their name, Phone Number, email and role.
                        </p>
                    </div>
                    <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <AddUser/>
                    </div>
                </div>
                <UserTable items={users}/>
            </div>
        </div>

    )
}