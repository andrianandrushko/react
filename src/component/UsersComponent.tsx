import type {FC} from "react";
import type {IUsers} from "../models/IUsers.ts";


type PropsType = {
    item:IUsers
}

const UsersComponent:FC<PropsType> = ({item}) => {
    return (
        <div>
            {
                <div>{item.id}.{item.firstName} {item.lastName}</div>
            }
        </div>
    );
};

export default UsersComponent;