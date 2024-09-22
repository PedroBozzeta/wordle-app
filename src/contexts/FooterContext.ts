import { createContext, useContext } from "react";
import { ReducerAction, WordleStateInterface } from "../hooks/useGameStateReducer";

export interface FooterContextValues{
    state: WordleStateInterface;
    dispatch: (action: ReducerAction) => void;
    word: string;
}

export const FooterContext = createContext<FooterContextValues | undefined>(undefined)

export function useFooterContext() {
    const state = useContext(FooterContext);
    if (state === undefined) {
        throw new Error("The FooterContext with the state value its needed")
    }
    return state;
}