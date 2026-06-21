import './App.css'
import {coursesArray} from "./data/coursesList.ts";

function App() {
    return (
        <>
            {
                coursesArray.map((course) => (
                    <div key={course.title} className='target'>
                        <h2> title:{course.title}</h2>
                        <h3>monthDuration:{course.monthDuration}</h3>
                        <h4>hourDuration:{course.hourDuration}</h4>
                        <h5>modules:['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']</h5>
                    </div>))
            }
        </>
    );
}

export default App