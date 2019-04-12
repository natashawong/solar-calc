export const enterRoofSize = roof_size => ({
    type: 'ENTER_ROOF_SIZE',
    roof_size
})

export const enterAvgBill = avg_bill => ({
    type: 'ENTER_AVG_BILL',
    avg_bill
})

export const submit = (avg_bill, roof_size, finalValue) => ({
    type: 'SUBMIT',
    avg_bill,
    roof_size,
    finalValue
})