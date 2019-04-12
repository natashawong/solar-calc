import addInfo from './addInfo'

const initialState = {
    finalValue: 0,
}

const submit = (state=initialState, action) => {
    switch(action.type) {
        case 'SUBMIT':
            return [
                state, 
                {
                    finalValue: addInfo.roof_size + addInfo.avg_bill
                }
            ]
        default:
            return state
    }
}


export default submit