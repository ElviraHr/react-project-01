// 1. Импортировать фурнкцию хук(вспомогательные функции реакта, пер.якорь) useState() из библиотеки React
//позволяет управлять состоянием компонентов и перерендеривать их
//в аргументах функции массив из двух элементов что меняем и какой фукцией мы это меняем

import {useState} from "react";
import Button from "../Button/Button";
import "./styles.css";
function Counter() {
//при старом способе компонент не обновляется. Все время 0
//связано с виртуальным домом, который не перерисовывает ничего
//   let count = 0;
  
//   const onMinus = () => {
//     count = count - 1;
//   };
  
//   const onPlus = () => {
//     count = count + 1;

//   };
//синтаксис без реструктуризации:
// const state = useState();
// console.log(state);
// console.log(state[0]);
// console.log(state[1]);

//синтаксис с реструктуризацией
const[count, setCount] = useState(0);
console.log(count);
console.log(setCount);

const onMinus = () => {
    setCount((prevValue) => {
        return prevValue - 1;
    });
  };

  const onPlus = () => {
    setCount((prevValue) => {
        return prevValue + 1;
    });
  };
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus}/>
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus}/>
      </div>
    </div>
  );
}
export default Counter;
