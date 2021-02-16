import React, {useState, useRef} from 'react' //useRef to reference elements in html
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

function App() {
  //every todo in the list, a function to update the todos
  const [todos, setTodos] = useState([])
  //const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  //const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: true }])

  const todoNameRef = useRef()

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if(name === '') return //if it's empty go out
    //console.log(name)
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: name, complete: false}]
    })


    todoNameRef.current.value = null
  }


  return (
    <>
      <TodoList todoList={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
