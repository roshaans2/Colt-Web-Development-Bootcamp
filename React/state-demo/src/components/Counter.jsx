import React, { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);
    const addThree = () => {
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
        setCount((prev)=>prev+1)
    }
    return(
        <div>
            <p>{count}</p>
            <button onClick={addThree}>+3</button>
        </div>
    )
}

export default Counter