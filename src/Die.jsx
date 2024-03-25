import React from "react";

const Die = (props) => {
  const styles = {
    backgroundColor: props.isHeld
      ? "rgba(89, 227, 145, 0.8)"
      : "rgba(255, 255, 255, 0.8)",
  };
  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
};

export default Die;
