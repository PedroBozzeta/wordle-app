
import { FINISHED, PLAYING } from '../../constants/GameConstants'

interface HeaderProps{
  gameState: string; win: boolean; word:string
}
const Header = (props:HeaderProps) => {
  return (
 <div className='header'>{props.gameState == PLAYING && (
    <h4 className="montserrat-font">FIND THE WORD!</h4>
  )}
  {props.gameState == FINISHED && (
    <h4 className={`montserrat-font ${props.win ?"win":"lose"}`}>
      {props.win ? "Correct!" : "The word was:"}
    </h4>
  )}
  {props.gameState == FINISHED && (
    <h4 className="montserrat-font">{props.word.toUpperCase()}</h4>
  )}</div>   
  )
}

export default Header