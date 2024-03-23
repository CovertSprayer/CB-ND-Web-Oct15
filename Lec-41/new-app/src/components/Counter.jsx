import React, { useState } from 'react'

const Counter = ({getData}) => {

//   let counter = 1;
//   const counter = useState(1); // [1, ()=>{}]
  let [count, setCount] = useState(1); // [1, ()=>{}]

  function clickHandler(){
    count = count + 1;
    setCount(count);
    getData(count);
  }

  function decrementHandler(){
    count = count - 1;
    setCount(count);
    getData(count);
  }


  return (
    <>
      <button onClick={clickHandler}> +1 </button>
      {count}
      <button onClick={decrementHandler}> -1</button>
    </>
  )
}

export default Counter