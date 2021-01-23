import React, {useState, useCallback} from 'react';
import { Input, Form, Button } from "antd";
import {useDispatch, useSelector} from 'react-redux';
import { addPost } from '../reducers/post';
import useInput from '../hooks/useInput';
const Middle_cardForm = () => {
    const dispatch = useDispatch();
    
    const [text,setText] = useInput('');
    const onChangeText = useCallback((e)=>{
        setText(e.target.value);
    });


    const onSubmit=useCallback(()=>{
        dispatch(addPost);
        onChangeText('');
    },[]);

    return(
    <Form onFinish={onSubmit}>
        <Input.TextArea 
        value={text} 
        onChange={onChangeText}
        style={{marginBottom:10}}/>
        <Button type="primary" style={{float:"right"}} htmlType="submit">Upload</Button>
        
    </Form>
    );
}
export default Middle_cardForm;