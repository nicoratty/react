import React, { useReducer } from "react";
import './home.css';
import { AiOutlineMinus, AiOutlineReload, AiOutlinePlus } from "react-icons/ai";

const initialState = { count: 0 };

const reducerCounter = (state, action) => {
  switch (action.type) {
    case "increment":
      return {...state ,count: Number(state.count) + action.value};
      break;
    case "decrement":
      return {...state, count: state.count - action.value };
      break;
    case "reset":
      return initialState;
          break;
      case "setVal":
          return { ...state, count: action.payload };
          break;
    default:
      return state;
      break;
  }
};

function Reducer() {
  const [state, dispatch] = useReducer(reducerCounter, initialState);
const handleChange = (e) => {
    dispatch({
        type: "setVal",
        payload: e.target.value,
    })
}
  return (
   
    <div className="reducer-box">
      <h1 className="reducer-header">{state.count}</h1>
          <input className="reducer-input"  type='number' 
      onChange={(e) => handleChange(e)}    />
      <div className="btn">
      <button className="reducer-increase" onClick={() => dispatch({ type: "increment", value: 1 })}>
        <AiOutlinePlus />
      </button>
      <button className="reducer-decrease" onClick={() => dispatch({ type: "decrement", value: 1 })}>
        < AiOutlineMinus />
      </button>
      <button className="reducer-reset" onClick={() => dispatch({ type: "reset" })}>< AiOutlineReload /></button>
      </div>
      </div>
        
  );
}

export default Reducer;
