import { DELETE, FINISHED, PLAYING, RESTART, SUBMIT, TYPING } from "../constants/GameConstants";
import { ReducerAction,  WordleStateInterface } from "./useGameStateReducer";
import useKeyDownListener from "./useKeyDownListener";

export function useGameLogic(word:string,state:WordleStateInterface,dispatch:(action:ReducerAction)=>void) {
  const handleKeyDown = (e: KeyboardEvent | InputEvent) => {
    
    console.log("entró al handler")
    let key;
    if ('key' in e) {
      // Es un KeyboardEvent
      console.log(e)
      key = e.key;
    } else {
      // Es un InputEvent
      console.log(e)
      key = e.data?.slice(-1) ?? ''; 
    }
        if (key && state.turn < 6 && state.gameState == PLAYING) {
          if (key === "Backspace") {
            //  Eliminating the last input
            dispatch({ type: DELETE });
          } else if (/^[a-zA-Z]$/.test(key)) {
            //  Handling key typing
            dispatch({ type: TYPING, payload: key });
          } else if (key === "Enter") {
            // Handling on Enter
            dispatch({type:SUBMIT,payload:word})
          }
        }
        if (key === "Enter" && state.gameState == FINISHED) {
          // Cleaning all states and restarting the game
          dispatch({type:RESTART})
        }
    };
  
    useKeyDownListener(handleKeyDown);
}