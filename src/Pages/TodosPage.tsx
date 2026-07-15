import {useEffect} from "react";
import {loadAuthTodos} from "../services/api.service.ts";


const TodosPage = () => {
    useEffect(() => {
        // функція яка вантажить задачі
        loadAuthTodos()
            .then((todos) => {
                // виводимо в консоль
                console.log(todos);

                // якшо буде помилка то виводимо в консоль помилку
            }).catch((error) => {
                console.log(error)
        })
    }, []);
    return (
        <div>
            Todos Page
        </div>
    );
};

export default TodosPage;