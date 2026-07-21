import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


const RightBranchA = () => {
  const {darkTheme, LightTheme, counter, increment} = useContext(MyContext)
    return (
        <div>
            RightBranchA
            <button onClick={() =>{
                increment(counter)
                LightTheme(darkTheme === 'dark' ? 'light' : 'dark')

            }}>Змінити тему</button>
        </div>
    );
};

export default RightBranchA;