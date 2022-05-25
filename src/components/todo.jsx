import React,{useState} from 'react'
import Show_todo from './Show-todo'
import Todoitems from './Todoitems'
function Todo() {

    const [inputList,setInputList] = useState("");
    const [Items,setItems] = useState([])

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listofItems = () => {
        setItems((prevItems) => {
            return [...prevItems,inputList]
        })
        setInputList("");
    }

    const deleteItems=(id) => {
        setItems((oldItems) => {
            return oldItems.filter((items,index) => {
                return index !== id;
            })
        })
    }

  return (
      <>
    <div className="main_div">
        <div className="center_div">

            <h1>Todo List</h1>

            <input type="text" placeholder="Enter a task" onChange={itemEvent} value={inputList}/>

            <button className="add_btn" onClick={listofItems}><i class="fa-duotone fa-plus"></i></button>

            <ol>
             {
                 Items.map(function(Item,index){
                    return <Show_todo  
                            text={Item}
                            key={index}
                            id={index}
                            onSelect={deleteItems}/>
                 })
             }
         </ol>
        </div>
      
    </div>
    </>
  )
}

export default Todo
