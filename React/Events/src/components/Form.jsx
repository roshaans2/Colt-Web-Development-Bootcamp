import React from "react";

const Form = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )
}

export default Form