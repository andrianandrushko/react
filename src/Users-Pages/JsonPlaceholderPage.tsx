import type {IUsers} from "../Users-models/IUsers.ts";
import {useEffect, useState} from "react";
import {getUsers} from "../services/api.service.ts";


const JsonPlaceholderPage = () => {
    const [users,setUsers] = useState<IUsers[]>([])
    useEffect(() => {
        getUsers()
            .then(response => {
                setUsers(response)
            })
    }, [])
    return (
        <div>
            {
                users.map(user => <div key={user.id}>
                    <p>id:{user.id}</p>
                    <p>name:{user.name}</p>
                    <p>username:{user.username}</p>
                    <p>email:{user.email}</p>
                    <p>street:{user.address.street}</p>
                    <p>suite:{user.address.suite}</p>
                    <p>city:{user.address.city}</p>
                    <p>zipcode:{user.address.zipcode}</p>
                    <p>lat:{user.address.geo.lat}</p>
                    <p>lng:{user.address.geo.lng}</p>
                    <p>phone:{user.phone}</p>
                    <p>website:{user.website}</p>
                    <p>name:{user.company.name}</p>
                    <p>catchPhrase:{user.company.catchPhrase}</p>
                    <p>bs:{user.company.bs}</p>
                </div>)
            }
        </div>
    )
}
export default JsonPlaceholderPage