import React from "react";

const Heading = ({color = 'olive',text="Hello"}) => {
    return(
        <h1 style={{color:color}}>{text}</h1>
    )
}

export default Heading