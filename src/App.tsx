import LeftBranch from "./components/LeftBranch.tsx";
import RightBranch from "./components/RightBranch.tsx";
import {useState} from "react";
import {MyContext} from "./context/MyContext.tsx";
import './App.css'

const App = () => {
    const [counter, setCounter] = useState(0);
    const [darkTheme, LightTheme] = useState('light');
    return (
        <div className={darkTheme}>
            <MyContext.Provider value={
                {darkTheme,
                 LightTheme,
                 counter: counter,
                 increment: (obj) => {
                 setCounter(++obj)
                 console.log(obj)
            }
            }}>
            <LeftBranch/>
            <RightBranch/>
            </MyContext.Provider>
        </div>
    );
};

export default App;