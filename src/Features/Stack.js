import React, { useState } from "react";
const Stack = () => {
  const [clicks, setClicks] = useState([]);
  const [undid, setUndid] = useState([]);

  function handleClick({ clientX, clientY }) {
    setClicks((prev) => [...prev, { clientX, clientY }]);
  }

  const handleUndo = (e) => {
    e.stopPropagation();
    if (clicks.length === 0) return;

    const lastClick = clicks[clicks.length - 1];

    setUndid((prev) => [...prev, lastClick]);
    setClicks((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
  };
  const handleRedo = (e) => {
    e.stopPropagation();
    if (undid.length === 0) return;
    const lastClick = undid[undid.length - 1];

    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
    setClicks((prev) => [...prev, lastClick]);
  };
  return (
    <>
      <div onClick={handleClick} className="container">
        <button onClick={handleUndo}>Desfazer</button>
        <button onClick={handleRedo}>Refazer</button>
        {clicks.map(({ clientX, clientY }, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              padding: "10px",
              borderRadius: "50%",
              background: "red",
              top: clientY + "px",
              left: clientX + "px",
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Stack;
