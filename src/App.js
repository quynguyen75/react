import React from "react";
import ContextExample from "./components/ContextExample";
import ControlledVSUncontrolled from "./components/ControlledVSUncontrolled";
import ErrorBoundary from "./components/ErrorBoundary";
import HighOrderComponentExample from "./components/HighOrderComponentExample";
import LifeCycle from "./components/LifeCycle";
import PortalExample from "./components/PortalExample";
import ReducerExample from "./components/ReducerExample";
import StateExample from "./components/StateExample";
import UseEffectExamlple from "./components/UseEffectExamlple";
import { UserContextProvider } from "./context/userContext";

export default function App() {
  return (
    <UserContextProvider>
      <ContextExample />
    </UserContextProvider>
  );
}
