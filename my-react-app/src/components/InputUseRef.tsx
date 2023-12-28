import React, { useRef } from 'react'
import SampleProps from './SampleProps';

function InputUseRef() {
    const inputRef = useRef(null);

    console.log(inputRef)
    const handleClick =  () =>{
        inputRef.current.focus();
        console.log(inputRef.current.value)
        console.log(inputRef)
    }
    
    const onBlur = () =>{
        const inputFocus = inputRef.current.focus();
    }
    

  return (
    <div>
    <input type="text" name="useref" id="useref" 
    ref={inputRef}
    onBlur={onBlur}
    />  
    <button onClick={handleClick}>Focus Input</button>
       
    </div>
  )
}

export default InputUseRef
