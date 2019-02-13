import addInfo from './addinfo'

const submit = (state=addInfo, action) => {
    switch(action.type) {
        case 'SUBMIT':
        console.log(this.state.roof_size*this.state.avg_bill)
        break
        default:
            return state
    }
}

export default submit