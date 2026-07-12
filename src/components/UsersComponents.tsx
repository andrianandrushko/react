import {useEffect, useState} from "react";
import type {IUsers} from "../models/IUsers.ts";
import {getUsers} from "../services/api.service.ts";
import UsersComponent from "./UsersComponent.tsx";

const UsersComponents = () => {
    const [users,setUsers] = useState<IUsers[]>([]);
    useEffect(() => {
        getUsers()
        .then(data =>{
            setUsers(data);
        })
    },[])
    return (
        <div>
            {
                users.map(user =>(
                    <UsersComponent key={user.id} user={user}/>
                ))
            }

            </div>
    );
};

export default UsersComponents;