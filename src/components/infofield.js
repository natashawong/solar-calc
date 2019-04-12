import React from 'react'
import { connect } from 'react-redux'
import { enterRoofSize, enterAvgBill } from '../actions'

const InfoFields = ({dispatch}) => {
    let input

    return(
    <div>
        {/* Enter Roof Size */}
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(enterRoofSize(input.value))
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Enter Roof Size</button>
            </form>
        </div>

        {/* Enter Avg. Monthly Electricity Bill */}
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(enterAvgBill(input.value))
                }}
            >
                <input ref={node => (input = node)} />
                <button type="submit">Enter Average Electricity Bill</button>
            </form>
        </div>
    </div>
    )
}

export default connect()(InfoFields)