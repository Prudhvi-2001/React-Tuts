// Import necessary libraries
import React from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers, useFormik } from 'formik';

// Define the type for the form values
interface FormValues {
  name: string;
  email: string;
}

// Create a functional component for the form
const MyForm: React.FC = () => {
  // Define the initial form values
  const initialValues: FormValues = {
    name: '',
    email: '',
  };


  // Define a validation function
  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    if (!values.name) {
      errors.name = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  // Define the form submission function
  const onSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    // Perform the form submission logic here
    console.log(values);

    // Set submitting to false to enable the submit button again
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
      
    >
      <Form>
        {/* Input for name */}
        <div>
          <label htmlFor="name">Name:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        {/* Input for email */}
        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        {/* Submit button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </Formik>
  );
};

// Export the component
export default MyForm;
