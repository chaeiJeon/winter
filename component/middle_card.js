import React, {useState,useCallback} from 'react';
import {Card} from 'antd';
import {HeartOutlined, MessageOutlined, HeartTwoTone} from '@ant-design/icons';


const Middle_card = ({post}) =>{
    const [liked, setLiked] = useState(false);
    const [commentOpened, setCommentOpened] = useState(false);
    
    const onToggleLike = useCallback(() => {
        setLiked((prev)=>!prev);
    },[]);
    const onToggleComment = useCallback(()=>{
        setCommentOpened((prev)=>!prev);
    },[]);
    
    return (
        <div>
            <Card 
                style={{marginTop:40}} 
                actions={[
                    liked ? <HeartTwoTone twoToneColor = "#eb2f96" key="heart" onClick={onToggleLike}/>
                            : <HeartOutlined key="heart" onClick={onToggleLike}/>,
                    <MessageOutlined key="comment" onClick={onToggleComment}/>
                ]}    
            >
            <Card.Meta title={post.User.id}/>
            </Card>
        </div>
    );

};
export default Middle_card;