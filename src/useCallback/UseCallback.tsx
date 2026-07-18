import { memo, useCallback, useState } from "react";

// стврюємо інтерфейс пропса
interface Props {
    onClick: () => void;
}

// робимо функцію з хуком memo і з пропсом
const Child = memo(({ onClick }: Props) => {

    // виводимо в консоль
    console.log("Child render");

    return (
        // кнопка при натиску виводить hello в консоль
        <button onClick={onClick}>
            Hello
        </button>
    );
});

function App() {
    // створюємо стан
    const [count, setCount] = useState(0);

    // виводимо в консоль
    console.log("App render");

    // створюємо функція з хуком useCallback
    const sayHello = useCallback(() => {
        // виводимо в консоль
        console.log("Hello");
    }, []);

    return (
        // робимо кнопки для при натиску додається + 1
        // також через функцію Child виводимо ім'я
        <>
            <button onClick={() => setCount(count + 1)}>{count}
            </button>

            <Child onClick={sayHello} />
        </>
    );
}
// useCallback запамєятовує функцію sayHello щоб вона не створювалася заново при кожному рендері App.Завдяки цьому memo бачить щоб props не змінився і Child не рендериться повторно.

export default App;