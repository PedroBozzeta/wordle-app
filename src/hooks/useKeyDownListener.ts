import { useEffect } from "react";

export default function useKeyDownListener(callback: (e: KeyboardEvent) => void) {
    useEffect(() => {
        window.addEventListener("keydown", callback);
        return () => window.removeEventListener("keydown", callback);
    }, [callback]);
    
}