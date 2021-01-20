import { Form, Input, InputNumber, Button, Row, Col } from 'antd';
import useInput from '../hooks/useInput';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [group, onChangeGroup] = useInput('');
    const [introduction, onChangeIntroduction]=useInput('');
    const onSubmit = () =>[
        console.log(id, password)
    ]
    return (
    <div style={{marginTop:50}}>
        <Row>
            <Col xs={24} md={6}/>
            <Col xs={24} md={12}>
    <Form {...layout} name="nest-messages" onFinish={onSubmit} validateMessages={validateMessages}>
      <Form.Item name={['user', 'id']} label="ID" rules={[{ required: true }]}>
        <Input onChange={onChangeId}/>
      </Form.Item>
      <Form.Item name={['user', 'password']} label="PASSWORD" rules={[{ required: true }]}>
        <Input onChange={onChangePassword}/>
      </Form.Item>
      <Form.Item name={['user', 'group']} label="그룹명" rules={[{ required: true }]}>
        <Input onChange={onChangeGroup}/>
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="Introduction">
        <Input.TextArea onChange={onChangeIntroduction}/>
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" >
          Submit
        </Button>
      </Form.Item>
    </Form>
            </Col>
            <Col xs={24} md={6}/>
    </Row>
    </div>
    
  );
};

export default Signup;
