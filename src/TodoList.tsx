import React from "react";
import {useState} from "react";
import './App.css';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {id: 1, text: 'Git Upload', isChecked: false},
        {id: 2, text: 'Coffee', isChecked: false},
        {id: 3, text: 'Code', isChecked: false},
    ]);

    const handleCheckBox = (itemId: number) => {
        setTodos((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? { ...item, isChecked : !item.isChecked } : item
            )
        );
        console.log('CheckBox State Changed');
    }

    return (
        <div className="container mt-5">
            <h1 className="titlebk">오늘의 노동</h1>
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {todos.map((todo) => (
                            <li key = {todo.id}
                            className="list-group-item d-flex justify-content-between align-items-center">
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        checked={todo.isChecked}
                                        onChange={() => handleCheckBox(todo.id)}
                                    />
                                    <label className="form-check-label">
                                        {
                                            todo.isChecked ?
                                                <del>{todo.text}</del> : <span>{todo.text}</span>
                                        }
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoList;