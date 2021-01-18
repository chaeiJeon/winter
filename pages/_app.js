import React from 'react';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Head from 'next/head';

const App = ({Component}) =>{
    return(
        <>
        <Head>
            <title>LOGIN</title>
        </Head>
        <Component />
        </>
    );
};

App.propTypes={
    Component : PropTypes.elementType.isRequired,
}
export default App;