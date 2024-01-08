import React,{useState} from "react"

const UsernameForms = () => {
    const [username,setUsername] = useState("Shankar")
    const updateUsername = (evt) => {
        setUsername(evt.target.value)
    }
    return(
        <div>
            <label htmlFor="username"></label>
            <input type="text" value={username} onChange={updateUsername} id="username"/>
            <button>Submit</button>
        </div>
    )
}

export default UsernameForms