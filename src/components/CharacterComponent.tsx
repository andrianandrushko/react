import type {FC, ReactNode} from "react";
import '.App.css'

type MyComponentPropType = {
    title: string;
    monthDuration: number
    children?: ReactNode }

const CharacterComponent:FC<MyComponentPropType> = ({title,monthDuration,children}) => {
    return (
        <div className='target'>
            <h2>{title} - {monthDuration}</h2>
            <p>{children}</p>
        </div>
    );
};

export default CharacterComponent;