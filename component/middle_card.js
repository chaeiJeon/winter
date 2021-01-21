import React, {useCallback} from 'react';
import {Card} from 'antd';
import {HeartOutlined, MessageOutlined, HeartTwoTone} from '@ant-design/icons';
import useInput from '../hooks/useInput';

const Middle_card = ({id, post}) =>{
    console.log(id,post);
    const [liked, setLiked] = useInput(false);
    const [commentOpened, setCommentOpened] = useInput(false);
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
                
            </Card>
        </div>
    );

};
export default Middle_card;