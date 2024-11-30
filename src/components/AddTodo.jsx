import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('')
    };

    return (
        <div className="add-todo-container">
            <form onSubmit={handleSubmit} className="add-todo-form">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter a new task"
                    className="todo-input"
                />
                <button type="submit" className="add-todo-button">
                    Add Todo
                </button>
            </form>
        </div>
    );
};

export default AddTodo;
