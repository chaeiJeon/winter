import {HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

const rootReducer = combineReducers({
    index : ( state = {}, action )=>{
        switch(action.type){
            case HYDRATE :
                return { ...state, ...action.payload }
        default:
            return state;
        }
    },
    //HYDRATE(server side rendering을 위해 사용)를 위한 reducer 추가
    user,
    post,
});
export default rootReducer;