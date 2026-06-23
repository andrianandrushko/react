import type {FC, ReactNode} from "react";
import './components.css'
import './App.css'


type MyComponentPropType = {
    title: string;
    monthDuration: number
    hourDuration: number
    modules: string
    children?: ReactNode }

const Components:FC<MyComponentPropType> = ({title,monthDuration,hourDuration,modules,children}) => {
    return (
        <div className='target'>
            <h2>{title} - {monthDuration}</h2>
            <h1>{hourDuration} -  {modules}</h1>
            <p>{children}</p>
        </div>
    );
};

export default Components;