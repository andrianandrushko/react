import type { ITodo } from '../models/TodoComponent';

interface Props {
    todo: ITodo;
}

const TodoComponent = ({ todo }: Props) => {
    return (
            <div className="cool">
                <h2>userId: {todo.userId}</h2>
                <h3>Id: {todo.id}</h3>
                <h4>Title: {todo.title}</h4>
                <h5>Completed: {todo.completed ? "true" : "false"}</h5>
            </div>
    );
};

export default TodoComponent;