import './App.css';
import Form from './Form';
import List from './List'
import React, { useState } from 'react'
import { nanoid } from 'nanoid';

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list) {
    list = JSON.parse(localStorage.getItem('list'))
  } else {
    list = []
  }
  return list
}


const setLocalStorage = (tasks) => {
  localStorage.setItem('list', JSON.stringify(tasks))
}

function App() {
  const [list, setList] = useState(getLocalStorage())

  const addedToDo = (todoName) => {
    const newToDo = {
      name: todoName,
      completed: false,
      id: nanoid()
    }
    const updatedTodos = [...list, newToDo]; 
    setList(updatedTodos)
    setLocalStorage(updatedTodos)
  }

  const removeToDo = (todoId) => {
    const newTodos = list.filter((todo)=> {
      return todo.id !== todoId
    })

    setList(newTodos)
    setLocalStorage(newTodos)
  }

  return (
    <section className='section-container'>
      <h4>My To Do List</h4>
      <Form addedToDo = {addedToDo} />
      <List todos = {list} removeToDo = {removeToDo}/>
    </section>
  );
}

export default App;
