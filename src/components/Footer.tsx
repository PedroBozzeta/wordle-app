
import { FINISHED, RESTART } from "../constants/GameConstants";
import { ReducerAction } from "../hooks/useGameStateReducer";
import InvisibleInput from "./InvisibleInput";

interface FooterProps {
    gameState: string;
  currentWord: string;
  dispatch: (action: ReducerAction) => void
}
const Footer = (props: FooterProps) => {
  return (
    <div className="footer">
          <InvisibleInput currentWord={props.currentWord} gameState={props.gameState}/>
      {props.gameState == FINISHED && (
        <h4 className="montserrat-font heartbeat press-to-restart" onClick={()=>props.dispatch({type:RESTART})}>{`TAP OR PRESS [Enter] TO RESTART`}</h4>
      )}
    </div>
  );
};

export default Footer;
