import React from 'react';
import {Form, Input, Button, Checkbox } from 'antd';
import Link from 'next/link';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const Login = () => {
    return (
        <Form 
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        >
        
        <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
        >
        <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
        <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout} >
            <Link href="/Layout">
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
            </Link>
        </Form.Item>

        <Form.Item {...tailLayout}>
            <Link href="/signup">
            <Button type="primary" ghost htmlType="submit">
            회원가입
            </Button>
            </Link>
        </Form.Item>
        </Form>
    );
};
export default Login;