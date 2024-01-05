import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0)
    console.log("Component has been executed again")
    console.log(`count:${count}`)
    const incrementCount = () => {
        setCount(count+1);
        // At this line of code, the num remains same. Only when the component rerenders the num changes
        console.log("setCount has run")
        console.log(`count:${count}`)
    }
    return(
        <div>
            <p>The count is {count}</p>
            {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
            <button onClick={incrementCount}>Increment</button>
        </div>
    )
}

export default Counter