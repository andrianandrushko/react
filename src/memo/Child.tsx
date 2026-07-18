import { memo } from "react";


// створюємо інтерфейс для пропсу
interface Props {
    name: string;
}

// обгортажмо компонент у memo
const Child = ({ name }: Props) => {

    // виводимо в консоль
    console.log("Child render");

    // повертаємо ім'я користувача
    return <h1>{name}</h1>;
};

export default memo(Child);
