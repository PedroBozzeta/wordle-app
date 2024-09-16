
import { checkActionType } from "../helpers/checkActionType";
import { ReducerAction,  WordleStateInterface } from "./useGameStateReducer";
import useInputListener from "./useInputListener";
import useKeyDownListener from "./useKeyDownListener";

export function useGameLogic(word:string,state:WordleStateInterface,dispatch:(action:ReducerAction)=>void) {
  const handleKeyDown = (e: KeyboardEvent ) => {
    dispatch(checkActionType(e.key,state.turn,state.gameState,word))
    };
    const handleInput = (e: InputEvent ) => {
      dispatch(checkActionType(e.data??'',state.turn,state.gameState,word))
      };
  useKeyDownListener(handleKeyDown);
  useInputListener(handleInput)
}