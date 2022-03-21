import React, { useRef, useState } from "react";

export default function ControlledVSUncontrolled() {
  return (
    <div>
      <div>
        <h1>Controlled Component</h1>
        <ControlledComponent />
      </div>

      <div>
        <h1>Uncontrolled Component</h1>
        <UncontrolledComponent />
      </div>
    </div>
  );
}

function ControlledComponent() {
  const [name, setName] = useState("");

  const nameChangeHandler = (e) => {
    console.log("state change");
    setName(e.target.value);
  };

  const submitHandler = (e) => e.preventDefault();

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

function UncontrolledComponent() {
  const nameInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(nameInputRef.current.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input type="text" placeholder="name" ref={nameInputRef} />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
