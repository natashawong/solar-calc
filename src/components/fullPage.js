import React, {Component} from 'react'
import { connect } from 'react-redux'

import { submitInfo } from '../actions/index'
import { finalValueSelector } from '../reducers/addInfoReducer'

export class FullPage extends Component {
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
                <form onSubmit={(event) => {
                    event.preventDefault()
                    this.state.completed ? this.props.submitInfo(this.state) : alert('Please fill in all fields before proceeding.')
                }}>
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
                    <input type='submit' value='Submit'/>

                </form>
                <div>{'Final Value: ' + this.props.final_value}</div>
                {console.log(this.props.final_value)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        final_value: finalValueSelector(state)
    }
}

const mapDispatchToProps = { submitInfo }


export default connect(mapStateToProps, mapDispatchToProps)(FullPage)