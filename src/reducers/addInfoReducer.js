import { createSelector } from 'reselect'

const initialState = {
    roof_size: 0,
    avg_bill: 0,
    completed: false
}

const addInfoReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'SUBMIT_INFO':
            console.log('action heard' + action.payload)
            return Object.assign({}, state, {
                roof_size: action.roof_size,
                avg_bill: action.avg_bill,
                completed: true
            });
        default: return state;
    }
}


// Selectors
const roofSizeSelector = state => state.roof_size
const avgBillSelector = state => state.avg_bill

export const finalValueSelector = createSelector(
    roofSizeSelector,
    avgBillSelector,
    (roofSize, avgBill) => roofSize * avgBill
)

export default addInfoReducer