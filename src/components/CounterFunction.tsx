import React from 'react';

interface CounterProps {
  name: String;
}

const Counter: React.FC<CounterProps> = (props) => {
  const { name } = props;
  return <p>{name} counter</p>;
};

// const Counter: React.FC<CounterProps> = function (props) {
//     const { name } = props;
//     return <p>{name} counter</p>
// }

export default Counter;

/*
함수에 타입이 있어?
-> Coutner는 CoutnerProps타입의 인자를 받는 React.FC 함수 타입이다.
-> 뭔가 함수를 변수에 넣는게 익숙하지가 않군
-> 한글 뒤에 스페이스 안쳐도 잘되는건 편하구만

java의 메서드에 제네릭 적용
public <T> String myMethod(T param) {
    return "this is java jeneric";
}

java처럼 하면?
public <CounterProps> String counter(CounterProps props) {
    String name = props.name;
    return "<p>" + name  + " counter</p>";
}
-> 함수 자체에 타입이 있는건 신기하군. 변수에 넣을수 있기 때문인가
*/
