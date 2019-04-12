const initialState = {
    roof_size: 0,
    avg_bill: 0,
    completed: false
}

const addInfo = (state=initialState, action) => {
    switch(action.type) {
        case 'ENTER_ROOF_SIZE':
            return [
                state,
                {
                    roof_size: action.integer,
                    completed: true
                }
            ]
        case 'ENTER_AVG_BILL':
            return [
                state,
                {
                    avg_bill: action.integer,
                    completed: true
                }
            ]
        default:
            return state
    }
}

export default addInfo