const initialState = {
    roof_size: [],
    avg_bill: []
}

const addInfo = (state=initialState, action) => {
    switch(action.type) {
        case 'ENTER_ROOF_SIZE':
            return [
                ...state,
                {
                    roof_size: action.integer,
                    completed: false
                }
            ]
        case 'ENTER_AVG_BILL':
            return [
                {
                    avg_bill: action.integer,
                    completed: false
                }
            ]
        default:
            return state
    }
}

export default addInfo