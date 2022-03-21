import React, { useState } from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong</h2>;
    }

    return this.props.children;
  }
}

export default function TestErrorBoundaryComponent() {
  const [isError, setIsError] = useState(false);

  const toggleError = () => setIsError(!isError);

  return (
    <ErrorBoundary>
      <h2>Hello</h2>
      <button onClick={toggleError}>error</button>
      {isError && <ErrorComponent />}
    </ErrorBoundary>
  );
}

function ErrorComponent() {
  throw new Error("Error");
}
