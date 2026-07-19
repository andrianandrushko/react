import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

const LeftBranchA = () => {
    const {counter} = useContext(MyContext);
    return (
        <div>
                LeftBranchA
            current the numbers of the switches: {counter}
        </div>
    );
};

export default LeftBranchA;