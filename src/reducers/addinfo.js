const initialState = {
    roof_size: 0,
    avg_bill: 0,
    completed: false
}

const addInfo = (state=initialState, action) => {
    switch(action.type) {
        case 'SUBMIT_INFO':
            console.log(action.payload) // TODO:
            return Object.assign({}, state, action.payload);
        default: return state;
    }
}

export default addInfo