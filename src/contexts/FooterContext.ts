import { createContext, useContext } from "react";
import { WordleStateInterface } from "../hooks/useGameStateReducer";

export const FooterContext = createContext<WordleStateInterface | undefined>(undefined)
export function useFooterContext() {
    const state = useContext(FooterContext);
    if (state === undefined) {
        throw new Error("The FooterContext with the state value its needed")
    }
    return state;
}