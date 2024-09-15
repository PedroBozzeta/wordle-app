import { DELETE, FINISHED, PLAYING, RESTART, SUBMIT, TYPING } from "../constants/GameConstants";
import { ReducerAction,  WordleStateInterface } from "./useGameStateReducer";
import useKeyDownListener from "./useKeyDownListener";

export function useGameLogic(word:string,state:WordleStateInterface,dispatch:(action:ReducerAction)=>void) {
    const handleKeyDown = (e: KeyboardEvent) => {
      alert('entró al handler'+e)
        if (e.key && state.turn < 6 && state.gameState == PLAYING) {
          if (e.key === "Backspace") {
            //  Eliminating the last input
            dispatch({ type: DELETE });
          } else if (/^[a-zA-Z]$/.test(e.key)) {
            //  Handling key typing
            dispatch({ type: TYPING, payload: e.key });
          } else if (e.key === "Enter") {
            // Handling on Enter
            dispatch({type:SUBMIT,payload:word})
          }
        }
        if (e.key === "Enter" && state.gameState == FINISHED) {
          // Cleaning all states and restarting the game
          dispatch({type:RESTART})
        }
    };
    
    useKeyDownListener(handleKeyDown);
}