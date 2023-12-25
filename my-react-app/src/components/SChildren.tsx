import React, { useState } from 'react'

function SChildren({getColor}) {
    const [user, setUser] = useState('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        getColor(e.target.value);
    }
    const [message,setMessage] = useState('')
    const handleClick  = () =>{
        alert("Clicked the sample Render")
    }
    const DivElement = () =>{
    return (
        <div>
             <h3>This is just the sample class</h3>
             <button onClick = {handleClick}>Click Render</button>
        </div>
    )    
    
    }

    const handleChangeText = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setUser(e.target.value);
    }
  return (
    <div>
      <input type="text" name="color" id="color" 
      onChange={handleChange}
      />
      <br/>
      <input type="text" name="onKey" id="onKey" 
      onChange={handleChangeText}
      
      onKeyPress={e => e.key === 'Enter' ? setMessage(`Hi there ${user}`) : null}
      
      />
      {message}
      <DivElement/>

     
    </div>
  )
}

export default SChildren
