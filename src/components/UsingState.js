import { useState } from "react"

// import React from 'react'


function UsingState() {
    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count + 1); 
    }

    const decrement = ()=>{
        setCount(count - 1);
    }



  return (
    <div>
        <h3>UsingState</h3>
        <h2>Counter</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

    </div>
  )
}

export default UsingState