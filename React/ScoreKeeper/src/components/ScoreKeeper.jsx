import React from "react";
import { useState } from "react";
const ScoreKeeper = ({numPlayers,target}) => {
    const [scores,setScores] = useState(new Array(numPlayers).fill(0))
    const increaseScore = (idx) => {
        setScores((prev)=>{
            return prev.map((score,id)=>{
                if(id == idx){
                    return score+1
                }
                return score
            })
        })
    }
    const resetScores = () => {
        setScores(new Array(numPlayers).fill(0))
    }
    return(
        <div>
            <ul>
                {scores.map((score,idx)=>{
                    return ( 
                        <li key={idx}>
                            Player {idx+1}:{score} 
                            <button onClick={()=>{increaseScore(idx)}}>+</button>
                            {score>=target && "Winner!!!"}
                        </li>
                        
                    )
                })}
            </ul>
            <button onClick={resetScores}>Reset</button>
        </div>
    )
}

export default ScoreKeeper