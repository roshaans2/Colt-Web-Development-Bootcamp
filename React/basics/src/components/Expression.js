import React from "react";

const Expression = () => {
    const details = {
        name:"Deepka",
        age:"21",
        income:250000,
        expenditure:75000
    }

    return(
        <>
            <h1>{details.name}</h1>
            <h2>{details.age}</h2>
            <h3>Savings: {details.income-details.expenditure}</h3>
        </>
    )
}

export default Expression