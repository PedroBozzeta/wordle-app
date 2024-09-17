
import { FINISHED, RESTART } from "../constants/GameConstants";
import { useFooterContext } from "../contexts/FooterContext";
import { ReducerAction } from "../hooks/useGameStateReducer";
import InvisibleInput from "./InvisibleInput";

interface FooterProps {
  dispatch: (action: ReducerAction) => void
}
const Footer = (props: FooterProps) => {
  const state = useFooterContext()
  
  return (
    <div className="footer">
          <InvisibleInput />
      {state.gameState == FINISHED && (
        <h4 className="montserrat-font heartbeat press-to-restart" onClick={()=>props.dispatch({type:RESTART})}>{`TAP OR PRESS [Enter] TO RESTART`}</h4>
      )}
    </div>
  );
};

export default Footer;
