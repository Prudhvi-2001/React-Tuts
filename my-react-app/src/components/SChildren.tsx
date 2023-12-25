import React from 'react'

function SChildren({getColor}) {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        getColor(e.target.value);
    }
   
  return (
    <div>
      <input type="text" name="color" id="color" 
      onChange={handleChange}
      />
    </div>
  )
}

export default SChildren
