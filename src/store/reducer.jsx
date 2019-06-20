
const initialState={
    
}
const reducer=(state=initialState,action)=>{
    if(action.type === 'login'){
        return{
            userDataa:action.payload
        }
    }
 return state;
}

export default reducer;