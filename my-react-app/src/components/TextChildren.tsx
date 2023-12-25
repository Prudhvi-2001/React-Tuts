import React from 'react'

function TextChildren({getText}) {
    //creating the new object of the class Promise
    const newPromise = new Promise((resolve,reject)=>{
       resolve(12);
       reject("Error")
    })
    newPromise.then(res =>{
        console.log("Hi there !", res)
    })
    newPromise.catch(err =>{
            console.error(err);
    })

   getText("HI")
  return (
    <div>
      
    </div>
  )
}

export default TextChildren
