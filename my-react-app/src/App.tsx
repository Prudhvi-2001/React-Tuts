import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import { User } from './assets/interfaces/Interface'
import ArrayMthods from './components/ArrayMthods'
import UseEffect from './components/UseEffect'
import Component, { Id } from './components/Component'
function App() {
 const handleSubmit = ( data : User)=>{
 console.log(data)
 }
 const onSubmit = (id : Id)=>{
  console.log(id)
 }

  return (
    <>
    <Form onSubmit={handleSubmit}/>
    <ArrayMthods/>
    <UseEffect/>
    <Component name='prudhvi' email="prudhvi@gmail.com" onSubmit={onSubmit}/>
    </>
  )
}

export default App
