import type {ITodos} from "../models/ITodos.ts";

interface Props {
    todo: ITodos;
}

const TodoComponent = ({ todo }: Props) => {
    return (
        <div key={todo.id}  className={'cool'}>
            <p>id:{todo.id}</p>
            <p>todo:{todo.todo}</p>
            <p>completed:{todo.completed ? "true" : "false"}</p>
            <p>userId:{todo.userId}</p>
        </div>
    );
};



export default TodoComponent;