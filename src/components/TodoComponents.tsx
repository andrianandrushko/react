import { useEffect, useState} from "react";
import { getTodos } from "../services/api.service.ts";
import TodoComponent from "./TodoComponent.tsx";
import type {ITodo} from "../models/TodoComponent.ts";


const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodos()
            .then((data) => {
            setTodos(data);
        });
    }, []);

    return (
        <div>
            {todos.map((todo ) => (
               <TodoComponent key={todo.id} todo={todo}/>
            ))}
        </div>
    );
};

export default TodoComponents;









