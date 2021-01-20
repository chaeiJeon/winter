import React from 'react';
import {Row, Col} from 'antd';
import {useSelector} from 'react-redux';

import Left from '../component/left';
import Middle_cardForm from '../component/middle_cardForm';
import Middle_card from '../component/middle_card';
import Right from '../component/right';

const Layout = ({children}) =>{
    const {mainPosts} = useSelector(state=>state.post);

    return (
        <div style={{padding:30}}>
            <Row gutter={25} style={{marginTop:40}}>
                {/* gutter은 25% 50% 25% 그 사이 간격주기 */}
                <Col xs={24} md={6}>
                    <Left/>
                </Col>
                <Col xs={24} md={12}>
                    <Middle_cardForm/>
                    <div style={{marginBottom:70}}/>
                    {mainPosts.map((post)=>{
                        return(
                            <Middle_card key={post.id} post={post}/>
                        );
                    })}
                </Col>
                <Col xs={24} md={6}>
                    <Right />
               </Col>
            </Row>
        </div>
    );
};
export default Layout;