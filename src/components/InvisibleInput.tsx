import {  useRef } from "react";

const InvisibleInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  };
  return (
    <>
      {" "}
      <input type="text" className="invisible-input" ref={inputRef}></input>
      <button onClick={handleClick} className="get-focus-button montserrat-font">Guess</button>
    </>
  );
};

export default InvisibleInput;
