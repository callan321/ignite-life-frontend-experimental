import {useEffect, useState} from "react";
import UserTable from "../components/admin/UserTable.tsx";
import AddUser from "../components/admin/AddUser.tsx";
import axios from "axios";

type User = {
    id: number;
    name: string;
    phone_number: string;
    email: string;
};

const backupUsers : User[] = [
    { id: 1, name: 'John Doe', phone_number: '123-456-7890', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', phone_number: '098-765-4321', email: 'jane.smith@example.com'},
    { id: 3, name: 'Alice Johnson', phone_number: '555-555-5555', email: 'alice.johnson@example.com' }
];

export default function AdminUsers() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        axios.get("http://ignite-life-backend.test/api/userss")
            .then(response => setUsers(response.data))
            .catch(error => {
                console.log(error);
                setUsers(backupUsers);
            })
    }, []);


    return (
        <div className=" flex justify-center">
            <div className="w-[48rem] py-8">
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
                <UserTable items={users}/>
            </div>
        </div>

    )
}