import './ControlInput.css';
import { useState } from 'react';

export const ControlInput = () => {
  
    const [text, setText] = useState('Текст')

    const changeText = (e) => {
        setText(e.target.value);
    }
    
    return (
    <div className="Input-container">
        <h1 className="Input-text"> Текст: {text}</h1>
        <input placeholder='Текст' onChange={changeText} type="text" className="Input-propery"></input>
    </div>
  )
}
