import React from 'react'

const Person = (props) => {
  return (
    // <></> -> fragment
    <div> 
        <h3>Name: {props.engineer.name}</h3>
        <p>Age: {props.engineer.age}</p>
        <p>Profession: {props.engineer.profession}</p>
        <hr />
    </div>
  )
}

export default Person