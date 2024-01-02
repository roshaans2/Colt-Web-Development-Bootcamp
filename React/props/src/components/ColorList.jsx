import React from "react";

const ColorList = ({colors}) => { 
    return(
        <div>
            <p>Colors</p>
            <ul>{colors.map(color => <li style={{color:color}}>{color}</li>)}</ul>
        </div>
    )
}

export default ColorList