import {useParams} from 'react-router-dom';
import {backupUsers} from "./BackupData.ts";
import UserForm from "../../components/admin/UserForm.tsx";


export default function EditUser() {
    const {id} = useParams<{ id: string }>();
    const user_id = Number(id);  // Convert the id to a number
    const user = backupUsers.find(user => user.id === user_id);

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <div>
            <UserForm user={user}/>
        </div>
    )
}