import React from 'react'
import Add from '../images/plus.svg'
import Complete from '../images/chevron-down.svg'
import CheckFull from '../images/check-circle-fill.svg'
import Check from '../images/check-circle.svg'
import Delete from '../images/x.svg'
export default function Main({Addtask,todo,toggle,remove,title}) {
  const [formData,setFormData] =React.useState("")
  function handleChange(e){
    setFormData(e.target.value)
  }
  // function handleSubmit(e){
  //   e.preventDefault()
  //   addtask(formData)
  // }
  // const styles={textDecoration: todo.isDone?"line-through": "none"}
 let count=0;
  for(let i=0; i<todo.length; i++){
    let prev=count
    if(todo[i].isDone && todo[i].title===title ){
     
      count++;
    }
    else{
      count=prev
    }
  }


  // const elements=todo.map(item=>{
  //   return  (<span className="list-items"
  //    key={item.id} onClick={()=>toggle(item.id)}>
  //     <img src={item.isDone?CheckFull:Check}
  //     /><h4
  //      style={{textDecoration: item.isDone?"line-through": "none"}}>
  //   {item.task}
  //   </h4> <img src={Delete} className="list-items-delete" onClick={()=>remove(item.id)}/></span>)
  // })
 
  const elements=todo.map((item)=>{
    return item.title===title && (<span className="list-items"
       key={item.id} onClick={()=>toggle(item.id)}>
        <img src={item.isDone?CheckFull:Check}
        /><h4
         style={{textDecoration: item.isDone?"line-through": "none"}}>
      {item.task}
      </h4> <img src={Delete} className="list-items-delete" onClick={()=>remove(item.id)}/></span>)
  })
 console.log("hey due",todo)
  return (
    <div className="main">
        <div className="main-title">
            <h1>{!title?"My day":title}</h1>
        </div>
        <div className="main-content">
           {todo.length>0&& count ? <span className="complete"><img src={Complete}/><h3>Completed {count}</h3></span>:<span className="complete2">Your list shows below </span>}
            <div className="list">
            {elements}
            </div>
        </div>
        <form className="form" onSubmit={(event)=>{
          event.preventDefault();
          Addtask(formData)
          setFormData(()=>"")
          }} >
           <img src={Add}/>
            <input type="text" placeholder="Add new task " onChange={handleChange} value={formData} />
        </form>
        <div>
        
        </div>
    </div>
  
  )
}

