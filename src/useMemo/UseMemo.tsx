import {useMemo, useState} from "react";


const UseMemo = () => {

    const [count, setCount] = useState(0)

    const [name, setName] = useState('max')

    const handleChange = useMemo(() => {
        console.log('Обчислення')
        return count + 1
    },[count])


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

export default UseMemo;