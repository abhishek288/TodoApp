import React from 'react'
import Assign from '../images/Assignme.svg'
import List from '../images/List.svg'
import Myday from '../images/Myday.svg'
import Star from '../images/Star.svg'
import Task from '../images/Task.svg'
import Planned from '../images/Planned.svg'
import Deletelist from '../images/x-fill.svg'
import Add from '../images/plus.svg'
import {nanoid} from "nanoid"
import { hover } from '@testing-library/user-event/dist/hover'
export default function Sidebar({clicked}) {
  const [name,setName]=React.useState("")
  const [list,setList]=React.useState(() => JSON.parse(localStorage.getItem("list"))||[])
   function handleClick(e){
    clicked(e.target.innerText);
   }
  
  function newlist(userinput){
    return {id:nanoid(),name:userinput,isRemoved:false}
  }
  function onChange(e){
    setName(e.target.value);
   }
   function onSubmit(e){
    e.preventDefault();
    name && setList(list=>[...list],list.push(newlist(name)));
    
    setName("");
   }
   function toggle(id){
    setList(list=>list.map((item)=>{
      return item.id===id ? {...item,isRemoved:true}:{...item,isRemoved:false}
    }))
    console.log(list)
   }
   React.useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])
   function handleRemove(id){
    setList(list=>list.filter((item)=>{
      return item.id!==id && item;
    }))
   }
  //  style={{textDecoration: item.isDone?"line-through": "none"}}>
  const lists=list.map((item)=>{
    return  (<span className="sidecontent"  onClick={(e)=>{
      clicked(e.target.innerText);
      toggle(item.id);
    }}key={nanoid() } ><img src={List}/><h1 >{item.name}</h1><img className="deletelistname" style={{display: item.isRemoved ?"inline":"none"}}src={Deletelist}
    onClick={()=>{handleRemove(item.id)}}
    /></span>)
  })
  
  return (
    <div className="mainsidebar">
    < div className="sidebar">
        <span className="sidecontent"  onClick={handleClick}> <img src={Myday}/><h1>My day</h1></span>
        <span className="sidecontent"  onClick={handleClick} > <img src={Star}/><h1>Important</h1></span>
        <span className="sidecontent"  onClick={handleClick}><img src={Planned}/><h1>Planned</h1></span>
      <span className="sidecontent"  onClick={handleClick}><img src={Assign}/><h1>Assigned to me</h1></span>
      <span className="sidecontent"  onClick={handleClick}><img src={Task}/><h1>Task</h1></span>
      
      
     <span className="sidecontent" style={{marginTop:"15px"}}  onClick={handleClick}><img src={List}/><h1>Shopping</h1></span>
     <span className="sidecontent"  onClick={handleClick}><img src={List}/><h1>Grocery</h1></span>
     {lists}
    <form onSubmit={onSubmit} className="form-list">
      <input type="text" placeholder="Add new list" onChange={onChange} value={name}/>
      <img src={Add}/>
    </form>
    </div>
    <hr className="linebreak"/>
   </div>
    
  )
}
