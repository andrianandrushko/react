import {coursesArray} from "../data/coursesList.ts";

const CourseComponents = () => {
    return (
        <>
            <div>
                {
                    coursesArray.map((course, index) => (
                        <div key={index} className='target'>
                            <h2> title:{course.title}</h2>
                            <h3>monthDuration:{course.monthDuration}</h3>
                            <h4>hourDuration:{course.hourDuration}</h4>
                            <ul>
                                {course.modules.map((module) => (
                                    <li key={module}>{module}</li>
                                ))}
                            </ul>
                        </div>))
                }
            </div>
        </>
    );
};

export default CourseComponents;