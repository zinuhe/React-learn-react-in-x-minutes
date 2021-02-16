import React, {useState, useRef} from 'react' //useRef to reference elements in html
import {useEffect} from 'react' //hook for storage
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  //every todo in the list, a function to update the todos
  const [todos, setTodos] = useState([])
  //const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  //const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: true }])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, []) //No dependency se va a ejcutar cuando cargue el componente una sola vez

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) //Dependency: Any change on todos trigger this function

  function toggleTodo(id){
    const newTodos = [...todos] //nunca usar el original, sacar copia y usar la copia
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

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
      <TodoList todoList={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
