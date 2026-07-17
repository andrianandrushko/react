import {useEffect, useState} from "react";
import type {IUsers} from "../models/IUsers.ts";
import {getUsers} from "../services/api.service.ts";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../pagination/PaginationComponent.tsx";
import UsersComponent from "../component/UsersComponent.tsx";

const UsersPage = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    const [query] = useSearchParams();
    useEffect(() => {
        const pg = query.get('pg') || '1';
        getUsers(pg)
            .then(response => {
                console.log(response);
                setUsers(response);
            })
    },[query])
    return (
        <div>
            {
                users.map(user => <UsersComponent key={user.id} item={user}/>)
            }
            <PaginationComponent />
        </div>
    );
};

export default UsersPage;