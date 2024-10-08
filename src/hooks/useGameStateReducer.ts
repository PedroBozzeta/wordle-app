import { useReducer } from "react";
import {  DATA_FETCHED, DELETE, FINISHED, INCORRECT, PLAYING,  RESTART, SUBMIT, TYPING } from "../constants/GameConstants";
import { checkBoxContent } from "../helpers/checkBoxContent";

export interface BoxDataType {
    value: string;
    class: string;
}

export interface WordleStateInterface {
    gameState: string;
    win: boolean;
    currentWord: string;
    turn: number;
    boxData: BoxDataType[];
    restart: boolean;
}

export interface ReducerAction {
    type: string;
    payload?: any;
}
const defaultBoxData: BoxDataType = {
    value: "",
    class: "",
};

const emptyBoardData = Array.from({ length: 30 }, () => defaultBoxData);


const wordleInitialState: WordleStateInterface = {
    gameState: PLAYING,
    win: false,
    currentWord: "",
    turn: 0,
    boxData: emptyBoardData,
    restart: true
}

export function gameStateReducer(state: WordleStateInterface, action: ReducerAction):WordleStateInterface {
    // Current index of the key pressed
    const keyPosition = state.turn * 5 + state.currentWord.length;

    switch (action.type) {
        case DELETE: {
            if (state.currentWord.length > 0) {
                //  Eliminating the last input
                const newBoxData = [...state.boxData];
                newBoxData.splice(keyPosition - 1, 1, defaultBoxData);
                return { ...state, boxData: newBoxData, currentWord: state.currentWord.slice(0, state.currentWord.length - 1) };
            }
            return state;
        }
        case TYPING: {
            if (state.currentWord.length < 5) {
                const newBoxData = [...state.boxData];
                newBoxData[keyPosition] = {
                    value: action.payload,
                    class: INCORRECT,
                };
                return { ...state, boxData: newBoxData, currentWord: state.currentWord + action.payload }
            }

            return state;
        }
        case SUBMIT: {
            const newBoxData = [...state.boxData];
            const word = action.payload;
            let newGameState = state.gameState;
            let newWinState = state.win;
            if (state.currentWord.length === 5) {
                for (let i = 0; i < 5; i++) {
                  
                    const index = state.turn * 5 + i;
                   
                    newBoxData[index].class = checkBoxContent(newBoxData[index].value,i,word)
                    if (state.currentWord.toLowerCase() === word.toLowerCase()) {
                        newGameState = FINISHED;
                        newWinState = true;
                    }
                }
                if (state.turn + 1 >= 6) {
                    newGameState=FINISHED
                }
                return { ...state, boxData: newBoxData, currentWord: "", turn: state.turn + 1, win: newWinState, gameState: newGameState }

            }
            return state;
        }
        case DATA_FETCHED:
            return {...state,restart:!state.restart}
        case RESTART: 
            return wordleInitialState
        default:
            return state;

    }
}

export function useGameStateReducer() {
    const [state, dispatch] = useReducer(gameStateReducer, wordleInitialState);

    return { state, dispatch };
}