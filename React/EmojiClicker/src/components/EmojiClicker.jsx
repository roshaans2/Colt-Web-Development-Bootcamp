import React,{useState} from "react";
import {v4 as uuid} from "uuid"

const randomEmoji = () => {
    const emojies = [
        "😃", "💥", "🚀", "🌟", "🌈", "🎉", "🔥", "💪🏼", "😄", "💫",
        "💖", "✨", "🌞", "💥", "🌪️", "🎊", "🌼", "🌺", "💃🏻", "🕺🏻",
        "🚴‍♂️", "🏃‍♀️", "🎈", "🌻", "🌸", "🌹", "💥", "💡", "🎇", "🎆",
        "🌠", "⚡️", "💨", "💥", "🌋", "🌅", "💧", "🌊", "🌪️", "💨"
    ]

    return emojies[Math.floor(Math.random()*emojies.length)]
}

const EmojiClicker = () => {
    const [emojies,setEmojies] = useState([{id:uuid(),emoji:randomEmoji()}])
    const addEmoji = () => {
        setEmojies((prev)=> [...prev,{id:uuid(),emoji:randomEmoji()}])
    }
    const deleteEmoji = (id) => {
        setEmojies((prev)=>prev.filter(e => e.id !== id))
    }
    const heartifyEmoji = () => {
        setEmojies((prev)=>{
            return prev.map((e) => {
                return {...e,emoji:"❤️"}
        })})
    }
    return (
        <div>
            {emojies.map((e) => <span onClick={()=>{deleteEmoji(e.id)}} key={e.id} style={{fontSize:"4rem"}}>{e.emoji}</span> )}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={heartifyEmoji}>Make them all hearts</button>
        </div>
    )
}

export default EmojiClicker