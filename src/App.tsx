import React from 'react';
import TodoList from './TodoList';

const App: React.FC = () => {
    // { } 를 이용해 데이터 바인딩
    // 바벨에 의해 JS 코드로 변환됨
    return (
        <div>
            <TodoList title='오늘의 노동'></TodoList>
        </div>
    );
}

export default App;