
const initialState = {
    merchants: []
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
        let vicky = [...state.merchants];
        for (let i = 0; i < vicky.length; i++) {
            if (vicky[i].username === action.payload && vicky[i].status === 'Active') {
                vicky[i].status = 'Deactive'
                return {
                    merchants: vicky
                }
            }
            if (vicky[i].username === action.payload && vicky[i].status === 'Deactive') {
                vicky[i].status = 'Active';
                return {
                    merchants: vicky
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
    return state;
}

export default reducer;