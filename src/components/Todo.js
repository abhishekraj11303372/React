import React from 'react'
import TodoItem from './TodoItem'
import todoData from "./todoData"

function Todo(){
    const todoItems= todoData.map(item => <TodoItem key={item.id} item={item}/>)
return(
<div className="todo-list">
{todoItems}
</div>
)
}

export default Todo