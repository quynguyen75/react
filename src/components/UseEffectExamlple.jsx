import React, { useEffect, useState } from "react";

export default function UseEffectExamlple() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  //   useEffect(() => {
  //     console.log("mounted");
  //   }, []);

  //   useEffect(() => {
  //     console.log("mounted & updated");
  //   }, [count]);

  useEffect(() => {
    console.log("mounted & updated");

    return () => console.log("cleanup");
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
    </div>
  );
}
