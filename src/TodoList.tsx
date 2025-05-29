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
        { id: 1, text: 'Git Upload', isChecked: false },
        { id: 2, text: 'Coffee', isChecked: false },
        { id: 3, text: 'Code', isChecked: false },
    ]);
    return (
        <div>
            <div className="container">
                <h1 className='titlebk'>오늘의 노동</h1>
                <div className='container'>
                    <div className='board'>
                        <ul>
                            <li>{todos[0].text}</li>
                            <li>{todos[1].text}</li>
                            <li>{todos[2].text}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;