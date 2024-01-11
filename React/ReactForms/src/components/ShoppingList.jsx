import React, { useState } from "react";
import ShoppingListForm from "./ShoppingListForms";
import {v4 as uuid} from "uuid"

const ShoppingList = () => {
    const [items,setItems] = useState([
        {id:uuid(),product:"banana",quantity:2},
        {id:uuid(),product:"Eggs",quantity:12},
    ])
    const addItem = (item) => {
        setItems(items=>{
            return [
                    ...items,
                    {...item,id:uuid()}
            ]
        })
    }
    return(
        <div>
            <ul>
                {items.map(item => <li key={item.id}>{item.product}-{item.quantity}</li>)}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}

export default ShoppingList