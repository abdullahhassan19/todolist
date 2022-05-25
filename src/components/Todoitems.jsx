// import React,{useState} from 'react'

// const Todoitems = () => {
//     const [inputList,setInputList] = useState("");
//     const [Items,setItems] = useState([])
//     const listofItems = () => {
//         setItems((prevItems) => {
//             return [...prevItems,inputList]
//         })
//         setInputList("");
//     }
//   return (
//     <div> 
//         <ol>
//             {
//                 Items.map(function(Item,index){
//                     return <Show_todo  
//                             text={Item}
//                             key={index}
//                             id={index}
//                             onSelect={deleteItems}/>
//                 })
//             }
//         </ol>
//     </div>
//   )
// }

// export default Todoitems