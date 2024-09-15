import { useEffect, useRef } from "react"



const InvisibleInput = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    
    const handleTap = () => {
        inputRef.current?.focus(); 
    }
    useEffect(() => {
        window.addEventListener('click',handleTap)
        return ()=>window.removeEventListener('click',handleTap)
    }, [handleTap])
    
  return (
    <input type='text' className="invisible-input" ref={inputRef}></input>
  )
}

export default InvisibleInput