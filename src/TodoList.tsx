import React from "react";
import './App.css';

interface MyComponentProps {
    title: string;
}

const TodoList: React.FC<MyComponentProps> = ({ title }) => {
    return(
        <div className="container">
            <h1>{ title }</h1>
        </div>
    );
}

export default TodoList;