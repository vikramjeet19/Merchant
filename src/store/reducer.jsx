
const initialState = {
    merchants: [],
    user: {
        name: '',
        time: [],
        operation: []
    }

}
const reducer = (state = initialState, action) => {
    if (action.type === 'add') {
        let time=[...state.user.time];
        let operation =[...state.user.operation];
        const arr = [...state.merchants];
        arr.push(action.payload.data);
        time.push(action.payload.time);
        operation.push('creation')
        return {
            merchants: arr,
            user: {
                name: action.payload.data.username,
                time: time,
                operation: operation
            }
        }
    }
    if (action.type === 'status') {
        let time = [...state.user.time];
        let operation = [...state.user.operation];      
        let updatedData = [...state.merchants];

        for (let i = 0; i < updatedData.length; i++) {
            if (updatedData[i].username === action.payload.username && updatedData[i].status === 'Active') {
                updatedData[i].status = 'Deactive';
                time.push(action.payload.time);
                operation.push('Deactivate');
                return {
                    merchants: updatedData,
                    user: {
                        name: action.payload.username,
                        time: time,
                        operation: operation
                    }
                }
            }
            if (updatedData[i].username === action.payload.username && updatedData[i].status === 'Deactive') {
                updatedData[i].status = 'Active';
                time.push(action.payload.time);
                operation.push('Activate');
                return {
                    merchants: updatedData,
                    user: {
                        name: action.payload.username,
                        time: time,
                        operation: operation
                    }
                }
            }
        }
    }

    if (action.type === 'delete') {
        let updatedData = [...state.merchants];
        for (let i = 0; i < updatedData.length; i++) {
            if (updatedData[i].username === action.payload) {
                updatedData.splice(i, 1)
            }
        }
        return {
            merchants: updatedData
        }
    }
    if (action.type === 'edit') {
        let updatedData = [...state.merchants];
        for (let i = 0; i < updatedData.length; i++) {
            if (updatedData[i].username === action.payload.username) {
                updatedData[i].address = action.payload.address;
                updatedData[i].state = action.payload.state;
                updatedData[i].city = action.payload.city
                updatedData[i].zip = action.payload.zip
                updatedData[i].description = action.payload.description
            }
        }
        return {
            merchants: updatedData
        }
    }
    return state;
}

export default reducer;