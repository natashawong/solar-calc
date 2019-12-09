import { createSelector } from 'reselect'
import { SUBMIT_INFO } from '../actions/index'

const initialState = {
    roof_size: 0,
    avg_bill: 0,
    completed: false
}

const addInfoReducer = (state=initialState, action) => {
    switch(action.type) {
        case SUBMIT_INFO:
            console.log('action heard' + action.payload)
            return Object.assign({}, state, {
                roof_size: action.roof_input,
                avg_bill: action.bill_input,
                completed: true
            });
        default: return state;
    }
}


// Selectors
const roofSizeSelector = state => parseInt(state.roof_size)
const avgBillSelector = state => parseInt(state.avg_bill)

export const finalValueSelector = createSelector(
    roofSizeSelector,
    avgBillSelector,
    (roofSize, avgBill) => roofSize * avgBill
)

export default addInfoReducer