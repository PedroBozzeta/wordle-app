
import { PLAYING, DELETE, TYPING, SUBMIT, FINISHED, RESTART } from "../constants/GameConstants";
import { ReducerAction } from "../hooks/useGameStateReducer";

export function checkActionType(key: string, turn: number, gameState: string,word:string):ReducerAction{
    if (key && turn < 6 && gameState == PLAYING) {
        if (key === "Backspace") {
          //  Eliminating the last input
          return { type: DELETE };
        } else if (/^[a-zA-Z]$/.test(key)) {
          //  Handling key typing
          return { type: TYPING, payload: key };
        } else if (key === "Enter") {
          // Handling on Enter
         return {type:SUBMIT,payload:word}
        }
      }
      if (key === "Enter" && gameState == FINISHED) {
        // Cleaning all states and restarting the game
          return { type: RESTART };
    }
    
    return {type:""}
}