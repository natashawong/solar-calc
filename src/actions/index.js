// Action Types
export const ROOF_SIZE = 'ENTER_ROOF_SIZE';
export const AVG_BILL = 'ENTER_AVG_BILL';
export const SUBMIT_INFO = 'SUBMIT_INFO';

// Action Creators
export function enterRoofSize(roofSize) { return { type: 'ENTER_ROOF_SIZE', roofSize } }
export function enterAvgBill(avgBill) { return { type: 'ENTER_AVG_BILL', avgBill } }
export function submitInfo(payload) { return { type: 'SUBMIT_INFO', payload } }

