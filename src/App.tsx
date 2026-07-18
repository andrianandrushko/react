import { useState } from "react";
import UseMemo from "./useMemo/UseMemo.tsx";
import UseCallback from "./useCallback/UseCallback.tsx";
import Memo from "./memo/Memo.tsx";
import'./App.css'

// робимо функцію App
function App() {

    // створюємо стан
    const [count, setCount] = useState(0);


    // виводимо в консоль
    console.log("App render");


    // повертаємо те що буде видно на сторінці
    return (
        // створюємо кнопку на яку при натискані буде збільшуватись цифра на +1

        // також почататкове ім'я max
        <>
            <div className='hook-Memo'>
                Memo:
            <button onClick={() => setCount(prev => prev + 1)}>
                {count}
            </button>
                <Memo name='max' />
            </div>
            <div className='hook-UseMemo'>
                UseMemo:
                <UseMemo />
            </div>
            <div className='hook-UseCallback'>
                UseCallback:
                <UseCallback/>
            </div>

        </>
    );
}

// при першому запуску рендериться Сhild render, App render потім при натискані на кнопку(count) буде рендеритись тільки App render, потім memo викликає компонент memo якшо ім'я не змінилось то не виводитися в консолі Child render, якшо змінилось то виводиться Child render

export default App;