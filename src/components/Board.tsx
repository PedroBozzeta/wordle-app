
import useFetchWord from "../hooks/useFetchWord";
import Box from "./Box";


import { useGameStateReducer } from "../hooks/useGameStateReducer";
import { useGameLogic } from "../hooks/useGameLogic";
import { Spinner } from "./Spinner";
import { FINISHED, PLAYING } from "../constants/GameConstants";

const Board = () => {
  const { state, dispatch } = useGameStateReducer();
  
  const { word,loading } = useFetchWord(state.restart,dispatch)
  useGameLogic(word,state,dispatch);
  
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      {state.gameState == PLAYING && (
        <h4 className="montserrat-font description">Find the word</h4>
      )}
      {state.gameState == FINISHED && (
        <h4 className={`montserrat-font ${state.win ?"win":"lose"}`}>
          {state.win ? "Correct!" : "The word was:"}
        </h4>
      )}
      {state.gameState == FINISHED && (
        <h4 className="montserrat-font">{word.toUpperCase()}</h4>
      )}
      <div className="board">
        {state.boxData.map((item, index) => (
          <Box value={item.value} class={item.class} key={index} />
        ))}
      </div>
      {state.gameState == FINISHED && (
        <h4 className="montserrat-font heartbeat">{`PRESS [Enter] TO RESTART`}</h4>
      )}
    </>
  );
};

export default Board;
