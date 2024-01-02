import React from "react";
import Die from "./Die";
import "./DieRoll.css"


const DiceRolls = () => {
    return(
        <div className="DieRoll">
            <h1>Dice Rolls</h1>
            <Die/>
            <Die/>
            <Die/>
        </div>
    )
}

export default DiceRolls