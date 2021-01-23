import React from 'react';
import PropTypes from "prop-types";
import {Row, Col} from 'antd';
import Left from './left';
import Right from './right';

const Layout = ({children}) =>{
    return (
        <div style={{padding:30}}>
            <Row gutter={25} style={{marginTop:40}}>
                {/* gutter은 25% 50% 25% 그 사이 간격주기 */}
                <Col xs={24} md={6}>
                    <Left/>
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <Right />
               </Col>
            </Row>
        </div>
    );
};
Layout.propTypes={
    children:PropTypes.node.isRequired,
    //return 안에 들어갈 수 있는 것이 모두 node
};
export default Layout;