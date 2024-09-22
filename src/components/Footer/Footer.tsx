import { FINISHED, RESTART } from "../../constants/GameConstants";
import { useFooterContext } from "../../contexts/FooterContext";
import InvisibleInput from "../InvisibleInput/InvisibleInput";

const Footer = () => {
  const value = useFooterContext();

  return (
    <div className="footer">
      <InvisibleInput />
      {value.state.gameState == FINISHED && (
        <h4
          className="montserrat-font heartbeat press-to-restart"
          onClick={() => value.dispatch({ type: RESTART })}
        >{`TAP OR PRESS [Enter] TO RESTART`}</h4>
      )}
    </div>
  );
};

export default Footer;
