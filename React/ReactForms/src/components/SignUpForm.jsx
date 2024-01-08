import React, { useState } from "react";

const SignUpForm = () => {
    const [formData,setFormData] = useState({firstName:"",lastName:"",password:""})
    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const changedValue = evt.target.value;
        setFormData((currData)=>{
           return {
              ...currData,
              [changedField]:changedValue
           }
        })
    }
    const handleSubmit = () =>{
        console.log(formData)
    }
    return(
        <div>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" value={FormData.firstName} name="firstName" onChange={handleChange}/>
            <label htmlFor="lastname">First Name:</label>
            <input type="text" id="lastname" value={FormData.lastName} name="lastName" onChange={handleChange}/>
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SignUpForm