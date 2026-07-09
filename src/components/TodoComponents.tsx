import { useEffect, useState } from "react";
import { getTodos } from "../services/api.service.ts";
import type {TodoComponent} from "../models/TodoComponent.ts";


const TodoComponents = () => {
    const [todos, setTodos] = useState<TodoComponent[]>([]);
    useEffect(() => {
        getTodos()
            .then((data) => {
            setTodos(data);
        });
    }, []);

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id} className="cool">
                    <h2>userId: {todo.userId}</h2>
                    <h3>Id: {todo.id}</h3>
                    <h4>Title: {todo.title}</h4>
                    <h5>Completed: {todo.completed ? "true" : "false"}</h5>
                </div>
            ))}
        </div>
    );
};

export default TodoComponents;
