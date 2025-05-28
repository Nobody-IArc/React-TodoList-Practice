import React from 'react';
import './App.css';

function App() {
    // { } 를 이용해 데이터 바인딩
    const title = "내일의 노동";

    const divStyle : React.CSSProperties = {
        backgroundColor: 'palegoldenrod',
        color: 'aqua',
        fontSize: '1.8em',
        textAlign: 'center',
    };

    // 바벨에 의해 JS 코드로 변환됨
    return (
        <div className='title'>
            {/* { } 를 이용해 데이터 바인딩 */}
            <h1>{ title }</h1>
            <div style={divStyle}>
                <h2>{ title }</h2>
            </div>
        </div>
    );
}

export default App;