import React, { useState,useEffect } from 'react'
import { ApiData } from './types'

function ApiFetch() {
    const [data,setData] = useState<ApiData | null>({
        userId:0,
        id:0,
        title:"",
        body:"",
    });
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            setData(json)
            console.log(json)

        })
        .catch(err => console.log(err))

    })
  return (
    <div>
      {data?.body}
    </div>
  )
}

export default ApiFetch
