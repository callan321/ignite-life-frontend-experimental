import UserTableRow from "./UserTableRow.tsx";
import {User} from "../../models/types.ts";

type UserTableProps = {
    users: User[];
};

export default function UserTable({users} : UserTableProps) {
    return (
        <div className="-mx-4 mt-8 sm:-mx-0">
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                <tr>
                    <th scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Name
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                        Phone Number
                    </th>
                    <th
                        scope="col"
                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                        Email
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Role
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                {users.map((user) => (
                    <UserTableRow
                        key={user.email}
                        id={user.id}
                        name={user.name}
                        phone_number={user.phone_number}
                        email={user.email}
                        editHref={`/admin/users/edit/${user.id}`}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
}
