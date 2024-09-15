import { useEffect, useRef } from "react"



const InvisibleInput = () => {
    const inputRef= useRef<HTMLElement  |null>(null)
    useEffect(() => {
        inputRef.current?.focus(); 
    },[])
  return (
    <input type='text' className="invisible-input"></input>
  )
}

export default InvisibleInput