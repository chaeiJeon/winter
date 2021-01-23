export const initialState = {
    isLoggedIn : false,
    me : null,
}
export const loginAction = (data) => {
    console.log('로그인액션');
    return { 
        type : 'LOG_IN',
        data,
    }
}
const dummyUser = {
    id:1,
    isLoggedIn : true,
}
const reducer = (state=initialState, action)=>{
    switch(action.type){
        case 'LOG_IN':
            console.log('login reducer');
            return{
                ...state,
                isLoggedIn : true,
                me : action.data,
            };
        default : 
            return state;
    }
};
export default reducer;