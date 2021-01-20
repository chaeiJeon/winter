import { Calendar } from 'antd';
import { Row, Col } from "antd";
const Head = ({children}) => {
    return (
        <div>
            <Row gutter={18}>
                {/* gutter은 25% 50% 25% 그 사이 간격주기 */}
                <Col xs={24} md={6}>
                    <img src="/images/front.png"/>
                </Col>
                <Col xs={24} md={8}>
                    {children}
                </Col>
                <Col xs={24} md={10}>
                    <a href="https://blog.naver.com/tgb09876" target="_blank" rel="noreferrer noopener">채뚱</a>
                    <Calendar style={{marginTop:20}}/>
               </Col>
            </Row>
        </div>
    );

};
export default Head