// import React from 'react'
// import { connect } from 'react-redux'
// import { enterRoofSize, enterAvgBill, submit,  } from '../actions'

// const InfoFields = ({dispatch}) => {
//     let input

//     return(
//     <div>
//         {/* Enter Roof Size */}
//         <div>
//             <form
//                 onSubmit={e => {
//                     e.preventDefault()
//                     if (!input.value.trim()) {
//                         return
//                     }
//                     dispatch(enterRoofSize(input.value))
//                     input.value = ''
//                 }}
//             >
//                 <input ref={node => (input = node)} />
//                 <button type="submit">Enter Roof Size</button>
//             </form>
//         </div>

//         {/* Enter Avg. Monthly Electricity Bill */}
//         <div>
//             <form
//                 onSubmit={e => {
//                     e.preventDefault()
//                     if (!input.value.trim()) {
//                         return
//                     }
//                     dispatch(enterAvgBill(input.value))
//                     input.value = ''
//                 }}
//             >
//                 <input ref={node => (input = node)}/>
//             </form>
//         </div>
//     </div>
//     )
// }

// export default connect()(InfoFields)

import React from 'react'
import { connect } from 'react-redux'
import submit from '../reducers/submit'

const FinalValue = () => {
    return (
        <div>
            <button type="button" onClick={this.props.submitAll}>Submit</button>
            <h1>{this.props.showFinal}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
      const roof_size = state.addInfo.roof_size,
      const avg_bill = state.addInfo.avg_bill,
      const finalValue = state.submit.finalValue
      
      const submitAll = submit(roof_size, avg_bill)
      const showFinal = finalValue

      return {
        submitAll, showFinal
      }
  };

// why is mergeprops so hard to use :/

  // const mapDispatchToProps = dispatch => {
  //   return {
  //     submit: (roof_size, avg_bill) => { dispatch(submit(roof_size, avg_bill)) }
  //   };
  // };

export default connect(mapStateToProps)(FinalValue)

// const mapStateToProps = (state) => {
//     return{
//       value: state.value,
//     }
//   }

// class App extends Component {
//     constructor(props){
//       super(props)
//     }
  
//     render() {
//       const { value, btns, addElem, clear, equal } = this.props;
//       return (
//         <div className="App">
//           <div className="value-container">
//             <input type="text" value={value} />
//           </div>
//           <div className="buttons-container">
//             {btns.map((item, key) => {
//               if(item == "C"){
//                 return(
//                   <button onClick={ clear.bind(this) } key={key}>{item}</button>
//                 )
//               } else if(item == "="){
//                 return(
//                   <button onClick={ equal.bind(this, value) } key={key}>{item}</button>
//                 )
//               } else {
//                 return(
//                   <button onClick={ addElem.bind(this, item) } key={key}>{item}</button>
//                 )
//               }
//             })}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   const mapStateToProps = (state) => {
//     return{
//       value: state.value,
//       btns: state.btns
//     }
//   }
//   const mapDispatchToProps = (dispatch) => {
//     return{
//       addElem: (text) => {
//         dispatch({
//           type: 'ADD_ELEM',
//           text
//         })
//       },
//       clear: () => {
//         dispatch({
//           type: 'CLEAR'
//         })
//       },
//       equal: (value) => {
//         dispatch({
//           type: 'EQUAL',
//           value
//         })
//       }
//     }
//   }
  
//   const Calc = connect(mapStateToProps, mapDispatchToProps)(App);