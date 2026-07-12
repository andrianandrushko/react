import type {IUsers} from "../models/IUsers.ts";
import {useNavigate} from "react-router";

interface Props {
    user: IUsers;
}
const UsersComponent = ({user}:Props) => {
    const navigate = useNavigate();
    return (
        <div>
            <button className={'block'} onClick={() => navigate(`/users/${user.id}`)}>
                Show carts
            </button>
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
            <img src={user.image} alt={user.image}/>
            <p>bloodGroup:{user.bloodGroup}</p>
            <p>height:{user.height}</p>
            <p>weight:{user.weight}</p>
            <p>eyeColor:{user.eyeColor}</p>
            <p>color:{user.hair.color}</p>
            <p>type:{user.hair.type}</p>
            <p>ip:{user.ip}</p>
            <p>address:{user.address.address}</p>
            <p>city:{user.address.city}</p>
            <p>state:{user.address.state}</p>
            <p>stateCode:{user.address.stateCode}</p>
            <p>postalCode:{user.address.postalCode}</p>
            <p>lat:{user.address.coordinates.lat}</p>
            <p>lng:{user.address.coordinates.lng}</p>
            <p>country:{user.address.country}</p>
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
        </div>
    );
};

export default UsersComponent;