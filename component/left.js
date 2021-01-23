import { Card, Avatar, Checkbox} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;
import {useSelector} from 'react-redux';
import Login from '../component/login';

const Left = () => {
    const isLoggedIn = useSelector(state => state.user);
    console.log(isLoggedIn);
    return (
        <>
        {isLoggedIn ? (<Card
        cover={
        <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
        }
        actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
        ]}
        >
        <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Four"
        description="스토리"
        />
        </Card>) 
        : <Login />
        }
        </>
    )
};
export default Left;