import React, {Component} from 'react'
import { connect } from 'react-redux'

import { submitInfo } from '../actions/index'
import { finalValueSelector } from '../reducers/addInfoReducer'

export default class FullPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            roof_input: 0,
            bill_input: 0,
        }
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.submitInfo(this.state)}>
                    <label>Enter roof size: </label>
                    <input 
                        type='number'
                        onChange={(evt) => this.setState({roof_input: evt.target.value})}
                        value={this.state.roof_input}
                    />

                    <label>Enter average electricity bill: </label>
                    <input 
                        type='number'
                        onChange={(evt) => this.setState({bill_input: evt.target.value})}
                        value={this.state.bill_input}
                    />
                </form>

                <button type='submit'>Submit Information</button>
                <div>{this.props.final_value}</div>
                {console.log(this.props.final_value)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        final_value: finalValueSelector(state) // why is this undefined???
    }
}

const mapDispatchToProps = {
    submitInfo
}

connect(mapStateToProps, mapDispatchToProps)(FullPage)