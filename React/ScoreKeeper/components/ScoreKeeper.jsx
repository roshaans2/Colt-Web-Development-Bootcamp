import React, { useState } from "react";
const ScoreKeeper = () => {
    const [scores,setScores] = useState({p1Score:0,p2Score:0})
    const increaseP1Score = () => {
        setScores((oldScores)=>{
            return {...scores,p1Score:scores.p1Score+1}
        })
    }
    const increaseP2Score = () => {
        setScores((oldScores)=>{
            return {...scores,p2Score:scores.p2Score+1}
        })
    }
    return(
        <div>
            <p>Player 1 Score:{scores.p1Score}</p>
            <p>Player 2 Score:{scores.p2Score}</p>
            <button onClick={increaseP1Score}>+1Player1</button>
            <button onClick={increaseP2Score}>+2Player2</button>
        </div>
    )
}

export default ScoreKeeper