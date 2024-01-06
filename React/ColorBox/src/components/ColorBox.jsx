import React,{useState} from "react";
import "./ColorBox.css"

const randomChoice = (colors) =>{
    const randIdx = Math.floor(Math.random() * colors.length)
    const randColor = colors[randIdx]
    return randColor
}

const ColorBox = ({colors}) =>{
    const [color,setColor] = useState(randomChoice(colors))
    const changeColor = () => {
        setColor(randomChoice(colors))
    }
    return(
        <div className="ColorBox" onClick={changeColor} style={{backgroundColor:color}}></div>
    )
}

export default ColorBox