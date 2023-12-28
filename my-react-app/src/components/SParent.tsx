import React, { Children, useState } from 'react'
import SChildren from './SChildren'
import TextChildren from './TextChildren'
import Addition from './Addition'
import SampleProps from './SampleProps'
import InputUseRef from './InputUseRef'

function SParent() {
    const [color,setColor]=useState('')
    const [text,setText]=useState('')
    const [keep,keepText]=useState('')
    const [time,setTime] = useState(null)
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
  const sampleData = {
    Enrolment:"A70405219027",
    Email : "prudhvi.s@amity.edu"
  }
  
  const userData = [{
    id:1,
    name:"prudhvi",
    email:"prudhvi123@gmail.com"
  },
  {
    id:2,
    name:"John",
    email:"john@gmail.com"
  }
]
const numnericalData ={
  num1 : 10,
  num2:30,
  Addition:addition,
}

const allData = userData || sampleData;
  return (
    <div>
      <SChildren getColor={getColor} />
      <TextChildren getText={getText}/>
      <Addition {...numnericalData} />
      <p style={{background:`${color}`}}>Sample class</p>

      <button onClick={onClick}>Click</button>
      {text}
      <SampleProps allData ={allData} {...allData} /> 
       {userData.map(ele => (
        <div>
          <p>{ele.name}</p>
        </div>
       ))}
       <InputUseRef/>
    </div>
  )
}

export default SParent
