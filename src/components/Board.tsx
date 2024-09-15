import useFetchWord from "../hooks/useFetchWord";
import { useGameStateReducer } from "../hooks/useGameStateReducer";
import { useGameLogic } from "../hooks/useGameLogic";
import { Spinner } from "./Spinner";
import Header from "./Header";
import Footer from "./Footer";
import Boxes from "./Boxes";

const Board = () => {
  const { state, dispatch } = useGameStateReducer();

  const { word, loading } = useFetchWord(state.restart, dispatch);
  useGameLogic(word, state, dispatch);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Header gameState={state.gameState} win={state.win} word={word} />
      <Boxes boxData={state.boxData} />
      <Footer gameState={state.gameState} currentWord={state.currentWord} />
    </>
  );
};

export default Board;
