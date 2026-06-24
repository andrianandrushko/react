import type {IComments} from "../models/IComments.ts";

interface Props {
    comment: IComments;
}

const PostComponent = ({ comment }: Props) => {
    return (
        <div>
            <h4>gender:{comment.gender} email:{comment.email}</h4>
            <h5>phone:{comment.phone} username:{comment.username}</h5>
            <h6>password:{comment.password} birthdate:{comment.birthDate}</h6>
            <p>bloodGroup:{comment.bloodGroup}</p>
            <p>height:{comment.height}</p>
            <p>weight:{comment.weight}</p>
            <p>eyeColor:{comment.eyeColor}</p>
            <p>hair: {comment.hair.color} {comment.hair.type}</p>
            <p>ip:{comment.ip}</p>
            <p>Address: {comment.address.address}</p>
            <p>City: {comment.address.city}</p>
            <p>State: {comment.address.state}</p>
            <p>Postal Code: {comment.address.postalCode}</p>
            <p>lat:{comment.address.coordinates.lat}</p>
            <p>lng:{comment.address.coordinates.lng}</p>
            <p>country:{comment.address.country}</p>
            <p>macAddress:{comment.macAddress}</p>
            <p>university:{comment.university}</p>
            <p>CardExpire:{comment.bank.cardExpire}</p>
            <p>CardNumber:{comment.bank.cardNumber}</p>
            <p>CardType:{comment.bank.cardType}</p>
            <p>Currency:{comment.bank.currency}</p>
            <p>Iban:{comment.bank.iban}</p>
            <p>department:{comment.company.department}</p>
            <p>name:{comment.company.name}</p>
            <p>title:{comment.company.title}</p>
            <p>address:{comment.address.address}</p>
            <p>city:{comment.address.city}</p>
            <p>state:{comment.address.state}</p>
            <p>stateCode:{comment.address.stateCode}</p>
            <p>postalCode:{comment.address.postalCode}</p>
            <p>lat:{comment.address.coordinates.lat}</p>
            <p>lng:{comment.address.coordinates.lng}</p>
            <p>ssn:{comment.ssn}</p>
            <p>userAgent:{comment.userAgent}</p>
            <p>coin:{comment.crypto.coin}</p>
            <p>wallet:{comment.crypto.wallet}</p>
            <p>network:{comment.crypto.network}</p>
            <p>role:{comment.role}</p>
        </div>
    );
};

export default PostComponent;