import React, { useReducer, useState } from "react";

const SimpleReducer = () => {
 const [counter, setCounter] = useState(0);
 // const [state, dispatch] = useReducer()

 return (
  <div>
   {counter}
   <button onClick={() => setCounter(counter + 1)}>Increment</button>
   <button onClick={() => setCounter(counter - 1)}>Decrement</button>
  </div>
 );
};

export default SimpleReducer;
