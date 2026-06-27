import {coursesTitleArray} from "../data/coursesList.ts";

const CourseTitleArrayComponent = () => {
    return (
        <>
        <div className={'target'}>
            {
                coursesTitleArray.map((value) => (
                    <h2 key={value}>{value}</h2>
                ))
            }
        </div>
        </>
    );
};

export default CourseTitleArrayComponent;