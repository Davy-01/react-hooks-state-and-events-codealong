import React, {useState} from "react";

function Toggle() {
  const[isOn, setisOn] = useState(false);
  function Switch(){
    setisOn(!isOn)
  }
  const color = isOn ? "red" : "white"
  return <button style={{background: color}} onClick={Switch}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
