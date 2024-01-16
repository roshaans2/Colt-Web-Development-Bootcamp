import React from "react";
import Rating from '@mui/material/Rating'

const RatingDemo = () => {
    return (
        <div>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </div>
    )
}

export default RatingDemo