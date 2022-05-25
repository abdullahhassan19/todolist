import React from 'react';

function Counter() {
  const[counter,setCounter]=React.useState(0)

  const handleIcrement=(value)=>{
    setCounter(counter + value)
  }
  const handleBouble=(value)=>{
    setCounter(counter * value)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={()=>handleIcrement(1)}>ADD</button>
      <button onClick={()=>handleIcrement(-1)}>Remove</button>
      <button onDoubleClick={()=>handleBouble(2)}>Multiply by 2 (Double click)</button>
    </>
  );
}
export default Counter;