import { FINISHED } from "../constants/GameConstants";


interface InvisibleInputProps{
    currentWord: string;
    gameState:string
}
const InvisibleInput = (props:InvisibleInputProps) => {

  return (
    <>
      <input type="search" className={`montserrat-font ${props.gameState==FINISHED?"hidden":"invisible-input"}`} onChange={()=>{}} value={props.currentWord}></input>
    </>
  );
};

export default InvisibleInput;
