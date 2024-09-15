import { useEffect, useRef } from "react"



const InvisibleInput = () => {
    const inputRef= useRef<HTMLInputElement  |null>(null)
    useEffect(() => {
        inputRef.current?.focus(); 
    },[])
  return (
    <input type='text' className="invisible-input" ref={inputRef}></input>
  )
}

export default InvisibleInput