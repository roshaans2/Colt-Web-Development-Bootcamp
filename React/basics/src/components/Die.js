import React from "react";
import "./Die.css"

const Die = () => {
    const roll = Math.floor((Math.random()*6)) + 1
    return (
        <h2 className="Die">
            Dice: {roll}
        </h2>
    )
}

export default Die