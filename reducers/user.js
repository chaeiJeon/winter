export const initialState = {
    isLoggedIn : false,
    me : null,
}
export const loginAction = (data) => {
    return { 
        type : 'LOG_IN',
        data,
    }
}
const reducer = (state=initial, action)=>{
    switch(action.type){
        case 'LOG_IN':
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
