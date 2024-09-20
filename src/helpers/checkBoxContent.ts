import { CORRECT, INCORRECT, PRESENT } from "../constants/GameConstants";

export function checkBoxContent(boxVal: string, indexInWord:number, word: string) {
    const boxValue = boxVal.toLowerCase();
    const fullWord = word.toLowerCase();

    // Analize if any of the letter in the current answer is on the right position or at least exist in the word
    if (
        boxValue ===
        word[indexInWord]
    ) {
        return CORRECT;
    } else if (
        fullWord
            .split("")
            .some(
                (letter: string) =>
                    letter ===
                    boxValue
            )
    ) {
        return PRESENT;
    } else {
        return INCORRECT
    }

}
