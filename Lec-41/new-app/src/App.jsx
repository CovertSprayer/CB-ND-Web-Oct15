import React, { useState } from 'react'
import LearningHook from './components/LearningHook';
import Counter from './components/Counter';

const App = () => {

  let [temp, setTemp] = useState(1);

  const a = 6;
  let list = [1,2,3,4,5];
  let imgLink = 'https://images.unsplash.com/photo-1682687220198-88e9bdea9931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'

  function getData(data){
    console.log(data);
    setTemp(data);
  }

  return (
    <div>

      {/* <h1>Hello from App component {a}</h1> */}
      {/* <p>list.map(function(){})</p> */}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, impedit.</p> */}

      {/* {imgLink && <img src={imgLink} />} */}

      {/* {a == 10? <div>A is even</div> : <div>A is odd</div>} */}

      {/* <ul>
        {list.map(el => <li key={el}>{el}</li> )}
      </ul> */}

      {/* <LearningHook temp={temp}/> */}
      <h1>{temp}</h1>
      <Counter getData={getData}/>

      {/* <button onClick={()=>{setTemp(temp++)}}>make it 10</button> */}
    </div>
  )
}

export default App

{
  /*
    sending props to child
    state
    jsx
    rendering a list
    escape to javascript
    import and exports 
    conditional rendering

    props drilling
    hooks -> what is hooks? useState()

    App
      Counter
      LearningHook
        Component -1 
          C



  */
}