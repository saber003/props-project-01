// import React from 'react'

export default function ChildCompo(props) {
  return (
    <div>
        <h2>ChildCompo</h2>
     <p>Hello {props.name}!</p>
     <h3>And the Age is {props.age}</h3>
     <button onClick={props.onClick}>Click Me</button>
     <p>Name : {props.person.name} </p>
     <p>Age : {props.person.age}</p>
    </div>
  )
}
