import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";


const RightBranchA = () => {
  const {darkTheme, LightTheme} = useContext(MyContext)
  const {counter, increment} = useContext(MyContext)
    return (
        <div>
            RightBranchA
            <button onClick={() =>{
                increment(counter)
                LightTheme(darkTheme === 'dark' ? 'light' : 'dark')
                console.log(darkTheme)

            }}>Змінити тему</button>
        </div>
    );
};

export default RightBranchA;