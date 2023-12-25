import React, { Children, useState } from 'react'
import SChildren from './SChildren'
import TextChildren from './TextChildren'
import Addition from './Addition'

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
  const addition = (num1 , num2) =>{
    const num3 = num1 + num2;
    console.log(num3)
  }
  return (
    <div>
      <SChildren getColor={getColor} />
      <TextChildren getText={getText}/>
      <Addition Addition={addition} />
      <p style={{background:`${color}`}}>Sample class</p>
      <button onClick={onClick}>Click</button>
      {text}

    </div>
  )
}

export default SParent
