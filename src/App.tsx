import './App.css'
import {coursesTitleArray} from "./data/coursesList.ts";


function App() {

  return (
      <>
        <div className='target'>
          {
            coursesTitleArray.map((value) => (
                <h2 key={value}>{value}</h2>
            ))
          }
        </div>
      </>
  );
}

export default App
