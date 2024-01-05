import React, { useState } from "react"

const Clicker = () => {
    const handleClick = () => {
        console.log("clicked")
    }
    const handleMouseOver = () => {
        console.log("mouseover")
    }
    return(
        <div>
            <p  onMouseOver={handleMouseOver}>Hover over me</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default Clicker