import {useEffect, useState} from "react";
import type {IUser} from "../models/IUser.dummy.ts";
import {getUser} from "../services/api.service.ts";


const DummyJsonPage = () => {
    const [users,setUser] = useState<IUser[]>([])
    useEffect(() => {
        getUser()
            .then(response => {
                setUser(response)
            })
    }, [])
    return (
        <div>
            {
                users.map(user => <div key={user.id}>
                    <p>id:{user.id}</p>
                    <p>firstName:{user.firstName}</p>
                    <p>lastName:{user.lastName}</p>
                    <p>maidenName:{user.maidenName}</p>
                    <p>age:{user.age}</p>
                    <p>gender:{user.gender}</p>
                    <p>email:{user.email}</p>
                    <p>phone:{user.phone}</p>
                    <p>username:{user.username}</p>
                    <p>password:{user.password}</p>
                    <p>birthDate:{user.birthDate}</p>
                    <img src={user.image} alt={user.image} />
                    <p>bloodGroup:{user.bloodGroup}</p>
                    <p>height:{user.height}</p>
                    <p>weight:{user.weight}</p>
                    <p>eyeColor:{user.eyeColor}</p>
                    <p>color:{user.hair.color}</p>
                    <p>type:{user.hair.type}</p>
                    <p>street:{user.address.address}</p>
                    <p>city:{user.address.city}</p>
                    <p>state:{user.address.state}</p>
                    <p>stateCode:{user.address.stateCode}</p>
                    <p>postalCode:{user.address.postalCode}</p>
                    <p>lat:{user.address. coordinates.lat}</p>
                    <p>lng:{user.address. coordinates.lng}</p>
                    <p>phone:{user.address.country}</p>
                    <p>macAddress:{user.macAddress}</p>
                    <p>university:{user.university}</p>
                    <p>cardExpire:{user.bank.cardExpire}</p>
                    <p>cardNumber:{user.bank.cardNumber}</p>
                    <p>cardType:{user.bank.cardType}</p>
                    <p>currency:{user.bank.currency}</p>
                    <p>iban:{user.bank.iban}</p>
                    <p>department:{user.company.department}</p>
                    <p>name:{user.company.name}</p>
                    <p>title:{user.company.title}</p>
                    <p>ein:{user.ein}</p>
                    <p>ssn:{user.ssn}</p>
                    <p>userAgent:{user.userAgent}</p>
                    <p>coin:{user.crypto.coin}</p>
                    <p>wallet:{user.crypto.wallet}</p>
                    <p>network:{user.crypto.network}</p>
                    <p>role:{user.role}</p>
                </div>)
            }
        </div>
    )
}
export default DummyJsonPage