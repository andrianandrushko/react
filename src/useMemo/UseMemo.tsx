import {useMemo, useState} from "react";

// створюємо компонент
const UseMemo = () => {

    // створюємо стан
    const [count, setCount] = useState(0)

    // створюємо стан name
    const [name, setName] = useState('max')

    // створюємо функцію з хуком useMemo який запам'ятовує результат і не обчислює його повторно, поки не зміниться count.
    const handleChange = useMemo(() => {

        // виводимо в консоль
        console.log('Обчислення')

        // повертаємо count який робить обчисленню +1
        return count + 1

    },[count])


    // створюємо функцію зміни імені
    const changeName = () => {
        if (name === 'max') {
            setName('oleg')
        } else if (name === 'oleg') {
            setName('vitaliy')
        } else if (name === 'vitaliy') {
            setName('stepan')
        } else if (name === 'stepan') {
            setName('kostia')
        } else if (name === 'kostia') {
            setName('petya')
        } else {
            setName('max')
        }
    };


    return (
        // кнопка для count при натиску дає +1
        // кнопка для зміни імені
        // handleChange показує поточний count
        // name який показує поточне ім'я
        <div>
            <button
                className='button'
                onClick={() => setCount(count + 1)}>
                {count}
            </button>

            <button onClick={changeName}>Change name</button>


            <p>{handleChange}</p>
            <p>{name}</p>
        </div>
    );
};

// useMemo запам'ятовує результат і не виконує його повторно,перший запуск рахує count зам'ятовує результат натиснули кнопку changeName count не змінився, useMemo не разує знову

export default UseMemo;