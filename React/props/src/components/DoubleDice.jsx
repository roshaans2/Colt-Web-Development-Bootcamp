//This component will explain React Conditionls

import React from "react";

const DoubleDice = () => {
    const num1 = Math.floor(Math.random() * 3) + 1
    const num2 = Math.floor(Math.random() * 3) + 1
    const isWinner = num1 === num2
    const styles = {
        color: isWinner ? "green":"red"
    }
    return(
        <div style={styles}>
            {isWinner && <h3>You win!!</h3>}
            <p>Num1: {num1}</p>
            <p>Num2: {num2}</p>
        </div>
    )
}

export default DoubleDice