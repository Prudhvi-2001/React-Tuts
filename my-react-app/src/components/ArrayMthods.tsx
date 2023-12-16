import React from 'react'
import { ArrayMethods } from '../assets/interfaces/Interface'
function ArrayMthods() {
    const initialValues :ArrayMethods={
        usersNames:['john'],
        grades : [100,85,98,78,56]
    }
    const totalAge = initialValues.grades.reduce((accumulator,grade)=> accumulator + grade ,0)
  return (
    <div>
       {initialValues.grades.map((g)=>(<p key={g}>{g}</p>))}
       {initialValues.grades.filter((g)=>(g ===100 ? <p>H</p>:null))}
       <p>{totalAge}</p>
      
    </div>
  )
}

export default ArrayMthods
