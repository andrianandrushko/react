import { useEffect, useState } from "react";
import type { IUsers } from "../models/IUsers.ts";
import { getUsers } from "../services/api.service.ts";

const UsersPage = () => {
    const [users, setUsers] = useState<IUsers[]>([]);
    useEffect(() => {
        getUsers().then(data => {
            setUsers(data);
        });
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id}>
                    <img src={user.image} alt={user.firstName} />
                    <h2>{user.firstName} {user.lastName}</h2>
                    <p>Age: {user.age}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Username: {user.username}</p>
                    <p>Birth date: {user.birthDate}</p>
                    <p>Blood group: {user.bloodGroup}</p>
                    <p>Height: {user.height}</p>
                    <p>Weight: {user.weight}</p>
                    <p>Eye color: {user.eyeColor}</p>
                    <h3>Hair:</h3>
                    <p>Color: {user.hair.color}</p>
                    <p>Type: {user.hair.type}</p>
                    <h3>Address:</h3>
                    <p>{user.address.address}</p>
                    <p>{user.address.city}</p>
                    <p>{user.address.country}</p>
                    <h3>Company:</h3>
                    <p>{user.company.name}</p>
                    <p>{user.company.department}</p>
                    <p>{user.company.title}</p>
                    <h3>University:</h3>
                    <p>{user.university}</p>
                    <h3>Role:</h3>
                    <p>{user.role}</p>
                </div>
            ))}
        </div>
    );
};

export default UsersPage;