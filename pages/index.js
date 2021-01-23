import React from 'react';
import {useSelector} from "react-redux";
import Layout from '../component/Layout';
import Middle_cardForm from '../component/middle_cardForm';
import Middle_card from '../component/middle_card';
import Login from '../component/login';

const Home = () =>{
    const {mainPosts } = useSelector(state=> state.post);
    return (
        <Layout>
            <Middle_cardForm/>
            <div style={{marginBottom:70}}/>
                {mainPosts.map((post)=>{
                    return (
                        <Middle_card key={post.id} post={post}/>
                    );
                })}
        </Layout>
        
    );
};
export default Home;