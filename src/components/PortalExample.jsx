import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function PortalExample() {
  const [isDisplayOverlay, setIsDisplayOverlay] = useState(false);

  const displayOverlay = () => setIsDisplayOverlay(true);
  const hideOverlay = () => setIsDisplayOverlay(false);

  return (
    <div>
      <h2>Portal Example</h2>
      <button onClick={displayOverlay}>Display</button>

      {isDisplayOverlay && <Overlay onClick={hideOverlay} />}
    </div>
  );
}

function Overlay({ onClick }) {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        background: "rgba(0,0,0,0.3)",
      }}
      onClick={onClick}
    ></div>,
    document.querySelector(".overlay")
  );
}
