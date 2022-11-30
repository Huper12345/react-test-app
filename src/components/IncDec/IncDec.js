import "./IncDec.scss";
import { useState } from "react";

export const IncDec = () => {
  
    let [count, setCount] = useState(0)

    const inc = () => {
        setCount(count + 1);
    }

    const dec = () => {
        setCount(count - 1);
    }
  
    return (
    <div className="IncDec">
        <h1>{count}</h1>
        <button className="inc" onClick={inc}>Increment</button>
        <button className="dec" onClick={dec}>Decrement</button>
    </div>
  );
};
