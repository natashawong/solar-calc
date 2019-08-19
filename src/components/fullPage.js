import React, {Component} from 'react'
import { connect } from 'react-redux'

import { submitInfo } from '../actions/index';

export default class FullPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            roof_input: 0,
            bill_input: 0,
        }
    }

    render() {
        let payload;
        return(
            <div>
                <form>
                    <label>Enter roof size: </label>
                    <input 
                        type='number'
                        onChange={(roof_input) => this.setState({roof_input: roof_input.target.value})}
                        value={this.state.roof_input}
                    />
                </form>

                <form>
                    <label>Enter average electricity bill: </label>
                    <input 
                        type='text'
                        onChange={(bill_input) => this.setState({bill_input: bill_input.target.value})}
                        value={this.state.bill_input}
                    />
                </form>

                <button type="submit" onClick={this.submit(payload)}>Submit Information</button>
            </div>
        )
    }

    submit = (payload) => {
        const roof_input = this.state.roof_input
        const avg_bill = this.state.bill_input

        payload = {roof_input, avg_bill}
        submitInfo(payload)
        console.log('sent')
        console.log(payload)
    }
}

const mapStateToProps = function(state) {
    return {
        roof_input: parseInt(state.roof_input),
        bill_input: parseInt(state.bill_input),
    }
}

const mapDispatchToProps = {
    submitInfo
}

connect(mapStateToProps, mapDispatchToProps)(FullPage)