import { useEffect } from "react";

export default function useInputListener(callback:(e:InputEvent)=>void) {
    useEffect(() => {
        const handleInput = (e: Event) => {
            callback(e as InputEvent);
          };
        window.addEventListener("input", handleInput)
        return ()=>window.removeEventListener("input",handleInput)
    },[callback])
}