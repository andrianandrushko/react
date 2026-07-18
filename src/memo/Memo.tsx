import { memo } from "react";


// створюємо інтерфейс для пропсу
interface Props {
    name: string;
}

// обгортажмо компонент у memo
const Memo = ({ name }: Props) => {

    // виводимо в консоль
    console.log("Memo render");

    // повертаємо ім'я користувача
    return <h1>{name}</h1>;
};

export default memo(Memo);
