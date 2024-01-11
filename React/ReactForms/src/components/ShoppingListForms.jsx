import React, { useState } from "react";
const ShoppingListForm = ({addItem}) => {
    const [formData,setFormData] = useState({product:"",quantity:0})
    const handleChange = (evt) => {
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]:evt.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addItem(formData)
        setFormData({product:"",quantity:0})
    }
    return(
        <form onSubmit={handleSubmit}>
            <h1>{formData.product} - {formData.quantity}</h1>
            <label htmlFor="product">Product Name:</label>
            <input type="text" name="product" id="product" value={formData.product} onChange={handleChange} /><br />
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" name="quantity" id="quantity" value={formData.quantity} onChange={handleChange} /><br />
            <button>Submit</button>
        </form>
    )
}

export default ShoppingListForm