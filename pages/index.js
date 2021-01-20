import Login from '../component/login';
import {Row, Col} from 'antd';
const AppLayout = () =>{
    return (
        <Row>
            <Col xs={24} md={6}/>
            <Col xs={24} md={12}>
                <Login />
            </Col>
            <Col xs={24} md={6}/>
        </Row>
    );
};
export default AppLayout;