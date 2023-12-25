import React from 'react'
interface Addition{
    num1:number,
    num2:number
}
function Addition({Addition , num1 ,num2}) {
    const initialValues : Addition ={
        num1:10,
        num2:100
    }
    Addition(initialValues.num1 , initialValues.num2)
    const AsynCFunction = async() =>{
        const result = await initialValues.num1
        console.log(result)
    }
    AsynCFunction()
  return (
    <div>

      
    </div>
  )
}

export default Addition
