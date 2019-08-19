// Action Types
export const ACTIONS = {
    ROOF_SIZE: 'ENTER_ROOF_SIZE',
    AVG_BILL: 'ENTER_AVG_BILL',
    SUBMIT_INFO: 'SUBMIT_INFO',
}

// Action Creators
    export function enterRoofSize(roof_size) { return { type: 'ENTER_ROOF_SIZE', roof_size } }
    export function enterAvgBill(avg_bill) { return { type: 'ENTER_AVG_BILL', avg_bill } }
    export function submitInfo(payload) { return { type: 'SUBMIT_INFO', payload } }

