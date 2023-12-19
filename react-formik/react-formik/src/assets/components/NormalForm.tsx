import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
function NormalForm() {
   
    interface Details{
        firstName:string,
        lastName:string,
        email:string,
    }
    
    const initialValues : Details = {
             firstName:"",
            lastName:"",
            email:"",
    }
    const formik = useFormik({
        initialValues:initialValues,
        onSubmit:(values:Details)=>{
            console.log(values)
        
           

        },
        validationSchema:Yup.object({
            firstName: Yup.string().required("First Name is required").max(10,"Must be 6 characters"),
            lastName: Yup.string().required("Last Name is Required").max(10,"Must be 6 characters or"),
            email: Yup.string().email("Invalid Email Address").required("Email is required")
        })
    })
    
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>
            <input  
            type='text'
            name='firstName'
            id='firstName'
            onChange={formik.handleChange}
            value={formik.values.firstName}
            /><br/>
            {formik.touched.firstName && formik.errors.firstName ?<p>{formik.errors.firstName}</p>:null}
            <input type="text" name="lastName" id="lastName" 
            onChange={formik.handleChange}
            value={formik.values.lastName}
            /><br/>
            {formik.touched.lastName && formik.errors.lastName ?  <p>{formik.errors.lastName}</p>:null}
            <input type="email" name="email" id="email"
             onChange={formik.handleChange}
             value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p>:null}

            <br/> 
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default NormalForm
