import React from "react";
import {useState} from "react";
import './App.css';
// import Timer from "./Timer";
import Clock from "./Clock";
import { Modal, Button } from 'react-bootstrap';
import TodoModal from './TodoModal';

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
    ],);

    const [newTodo, setNewTodo] = useState<string>('');
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleCheckBox = (itemId: number) => {
        setTodos((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId ? {...item, isChecked: !item.isChecked} : item
            )
        );
        console.log('CheckBox State Changed');
    }

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, isChecked: false }
            ]);
            setNewTodo('');
        }
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => {
            return todo.id !== id;
        }))
    }

    const handleTodoClick = (todo: Todo) => {
        setSelectedTodo(todo);
        setShowDetail(true);
    }

    const handleCloseDetail = () => {
        setShowDetail(false);

    }

    return (
        <div className="container mt-5">
            <h1 className="titlebk">오늘의 노동</h1>
            <div className="form-group" style={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
                <input
                    type="text"
                    className="form-control me-2"
                    placeholder="신규 노동"
                    onChange={(e) => setNewTodo(e.target.value)}
                    value={newTodo}
                    style={{writingMode: 'horizontal-tb'}}
                />
                <button className="btn btn-success" onClick={addTodo} style={{whiteSpace: 'nowrap'}}>
                    노동추가
                </button>
            </div>
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        {todos.map((todo) => (
                            <li key={todo.id}
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
                                                <del>{todo.text}</del> :
                                                <span onClick={() => handleTodoClick(todo)}>{todo.text}</span>
                                        }
                                    </label>
                                </div>
                                <button className="btn btn-danger"
                                        onClick={() => removeTodo(todo.id)}>노동 삭제</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div><br></br>
            <TodoModal show={showDetail} handleClose={handleCloseDetail} todo={selectedTodo}></TodoModal>
            {/* Modal 파일 분리 */}
            {/*<Modal show ={showDetail} onHide={handleCloseDetail} centered>*/}
            {/*    <Modal.Header closeButton>*/}
            {/*        <Modal.Title>상세정보</Modal.Title>*/}
            {/*    </Modal.Header>*/}
            {/*    <Modal.Body>*/}
            {/*        노동 상세 정보 출력*/}
            {/*        <p>현재날짜: {new Date().toLocaleDateString()}</p>*/}
            {/*    </Modal.Body>*/}
            {/*    <Modal.Footer>*/}
            {/*        <Button variant="secondary" onClick={handleCloseDetail}>*/}
            {/*            Close*/}
            {/*        </Button>*/}
            {/*    </Modal.Footer>*/}
            {/*</Modal>*/}
            {/*<Timer></Timer>*/}
            <Clock></Clock>
        </div>
    );
}

export default TodoList;