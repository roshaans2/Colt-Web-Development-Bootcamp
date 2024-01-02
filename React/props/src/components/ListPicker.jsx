import React from "react"

const ListPicker = ({values}) => {
    const randIdx = Math.floor(Math.random()* values.length)
    const randElement = values[randIdx]
    return(
        <div>
            <p>
                The list of values: {values}
            </p>
            <p>
                Random Element: {randElement}
            </p>
        </div>
    )
}

export default ListPicker