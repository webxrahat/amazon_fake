import React, { useReducer } from "react";

const RepeatReducer = () => {
 const [state, dispatch] = useReducer(reducer, 0);

 function reducer(state, action) {
  if (action.type === "increment") {
   return state + action.payload;
  }

  if (action.type === "decrement" && state !== 0) {
   return state - action.payload;
  } else {
   return (state = 0);
  }
 }

 return (
  <div>
   {state}
   <br />
   <button
    onClick={() => dispatch({ type: "increment", payload: 1 })}
    className="bg-green-500 p-2 mr-2"
   >
    Increment
   </button>
   <button
    onClick={() => dispatch({ type: "decrement", payload: 1 })}
    className="bg-red-500 p-2"
   >
    Decrement
   </button>
  </div>
 );
};

export default RepeatReducer;
