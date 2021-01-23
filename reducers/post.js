export const initialState = {
    mainPosts : [{
        id:1,
        User : {
            id: 111,
        },
        content : '첫번째',
        
    }],
    imgagePaths : [],
    postAdded : false,
};
const ADD_POST = 'ADD_POST';
export const addPost = {
    type : ADD_POST,
};
const dummyPost = {
    id:2,
    User : {
        id:1,
    },
    content : '더미',
};
const reducers = (state=initialState, action)=>{
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
export default reducers;