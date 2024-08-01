import {User} from "../../models/types.ts";
import {Link} from "react-router-dom";

type UserTableRowProps = User & {
    editHref: string;
};
export default function UserTableRow({id, name, phone_number, email, editHref}: UserTableRowProps) {
    return (
        <tr key={email}>
            <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                {name}
                <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Phone Number</dt>
                    <dd className="mt-1 truncate text-gray-700">{phone_number}</dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">{email}</dd>
                </dl>
            </td>
            <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">{phone_number}</td>
            <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{email}</td>
            <td className="px-3 py-4 text-sm text-gray-500">{id}</td>
            <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                <Link to={editHref} className="text-indigo-600 hover:text-indigo-900">
                    Edit<span className="sr-only">, {name}</span>
                </Link>
            </td>
        </tr>
    )
}