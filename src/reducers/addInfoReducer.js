import { createSelector } from 'reselect'
import { SUBMIT_INFO } from '../actions/index'

const initialState = {
    roof_size: 0,
    avg_bill: 0,
    city_name: "",
    completed: false
}

const addInfoReducer = (state=initialState, action) => {
    switch(action.type) {
        case SUBMIT_INFO:
            return Object.assign({}, state, {
                roof_size: action.payload.roof_input,
                avg_bill: action.payload.bill_input,
                city_name: action.payload.city_input,
                completed: true
            });
        default: return state;
    }
}


// Selectors
const roofSizeSelector = state => parseInt(state.roof_size)
const avgBillSelector = state => parseInt(state.avg_bill)

export const cityNameSelector = state => (state.city_name)

export const finalValueSelector = createSelector(
    roofSizeSelector,
    avgBillSelector,
    (roofSize, avgBill) => roofSize * avgBill + 2000
)


// export const weatherSelector = createSelector(

// )

/*
Cost of solar panel:
~$2 - $3 dollars per watt
~150-200 watts per square meter (input 1000, but really output 15-20%)
*/

export default addInfoReducer