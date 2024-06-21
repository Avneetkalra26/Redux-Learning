import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../features/todoSlice";

const Todo = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleAddTodo = () => {
        if (text) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="h-screen bg-gray-100 flex flex-col justify-center items-center py-4">
            <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="flex items-center border-b border-gray-200 px-4 py-3">
                    <input
                        type="text"
                        value={text}
                        onChange={handleInputChange}
                        placeholder="Enter your todo"
                        className="flex-1 py-2 px-3 rounded-md bg-gray-100 border border-gray-300 outline-none"
                    />
                    <button
                        className="bg-cyan-800 py-2 px-3 ml-3 text-white rounded-md hover:bg-cyan-700"
                        onClick={handleAddTodo}
                    >
                        Add Todo
                    </button>
                </div>
                <ul>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="border-b border-gray-200 px-4 py-3 flex items-center justify-between"
                        >
                            <span
                                className={`flex-1 cursor-pointer ${todo.completed ? 'line-through text-gray-400' : ''}`}
                                onClick={() => handleToggleComplete(todo.id)}
                            >
                                {todo.text}
                            </span>
                            <div className="space-x-2">
                                <button
                                    onClick={() => handleToggleComplete(todo.id)}
                                    className={`py-2 px-3 text-white rounded-md ${todo.completed ? 'bg-yellow-400 hover:bg-yellow-500' : 'bg-green-500 hover:bg-green-400'}`}
                                >
                                    {todo.completed ? "Mark Incomplete" : "Mark Complete"}
                                </button>
                                <button
                                    onClick={() => handleDeleteTodo(todo.id)}
                                    className="bg-red-500 py-2 px-3 text-white rounded-md hover:bg-red-400"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Todo;
