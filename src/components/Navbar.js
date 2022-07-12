import React from 'react'
import todo from '../images/Todo.svg'
export default function Navbar() {
  return (
    <div className="navbar">
        <img src={todo}/>
        <h1>Todo List </h1>
    </div>
  )
}