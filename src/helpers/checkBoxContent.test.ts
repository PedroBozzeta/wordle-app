import { CORRECT, INCORRECT, PRESENT } from "../constants/GameConstants";
import { checkBoxContent } from "./checkBoxContent"

describe("checkBoxContent", () => {
    it('Check if its correct', () => {
        const estado = checkBoxContent("t", 0, "test");
        expect(estado).toEqual(CORRECT)
    })
    
    it('Check if its present', () => {
        const estado = checkBoxContent("t", 2, "test");
        expect(estado).toEqual(PRESENT)
    })

    it('Check if its incorrect', () => {
        const estado = checkBoxContent("x", 0, "test");
        expect(estado).toEqual(INCORRECT)
    })
})