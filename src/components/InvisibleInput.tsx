import {  PLAYING } from "../constants/GameConstants";


interface InvisibleInputProps{
    currentWord: string;
    gameState:string
}
const InvisibleInput = (props:InvisibleInputProps) => {

  return (
    <>
      <input type="search" className={`montserrat-font invisible-input ${props.gameState==PLAYING?"show":"hidden"}`} onChange={()=>{}} value={props.currentWord}></input>
    </>
  );
};

export default InvisibleInput;
