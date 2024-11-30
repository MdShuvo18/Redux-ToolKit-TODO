
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

const Todos = () => {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Todos</h1>
            {
                todos?.map(todo => (
                    <li key={todo?.id}>
                        {todo?.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))
            }
        </div>
    );
};

export default Todos;