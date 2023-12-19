import { Form, Formik,Field } from "formik";

 const Arrays = () =>
(
    <div>
        <h1>Arrays</h1>
        <Formik
       initialValues={{
         'owner.fullname': '',
       }}
       onSubmit={values => {
         console.log(values);
       }}
     >
            <Form>
            <Field name="['owner.fullname']" />
            <button type="submit">Submit</button>

            </Form>
        </Formik>
    </div>
)

export default Arrays;