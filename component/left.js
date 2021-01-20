import { Card, Avatar, Checkbox} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
const { Meta } = Card;


const Left = () => {
    return (
        <>
        <Card
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
        title="Four Sexy Girls"
        description="문율경채 스토리"
        />
        </Card>
        <div style={{marginTop:25}}>
        <Checkbox>치즈</Checkbox>
        <Checkbox style={{marginnBottom:20}}>노치즈</Checkbox>
   
        </div>
        </>
    )
};
export default Left;