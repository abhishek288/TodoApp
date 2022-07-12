// import Data from './data'
import './App.css';
import Sidebar from './components/Sidebar'
import Sidedivide from './components/Sidedivide'
import Navbar from './components/Navbar'
import Main from './components/Main'
import React from 'react'
import {nanoid} from "nanoid"
export default function App() {
  // const [todos,setTodos]=React.useState([{
  //   id:"",
  //   task:"",
  //   isDone:false
  // }
  // ]) 
//  function Addtask(userinput){
//   setTodos(todos=>{
//     return todos.map((todo)=>{
//       return {task:userinput,id:nanoid()}
//     })
//   })
 
//  }
// function Addtask(userinput){
//   setTodos(todos=>{
//    return todos[0].id===""?[{id:nanoid(),task:userinput,isDone:false}]:[...todos,{id:nanoid(),task:userinput,isDone:true}]
//   })
// }
const [todos,setTodos]=React.useState(() => JSON.parse(localStorage.getItem("todos"))||[]) 
const [listName,setListName]=React.useState("My day")

  function newtask(userinput){
    return {id:nanoid(),task:userinput,isDone:false,title:listName}
  }
   function Addtask(userinput){
   userinput&& setTodos(todos=>[...todos],todos.push(newtask(userinput)));
    userinput=""
   }
   React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  function toggle(id){
    setTodos(todos=>todos.map((todo)=>{
      return todo.id===id ?{...todo,isDone:!todo.isDone}:todo
    }))
  }
  function remove (id){
    setTodos(todos=>todos.filter((todo)=>{
      return todo.id!==id && todo
    }))
  }
  function clicked(id){
    setListName(id)
  }
  // function newlist(){
  //   setTodos(todos=>todos.map((todo)=>{
  //     return {...todo,listName:true}
  //   }))
  // }
 

  return (
    <div className="App">
      <Navbar/>
      <Sidebar clicked={clicked} Addtask={Addtask}/>
      <Sidedivide/>
      <Main  todo={todos} Addtask={Addtask} toggle={toggle} remove={remove} title={listName} />
    </div>
  );
}

