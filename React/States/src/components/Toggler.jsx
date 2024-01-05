import React,{useState} from "react";
import "./Toggler.css"

const Toggler = () => {
    const [emoji,setEmoji] = useState("🌞")
    const toggleEmoji = () =>{
        if(emoji == "🌧️"){
            setEmoji("🌞")
        }
        else{
            setEmoji("🌧️")
        }
    }
    return(
        <div>
            <div className="emoji">{emoji}</div>
            <button onClick={toggleEmoji}>Change emoji</button>
        </div>
    )
}

export default Toggler