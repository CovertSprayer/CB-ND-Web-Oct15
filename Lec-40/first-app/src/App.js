// rafce -> react arror function comp export
// rfce -> react function comp export
// func comp file file name -> first char should be large

import React from 'react'
import Cat from './components/Cat'
import Dog from './components/Dog'
import Person from './components/Person'


const App = () => {

 const data = [
  {
    name:'Malay',
    age:23,
    profession:'Web Developer'
  },
  {
    name:'Shrey',
    age:25,
    profession:'App Developer'
  },
  {
    name:'Adarsh',
    age:35,
    profession:'Team Lead'
  },
 ]

 let num = Math.floor(Math.random()*10);
 console.log(num)

  let print;
  if(num%2 ==0){
    print = <div>Even</div>
  }else{
    print = <div>Odd</div>
  }

  const render = false;

  return (
    // <div>App</div>
    <>
      {/* {print} */}

      {/* { num%2==0 ? <div>Even</div>: <div>Odd</div>} */}
      { num%2==0 ? <Cat/>: num < 3 && <Dog/>}

      { render && <Cat/>}

      {/* <Cat></Cat> */}
      {/* <Dog></Dog> */}
      {/* <Person name={'Malay'} age={23} profession={'Web Developer'}></Person>
      <Person name={'Shrey'} age={24} profession={'App Developer'}/>
      <Person name={'Adarsh'} age={35} profession={'Team Lead'}/> */}

      {/* {data.map(engineer => <Person name={engineer.name} age={engineer.age} profession={engineer.Profession}/>)} */}
      {data.map(engineer => <Person engineer={engineer}/>)}

      {/* num -> even =  'even'
      num -> odd = 'odd' */}

    </>
  )
}

export default App
