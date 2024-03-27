// import React from 'react'

import ChildCompo from "./ChildCompo"

export default function ParentCompo() {
    const handleClick = ()=>{
    
        // <h3>handle click worked</h3>
        console.log("handleClick worked")
    
    }

    const person = {
        name: "Saber",
        age : 26
    };

    return (

    <div>
        <h2>ParentCompo</h2>
       <ChildCompo name="Saber" age="26" onClick={handleClick} person={person}/>
        </div>
  )
}
