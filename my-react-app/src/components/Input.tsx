import React from 'react'

function Input({ type, value, placeholder, name, onChange }) {
   
    
  return (
    <div>
      <input
       type={type}
       value={value}
       placeholder={placeholder}
       name={name}
       onChange={onChange}
      />
    </div>
  )
}

export default Input
