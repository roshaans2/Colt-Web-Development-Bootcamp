import React, { useEffect, useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);
    const [name,setName] = useState("");
    useEffect(()=>{
        console.log("useEffect is called")
    },[count,name])

    const increment = () => {
        setCount(c=>c+1)
    }

    const handleChange = (e) => {
        setName(prev => e.target.value)
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <input type="text" name="name" value={name} onChange={handleChange}/>
        </div>
    )

}

export default Counter