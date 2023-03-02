import React, { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, text:"react를 배워봅시다."},
    {id: 2, text:"useState를 배워봅시다."},
  ])

  const[text, setText] = useState('')
  
  //Input 내용 가져오기
  const inputHandler = (e) =>{
    setText(e.target.value)
  }

  //추가하기 버튼
  const addButtonHandler= () =>{
    const newtodo = {
      id: todos.length+1,
      text: text
    }
    setTodos([...todos, newtodo])
  };
  //todo list
  function Todo(props){
    return(
      <div className='todolist'>{props.todo.text}</div>
    )
  }

  return (
    <div className='todo-form'>
      <div className='header'>
        <div>
          <input value={text} onChange={inputHandler} />
          <button onClick={addButtonHandler}>추가하기</button>
        </div>
        <h1>Todo List</h1>
      </div>
      <div className='boxs-style'>
        {todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} />
        })}
      </div>
    </div>
  )
}

export default App