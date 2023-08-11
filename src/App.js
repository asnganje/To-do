import './App.css';
import Form from './Form';
import List from './List'
import React, { useState } from 'react'
import { nanoid } from 'nanoid';

function App() {
  const [list, setList] = useState([])

  const addedToDo = (todoName) => {
    const newToDo = {
      name: todoName,
      completed: false,
      id: nanoid()
    }
    const updatedTodos = [...list, newToDo]; 
    setList(updatedTodos)
  }

  return (
    <div>
      <h4>React to do App </h4>
      <Form addedToDo = {addedToDo} />
      <List todos = {list}/>
    </div>
  );
}

export default App;
