import React, { Children, useState } from 'react'
import SChildren from './SChildren'
import TextChildren from './TextChildren'

function SParent() {
    const [color,setColor]=useState('')
    const [text,setText]=useState('')
    const [keep,keepText]=useState('')
    //way of passing the data through all the componets
    const getColor = (color) =>{
        setColor(color)
    }
    const getText = (text) => {
       if(text === "") keepText("Sorry!! There is no Text")
       else keepText(text)
    }
    const onClick = () =>{
     setText(keep)
    }
  return (
    <div>
      <SChildren getColor={getColor} />
      <TextChildren getText={getText}/>
      <p style={{background:`${color}`}}>Sample class</p>
      <button onClick={onClick}>Click</button>
      {text}

    </div>
  )
}

export default SParent
