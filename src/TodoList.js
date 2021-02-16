import React from 'react'
import Todo from './Todo'

//export default function TodoList({todoList}) {
export default function TodoList({todoList, toggleTodo}) {
    return (
        todoList.map(todo => {
            //return <Todo key={todo} todo={todo} />
            //return <Todo key={todo.id} todo={todo} />
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
        
        
        //<div>
        //    {todoList.length}
        //</div>
    )
}
