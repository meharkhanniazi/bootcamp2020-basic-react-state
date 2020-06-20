import React, {useState} from 'react';
import './App';

function Room() {
    let [isLit,setLit] = useState(false);
    let [age,setAge] = useState(25);
  return (
    <div>
      The Room is {isLit ? "Lit" : "Dark"}. 
      <br/>
      The Age is {age}.
      <br/>
      <button onClick={() => setLit(!isLit)}>Toggle Light</button>
      <br/>
      <button onClick={() => {
        setAge(++age);
      }}>
        Increase Age
        </button>
    </div>
  );
}

export default Room;