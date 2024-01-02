import React from "react";

const Greeter = ({name="everyone",from="Anonymous"}) => {
    return(
        <>
            <h1>Hello {name}</h1>
            <h2> -{from}</h2>
        </>
    )
}

export default Greeter