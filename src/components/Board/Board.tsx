import useFetchWord from "../../hooks/useFetchWord";
import { useGameStateReducer } from "../../hooks/useGameStateReducer";
import { useGameLogic } from "../../hooks/useGameLogic";
import { Spinner } from "../Spinner/Spinner";
import Header from "./../Header/Header";
import Footer from "../Footer/Footer";
import Boxes from "../Boxes/Boxes";
import {
  FooterContext,
  FooterContextValues,
} from "../../contexts/FooterContext";

const Board = () => {
  const { state, dispatch } = useGameStateReducer();
  const { word, loading } = useFetchWord(state.restart, dispatch);

  useGameLogic(word, state, dispatch);

  const footerContextValues: FooterContextValues = {
    state,
    dispatch,
    word,
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Header gameState={state.gameState} win={state.win} word={word} />
      <Boxes boxData={state.boxData} />
      <FooterContext.Provider value={footerContextValues}>
        <Footer />
      </FooterContext.Provider>
    </>
  );
};

export default Board;
