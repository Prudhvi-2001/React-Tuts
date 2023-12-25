import React from 'react'

function SampleProps({allData}) {
    const userData = allData
    const sample = allData
   
    
  return (
    <div>
      {sample.Enrolment}
      {userData.map(ele =>(
        <div key={ele.id}>
            {ele.id}
        </div>

      ))}
    </div>
  )
}

export default SampleProps
