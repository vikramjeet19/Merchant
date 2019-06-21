
const initialState = {
    merchants: [],
    timeStamp: []


}
const reducer = (state = initialState, action) => {
    if (action.type === 'add') {
        const arr = [...state.merchants];
        const userStamp = [...state.timeStamp];
        arr.push(action.payload.data);
        userStamp.push(action.payload.time);
        return {
            merchants: arr,
            timeStamp: userStamp
        }
    }

    if (action.type === 'status') {
        let updatedData = [...state.merchants];
        const userStamp = [...state.timeStamp]
        for (let i = 0; i < updatedData.length; i++) {
            if (updatedData[i].username === action.payload.username && updatedData[i].status === 'Active') {
                updatedData[i].status = 'Deactive';
                const timer = {username :updatedData[i].username,
                    opertaion:'Deactivate',
                    time:action.payload.time }
                    userStamp.push(timer)
                return {
                    merchants: updatedData,
                    timeStamp:userStamp
                }
            }
            if (updatedData[i].username === action.payload.username && updatedData[i].status === 'Deactive') {
                updatedData[i].status = 'Active';
                const timer = {username :updatedData[i].username,
                    opertaion:'Activation',
                    time:action.payload.time }
                    userStamp.push(timer)
                return {
                    merchants: updatedData,
                    timeStamp:userStamp
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