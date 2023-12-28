import React, { useRef, useState } from 'react'
import { FormProps, User, usersData,Users,UsersFunction } from '../assets/interfaces/Interface'
function Form({onSubmit}:FormProps) {
    const userName = useRef(null);
    const initialState : User ={
        id:0,
        name:"",
        email:"",
        phoneNumber:0,
    }
    const [mainData, setMainData] = useState<User>(initialState);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} =event.target
        setMainData({...mainData ,[name]: value})
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        onSubmit(mainData);
        console.log(userName.current.value)
    }
    const usersIds : Users ={
        usersId:['user1','user2']
    }

   
  return (
    <div>
        <div className="form">
            <form onSubmit={handleSubmit}>
                <input type="text"
                 name="id" 
                 id="id" 
                 value={mainData.id}
                 onChange={handleInputChange}
                 ref={userName}
                /><br/>
                 <input type="text"
                 name="name" 
                 id="name" 
                 value={mainData.name}
                 onChange={handleInputChange}
                /><br/>
                 <input type="email"
                 name="email" 
                 id="email" 
                 value={mainData.email}
                 onChange={handleInputChange}
                /><br/>
                 <input type="text"
                 name="phoneNumber" 
                 id="phoneNumber" 
                 value={mainData.phoneNumber}
                 onChange={handleInputChange}
                /><br/>
                <button>Submit </button>
            </form>
        
        </div>   
    </div>
  )
}

export default Form
