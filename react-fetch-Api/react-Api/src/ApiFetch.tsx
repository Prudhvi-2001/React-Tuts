import React, { useState,useEffect } from 'react'
import { ApiData } from './types'

function ApiFetch() {
    const [data,setData] = useState<ApiData | null>(null);
    useEffect(()=>{
        // fetch("https://jsonplaceholder.typicode.com/posts")
        // .then(response => response.json())
        // .then(json => {
        //     setData(json)
        //     console.log(json)

        // })
        // .catch(err => console.log(err))

        const fetchApi = async()=>{
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          if(!response.ok) console.log("Error occured")
          const fetchData:ApiData = await response.json();
          console.log(fetchData)
          setData(fetchData)
        }
        fetchApi();

    },[])
  return (
    <div>
      {data?.id}
    </div>
  )
}

export default ApiFetch
