
import useFetchWord from "../hooks/useFetchWord";
import Box from "./Box";


import { useGameStateReducer } from "../hooks/useGameStateReducer";
import { useGameLogic } from "../hooks/useGameLogic";

const Board = () => {
  const { state, dispatch } = useGameStateReducer();
  
  const { word } = useFetchWord(state.restart,dispatch)
  useGameLogic(word,state,dispatch);
  
  if (word.length !== 5) {
    return <h2>Cargando....</h2>;
  }
  return (
    <>
      {state.gameState == "playing" && (
        <h4 className="montserrat-font description">Find the word</h4>
      )}
      {state.gameState == "finished" && (
        <h4 className={`montserrat-font ${state.win && "win"}`}>
          {state.win ? "Correct!" : "The word was:"}
        </h4>
      )}
      {state.gameState == "finished" && (
        <h4 className="montserrat-font">{word.toUpperCase()}</h4>
      )}
      <div className="board">
        {state.boxData.map((item, index) => (
          <Box value={item.value} class={item.class} key={index} />
        ))}
      </div>
      {state.gameState == "finished" && (
        <h4 className="montserrat-font heartbeat">{`PRESS [Enter] TO RESTART`}</h4>
      )}
    </>
  );
};

export default Board;
