import React from 'react';
import type { FormProps } from 'antd';
import { Checkbox, Form, Input } from 'antd';
import MyButton from './MyButton';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

class MyForm extends React.Component<FormProps,
  {
    names?: string
    psw?: string
  }>
{
  constructor(props: FormProps) {
    super(props);
    this.state = {
      names: '',
      psw: ''
    }
  }
  render() {
    return (
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={this.props.onFinish}
        onFinishFailed={this.props.onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <MyButton types="primary" htmlType="submit" BtnTtitle='提交' />
        </Form.Item>
      </Form>
    )
  }
}

export default MyForm; 