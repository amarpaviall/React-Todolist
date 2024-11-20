import { useState } from "react";

function useToggle(initalState = true) {
  const [visible, setVisible] = useState(initalState);

  function Toggle() {
    setVisible((prevVisible) => !prevVisible);
  }
  return [visible, Toggle];
}

export default useToggle;
