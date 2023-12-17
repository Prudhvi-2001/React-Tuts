import React, { useEffect, useState } from 'react'
import { Jsonplaceholder } from '../assets/interfaces/Interface'

function UseEffect() {
    
    const [todos,setTodos] = useState<Jsonplaceholder | undefined>();
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setTodos(json))
      .catch(err=>{
        console.log(err)
      })
    },[])
    console.log(todos)

  return (
    <div>
        {todos?.title}
       
      
    </div>
  )
}

export default UseEffect
