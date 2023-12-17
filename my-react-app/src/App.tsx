import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import { User } from './assets/interfaces/Interface'
import ArrayMthods from './components/ArrayMthods'
import UseEffect from './components/UseEffect'
function App() {
 const handleSubmit = ( data : User)=>{
 console.log(data)
 }

  return (
    <>
    <Form onSubmit={handleSubmit}/>
    <ArrayMthods/>
    <UseEffect/>
    </>
  )
}

export default App
