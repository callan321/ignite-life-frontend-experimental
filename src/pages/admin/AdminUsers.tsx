import {useEffect, useState} from "react";
import UserTable from "../../components/admin/UserTable.tsx";
import AddUser from "../../components/admin/AddUser.tsx";
import axios from "axios";
import {User} from "../../models/types.ts";
import {backupUsers} from "./BackupData.ts";

export default function AdminUsers() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get("http://ignite-life-backend.test/api/users")
            .then(response => setUsers(response.data))
            .catch(error => {
                console.log(error);
                setUsers(backupUsers);
            })
    }, []);


    return (
        <div>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Users</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the users in your account including their name, Phone Number, email and role
                        is a placeholder. Currently this is using backup data.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <AddUser/>
                </div>
            </div>
            <UserTable users={users}/>
        </div>

    )
}