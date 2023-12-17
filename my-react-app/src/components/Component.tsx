import React from 'react'
export interface Id{
    id:number;
}
const numberID : Id ={
    id: 123
}
interface userDetails{
    name:string,
    email:String,
    onSubmit : (id:Id) => void
}
function Component({name,email,onSubmit}:userDetails) {

  const handleSubmit = () =>{
    alert(`${numberID}`)
    onSubmit(numberID);
  }
  return (
    <div>
        <h4>Name : {name}</h4>
        <h4>Email : {email}</h4>
         <button onClick={handleSubmit}>Click</button>
      
    </div>
  )
}

export default Component
