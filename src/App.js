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

  }

  return (
    <div>
      <h4>This is my to do List</h4>
      <Form />
      <List />
    </div>
  );
}

export default App;
