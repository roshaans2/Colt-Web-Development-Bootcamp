import React from "react";

const Property = ({property}) => {
    return(
        <div className="Property">
            <h2>{property.name}</h2>
            <h3>${property.price} a night</h3>
            <h4>{property.rating}⭐</h4>
        </div>
    )
}

export default Property