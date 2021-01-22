import reducer from "./user";

export const initialState = {
    mainPosts : [],
    imgagePaths : [],
    postAdded : false,
};
const ADD_POST = 'ADD_POST';
export const addPost = {
    type : ADD_POST,
};
const dummyPost = {
    id:2,
    content : '더미',
    User : {
        id:1
    },
    Images : [],
    Comments : [],
};
export default (state=initialState, action)=>{
    switch(action.type){
        case ADD_POST:
            return{
                ...state,
                mainPosts:[dummyPost, ...state.mainPosts],
                postAdded : true,
            };
        default : {
            return {
                ...state,
            };
        }
    }
};