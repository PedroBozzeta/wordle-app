import { DEFAULT } from "../constants/GameConstants";

export interface WordResponse {
    word: string;
    score: number;
}

export function useSelectRandomWord(words: WordResponse[]): string {
    const randomWordIndex = Math.floor(Math.random() * 1000)
    if (words.length > 0) {
        const fetchedWord = words[randomWordIndex].word;
        // Making sure that theres no blank space in the fetched word
        if (fetchedWord.split("").some((letter: string) => letter.toLowerCase() == " ")) {
           return DEFAULT
        } else {
           return fetchedWord
        }
    }
    return DEFAULT

}