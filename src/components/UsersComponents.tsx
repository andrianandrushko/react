import {useEffect, useState} from "react";
import type {IUsers} from "../models/IUsers.ts";
import {getUsers} from "../services/api.service.ts";
import UsersComponent from "./UsersComponent.tsx";

const UsersComponents = () => {
    const [users, seUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getUsers()
            .then(response =>{
                console.log(response)
                seUsers(response)
            })
    })
    return (
        <div>
            {
                users.map((user) => (
                    <UsersComponent key={user.id} user={user}/>
                ))
            }
        </div>
    );
};

export default UsersComponents;