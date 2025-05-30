import React from 'react';
import {Button, Modal} from 'react-bootstrap';

type Todo = {
    id: number;
    text: string;
    isChecked: boolean;
};

type TodoModalProps = {
    show: boolean;
    handleClose: () => void;
    todo: Todo | null;
}

const TodoModal: React.FC<TodoModalProps> = ({show, handleClose, todo}) => {
    return (
        <Modal show={show} onHide={()=>{handleClose()}} centered>
            <Modal.Header closeButton>
                <Modal.Title>상세 정보</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {todo?.text} 의 상세 정보 출력
                <p>현재날짜: {new Date().toLocaleDateString()}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    닫기
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default TodoModal;