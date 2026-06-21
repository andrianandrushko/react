import { useEffect, useState } from "react";
import type { UserComponent } from "./models/UserComponent.ts";
import './App.css'

const App = () => {
    const [users, setUsers] = useState<UserComponent[]>([])
    useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsers(data.users)
            })
    }, [])
    return (
        <>
            {
                users.map((user) => (
                    <div key={user.id}  className={'cool'}>
                        <h2>Id:{user.id} firstName:{user.firstName}</h2>
                        <h3>maidenName:{user.maidenName} age:{user.age}</h3>
                        <h4>gender:{user.gender} email:{user.email}</h4>
                        <h5>phone:{user.phone} username:{user.username}</h5>
                        <h6>password:{user.password} birthdate:{user.birthDate}</h6>
                        <p>bloodGroup:{user.bloodGroup}</p>
                        <p>height:{user.height}</p>
                        <p>weight:{user.weight}</p>
                        <p>eyeColor:{user.eyeColor}</p>
                        <p>hair: {user.hair.color} {user.hair.type}</p>
                        <p>ip:{user.ip}</p>
                        <p>Address: {user.address.address}</p>
                        <p>City: {user.address.city}</p>
                        <p>State: {user.address.state}</p>
                        <p>Postal Code: {user.address.postalCode}</p>
                        <p>lat:{user.address.coordinates.lat}</p>
                        <p>lng:{user.address.coordinates.lng}</p>
                        <p>country:{user.address.country}</p>
                        <p>macAddress:{user.macAddress}</p>
                        <p>university:{user.university}</p>
                        <p>CardExpire:{user.bank.cardExpire}</p>
                        <p>CardNumber:{user.bank.cardNumber}</p>
                        <p>CardType:{user.bank.cardType}</p>
                        <p>Currency:{user.bank.currency}</p>
                        <p>Iban:{user.bank.iban}</p>
                        <p>department:{user.company.department}</p>
                        <p>name:{user.company.name}</p>
                        <p>title:{user.company.title}</p>
                        <p>address:{user.address.address}</p>
                        <p>city:{user.address.city}</p>
                        <p>state:{user.address.state}</p>
                        <p>stateCode:{user.address.stateCode}</p>
                        <p>postalCode:{user.address.postalCode}</p>
                        <p>lat:{user.address.coordinates.lat}</p>
                        <p>lng:{user.address.coordinates.lng}</p>
                        <p>ssn:{user.ssn}</p>
                        <p>userAgent:{user.userAgent}</p>
                        <p>coin:{user.crypto.coin}</p>
                        <p>wallet:{user.crypto.wallet}</p>
                        <p>network:{user.crypto.network}</p>
                        <p>role:{user.role}</p>
                    </div>))
            }
        </>
    )
}


export default App;