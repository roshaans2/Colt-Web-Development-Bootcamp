import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField'
import { useState } from 'react';

const TodoForm = () => {
    const [text, setText] = useState("")
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <ListItem>
            <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={text}
                onChange={handleChange}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton  edge="end">
                            
                        </IconButton>
                    </InputAdornment>
                }
            />
        </ListItem>
    )
}

export default TodoForm