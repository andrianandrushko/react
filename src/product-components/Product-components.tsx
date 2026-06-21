import {useEffect, useState} from 'react';
import type {ProductComponent} from "../models/ProductComponent.ts";
import {getUsers} from "../services/api.service.ts";


const ProductComponents = () => {
    const [users,setUsers] = useState<ProductComponent[]>([])
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response)
            })
    }, [])
    return (
        <div>
            {
                users.map(user => <div key={user.title}>item={user.id}</div>)
            }
        </div>
    )
}
export default ProductComponents;