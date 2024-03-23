import React from 'react'
import Component1 from './Component1';

const LearningHook = ({temp}) => {

  let wish = 'Hello'; 
  function clickHandler(){
    wish = 'Hey';
    console.log(wish)
  }

  return (
    <div>
      <h1 onClick={clickHandler}>{wish}!</h1>
      <Component1 temp={temp} />
    </div>
  )
}

export default LearningHook