import { DELETE, FINISHED, PLAYING, RESTART, SUBMIT, TYPING } from "../constants/GameConstants";
import { checkActionType } from "./checkActionType"

describe("checkActionType", () => {

    it("Trigger the DELETE ACTION", () => {
        const action = checkActionType("Backspace", 0, PLAYING, "papas");
        expect(action).toEqual({ type: DELETE });
    })

    it("Trigger the TYPING ACTION", () => {
        const action = checkActionType("a", 0, PLAYING, "papas");
        expect(action).toEqual({ type: TYPING,payload:"a" });
    })
    it("Trigger the SUBMIT ACTION", () => {
        const action = checkActionType("Enter", 0, PLAYING, "papas");
        expect(action).toEqual({type:SUBMIT,payload:"papas"});
    })

    it("Trigger the RESTART ACTION", () => {
        const action = checkActionType("Enter", 0, FINISHED, "papas");
        expect(action).toEqual({type:RESTART});
    })
})