import React, { useCallback } from 'react';
import {Form, Input, Button, Checkbox } from 'antd';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';
import useInput from '../hooks/useInput';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};



const Login = () => {
    const dispatch = useDispatch();
    const [id, onChangeId]=useInput('');
    const [password, onChangePassword]=useInput('');
    
    const onSubmitForm = useCallback(()=>{
        console.log(id,password);
        dispatch(loginAction({id,password}));
    },[id, password]);

    return (
        <Form 
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onSubmitForm}
        >
        
        <Form.Item
                label="ID"
                name="id"
                rules={[{ required: true, message: 'Please input your id!' }]}
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
            <Button type="primary" htmlType="submit" >
                Submit
            </Button>
            </Link>
        </Form.Item>

        <Form.Item {...tailLayout}>
            <Link href="/signup">
            <Button type="primary" ghost>
            회원가입
            </Button>
            </Link>
        </Form.Item>
        </Form>
    );
};
export default Login;