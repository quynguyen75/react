import React, { useReducer } from "react";

const reducer = (prevState, action) => {
  switch (action.type) {
    case "increase":
      return {
        count: prevState.count + 1,
      };

    case "decrease":
      return {
        count: prevState.count - 1,
      };

    default:
      return;
  }
};

const initialState = {
  count: 0,
};

export default function ReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseButtonHandler = () =>
    dispatch({
      type: "increase",
    });

  const decreaseButtonHandler = () =>
    dispatch({
      type: "decrease",
    });

  return (
    <div>
      <h3>{state.count}</h3>
      <button onClick={increaseButtonHandler}>Increase</button>
      <button onClick={decreaseButtonHandler}>Decrease</button>
    </div>
  );
}
