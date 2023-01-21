import React, { useState } from 'react'
import axios from "axios"
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';

const Dataschema = yup.object().shape({
  icon: yup.string().required("Daxil edin.."),
  title: yup.string().required("titleni daxil edin"),
  about: yup.string().required("daxil ele de")

});

function Index() {
  const [data, setData] = useState([])

  return (
    <Formik
      initialValues={{
        icon: '',
        title: '',
        about: ''
      }}
      validationSchema={Dataschema}
      onSubmit={(values, { resetForm }) => {
        const newdata = {
          icon: values.icon,
          title: values.title,
          about: values.about
        }
        resetForm({ values: '' });

        console.log(newdata);
        axios.post("http://localhost:5000/products", newdata)
        setData([...data, newdata])
        console.log('Success:', values);
      }}>
      {({ values, errors, touched }) => (
        <Form style={{ marginTop: "200px" }}>

          <Field name="icon" placeholder='enter icon' /><br />
          {errors.icon && touched.icon ? <div className='mt-0 pt-0 mb-0 pb-0' style={{ color: "red", fontSize: 12 }}>{errors.icon}</div> : null}
          <Field name="about" placeholder='enter about' /><br />
          {errors.about && touched.about ? <div>{errors.about}</div> : null}
          <Field name="title" placeholder='enter title' /><br />
          {errors.title && touched.title ? <div>{errors.title}</div> : null}
          <Field type="Submit" value="Sign up" />
        </Form>
      )}

    </ Formik>


  )
}

export default Index
