import {  PLAYING } from "../constants/GameConstants";
import { useFooterContext } from "../contexts/FooterContext";



const InvisibleInput = () => {

  const state = useFooterContext();

  return (
    <>
      <input type="search" className={`montserrat-font invisible-input ${state.gameState==PLAYING?"show":"hidden"}`} onChange={()=>{}} value={state.currentWord}></input>
    </>
  );
};

export default InvisibleInput;
