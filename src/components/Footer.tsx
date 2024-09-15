import { FINISHED } from '../constants/GameConstants';

interface FooterProps{
    gameState: string;
}
const Footer = (props:FooterProps) => {
  return (<div className='footer'> {props.gameState == FINISHED && (
    <h4 className="montserrat-font heartbeat press-to-restart">{`PRESS [Enter] TO RESTART`}</h4>
  )}</div>
   
  )
}

export default Footer