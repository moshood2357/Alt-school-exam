//  import React from 'react'
import { useReducer } from "react";
import "./index.css";

// function AppCounter() {
//   const initial = 0;
//   const [value, setValue] = useState(initial);

//   const handleIncrement = () => {
//     setValue(value + 1);
//   };
//   const handleDecrement = () => {
//     setValue(value - 1);
//   };
//   const handleReset = () => {
//     setValue(initial);
//   };

//   return (
//     <div className="container">
//       <h2>{value}</h2>
//       <button className="btn" onClick={handleIncrement}>
//         Increment
//       </button>
//       <button className="btn" onClick={handleDecrement}>
//         Decrement
//       </button>
//       <button className="btn" onClick={handleReset}>
//         Reset
//       </button>
//     </div>
//   );
// }

// export default AppCounter;


const initialState = {
  firstCounter : 0
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      // return state + 1
      return {firstCounter: state.firstCounter + action.value}
    case 'Decrement':
      // return state - 1
      return {firstCounter: state.firstCounter - action.value}
    case 'Reset':
      return initialState
    case 'Default':
      return state
  }
}

function AppCounter() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className = 'container'>
      <div>Count - {count.firstCounter}</div>
      <button className = 'btn' onClick = {() => dispatch({type:'increment', value: 1})}>Increment</button>
      <button className = 'btn' onClick = {() => dispatch({type:'Decrement', value: 1})}>Decrement</button>
      <button className = 'btn' onClick = {() => dispatch({type:'Reset'})}>Reset</button>
    </div>
    
  )
}

export default AppCounter