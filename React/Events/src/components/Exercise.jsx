import React from "react";

const Exercise = ({message,buttonText}) => {
    const handleClick = () => {
        alert(message)
    }
    return(
        <button onClick={handleClick}>{buttonText}</button>
    )
}

export default Exercise