import React, { useCallback, useEffect, useRef, useState } from "react";
import "../app.css";

const SimpleHabit = () => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  useEffect(() => {
      console.log(`mounted & updated!: ${count}`);
  }, []); //텅텅일때는 호출 안함, 원하는 데이터 쓰면 원하는 데이터만 호출함
  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
