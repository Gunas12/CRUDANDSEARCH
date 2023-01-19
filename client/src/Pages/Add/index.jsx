import React from 'react'
import axios from "axios"
import { Button, Form, Input } from 'antd';

function Index( {datas,setdata}) {
  const onFinish = (values) => {
 
    console.log(datas);
    let productobj={
        title:values.title,
        about:values.about,
        icon:values.icon,
    }
    axios.post("http://localhost:4000/products",productobj)
    console.log(datas);
    setdata([...datas,productobj])
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
   <div className='container' style={{marginTop:"150px"}}>
     <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
   
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="title"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input title',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="about"
      name="about"
      rules={[
        {
          required: true,
          message: 'Please input about',
        },
      ]}
    >
      <Input/>
    </Form.Item>
    <Form.Item
      label="icon"
      name="icon"
      rules={[
        {
          required: true,
          message: 'Please input icon',
        },
      ]}
    >
      <Input/>
    </Form.Item>
   

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

   </div>
  )
}

export default Index
