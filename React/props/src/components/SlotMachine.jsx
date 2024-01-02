import React from "react";

const SlotMachine = ({value1,value2,value3}) => {
    const isWinner = (value1 === value2) && (value2 === value3)
    const styles = {
        color:isWinner ? "green":"red"
    }
    return(
        <div>
            
            <p>Value1:{value1} Value2:{value2} Value3:{value3}</p>
            {isWinner?<h2 style={styles}>You win</h2>:<h2 style={styles}>You lose</h2>}
            {isWinner && <p>Congratulations!!!</p>}
        </div>
    )
}

export default SlotMachine