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
            completed: true,
        }
    }

    render() {
        return(
            <div>
                {/* cannot read property of "state" undefined */}
                <form onSubmit={this.handleSubmit}>
                    <label>Enter roof size: </label>
                    <input 
                        type='number'
                        onChange={(evt) => this.setState({roof_input: evt.target.value})}
                        value={this.state.roof_input}
                    />
                    {console.log(this.state.roof_input)}
                    <label>Enter average electricity bill: </label>
                    <input 
                        type='number'
                        onChange={(evt) => this.setState({bill_input: evt.target.value})}
                        value={this.state.bill_input}
                    />
                    {console.log(this.state.bill_input)}
                    <input type='submit' value='Submit'/>
                </form>
                <div>{this.props.final_value}</div>
                {console.log(this.props.final_value)}
            </div>
        )
    }

    handleSubmit() {
        submitInfo(this.state)
    }
}

const mapStateToProps = (state) => {
    return {
        final_value: finalValueSelector(state) // why is this undefined?
    }
}

const mapDispatchToProps = {
    submitInfo
}

connect(mapStateToProps, mapDispatchToProps)(FullPage)