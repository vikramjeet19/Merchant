
const initialState = {
    merchants: [],
    
}
const reducer = (state = initialState, action) => {
    if (action.type === 'add') {
        const arr = [...state.merchants];
        arr.push(action.payload);
        return {
            merchants: arr
        }
    }
    if (action.type === 'status') {
        let updatedData = [...state.merchants];
        for (let i = 0; i < updatedData.length; i++) {
            if (updatedData[i].username === action.payload.username && updatedData[i].status === 'Active') {
                updatedData[i].status = 'Deactive';
                return {
                    merchants: updatedData
                }
            }
            if (updatedData[i].username === action.payload.username && updatedData[i].status === 'Deactive') {
                updatedData[i].status = 'Active';
                return {
                    merchants: updatedData
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