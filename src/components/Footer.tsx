import { FINISHED } from "../constants/GameConstants";
import InvisibleInput from "./InvisibleInput";

interface FooterProps {
  gameState: string;
}
const Footer = (props: FooterProps) => {
  return (
    <div className="footer">
      <InvisibleInput />
      {props.gameState == FINISHED && (
        <h4 className="montserrat-font heartbeat press-to-restart">{`PRESS [Enter] TO RESTART`}</h4>
      )}
    </div>
  );
};

export default Footer;
