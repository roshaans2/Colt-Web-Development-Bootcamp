//This is an exampleof Non-string props

import React from "react";

// Destructuring props and default Props
const Dice = ({numSides= 6}) =>{
    const num = Math.floor(Math.random() * numSides) + 1
    return(
        <p>{numSides}-sided dice roll: {num}</p>
    )
}

export default Dice