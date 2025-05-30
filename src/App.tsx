import React from 'react';
import {useState} from "react";
import TodoList from './TodoList';

// interface NameProps {
//     name: string;
//     children: React.ReactNode;
// }
//
// // 함수형 컴포넌트 프롭스
// const Name: React.FC<NameProps> = ({ name, children }) => {
//     // 구조 분해 할당 방식으로 props 받기
//     // const {name, children} = props;
//     return (
//         <div>
//             <h1>{name} 님 환영합니다.</h1>
//             <h4>오늘의 날씨는 {children} 입니다.</h4>
//         </div>
//     )
//
// }

// 클래스형 컴포넌트 프롭스
// class Name extends Component<NameProps> {
//     render() {
//         return <h1>{this.props.name} 님 환영합니다.</h1>
//     }
// }

// interface ButtonProps {
//     meClick: () => void;
// }
//
// const Button: React.FC<ButtonProps> = (props) => {
//     return <button onClick={props.meClick}>Click This</button>;
// }

const App: React.FC = () => {
    // { } 를 이용해 데이터 바인딩
    // 바벨에 의해 JS 코드로 변환됨

    // const [count, setCount] = useState<number>(0);
    //
    // const handleClick = () => {
    //     setCount(count + 1);
    // };

    return (
        <div>
            {/*<Name name="사용자">흐림</Name>*/}
            {/*<p>Count: {count}</p>*/}
            <TodoList></TodoList>
        </div>
    );
}

export default App;