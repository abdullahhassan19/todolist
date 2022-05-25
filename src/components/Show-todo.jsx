import React from 'react'

function Show_todo(props) {
  return(
    <>
      <div className="todo-container">
      <i className="fa-regular fa-circle-check" 
      onClick={()=>{
          props.onSelect(props.id);
      }}></i>  

      <li>{props.text}</li>
      </div>
    </> 
  )
  
}

export default Show_todo
