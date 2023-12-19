import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
import './form.css'
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
        alert(JSON.stringify(values, null, 2));
        
           

        },
        validationSchema:Yup.object({
            firstName: Yup.string().required("First Name is required")
            .max(15,"Must less than 15 Characters")
            .min(6,"Should be more than 6 characters"),
            lastName: Yup.string().required("Last Name is Required")
            .max(10,"Must less than 10 characters")
            .min(6,"Should be more than 6 characters"),
            email: Yup.string().email("Invalid Email Address").required("Email is required")
        })
    })
    
  return (
    <div>
       <form onSubmit={formik.handleSubmit} className="my-form">
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        className={formik.touched.firstName && formik.errors.firstName ? 'error' : ''}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <p className="error-message">{formik.errors.firstName}</p>
      ) : null}

      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        className={formik.touched.lastName && formik.errors.lastName ? 'error' : ''}
      />
      {formik.touched.lastName && formik.errors.lastName ? (
        <p className="error-message">{formik.errors.lastName}</p>
      ) : null}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        className={formik.touched.email && formik.errors.email ? 'error' : ''}
      />
      {formik.touched.email && formik.errors.email ? (
        <p className="error-message">{formik.errors.email}</p>
      ) : null}

      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default NormalForm
