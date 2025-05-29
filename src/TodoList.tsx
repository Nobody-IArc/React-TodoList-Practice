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
        <div>
            <h1 className='titlebk'>오늘의 노동</h1><p></p>
            <div className='container'>
                <div className='board'>
                    <ul>
                        {
                            todos.map((todo: Todo) => (
                                <li key={todo.id}>
                                    <input
                                        type='checkbox'
                                        onChange={() => {
                                            handleCheckBox(todo.id);
                                        }}></input>
                                    <span>{
                                        todo.isChecked ? <del>{todo.text}</del> : <span>{todo.text}</span>
                                    }</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoList;