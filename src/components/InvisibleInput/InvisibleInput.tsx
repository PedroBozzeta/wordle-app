import { PLAYING } from "../../constants/GameConstants";
import { useFooterContext } from "../../contexts/FooterContext";

const InvisibleInput = () => {
  const value = useFooterContext();
  return (
    <>
      <input
        type="search"
        className={`montserrat-font invisible-input ${
          value.state.gameState == PLAYING ? "show" : "hidden"
        }`}
        onChange={() => {
        }}
        value={value.state.currentWord}
      ></input>
    </>
  );
};

export default InvisibleInput;
