import {createContext} from "react";


type MyContextType = {
    counter: number
    increment: (obj:number) => void
    darkTheme: string;
    LightTheme: (theme: string) => void;
}
export const MyContext = createContext<MyContextType>({
    counter: 0,
    increment: (obj:number) => {
    console.log(obj);
    },
    darkTheme: 'dark',
    LightTheme: () => {}
})

