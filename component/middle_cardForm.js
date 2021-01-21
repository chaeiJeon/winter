import React from 'react';
import { Input, Form, Button } from "antd";
import useInput from '../hooks/useInput';

const Middle_cardForm = () => {
    const [text,onChangeText]=useInput('');
    return(
    <Form>
        <Input.TextArea 
        value={text} 
        onChange={onChangeText}
        style={{marginBottom:10}}/>
        <Button type="primary" style={{float:"right"}} htmlType="submit">Upload</Button>
        
    </Form>
    );
}
export default Middle_cardForm;