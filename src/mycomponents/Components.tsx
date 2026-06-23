import {coursesAndDurationArray} from "../data/coursesList.ts";
import './Components.css'

const Components = () => {
    return (
        <div>
            <>
                <div className='target'>
                    {
                        coursesAndDurationArray.map((value) => (
                            <h2 key={value.title}>{value.title}:{value.monthDuration}</h2>
                        ))
                    }
                </div>
            </>
        </div>
    );
};

export default Components;