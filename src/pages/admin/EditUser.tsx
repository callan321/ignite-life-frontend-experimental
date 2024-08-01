import {useParams} from 'react-router-dom';

export default function EditUser() {
    const {id} = useParams<{ id: string }>();

    return (
        <div><h1>Hello user</h1><p>User: {id}</p></div>
    )
}