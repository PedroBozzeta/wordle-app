import { useEffect } from "react";

export default function useKeyDownListener(callback: (e:any) => void) {
    useEffect(() => {
        window.addEventListener("keydown", callback);
        return () => window.removeEventListener("keydown", callback);
    }, [callback]);
    
}