import './App.css'
import {coursesAndDurationArray} from "./data/coursesList.ts";


function App() {

  return (
      <>
        <div className='target'>
          {
              coursesAndDurationArray.map((value) => (
                <h2 key={value.title}>{value.title}:{value.monthDuration}</h2>
            ))
          }
        </div>
      </>
  );
}

export default App
