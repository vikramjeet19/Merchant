
const initialState={
    merchants:[]
}
const reducer=(state=initialState,action)=>{
    if(action.type === 'add'){
        const arr=[...state.merchants];
        arr.push(action.payload);
        console.log(arr);
        return{
            merchants:arr
        }
    }

    if(action.type === 'status'){
        
        console.log('status ran reducer');
        return{
          
        }
    }

 return state;
}

export default reducer;