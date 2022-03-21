import React, { useRef } from "react";

export default function UseRefExample() {
  return (
    <div>
      <RefToValue />
      <RefToDOM />
    </div>
  );
}

function RefToValue() {
  const countRef = useRef(0);

  const increase = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  console.log("render");

  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function RefToDOM() {
  const inputRef = useRef();

  const focusHandler = () => inputRef.current.focus();

  return (
    <div>
      <input placeholder="name" ref={inputRef} />
      <button onClick={focusHandler}>Focus</button>
    </div>
  );
}
