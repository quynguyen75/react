import React, { useEffect, useState } from "react";

export default function LifeCycle() {
  const [isSwitch, setIsSwitch] = useState(false);

  const toggleSwitch = () => setIsSwitch(!isSwitch);

  return (
    <div>
      {isSwitch ? <FunctionLifeCycle /> : <ClassLifeCycle />}
      <div>
        <button onClick={toggleSwitch}>Switch</button>
      </div>
    </div>
  );
}

function FunctionLifeCycle() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);

  useEffect(() => {
    console.log("Function Component Mounted & Updated");

    return () => console.log("cleanup");
  }, [count]);

  return (
    <>
      <h1>Function LifeCycle</h1>
      <h3>{count}</h3>
      <button onClick={increase}>Increase</button>
    </>
  );
}

class ClassLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increase() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <>
        <h1>Class LifeCycle</h1>
        <h3>{this.state.count}</h3>
        <button onClick={() => this.increase()}>Increase</button>
      </>
    );
  }

  componentDidMount() {
    console.log("Class Component Mounted");
  }

  componentDidUpdate() {
    console.log("Class Component Updated");
  }

  componentWillUnmount() {
    console.log("Class Component Will unmount");
  }
}
