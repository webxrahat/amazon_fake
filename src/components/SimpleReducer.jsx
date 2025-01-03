import React, { useReducer, useState } from "react";

const SimpleReducer = () => {
 const [counter, setCounter] = useState(0);
 const [state, dispatch] = useReducer(reducer, 0);

 //  console.log(dispatch);

 function reducer(state, action) {
  if (action.type === "increment") {
   return state + action.payload;
  }
  if (action.type === "decre") {
   return state - action.payload;
  }
 }

 const handleDecrement = () => {
  counter === 0 ? counter : setCounter(counter - 1);
 };

 return (
  <div>
   use-state: {counter}
   <br />
   use-reducer: {state}
   <br />
   <button
    className="bg-green-200 p-2 mr-5"
    onClick={() => setCounter(counter + 1)}
   >
    Increment
   </button>
   <button className="bg-red-200 p-2" onClick={() => handleDecrement()}>
    Decrement
   </button>
   <br />
   <div className="mt-2">
    <button
     className="bg-green-200 p-2 mr-5"
     onClick={() => dispatch({ type: "increment", payload: 1 })}
    >
     Increment Count
    </button>
    <button
     className="bg-red-200 p-2"
     onClick={() => dispatch({ type: "decre", payload: 1 })}
    >
     Decrement Count
    </button>
   </div>
  </div>
 );
};

export default SimpleReducer;
