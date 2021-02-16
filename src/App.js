import React, {useState} from 'react'
import TodoList from './TodoList'

function App() {
  //every todo in the list, a function to update the todos
  //const [todos, setTodos] = useState([])
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <>
      <TodoList todoList={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
