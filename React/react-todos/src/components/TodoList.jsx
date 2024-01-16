import * as React from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';


const initialTodos = [
    { id: 1, text: "Have breakfast", completed: true },
    { id: 2, text: "Watch movie", completed: false }
]

const TodoList = () => {

    const [todos, setTodos] = React.useState(initialTodos)
    const removeTodo = (id) => {
        setTodos((currTodo)=>{
            return currTodo.filter((t)=> t.id !== id)
        })
    }

    const toggleTodo = (id) => {
        setTodos(currTodo => {
            return currTodo.map(todo => {
                if(todo.id === id){
                    return {...todo,completed:!todo.completed}
                }
                else{
                    return todo
                }
            })
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <TodoItem todo={todo} key={todo.id} removeTodo={()=>removeTodo(todo.id)} toggleTodo = {()=>toggleTodo(todo.id)}/>
            ))}
            <TodoForm/>
        </List>
    )
}

export default TodoList