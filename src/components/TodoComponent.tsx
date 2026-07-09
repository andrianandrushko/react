import type {ITodos} from "../models/ITodos.ts";

interface Props {
    todo: ITodos;
}

const TodoComponent = ({ todo }: Props) => {
    return (
        <div>
            <p>id:{todo.id}</p>
            <p>todo:{todo.todo}</p>
            <p>completed:{todo.completed}</p>
            <p>userId:{todo.userId}</p>
        </div>
    );
};



export default TodoComponent;