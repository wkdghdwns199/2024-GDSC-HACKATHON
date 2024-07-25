import {useState, useEffect} from "react";
import { getUsersList } from "../api/getUserList";

const UserList = () => {
    const [userList, setUserList] = useState<User[]>([]);

    useEffect(() => {
        getUsersList();
    },[])

    return (
        <div>HI</div>
    )
}

export default UserList;