import React, { useCallback, useMemo, useState } from "react";

const TestMemo = React.memo(TestComponent);

export default function UseCallbackVSUseMemo() {
  const [state, setState] = useState(false);

  const changeState = () => setState(!state);

  const arr = useMemo(() => [1, 2, 3], []);

  const hello = useCallback(() => console.log("hello"), []);

  return (
    <div>
      <button onClick={changeState}>Change</button>

      <TestMemo hello={hello} arr={arr} />
    </div>
  );
}

function TestComponent() {
  console.log("render");

  return <h2>Hello</h2>;
}
