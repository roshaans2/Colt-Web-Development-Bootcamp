import React from "react";

const ShoppingListItem = ({item,quantity,completed}) => {
    return(
        <li style={{color:completed?'grey':'',textDecoration:completed?"line-through":""}}>{item} - {quantity}</li>
    )
}

export default ShoppingListItem