import React, { useState } from "react";

function Toggle() {
  /*const [isOn, setIsOn] = useState(false);*/
  let [isOn, setIsOn] = useState(false);
  /*return <button>{isOn ? "ON" : "OFF"}</button>*/
  /*<button>OFF</button>;*/
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
  /*return <button onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>*/
  return <button style={{ background: color }} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
  
}

export default Toggle;
